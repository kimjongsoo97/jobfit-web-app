<template>
  <div class="min-h-screen bg-white">

    <!-- 메인 컨텐츠 -->
    <main class="container mx-auto px-4 py-8">
      <!-- 챌린지 제목과 설명 -->
      <div class="mb-8">
        <h1 class="text-4xl font-semibold text-[#1b1c1f] mb-2">챌린지</h1>
        <p class="text-base font-semibold text-[#6f727c] leading-[30px]">
          채용공고와 00님의 적합도를 분석했어요.<br />
          스펙을 추가하여 회사 합격률을 올려보세요.
        </p>
      </div>

      <!-- 검색 바 -->
      <div class="w-[480px] h-[52px] mb-8 relative">
        <input type="text" placeholder="회사 이름을 검색해보세요"
          class="w-full h-full px-4 bg-[#fafafc] border border-[#dedee4] rounded-xl text-base font-semibold placeholder-[#babdc3]" />
        <button class="absolute right-4 top-1/2 -translate-y-1/2">
          <span class="material-icons text-[#babdc3]">search</span>
        </button>
      </div>

      <!-- 진행중/완료 탭 -->
      <div class="border-b border-[#dedee4] mb-8">
        <div class="flex space-x-4 mb-2">
          <button class="text-lg font-semibold text-[#404249] relative">
            진행중 30
            <div class="absolute bottom-0 left-0 w-[90px] h-[3px] bg-[#404249]"></div>
          </button>
          <button class="text-lg font-semibold text-[#989aa2]">완료 30</button>
        </div>
      </div>

      <!-- 챌린지 카드 그리드 -->
      <div class="grid grid-cols-3 gap-5">
        <template v-for="i in 9" :key="i">
          <div class="bg-[#fafafc] border border-[#efeff3] rounded-2xl p-4">
            <div class="mb-4">
              <h3 class="text-lg font-semibold text-[#404249] mb-1">Recruiting Manager</h3>
              <p class="text-sm font-semibold text-[#989aa2]">(주)노타</p>
            </div>
            <div class="space-y-2">
              <!-- 프로그레스 바 -->
              <div class="relative h-4 bg-[#efeff3] rounded-lg overflow-hidden">
                <div class="absolute left-0 top-0 h-full w-1/4 rounded-lg bg-gradient-to-r from-[#897cff] to-[#6255d6]">
                </div>
              </div>
              <!-- 충족도 -->
              <div class="flex justify-between items-center">
                <span class="text-xs font-semibold text-[#404249]">충족도</span>
                <span class="text-base font-semibold text-[#5b4af4]">45%</span>
              </div>
              <!-- 마감일 -->
              <div class="flex space-x-2 text-sm font-semibold text-[#404249]">
                <span>마감일</span>
                <span>D-day</span>
              </div>
            </div>
          </div>
        </template>
      </div>

      <!-- 플로팅 버튼 -->
      <button
        class="fixed right-40 bottom-10 w-[60px] h-[60px] bg-white border border-[#efeff3] rounded-full flex items-center justify-center">
        <span class="material-icons">add</span>
      </button>
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Material+Icons');
</style>