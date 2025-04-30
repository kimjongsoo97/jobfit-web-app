<template>
  <div class="min-h-screen bg-white">

    <!-- 메인 컨텐츠 -->
    <main class="container mx-auto px-4 pt-32">
      <div class="flex justify-between items-start">
        <div>
          <h1 class="text-4xl font-semibold text-[#1B1C1F] mt-8">유명 직업군</h1>
          <p class="text-base font-semibold text-[#6F727C] mt-2">향후 10년간의 직업 전망을 한눈에 확인해 보세요!</p>

          <!-- 검색바 -->
          <div class="mt-4 w-[400px] h-[52px] bg-[#FAFAFC] border border-[#DEDEE4] rounded-xl flex items-center px-3">
            <input type="text" placeholder="궁금하신 직업을 검색해 보세요"
              class="flex-1 bg-transparent text-base font-semibold placeholder-[#BABDC3] focus:outline-none">
            <button class="w-6 h-6 text-[#BABDC3]">
              <i class="material-icons">search</i>
            </button>
          </div>
        </div>

        <!-- PDF 안내 박스 -->
        <div class="bg-[#F4F4F6] rounded-xl p-3 w-[278px]">
          <div class="flex justify-between items-center">
            <div>
              <p class="text-right text-base font-semibold text-[#1B1C1F]">관련된 자세한 정보를 보고싶다면?</p>
              <p class="text-sm text-[#6F727C]">한국고용원 향후10년직업 pdf보러가기</p>
            </div>
            <i class="material-icons text-[#6F727C]">arrow_forward_ios</i>
          </div>
        </div>
      </div>

      <!-- 직업 전망 카테고리 -->
      <div class="grid grid-cols-3 gap-5 mt-8">
        <div class="bg-[#FFDDDD] rounded-lg h-[52px] flex items-center justify-center space-x-2">
          <i class="material-icons text-[#CC1F1F]">thumb_up</i>
          <span class="text-base font-semibold text-[#CC1F1F]">성장 전망</span>
        </div>
        <div class="bg-[#EFEFF3] rounded-lg h-[52px] flex items-center justify-center space-x-2">
          <i class="material-icons text-[#404249]">remove</i>
          <span class="text-base font-semibold text-[#404249]">큰 변화 없음</span>
        </div>
        <div class="bg-[#CEE7FF] rounded-lg h-[52px] flex items-center justify-center space-x-2">
          <i class="material-icons text-[#0038A0]">thumb_down</i>
          <span class="text-base font-semibold text-[#0038A0]">감소 전망</span>
        </div>
      </div>

      <!-- 직업 카드 그리드 -->
      <div class="grid grid-cols-3 gap-5 mt-4">
        <!-- 직업 카드 반복 -->
        <div v-for="job in jobs" :key="job.title" class="bg-[#FAFAFC] border border-[#EFEFF3] rounded-2xl p-4">
          <h3 class="text-lg font-semibold text-[#1B1C1F]">{{ job.title }}</h3>
          <div class="flex items-center mt-2">
            <span class="text-base font-semibold text-[#404249]">{{ job.category }}</span>
            <div class="flex items-center ml-4" :class="job.trendColor">
              <span class="text-base font-semibold">{{ job.trend }}</span>
              <i class="material-icons ml-2" v-if="job.trend !== '현상유지'"
                v-bind:class="job.trend.includes('상승') ? 'text-[#CC1F1F]' : 'text-[#0038A0]'">
                {{ job.trend.includes('상승') ? 'arrow_upward' : 'arrow_downward' }}
              </i>
              <i class="material-icons ml-2" v-else>remove</i>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const jobs = ref([
  {
    title: '컴퓨터웨어기술자',
    category: '#IT/공학',
    trend: '2%이상 상승',
    trendColor: 'text-[#CC1F1F]'
  },
  {
    title: '의사',
    category: '#의료',
    trend: '현상유지',
    trendColor: 'text-[#6F727C]'
  },
  {
    title: '부동산 중개인',
    category: '#서비스업',
    trend: '1~2% 하락',
    trendColor: 'text-[#0038A0]'
  },
  {
    title: '반도체기술자',
    category: '#제조',
    trend: '1~2%이상 상승',
    trendColor: 'text-[#CC1F1F]'
  },
  {
    title: '회계사',
    category: '#회계/법인',
    trend: '현상유지',
    trendColor: 'text-[#6F727C]'
  },
  {
    title: '방문판매업',
    category: '#서비스업',
    trend: '2% 하락',
    trendColor: 'text-[#0038A0]'
  },
  {
    title: '수학자',
    category: '#수학/연구원',
    trend: '2%이상 상승',
    trendColor: 'text-[#CC1F1F]'
  },
  {
    title: '도선사',
    category: '#선박',
    trend: '현상유지',
    trendColor: 'text-[#6F727C]'
  },
  {
    title: '철근공',
    category: '#건설',
    trend: '1~2%하락',
    trendColor: 'text-[#0038A0]'
  }
])
</script>

<style scoped>
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}
</style>
