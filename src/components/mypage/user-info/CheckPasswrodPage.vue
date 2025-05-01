<!-- 수정 필요 -->

<template>
  <div class="flex flex-col">
    <!-- 페이지 제목 -->
    <div class="flex items-center gap-2 mb-6">
      <i class="eva:arrow-ios-downward-outline w-6 h-6"></i>
      <h1 class="text-2xl font-semibold text-gr900">비밀번호 변경</h1>
    </div>

    <!-- 안내 텍스트 -->
    <p class="text-base font-semibold text-gr700 mb-8">회원정보 수정을 위해 비밀번호를 입력해주세요</p>

    <div class="border-t border-gr400 pt-8">
      <!-- 비밀번호 입력 -->
      <div class="mb-4">
        <label class="text-lg font-semibold text-gr800 mb-2 block">비밀번호</label>
        <input type="password" v-model="password" placeholder="현재 사용중인 비밀번호를 입력해 주세요"
          class="w-[480px] h-12 px-3 rounded-xl border border-gr400 font-semibold text-sm focus:outline-none focus:border-primary">
      </div>

      <!-- 확인 버튼 -->
      <button @click="handleCheckPassword" :class="[
        'w-[480px] h-12 rounded-xl font-semibold text-sm',
        isValid ? 'bg-primary text-white' : 'bg-gr200 text-gr800'
      ]">
        확인
      </button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const password = ref('')

const isValid = computed(() => {
  return password.value.length >= 8
})

const handleCheckPassword = () => {
  if (!isValid.value) return
  // TODO: API 연동 - 비밀번호 확인 후 회원정보 수정 페이지로 이동
  router.push('/mypage/user-info/edit')
}
</script>

<style scoped>
/* Tailwind classes로 대체 */
</style>