<template>
  <div class="max-w-[480px] w-full">
    <h2 class="text-[40px] font-semibold text-[#1b1c1f] leading-[56px]">
      회원가입
    </h2>
    <p class="mt-1 text-[16px] font-semibold text-[#6f727c] leading-[30px]">
      회원가입하고 내 지원 가능성 확인해보세요!
    </p>

    <!-- 가입 버튼들 -->
    <div class="mt-6 space-y-4">
      <button @click="$router.push('/auth/signup/info')"
        class="w-full h-[48px] bg-[#8375ff] rounded-xl flex items-center justify-center space-x-2 text-white">
        <span class="w-6 h-6">
          <!-- 이메일 아이콘 SVG -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            class="w-full h-full">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </span>
        <span class="text-[14px] font-semibold">이메일로 가입하기</span>
      </button>

      <button class="w-full h-[48px] bg-[#ffeb02] rounded-xl flex items-center justify-center space-x-2">
        <!-- <img src="@/assets/icons/kakao.svg" alt="Kakao" class="w-6 h-6" /> -->
        <span class="text-[14px] font-semibold text-[#1b1c1f]">카카오로 시작하기</span>
      </button>
    </div>

    <!-- 하단 링크 -->
    <div class="mt-[104px] flex items-center justify-end space-x-3">
      <span class="text-[14px] font-semibold text-[#404249]">혹시 회원이신가요?</span>
      <router-link to="/auth/login" class="text-[14px] font-semibold text-[#5b4af4]">회원정보 찾기</router-link>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style></style>
