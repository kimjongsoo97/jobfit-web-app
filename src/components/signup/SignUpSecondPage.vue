<template>
  <div class="max-w-[480px] w-full">
    <h2 class="font-h1 text-gry-900 mb-1">
      회원가입
    </h2>
    <p class="mb-3 text-[16px] font-semibold text-[#6f727c] leading-[30px]">
      계정 정보를 입력해 주세요
    </p>

    <div class="h-[2px] bg-gry-300 mb-6"></div>

    <!-- 회원가입 폼 -->
    <form @submit.prevent="handleSubmit" class="space-y-5">
      <!-- 이름 입력 -->
      <TopLabelInput label="이름" :isLabel="true" v-model="user.name" name="name" placeholder="이름을 입력해주세요" />
      <!-- 아이디 입력 -->
      <TopLabelInput class="relative" label="아이디" :isLabel="true" v-model="user.username" name="username"
          placeholder="아이디를 입력해주세요">
          <InputInnerButton class="absolute right-3 top-1/2 -translate-y-1/2" width="w-[97px]" @click="()=>checkUsername(user.username)">
            중복확인
          </InputInnerButton>
          <div v-if="isVerificationError" class="font-caption text-red-400">{{ verificationErrorMsg }}</div>
        </TopLabelInput>
      <div class="space-y-2">
        <!-- 비밀번호 입력 -->
        <div class="space-y-2">
          <TopLabelInput type="password" class="relative" label="비밀번호" :isLabel="true" v-model="user.password"
            name="password" placeholder="비밀번호를 입력해주세요" />

          <TopLabelInput type="password" v-model="user.confirmPassword" name="confimPassword"
            placeholder="비밀번호를 입력해주세요">
            <div v-if="user.password!= user.confirmPassword" class="absolute right-3 top-1/2 -translate-y-1/2 font-caption text-red-400">
              비밀번호가 일치하지 않습니다.
            </div>
          </TopLabelInput>
        </div>

        <!-- 이메일 입력 -->

        <TopLabelInput class="relative" label="이메일 주소" :isLabel="true" v-model="user.email" name="email"
          placeholder="이메일 주소를 입력해주세요">
          <InputInnerButton class="absolute right-3 top-1/2 -translate-y-1/2" width="w-[97px]" @click="otpCreate">
            인증 요청
          </InputInnerButton>
        </TopLabelInput>

        <TopLabelInput v-model="user.otp" name="verification-code" placeholder="인증번호를 입력해주세요">
          <InputInnerButton
            variant="gray"
            class="absolute right-3 top-1/2 -translate-y-1/2"
            width="w-[97px]"
            :disabled="!user.otp"
            @click="() => otpCheck(user.email, user.otp)"
          >
            인증번호 확인
          </InputInnerButton>
        </TopLabelInput>
        <div v-if="isVerificationError" class="font-caption text-red-400">{{ verificationErrorMsg }}</div>
      </div>

      <!-- 다음 버튼 -->
      <Button type="submit" :disabled="!passwordsMatch">
        <template #text>
          다음
        </template>
      </Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import TopLabelInput from '@/common/components/input/TopLabelInput.vue'
import InputInnerButton from '@/common/components/button/InputInnerButton.vue'
import Button from '@/common/components/button/MainButton.vue'
import LoginApi from '@/api/loginAPI'
const router = useRouter()
const verificationCode = ref('')
const isVerificationUsernameError=ref<boolean>(false)
const verificationUsernameErrorMsg = ref<string>('이미 존재하는 아이디 입니다')
const isVerificationOtpError = ref<boolean>(false)
const verificationOtpErrorMsg = ref<string>('인증번호가 일치하지 않습니다.')

const isEmailValid = computed(() => {
  return user.email.includes('@');
})
const user = reactive({
  username: '',
  password: '',
  confirmPassword: '',
  name: '',
  email: '',
  otp: '',
})

const passwordsMatch = ref<boolean>(true)

const handleSubmit = async () => {
  if (!user.username) {
    alert("아이디를 입력해주세요.");
    return;  // 아이디가 입력되지 않으면 진행하지 않음
  }

  if (user.password !== user.confirmPassword) {
    alert("비밀번호가 일치하지 않습니다.");
    return;  // 비밀번호가 일치하지 않으면 진행하지 않음
  }

  if (!user.otp) {
    alert("OTP 인증을 진행해주셔야 합니다.");
    return;  // OTP 인증이 없으면 진행하지 않음
  }

  else{
    try {
    const payload = {
      name: user.name,
      username: user.username,
      password: user.password,
      confirmPassword: user.confirmPassword,
      email: user.email,
      otp: user.otp
    }

    await LoginApi.signUp(payload)
    router.push('/auth/signup/complete')
  } catch (err: any) {
    console.error('회원가입 실패:', err.response?.data || err.message)
  }
  }

}
const otpCreate = async () => {
  if (!user.email) {
    return alert('사용자 이메일을 입력해주셔야 합니다.');
  }
  if (!isEmailValid.value) {
    return alert('유효한 이메일 형식으로 입력해주셔야 합니다!')
  }
  try {
    await LoginApi.otpCreate(user.email, "signup");
    alert("인증번호 전송이 완료되었습니다.")
  }
  catch (e) {
    console.error(e)
  }
}
const otpCheck = async (email: string, otp: string) => {

  if (!otp) {
    isVerificationOtpError.value = true
    verificationOtpErrorMsg.value = '인증번호를 입력해주세요.'
    return
  }

  try {
    const res = await LoginApi.otpCheck(email, otp, "signup")
    console.log('인증 성공:', res.data)

    isVerificationError.value = false
    // 필요한 경우 인증 완료 상태 처리 추가
  } catch (err: any) {
    console.error('인증 실패:', err.response?.data || err.message)
    isVerificationError.value = true
    verificationErrorMsg.value = '인증번호가 일치하지 않습니다.'
  }
}
const checkUsername = async(username:string)=>{
  if (!username){
    isVerificationUsernameError.value=true
    verificationUsernameErrorMsg.value='아이디를 입력해주세요'
    return
  }
  try{
    await LoginApi.checkUsername(user.username);
    alert("아이디 중복확인이 완료되었습니다")
    isVerificationUsernameError.value=false
  }
  catch (err: any) {
  // err.response는 서버에서 반환된 응답을 포함할 경우 사용할 수 있습니다.
  if (err.response && err.response.status === 400) {
    console.log("이미 가입된 아이디입니다");
    alert("이미 가입된 아이디입니다.");
  } else {
    console.error("알 수 없는 오류 발생:", err);
    alert("문제가 발생했습니다. 다시 시도해 주세요.");
  }
}


}


</script>

<style></style>
