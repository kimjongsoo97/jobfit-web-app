<template>
  <div class="min-h-screen flex">
    <!-- 왼쪽 섹션 -->
    <div class="w-1/2 bg-gradient-to-b from-point-600 to-point-700 relative">
      <div class="flex flex-col justify-center items-center h-full">
        <div class="max-w-[358px] w-full text-white">
          <h1 class="text-[48px] font-body font-semibold leading-[140%] text-gry-100">
            JOBFIT에<br />
            오신걸 환영합니다!
          </h1>
          <p class="mt-5 font-h4 text-gry-100">
            회원 가입하고 채용공고에 대한
          </p>
          <p class="mt-1 mb-3 font-h4 text-gry-100">
            상세한 정보를 얻어보세요!
          </p>
          <router-link to="/" class="bg-gry-400/30 rounded-lg p-2 font-p1 text-gry-100 hover:bg-gray-400/25 transition-all duration-200">홈페이지</router-link>
        </div>
        <!-- 하단 이미지 -->
        <img src="@/assets/images/woman-portfolio.png" alt="Young woman putting together her portfolio"
          class="w-[539px] object-cover" />
      </div>

    </div>

    <!-- 오른쪽 섹션 - slot으로 처리 -->
    <div class="w-1/2 bg-white flex items-center justify-center">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang='ts'>
// 필요한 경우 여기에 로직 추가
</script>

<style></style>
