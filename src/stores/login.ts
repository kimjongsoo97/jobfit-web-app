import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
//유저 정보
interface UserInfo {
  userId: number;
  username: string;
  name: string;
  email: string;
  createAt: string;
}
// 인증확인
interface AuthState {
  token: string;
  user: UserInfo | null;
}
// 로그인
interface LoginRequest {
  username: string;
  password: string;
}
//로그인 응답
interface LoginResponse {
  accessToken: string;
  user: UserInfo;
}
// 초기 상태 설정, 토큰 없고 유저 눌값
const initState: AuthState = {
  token: '',
  user: null,
};
// 로그인 store 정의 추후에 beforeEnter로 편하게 url 로그인/비로그인 페이지 나누기위함 guard.ts에서서 사용
export const useLoginStore = defineStore('auth', () => {
  const state = ref<AuthState>({ ...initState });

  const isLogin = computed(() => !!state.value.token);
  const username = computed(() => state.value.user?.username || '');



  const login = async (user: LoginRequest) => {
    try {
      const { data } = await axios.post<LoginResponse>('/api/v1/user/login', user);

      state.value.token = data.accessToken;
      state.value.user = data.user;

      localStorage.setItem('auth', JSON.stringify(state.value));
    } catch (error) {
      console.error('로그인 실패:', error);
      throw error;
    }
  };

  // 로그아웃은 따로 api 연동없이 localstorage에서 토큰을 삭제해주는 것으로 마무리
  const logout = () => {
    localStorage.removeItem('auth');
    state.value = { ...initState };
  };

  const getToken = () => state.value.token;

  const load = () => {
    const auth = localStorage.getItem('auth');
    if (auth) {
      state.value = JSON.parse(auth);
    }
  };

  const changeProfile = (user: Partial<UserInfo>) => {
    if (state.value.user) {
      state.value.user = { ...state.value.user, ...user };
      localStorage.setItem('auth', JSON.stringify(state.value));
    }
  };

  load();

  return { state, isLogin, username, login, logout, getToken, changeProfile };
});
