<template>
  <div class="min-h-screen bg-white">

    <!-- 메인 컨텐츠 -->
    <main class="container mx-auto px-4 py-8">
      <!-- 채용공고 제목 -->
      <h1 class="text-4xl font-semibold text-[#1b1c1f] mb-8">채용공고</h1>

      <!-- 필터 섹션 -->
      <div class="mb-8">
        <p class="text-base font-semibold text-[#6f727c] mb-4">
          현재 채용중인 회사의 공고를 확인하세요
        </p>
        <div class="flex space-x-4">
          <!-- 직무/직군 필터 -->
          <button
            class="w-[180px] h-[52px] px-4 flex items-center justify-between bg-[#fafafc] border border-[#babdc3] rounded-xl">
            <span class="text-base font-semibold text-[#babdc3]">직무/직군</span>
            <span class="material-icons text-[#babdc3]">arrow_drop_down</span>
          </button>

          <!-- 경력 필터 -->
          <button
            class="w-[180px] h-[52px] px-4 flex items-center justify-between bg-[#fafafc] border border-[#dedee4] rounded-xl">
            <span class="text-base font-semibold text-[#babdc3]">경력</span>
            <span class="material-icons text-[#babdc3]">arrow_drop_down</span>
          </button>

          <!-- 지역 필터 -->
          <button
            class="w-[180px] h-[52px] px-4 flex items-center justify-between bg-[#fafafc] border border-[#dedee4] rounded-xl">
            <span class="text-base font-semibold text-[#babdc3]">지역</span>
            <span class="material-icons text-[#babdc3]">arrow_drop_down</span>
          </button>

          <!-- 회사 이름 검색 -->
          <div class="w-[400px] h-[52px] relative">
            <input type="text" placeholder="회사 이름"
              class="w-full h-full px-4 bg-[#fafafc] border border-[#dedee4] rounded-xl text-base font-semibold placeholder-[#babdc3]" />
            <button class="absolute right-4 top-1/2 -translate-y-1/2">
              <span class="material-icons text-[#babdc3]">search</span>
            </button>
          </div>

          <!-- 정렬 탭 -->
          <div class="w-[172px] h-[52px] bg-[#efeff3] rounded-xl flex p-1">
            <button
              class="flex-1 h-10 flex items-center justify-center bg-white rounded-lg text-base font-semibold text-[#404249]">
              최신순
            </button>
            <button class="flex-1 h-10 flex items-center justify-center text-base font-semibold text-[#6f727c]">
              마감순
            </button>
          </div>
        </div>
      </div>

      <!-- 채용공고 카드 그리드 -->
      <div class="grid grid-cols-2 gap-5">
        <template v-for="i in 6" :key="i">
          <div class="bg-[#fafafc] border border-[#efeff3] rounded-lg p-4">
            <!-- D-day 배지 -->
            <div class="inline-block px-3 py-1 bg-white rounded-lg mb-4">
              <span class="text-base font-semibold text-[#5b4af4]">D-14</span>
            </div>

            <!-- 채용공고 내용 -->
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">부천 송내역 메리츠화재 빌딩 시설기사</h3>

              <div class="space-y-1 text-sm">
                <div class="grid grid-cols-2">
                  <p class="text-[#1b1c1f]">회사이름 : 백상 코퍼레이션</p>
                  <p class="text-[#1b1c1f]">연봉 : 월급 267만원</p>
                </div>
                <div class="grid grid-cols-2">
                  <p class="text-[#1b1c1f]">고용형태 : 계약직</p>
                  <p class="text-[#1b1c1f]">경력 : 1년</p>
                </div>
                <p class="text-[#1b1c1f]">근무지 : 경기도 부천시 원미구 송내대로 메리츠화재 빌딩</p>
              </div>

              <!-- 등록일/마감일 -->
              <div class="grid grid-cols-2">
                <div class="flex items-center space-x-2">
                  <span class="text-base font-semibold text-[#6f727c]">등록일</span>
                  <span class="text-base font-semibold text-[#1b1c1f]">2025-04-15</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-base font-semibold text-[#6f727c]">마감일</span>
                  <span class="text-base font-semibold text-[#1b1c1f]">2025-04-29</span>
                </div>
              </div>

              <!-- 버튼 그룹 -->
              <div class="flex space-x-2">
                <button class="w-11 h-10 bg-[#f4f4f6] rounded-full flex items-center justify-center">
                  <span class="material-icons text-[#babdc3]">star_border</span>
                </button>
                <button class="h-10 px-4 bg-[#e8e5ff] rounded-full flex items-center space-x-2">
                  <span class="material-icons text-[#5b4af4]">add_box</span>
                  <span class="text-base text-[#5b4af4]">챌린지 추가</span>
                </button>
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
