<template>
  <div class="min-h-screen flex">
    <!-- 왼쪽 섹션 -->
    <div class="w-1/2 bg-gradient-to-b from-[#5b4af4] to-[#5349b2] relative">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div class="max-w-[358px] text-white">
          <h1 class="text-[48px] font-semibold leading-[67px] text-[#fafafc]">
            JOBFIT에<br />
            오신걸 환영합니다!
          </h1>
          <p class="mt-5 text-[16px] font-semibold leading-[30px] text-[#fafafc]">
            회원 가입하고 채용공고에 대한 상세한 정보를 얻어보세요!
          </p>
        </div>
      </div>

      <!-- 하단 이미지 -->
      <!-- <img src="@/assets/images/woman-portfolio.png" alt="Young woman putting together her portfolio"
        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[539px] h-[539px] object-cover" /> -->
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
