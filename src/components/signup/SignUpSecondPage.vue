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
      <TopLabelInput label="이름" is-label="true" v-model="name" name="username" placeholder="이름을 입력해주세요" />

      <!-- 이메일 입력 -->
      <div class="space-y-2">
        <TopLabelInput class="relative" label="이메일 주소" is-label="true" v-model="email" name="email"
          placeholder="이메일 주소를 입력해주세요">
          <InputInnerButton class="absolute right-3 top-1/2 -translate-y-1/2" width="w-[97px]">
            인증 요청
          </InputInnerButton>
        </TopLabelInput>

        <TopLabelInput v-model="verificationCode" name="verification-code" placeholder="인증번호를 입력해주세요">
          <InputInnerButton variant="gray" class="absolute right-3 top-1/2 -translate-y-1/2" width="w-[97px]"
            disabled="true">
            인증번호 입력
          </InputInnerButton>
        </TopLabelInput>
        <div v-if="isVerificationError" class="font-caption text-red-400">{{ verificationErrorMsg }}</div>
      </div>

      <!-- 연락처 입력 -->
      <div class="space-y-2">
        <TopLabelInput label="연락처" is-label="true" v-model="phone" name="phone" placeholder="연락처를 입력해주세요" />
      </div>

      <!-- 비밀번호 입력 -->
      <div class="space-y-2">
        <TopLabelInput type="password" class="relative" label="비밀번호" is-label="true" v-model="password" name="password"
          placeholder="비밀번호를 입력해주세요" />

        <TopLabelInput type="password" v-model="passwordConfirm" name="password-confirm" placeholder="비밀번호를 입력해주세요">
          <div v-if="!passwordsMatch" class="absolute right-3 top-1/2 -translate-y-1/2 font-caption text-red-400">
            비밀번호가 일치하지 않습니다.
          </div>
        </TopLabelInput>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TopLabelInput from '@/common/components/input/TopLabelInput.vue'
import InputInnerButton from '@/common/components/button/InputInnerButton.vue'
import Button from '@/common/components/button/MainButton.vue'

const router = useRouter()
const name = ref('')
const email = ref('')
const verificationCode = ref('')
const phone = ref('')
const password = ref('')
const passwordConfirm = ref('')
const isVerificationError = ref<boolean>(false)
const verificationErrorMsg = ref<string>('인증번호가 일치하지 않습니다.')

const passwordsMatch = ref<boolean>(true)

const handleSubmit = () => {
  if (passwordsMatch.value) {
    router.push('/auth/signup/complete')
  }
}
</script>

<style></style>
