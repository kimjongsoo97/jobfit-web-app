<template>
  <div class="min-h-screen bg-white">
    <!-- 네비게이션 바 -->
    <nav class="w-full h-20 bg-white border-b border-gray-200">
      <div class="container mx-auto px-4 h-full flex items-center justify-between">
        <div class="flex items-center gap-4">
          <div class="w-32 h-10 bg-gray-300"></div>
          <h1 class="text-4xl font-semibold text-gray-900">마이페이지</h1>
        </div>

        <div class="flex items-center gap-8">
          <div class="flex gap-8">
            <span class="text-lg font-semibold">채용공고</span>
            <span class="text-lg font-semibold">유망직업군</span>
            <span class="text-lg font-semibold">챌린지</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm font-semibold">로그인</span>
            <button class="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold">
              회원가입
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- 메인 컨텐츠 -->
    <div class="container mx-auto px-4 py-8">
      <div class="flex gap-8">
        <!-- 사이드바 -->
        <div class="w-64">
          <div class="bg-gray-50 rounded-lg p-5 space-y-4">
            <div class="text-gray-500 font-semibold">회원정보</div>
            <div class="text-gray-500 font-semibold">나의 스펙</div>
            <div class="text-primary font-semibold flex justify-between items-center">
              챌린지
              <div class="w-1 h-7 bg-primary"></div>
            </div>
            <div class="text-gray-500 font-semibold">즐겨찾기</div>
          </div>
        </div>

        <!-- 메인 섹션 -->
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-4">
            <h2 class="text-2xl font-semibold">예담요양원</h2>
            <button class="p-1">
              <i class="fas fa-chevron-down"></i>
            </button>
          </div>

          <div class="border-b border-gray-300 pb-4">
            <div class="text-lg font-semibold">물리치료사,작업치료사</div>
          </div>

          <div class="py-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-sm text-gray-700">충족도</span>
              <span class="text-primary font-semibold">45%</span>
            </div>

            <div class="relative h-4 bg-gray-100 rounded-lg">
              <div class="absolute left-0 top-0 h-full w-[45%] bg-gradient-to-r from-[#897CFF] to-[#6255D6] rounded-lg">
              </div>
            </div>
          </div>

          <!-- 충족/미흡 섹션 -->
          <div class="space-y-3">
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-red-50 p-4 rounded">
                <div class="flex items-center gap-2 mb-4">
                  <i class="fas fa-thumbs-up text-red-700"></i>
                  <span class="text-red-700 font-semibold">충족점</span>
                </div>
                <p class="text-gray-900 font-semibold">물리치료사,학력</p>
              </div>

              <div class="bg-blue-50 p-4 rounded">
                <div class="flex items-center gap-2 mb-4">
                  <i class="fas fa-thumbs-down text-blue-900"></i>
                  <span class="text-blue-900 font-semibold">미흡점</span>
                </div>
                <p class="text-gray-900 font-semibold">작업치료사,운전면허,경력</p>
              </div>
            </div>
          </div>

          <!-- 공고 내용 -->
          <div class="mt-8">
            <h3 class="text-lg font-semibold mb-4">공고내용</h3>
            <div class="text-gray-700 space-y-2">
              <p>* 물리,작업치료사 구인</p>
              <p>* 어르신들 건강체크 및 치료사 업무</p>
              <p>* 자차 이용자 환영</p>
            </div>
          </div>
        </div>

        <!-- 삭제 버튼 -->
        <button class="h-10 px-4 bg-gray-100 text-gray-700 rounded-xl font-semibold">
          삭제
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 필요한 경우 여기에 스크립트 로직을 추가하세요
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pretendard:wght@400;600&display=swap');

.font-pretendard {
  font-family: 'Pretendard', sans-serif;
}
</style>
