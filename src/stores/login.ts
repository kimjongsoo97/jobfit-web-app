import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; 

// 유저 정보 인터페이스
interface UserInfo {
  userId: number;
  username: string;
  name: string;
  email: string;
  createAt: string;
}

// JWT payload 인터페이스
interface JwtPayload {
  userId: number;
  iat: number;
  exp: number;
}

// 인증 상태 인터페이스
interface AuthState {
  token: string;
  user: UserInfo | null;
}

// 로그인 요청
interface LoginRequest {
  username: string;
  password: string;
}

// 서버 전체 응답 구조
interface RawLoginResponse {
  data: {
    accessToken: string;
    user?: UserInfo;
  };
  message: string;
  httpStatus: string;
  httpStatusCode: number;
}

// 초기 상태
const initState: AuthState = {
  token: '',
  user: null,
};

export const useLoginStore = defineStore('auth', () => {
  const state = ref<AuthState>({ ...initState });

  const isLogin = computed(() => !!state.value.token);
  const username = computed(() => state.value.user?.username || '');

  // JWT 토큰 디코딩 → 최소한 userId 확보
  const decodeTokenToUser = (token: string): UserInfo => {
    const payload = jwtDecode<JwtPayload>(token);
    return {
      userId: payload.userId,
      username: '',
      name: '',
      email: '',
      createAt: '',
    };
  };

  // 로그인 API 처리
  const login = async (user: LoginRequest) => {
    try {
      const response = await axios.post<RawLoginResponse>('/api/v1/user/login', user);
      const raw = response.data;
      const data = raw.data;

      console.log('로그인 응답:', raw);

      if (!data?.accessToken || typeof data.accessToken !== 'string') {
        console.error('유효하지 않은 토큰입니다:', data?.accessToken);
        throw new Error('로그인 실패: 서버에서 유효한 토큰을 받지 못했습니다.');
      }

      state.value.token = data.accessToken;

      if (data.user) {
        state.value.user = data.user;
      } else {
        state.value.user = decodeTokenToUser(data.accessToken);
      }

      localStorage.setItem('auth', JSON.stringify(state.value));
    } catch (error: any) {
      console.error('로그인 실패:', error.response?.data || error.message);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('auth');
    state.value = { ...initState };
  };

  const getToken = () => state.value.token;

  const load = () => {
    const auth = localStorage.getItem('auth');
    if (auth) {
      try {
        const parsed = JSON.parse(auth);
        state.value.token = parsed.token;

        if (parsed.user) {
          state.value.user = parsed.user;
        } else if (parsed.token) {
          state.value.user = decodeTokenToUser(parsed.token);
        }
      } catch (e) {
        console.warn('로컬스토리지 파싱 실패:', e);
        logout();
      }
    }
  };

  const changeProfile = (user: Partial<UserInfo>) => {
    if (state.value.user) {
      state.value.user = { ...state.value.user, ...user };
      localStorage.setItem('auth', JSON.stringify(state.value));
    }
  };

  load(); // 초기화 시 로컬스토리지에서 복원

  return {
    state,
    isLogin,
    username,
    login,
    logout,
    getToken,
    changeProfile,
  };
});
