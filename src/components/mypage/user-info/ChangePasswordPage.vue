<template>
  <div class="flex flex-col">
    <!-- 페이지 제목 -->
    <div class="flex items-center gap-2 mb-6">
      <i class="eva:arrow-ios-downward-outline w-6 h-6"></i>
      <h1 class="text-2xl font-semibold text-gr900">비밀번호 변경</h1>
    </div>

    <!-- 안내 텍스트 -->
    <p class="text-base font-semibold text-gr700 mb-8">변경할 비밀번호를 입력해 주세요</p>

    <div class="border-t border-gr400 pt-8">
      <!-- 새 비밀번호 입력 -->
      <div class="mb-4">
        <label class="text-lg font-semibold text-gr800 mb-2 block">새 비밀번호</label>
        <input
          type="password"
          v-model="newPassword"
          placeholder="새 비밀번호를 입력해 주세요"
          class="w-[480px] h-12 px-3 rounded-xl border border-gr400 font-semibold text-sm focus:outline-none focus:border-primary"
        />
        <p v-if="newPassword && !isStrongPassword" class="text-sm text-red-500 mt-1">
          비밀번호는 8자 이상, 영문 , 숫자, 특수문자를 모두 포함해야 합니다.
        </p>
      </div>

      <!-- 비밀번호 확인 -->
      <div class="mb-6">
        <label class="text-lg font-semibold text-gr800 mb-2 block">비밀번호 확인</label>
        <input
          type="password"
          v-model="confirmPassword"
          placeholder="비밀번호를 다시 입력해 주세요"
          class="w-[480px] h-12 px-3 rounded-xl border border-gr400 font-semibold text-sm focus:outline-none focus:border-primary"
        />
        <p v-if="confirmPassword && newPassword !== confirmPassword" class="text-sm text-red-500 mt-1">
          비밀번호가 일치하지 않습니다.
        </p>
      </div>

      <!-- 변경 버튼 -->
      <button
  @click="handleChangePassword"
  class="w-[480px] h-12 rounded-xl font-semibold text-sm transition-all duration-200"
  :style="{
    backgroundColor: isValid ? '#2D6FFF' : '#E5E7EB',  // 예시 색상
    color: isValid ? '#ffffff' : '#4B5563',
    cursor: isValid ? 'pointer' : 'default'
  }"
>
  비밀번호 변경하기
</button>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import LoginApi from '@/api/loginAPI'

const router = useRouter()
const newPassword = ref('')
const confirmPassword = ref('')

// 강력한 비밀번호 정규식
const passwordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;


const isStrongPassword = computed(() => passwordRegex.test(newPassword.value))

const isValid = computed(() => {
  return isStrongPassword.value && newPassword.value === confirmPassword.value
})

const handleChangePassword = async () => {
  if (!isValid.value) return

  try {
    await LoginApi.patchProfile(newPassword.value, confirmPassword.value)
    alert('비밀번호 변경 성공')
    router.push('/mypage/info')
  } catch (error) {
    console.error('비밀번호 변경 실패:', error)
    alert('비밀번호 변경 중 오류가 발생했습니다.')
  }
}
</script>

<style scoped>
/* Tailwind CSS 사용 중이므로 별도 스타일 불필요 */
</style>
