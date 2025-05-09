<template>
  <div class="max-w-[480px] w-full">
    <h2 class="font-h1 text-gry-900 mb-1">
      비밀번호 찾기
    </h2>
    <p class="mb-3 text-[16px] font-semibold text-[#6f727c] leading-[30px]">
      계정 정보를 입력해 주세요
    </p>

    <div class="h-[2px] bg-gry-300 mb-6"></div>

    <!-- 회원가입 폼 -->
    <form @submit.prevent="handleSubmit" class="space-y-5">
      <!-- 아이디 입력 -->
      <TopLabelInput class="relative" label="아이디" :isLabel="true" v-model="user.username" name="username"
        placeholder="아이디를 입력해주세요" />
      <div class="space-y-2">
        <!-- 이메일 입력 -->

        <TopLabelInput class="relative" label="이메일 주소" :isLabel="true" v-model="user.email" name="email"
          placeholder="이메일 주소를 입력해주세요">
          <InputInnerButton class="absolute right-3 top-1/2 -translate-y-1/2" width="w-[97px]" @click="otpCreate">
            인증 요청
          </InputInnerButton>
        </TopLabelInput>

        <TopLabelInput v-model="user.otp" name="verification-code" placeholder="인증번호를 입력해주세요">
          <InputInnerButton variant="gray" class="absolute right-3 top-1/2 -translate-y-1/2" width="w-[97px]"
            :disabled="!user.otp" @click="() => otpCheck(user.email, user.otp)">
            인증번호 확인
          </InputInnerButton>
        </TopLabelInput>
        <div v-if="isVerificationOtpError" class="font-caption text-red-400">{{ verificationOtpErrorMsg }}</div>
      </div>

      <!-- 다음 버튼 -->
      <Button type="submit" :disabled="!isVerificationOtp">
        <template #text>
          비밀번호 찾기
        </template>
      </Button>
    </form>
    <!-- 하단 링크 -->
    <div class="flex items-center justify-between mt-5">
      <router-link to="/auth/login" class="font-h5 text-gry-800 hover:text-gry-900">로그인</router-link>
      <div class="flex items-center space-x-2">
        <span class="font-h5 text-gry-700">계정이 없으신가요?</span>
        <router-link to="/auth/signup" class="font-h5 text-point-600 hover:text-point-700">회원가입</router-link>
      </div>
    </div>
  </div>
  <SubmitModal v-if="isSubmitModal" @handleLoginPage="handleLoginPage" :email="user.email" />
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import TopLabelInput from '@/common/components/input/TopLabelInput.vue'
import InputInnerButton from '@/common/components/button/InputInnerButton.vue'
import Button from '@/common/components/button/MainButton.vue'
import LoginApi from '@/api/loginAPI'
import SubmitModal from '@/components/modal/FindPasswordSubmitModal.vue'
const router = useRouter()
const isVerificationOtp = ref<boolean>(false)
const isVerificationOtpError = ref<boolean>(false)
const verificationOtpErrorMsg = ref<string>('인증번호가 일치하지 않습니다.')
const isSubmitModal = ref<boolean>(false)
const isEmailValid = computed(() => {
  return user.email.includes('@');
})
const user = reactive({
  username: '',
  email: '',
  otp: '',
})

const handleLoginPage = () => {
  router.push('/auth/login')
}

const handleSubmit = async () => {
  if (!user.username) {
    alert("아이디를 입력해주세요.");
    return;  // 아이디가 입력되지 않으면 진행하지 않음
  }

  try {
    const payload = {
      username: user.username,
      email: user.email,
      otp: user.otp,
      type: "password",
    }

    await LoginApi.findPassword(payload)
    isSubmitModal.value = true
  } catch (err: any) {
    console.error('비밀번호 찾기 실패:', err.response?.data || err.message)
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

    isVerificationOtpError.value = false
    isVerificationOtp.value = true
    // 필요한 경우 인증 완료 상태 처리 추가
  } catch (err: any) {
    console.error('인증 실패:', err.response?.data || err.message)
    isVerificationOtpError.value = true
    verificationOtpErrorMsg.value = '인증번호가 일치하지 않습니다.'
  }
}

</script>

<style></style>
