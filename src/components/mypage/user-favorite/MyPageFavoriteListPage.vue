<!-- 카드 컴포넌트 화 및 수정 필요 -->
<template>
  <div class="flex-1">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-semibold text-[#1b1c1f]">즐겨찾기 5</h2>
    </div>

    <!-- 검색 및 필터 영역 -->
    <div class="flex justify-between mb-8">
      <!-- 검색창 -->
      <div class="relative">
        <input type="text" placeholder="회사 이름을 검색해보세요"
          class="w-[480px] h-[52px] px-4 py-2 bg-[#fafafc] border border-[#dedee4] rounded-xl text-[16px] font-semibold placeholder-[#babdc3]" />
        <span class="absolute right-4 top-1/2 -translate-y-1/2">
          <i class="material-icons text-[#babdc3]">search</i>
        </span>
      </div>

      <!-- 정렬 탭 -->
      <div class="bg-[#efeff3] rounded-xl p-[6px] flex space-x-0">
        <button :class="[
          'px-4 py-2 rounded-lg font-semibold text-base transition-colors',
          sortBy === 'latest' ? 'bg-white text-[#404249]' : 'text-[#6f727c]'
        ]" @click="sortBy = 'latest'">
          최신순
        </button>
        <button :class="[
          'px-4 py-2 rounded-lg font-semibold text-base transition-colors',
          sortBy === 'deadline' ? 'bg-white text-[#404249]' : 'text-[#6f727c]'
        ]" @click="sortBy = 'deadline'">
          마감순
        </button>
      </div>
    </div>

    <!-- 채용공고 카드 그리드 -->
    <div v-if="jobs.length > 0" class="grid grid-cols-2 gap-4">
      <div v-for="job in jobs" :key="job.id" class="bg-[#fafafc] border border-[#efeff3] rounded-lg p-4">
        <!-- D-day 배지 -->
        <div class="inline-block px-3 py-1 bg-white rounded-lg mb-4">
          <span class="text-[#5b4af4] font-semibold">D-{{ job.dday }}</span>
        </div>

        <!-- 채용정보 -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">{{ job.title }}</h3>
          <div class="space-y-1 text-sm">
            <div class="flex justify-between">
              <span>회사이름 : {{ job.company }}</span>
              <span>연봉 : {{ job.salary }}</span>
            </div>
            <div class="flex justify-between">
              <span>고용형태 : {{ job.type }}</span>
              <span>경력 : {{ job.experience }}</span>
            </div>
            <p>근무지 : {{ job.location }}</p>
          </div>

          <!-- 날짜 정보 -->
          <div class="flex justify-between text-base">
            <div>
              <span class="text-[#6f727c] font-semibold">등록일</span>
              <span class="ml-2 font-semibold">{{ job.startDate }}</span>
            </div>
            <div>
              <span class="text-[#6f727c] font-semibold">마감일</span>
              <span class="ml-2 font-semibold">{{ job.endDate }}</span>
            </div>
          </div>

          <!-- 즐겨찾기 버튼 -->
          <button class="flex items-center px-4 py-2 bg-[#e8e5ff] text-[#5b4af4] rounded-2xl space-x-2">
            <i class="material-icons text-base">star</i>
            <span class="text-sm">즐겨찾기 삭제</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 아무것도 없는경우 -->
    <div v-if="jobs.length === 0" class="bg-[#fafafc] border border-[#efeff3] rounded-xl p-8">
      <div class="flex flex-col items-center justify-center space-y-3">
        <i class="material-icons text-[36px] text-[#6f727c]">list_alt</i>
        <p class="text-center text-[16px] font-semibold text-[#6f727c] leading-[30px] whitespace-pre-line">
          아직 즐겨찾기된 채용공고가없어요
          채용공고를 보고 즐겨찾기 설정해보세요!
        </p>
        <a href="#" class="mt-3 px-6 py-2 bg-[#8375ff] text-white text-sm font-semibold rounded-lg">
          채용공고 보러가기
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const sortBy = ref('latest') // 'latest' | 'deadline'

const jobs = ref([
  {
    id: 1,
    dday: 14,
    title: '부천 송내역 메리츠화재 빌딩 시설기사',
    company: '백상 코퍼레이션',
    salary: '월급 267만원',
    type: '계약직',
    experience: '1년',
    location: '경기도 부천시 원미구 송내대로 메리츠화재 빌딩',
    startDate: '2025-04-15',
    endDate: '2025-04-29'
  },
  // 더미 데이터를 반복해서 5개의 항목 생성
  {
    id: 2,
    dday: 14,
    title: '부천 송내역 메리츠화재 빌딩 시설기사',
    company: '백상 코퍼레이션',
    salary: '월급 267만원',
    type: '계약직',
    experience: '1년',
    location: '경기도 부천시 원미구 송내대로 메리츠화재 빌딩',
    startDate: '2025-04-15',
    endDate: '2025-04-29'
  },
  {
    id: 3,
    dday: 14,
    title: '부천 송내역 메리츠화재 빌딩 시설기사',
    company: '백상 코퍼레이션',
    salary: '월급 267만원',
    type: '계약직',
    experience: '1년',
    location: '경기도 부천시 원미구 송내대로 메리츠화재 빌딩',
    startDate: '2025-04-15',
    endDate: '2025-04-29'
  },
  {
    id: 4,
    dday: 14,
    title: '부천 송내역 메리츠화재 빌딩 시설기사',
    company: '백상 코퍼레이션',
    salary: '월급 267만원',
    type: '계약직',
    experience: '1년',
    location: '경기도 부천시 원미구 송내대로 메리츠화재 빌딩',
    startDate: '2025-04-15',
    endDate: '2025-04-29'
  },
  {
    id: 5,
    dday: 14,
    title: '부천 송내역 메리츠화재 빌딩 시설기사',
    company: '백상 코퍼레이션',
    salary: '월급 267만원',
    type: '계약직',
    experience: '1년',
    location: '경기도 부천시 원미구 송내대로 메리츠화재 빌딩',
    startDate: '2025-04-15',
    endDate: '2025-04-29'
  }
])
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