<template>
  <div class="min-h-screen bg-white">

    <!-- 메인 콘텐츠 -->
    <div class="container mx-auto px-4 mt-12">
      <h1 class="text-[40px] font-semibold text-[#1b1c1f] mb-8">마이페이지</h1>

      <div class="flex gap-8">
        <!-- 사이드바 -->
        <div class="w-[260px]">
          <div class="bg-[#f4f4f6] rounded-lg p-4 space-y-4">
            <a href="#" class="block text-[18px] font-semibold text-[#6f727c]">회원정보</a>
            <a href="#" class="block text-[18px] font-semibold text-[#5b4af4] relative">
              나의 스펙
              <div class="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-7 bg-[#5b4af4]"></div>
            </a>
            <a href="#" class="block text-[18px] font-semibold text-[#6f727c]">챌린지</a>
            <a href="#" class="block text-[18px] font-semibold text-[#6f727c]">즐겨찾기</a>
          </div>
        </div>

        <!-- 메인 콘텐츠 영역 -->
        <div class="flex-1">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-semibold text-[#1b1c1f]">나의 스펙</h2>
            <button class="px-4 py-2 bg-[#efeff3] text-[#404249] text-sm font-semibold rounded-xl">수정</button>
          </div>

          <hr class="border-[#dedee4] mb-6" />

          <!-- 나의 기술 섹션 -->
          <div class="mb-8">
            <h3 class="text-[18px] font-semibold text-[#1b1c1f] mb-4">나의 기술</h3>
            <div class="flex flex-wrap gap-3">
              <span class="px-3 py-2 bg-[#f4f4f6] text-[#404249] text-sm font-semibold rounded-xl">JavaScript</span>
              <span class="px-3 py-2 bg-[#f4f4f6] text-[#404249] text-sm font-semibold rounded-xl">Git</span>
              <span class="px-3 py-2 bg-[#f4f4f6] text-[#404249] text-sm font-semibold rounded-xl">MySQL</span>
              <span class="px-3 py-2 bg-[#f4f4f6] text-[#404249] text-sm font-semibold rounded-xl">React</span>
              <span class="px-3 py-2 bg-[#f4f4f6] text-[#404249] text-sm font-semibold rounded-xl">Oracle</span>
              <span class="px-3 py-2 bg-[#f4f4f6] text-[#404249] text-sm font-semibold rounded-xl">Java</span>
            </div>
          </div>

          <!-- 기타 스펙 섹션 -->
          <div class="mb-8">
            <h3 class="text-[18px] font-semibold text-[#1b1c1f] mb-4">기타 스펙</h3>
            <div class="flex flex-wrap gap-3">
              <span class="px-3 py-2 bg-[#f4f4f6] text-[#404249] text-sm font-semibold rounded-xl">Toeic : 930</span>
              <span class="px-3 py-2 bg-[#f4f4f6] text-[#404249] text-sm font-semibold rounded-xl">Jlpt : 2급</span>
              <span class="px-3 py-2 bg-[#f4f4f6] text-[#404249] text-sm font-semibold rounded-xl">opic : IH</span>
            </div>
          </div>

          <!-- 경력사항 섹션 -->
          <div>
            <h3 class="text-[18px] font-semibold text-[#1b1c1f] mb-4">경력사항</h3>
            <div class="flex flex-wrap gap-3">
              <span class="px-3 py-2 bg-[#f4f4f6] text-[#404249] text-sm font-semibold rounded-xl">3년</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 필요한 경우 여기에 컴포넌트 로직을 추가합니다.
</script>

<style>
/* Pretendard 폰트 적용 */
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

* {
  font-family: 'Pretendard', sans-serif;
}
</style>
