<template>

  <!-- 메인 컨텐츠 -->
  <div class="flex-1">
    <h2 class="text-2xl font-semibold text-[#1B1C1F] mb-4">회원정보</h2>
    <hr class="border-[#DEDEE4] mb-6" />

    <!-- 회원 정보 폼 -->
    <div class="space-y-4">
      <!-- 이름 -->
      <div>
        <label class="block text-lg font-semibold text-[#404249] mb-2">이름</label>
        <div class="w-[480px] h-12 px-3 flex items-center bg-white border border-[#DEDEE4] rounded-xl">
          <span class="text-sm font-semibold text-[#1B1C1F]">김종수</span>
        </div>
      </div>

      <!-- 이메일 -->
      <div>
        <label class="block text-lg font-semibold text-[#404249] mb-2">이메일</label>
        <div class="w-[480px] h-12 px-3 flex items-center bg-white border border-[#DEDEE4] rounded-xl">
          <span class="text-sm font-semibold text-[#1B1C1F]">rlawhdtn97@naver.com</span>
        </div>
      </div>

      <!-- 비밀번호 -->
      <div>
        <label class="block text-lg font-semibold text-[#404249] mb-2">비밀번호</label>
        <div class="relative">
          <div class="w-[480px] h-12 px-3 flex items-center bg-white border border-[#DEDEE4] rounded-xl">
            <span class="text-sm font-semibold text-[#1B1C1F]">*********</span>
          </div>
          <button class="absolute right-4 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-[#E8E5FF] rounded-md">
            <span class="text-sm text-[#5B4AF4]">비밀번호 변경</span>
          </button>
        </div>
      </div>

      <!-- 회원정보 수정 버튼 -->
      <div class="mt-8">
        <button class="w-[480px] h-12 bg-[#EFEFF3] rounded-xl">
          <span class="text-sm font-semibold text-[#404249]">회원정보 수정</span>
        </button>
      </div>

      <!-- 회원 탈퇴 -->
      <div class="mt-8 text-center">
        <button class="text-sm font-semibold text-[#404249]">회원 탈퇴</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyPageSideBar from '@/components/nav/MyPageSideBar.vue'
</script>

<style scoped></style>
