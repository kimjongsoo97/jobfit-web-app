<template>
  <div class="min-h-screen bg-white">
    <!-- 상단 네비게이션 바 -->
    <div class="w-full h-20 bg-white shadow-sm">
      <div class="container mx-auto px-4 h-full flex items-center justify-between">
        <!-- 로고 -->
        <div class="h-10 w-32 bg-[#d9d9d9]"></div>

        <!-- 네비게이션 메뉴 -->
        <div class="flex items-center space-x-8">
          <nav class="flex space-x-12">
            <a href="#" class="text-[18px] font-semibold text-[#1b1c1f]">채용공고</a>
            <a href="#" class="text-[18px] font-semibold text-[#1b1c1f]">유망직업군</a>
            <a href="#" class="text-[18px] font-semibold text-[#1b1c1f]">챌린지</a>
          </nav>

          <!-- 로그인/회원가입 버튼 -->
          <div class="flex items-center space-x-4">
            <a href="#" class="text-sm font-semibold text-[#1b1c1f]">로그인</a>
            <a href="#" class="px-4 py-2 bg-[#8375ff] text-white text-sm font-semibold rounded-lg">회원가입</a>
          </div>
        </div>
      </div>
    </div>

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
            <h2 class="text-2xl font-semibold text-[#1b1c1f]">스펙 수정</h2>
            <button class="px-4 py-2 bg-[#efeff3] text-[#404249] text-sm font-semibold rounded-xl">수정 완료</button>
          </div>

          <hr class="border-[#dedee4] mb-6" />

          <!-- 나의 기술 섹션 -->
          <div class="mb-8">
            <h3 class="text-[18px] font-semibold text-[#1b1c1f] mb-4">나의 기술</h3>
            <!-- 검색 입력창 -->
            <div class="relative mb-4">
              <input type="text" placeholder="추가할 기술을 검색해 보세요"
                class="w-[400px] h-[52px] px-4 py-2 bg-[#fafafc] border border-[#dedee4] rounded-xl text-[16px] font-semibold placeholder-[#babdc3]" />
              <span class="absolute right-4 top-1/2 -translate-y-1/2">
                <i class="material-icons text-[#babdc3]">search</i>
              </span>
            </div>
            <!-- 기술 태그 목록 -->
            <div class="flex flex-wrap gap-3">
              <div v-for="skill in skills" :key="skill"
                class="px-3 py-2 bg-[#f4f4f6] text-[#404249] text-sm font-semibold rounded-xl flex items-center gap-2">
                {{ skill }}
                <button class="text-[#404249]">
                  <i class="material-icons text-sm">close</i>
                </button>
              </div>
            </div>
          </div>

          <!-- 기타 스펙 섹션 -->
          <div class="mb-8">
            <h3 class="text-[18px] font-semibold text-[#1b1c1f] mb-4">기타 스펙</h3>
            <p class="text-xs font-semibold text-[#989aa2] mb-2">자격증 명의 정확한 명칭으로 입력 부탁드립니다. ex)Toeic, opic</p>
            <!-- 입력창 -->
            <div class="flex items-center mb-4">
              <input type="text" placeholder="추가할 스펙을 입력해 보세요"
                class="w-[400px] h-[52px] px-4 py-2 bg-[#fafafc] border border-[#dedee4] rounded-xl text-[16px] font-semibold placeholder-[#babdc3]" />
              <button class="ml-auto px-4 py-1 bg-[#e8e5ff] text-[#5b4af4] text-sm rounded-md">추가</button>
            </div>
            <!-- 스펙 태그 목록 -->
            <div class="flex flex-wrap gap-3">
              <div v-for="spec in specs" :key="spec"
                class="px-3 py-2 bg-[#f4f4f6] text-[#404249] text-sm font-semibold rounded-xl flex items-center gap-2">
                {{ spec }}
                <button class="text-[#404249]">
                  <i class="material-icons text-sm">close</i>
                </button>
              </div>
            </div>
          </div>

          <!-- 경력사항 섹션 -->
          <div>
            <h3 class="text-[18px] font-semibold text-[#1b1c1f] mb-4">경력사항</h3>
            <div class="flex items-center">
              <input type="text" value="3년"
                class="w-[400px] h-[52px] px-4 py-2 bg-[#fafafc] border border-[#dedee4] rounded-xl text-[16px] font-semibold text-[#1b1c1f]" />
              <button class="ml-auto px-4 py-1 bg-[#e8e5ff] text-[#5b4af4] text-sm rounded-md">수정</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const skills = ref(['JavaScript', 'Git', 'MySQL', 'React', 'Oracle', 'Java'])
const specs = ref(['Toeic : 930', 'Jlpt : 2급', 'opic : IH'])
</script>

<style>
/* Pretendard 폰트 적용 */
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
/* Material Icons 적용 */
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

* {
  font-family: 'Pretendard', sans-serif;
}
</style>