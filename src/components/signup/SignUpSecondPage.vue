<template>
  <div class="max-w-[480px] w-full">
    <h2 class="text-[40px] font-semibold text-[#1b1c1f] leading-[56px]">
      회원가입
    </h2>
    <p class="mt-1 text-[16px] font-semibold text-[#6f727c] leading-[30px]">
      계정 정보를 입력해 주세요
    </p>

    <div class="h-[2px] bg-[#efeff3] my-6"></div>

    <!-- 회원가입 폼 -->
    <form @submit.prevent="handleSubmit" class="space-y-5">
      <!-- 이름 입력 -->
      <div class="space-y-2">
        <label class="block text-[14px] font-semibold text-[#404249]">이름</label>
        <div class="relative">
          <input v-model="name" type="text" placeholder="이름을 입력해주세요"
            class="w-full h-[48px] px-3 rounded-xl border border-[#dedee4] text-[14px] font-semibold placeholder-[#babdc3]" />
        </div>
      </div>

      <!-- 이메일 입력 -->
      <div class="space-y-2">
        <label class="block text-[14px] font-semibold text-[#404249]">이메일 주소</label>
        <div class="space-y-2">
          <div class="relative">
            <input v-model="email" type="email" value="email@email"
              class="w-full h-[48px] px-3 rounded-xl border border-[#dedee4] text-[14px] font-semibold text-[#404249]" />
            <button type="button"
              class="absolute right-2 top-2 px-4 h-[32px] bg-[#e8e5ff] rounded-md text-[14px] text-[#5b4af4]">
              인증 요청
            </button>
          </div>
          <div class="relative">
            <input v-model="verificationCode" type="number" value="123456"
              class="w-full h-[48px] px-3 rounded-xl border border-[#dedee4] text-[14px] font-semibold text-[#404249]" />
            <button type="button"
              class="absolute right-2 top-2 px-4 h-[32px] bg-[#f4f4f6] rounded-md text-[14px] text-[#babdc3]">
              인증번호 입력
            </button>
          </div>
        </div>
      </div>

      <!-- 연락처 입력 -->
      <div class="space-y-2">
        <label class="block text-[14px] font-semibold text-[#404249]">연락처</label>
        <div class="relative">
          <input v-model="phone" type="tel" placeholder="010-1234-5678"
            class="w-full h-[48px] px-3 rounded-xl border border-[#dedee4] text-[14px] font-semibold placeholder-[#babdc3]" />
        </div>
      </div>

      <!-- 비밀번호 입력 -->
      <div class="space-y-2">
        <label class="block text-[14px] font-semibold text-[#404249]">비밀번호</label>
        <div class="space-y-2">
          <div class="relative">
            <input v-model="password" type="password" placeholder="***********"
              class="w-full h-[48px] px-3 rounded-xl border border-[#dedee4] text-[14px] font-semibold text-[#404249]" />
          </div>
          <div class="relative">
            <input v-model="passwordConfirm" type="password" placeholder="***********"
              class="w-full h-[48px] px-3 rounded-xl border border-[#dedee4] text-[14px] font-semibold text-[#404249]" />
            <span v-if="!passwordsMatch" class="absolute right-3 top-1/2 -translate-y-1/2 text-[14px] text-[#ff4b4b]">
              비밀번호가 일치하지 않습니다
            </span>
          </div>
        </div>
      </div>

      <!-- 다음 버튼 -->
      <button type="submit"
        class="w-full h-[48px] bg-[#8375ff] text-[#fafafc] rounded-xl text-[14px] font-semibold mt-5">
        다음
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const name = ref('')
const email = ref('')
const verificationCode = ref('')
const phone = ref('')
const password = ref('')
const passwordConfirm = ref('')

const passwordsMatch = computed(() => {
  return password.value === passwordConfirm.value
})

const handleSubmit = () => {
  if (passwordsMatch.value) {
    router.push('/auth/signup/complete')
  }
}
</script>

<style></style>
