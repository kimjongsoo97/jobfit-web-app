<template>
  <div class="max-w-[480px] w-full">
    <h2 class="font-h1 text-gry-900 mb-1">회원가입</h2>
    <p class="mb-3 text-[16px] font-semibold text-[#6f727c] leading-[30px]">계정 정보를 입력해 주세요</p>
    <div class="h-[2px] bg-gry-300 mb-6"></div>

    <form @submit.prevent="handleSubmit" class="space-y-5">
      <TopLabelInput label="이름" :isLabel="true" v-model="user.name" name="name" placeholder="이름을 입력해주세요" />

      <!-- 아이디 -->
      <TopLabelInput class="relative" label="아이디" :isLabel="true" v-model="user.username" name="username"
        placeholder="아이디를 입력해주세요">
        <InputInnerButton class="absolute right-3 top-1/2 -translate-y-1/2" width="w-[97px]"
          @click="() => checkUsername(user.username)">
          중복확인
        </InputInnerButton>
        <div v-if="isVerificationUsernameError" class="font-caption text-red-400">{{ verificationUsernameErrorMsg }}</div>
      </TopLabelInput>

      <!-- 비밀번호 -->
      <TopLabelInput type="password" label="비밀번호" :isLabel="true" v-model="user.password" name="password"
        placeholder="비밀번호를 입력해주세요" />
      <p v-if="user.password && !isStrongPassword" class="text-sm text-red-500 mt-1">
        비밀번호는 8자 이상, 영문, 숫자, 특수문자를 모두 포함해야 합니다.
      </p>

      <!-- 비밀번호 확인 -->
      <TopLabelInput type="password" v-model="user.confirmPassword" name="confirmPassword"
        placeholder="비밀번호를 다시 입력해주세요">
        <div v-if="user.confirmPassword && !isPasswordMatch"
          class="absolute right-3 top-1/2 -translate-y-1/2 font-caption text-red-400">
          비밀번호가 일치하지 않습니다.
        </div>
      </TopLabelInput>

      <!-- 이메일 -->
      <TopLabelInput class="relative" label="이메일 주소" :isLabel="true" v-model="user.email" name="email"
        placeholder="이메일 주소를 입력해주세요">
        <InputInnerButton class="absolute right-3 top-1/2 -translate-y-1/2" width="w-[97px]" @click="otpCreate">
          인증 요청
        </InputInnerButton>
      </TopLabelInput>

      <!-- 인증번호 -->
      <TopLabelInput v-model="user.otp" name="verification-code" placeholder="인증번호를 입력해주세요">
        <InputInnerButton variant="gray" class="absolute right-3 top-1/2 -translate-y-1/2" width="w-[97px]"
          :disabled="!user.otp" @click="() => otpCheck(user.email, user.otp)">
          인증번호 확인
        </InputInnerButton>
      </TopLabelInput>

      <!-- 인증 오류 메시지 -->
      <div v-if="isVerificationError" class="font-caption text-red-400">{{ verificationErrorMsg }}</div>
      <div v-if="isOtpVerified" class="text-green-500 text-sm">이메일 인증이 완료되었습니다.</div>

      <!-- 다음 버튼 -->
      <Button type="submit" :disabled="!isPasswordMatch || isSubmitting || !isOtpVerified">
        <template #text>다음</template>
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

const user = reactive({
  username: '',
  password: '',
  confirmPassword: '',
  name: '',
  email: '',
  otp: '',
})

const isVerificationUsernameError = ref(false)
const verificationUsernameErrorMsg = ref('')
const isVerificationError = ref(false)
const verificationErrorMsg = ref('')
const isUsernameTrue = ref(true)
const isOtpVerified = ref(false)
const isSubmitting = ref(false)

const passwordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/
const isStrongPassword = computed(() => passwordRegex.test(user.password))
const isPasswordMatch = computed(() => user.password === user.confirmPassword)
const isEmailValid = computed(() => user.email.includes('@'))

// 회원가입 제출
const handleSubmit = async () => {
  if (isSubmitting.value) return
  isSubmitting.value = true

  try {
    if (!user.name) return alert('이름을 입력해주세요')
    if (!user.username) return alert('아이디를 입력해주세요')
    if (isUsernameTrue.value) return alert('아이디 중복체크를 진행해주세요')
    if (!isStrongPassword.value) return alert('비밀번호 형식이 올바르지 않습니다')
    if (!isPasswordMatch.value) return alert('비밀번호가 일치하지 않습니다')
    if (!user.email || !isEmailValid.value) return alert('이메일을 입력해주세요')
    if (!isOtpVerified.value) return alert('이메일 인증을 완료해주세요')

    await LoginApi.signUp({ ...user })

    Object.assign(user, {
      username: '',
      password: '',
      confirmPassword: '',
      name: '',
      email: '',
      otp: ''
    })
    isUsernameTrue.value = true
    isOtpVerified.value = false

    router.push('/auth/signup/complete')
  } catch (err: any) {
    console.error('회원가입 실패:', err.response?.data || err.message)
    alert("회원가입 실패: " + (err.response?.data?.message || err.message))
  } finally {
    isSubmitting.value = false
  }
}

// 아이디 중복 확인
const checkUsername = async (username: string) => {
  if (!username) {
    isVerificationUsernameError.value = true
    verificationUsernameErrorMsg.value = '아이디를 입력해주세요'
    return
  }

  try {
    await LoginApi.checkUsername(username)
    alert("사용가능한 아이디 입니다.")
    isUsernameTrue.value = false
    isVerificationUsernameError.value = false
  } catch (err: any) {
    isVerificationUsernameError.value = true
    verificationUsernameErrorMsg.value = '이미 존재하는 아이디입니다'
  }
}

// 이메일 인증 요청
const otpCreate = async () => {
  if (!user.email || !isEmailValid.value) return alert('유효한 이메일을 입력해주세요')

  try {
    await LoginApi.otpCreate(user.email, "signup")
    alert("인증번호가 전송되었습니다.")
  } catch (e) {
    console.error(e)
    alert("인증번호 전송 중 오류가 발생했습니다.")
  }
}

// 인증번호 확인 (회원가입과 분리됨)
const otpCheck = async (email: string, otp: string) => {
  if (!otp) {
    isVerificationError.value = true
    verificationErrorMsg.value = '인증번호를 입력해주세요.'
    return
  }

  try {
    await LoginApi.otpCheck(email, otp, "signup")
    isVerificationError.value = false
    isOtpVerified.value = true
    alert("이메일 인증이 완료되었습니다.")
  } catch (err: any) {
    isVerificationError.value = true
    verificationErrorMsg.value = '인증번호가 일치하지 않습니다.'
    isOtpVerified.value = false
  }
}
</script>

<style scoped></style>
