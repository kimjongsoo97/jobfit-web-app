<template>
  <!-- 메인 컨텐츠 -->
  <main class="mx-auto px-4 pt-14">
    <!-- 채용공고 제목 -->
    <h1 class="font-h1 text-gry-900 mb-2">채용공고</h1>
    <p class="font-h4 text-gry-700 mb-4">
      현재 채용중인 회사의 공고를 확인하세요
    </p>

    <!-- 필터 섹션 -->
    <div class="mb-8">
      <div class="flex space-x-4 justify-between">
        <!-- 직무/직군 필터 -->
        <SearchSelector :options="selectedJobOptions" placeholder="직무/직군" v-model="selectedJob" />

        <!-- 경력 필터 -->
        <SearchSelector :options="selectedCareerOptions" placeholder="경력" v-model="selectedCareer" />

        <!-- 지역 필터 -->
        <SearchSelector :options="selectedLocationOptions" placeholder="지역" v-model="selectedLocation" />

        <!-- 회사 이름 검색 -->
        <SearchInput placeholder="회사 이름" v-model="searchCompanyName" inputWidth="w-full min-w-[400px]" class="w-full">
          <Icon class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" @click="handleSearchCompanyName">
            <SearchIcon />
          </Icon>
        </SearchInput>

        <!-- 정렬 탭 -->
        <SortButtonBox leftButtonText="최신순" rightButtonText="마감순" v-model:active="sortType"
          @update:status="handleSortChange" />
      </div>
    </div>

    <!-- 채용공고 카드 그리드 -->
    <div class="grid grid-cols-2 gap-5">
      <RecruitCard v-for="recruit in recruits" :key="recruit.id" :recruit="recruit"
        @viewDetail="handleViewDetail(recruit.id)" />
    </div>

    <!-- 플로팅 버튼 -->
    <button
      class="fixed right-40 bottom-10 w-[60px] h-[60px] bg-white border border-[#efeff3] rounded-full flex items-center justify-center">
      <span class="material-icons">add</span>
    </button>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SearchSelector from '@/common/components/input/SearchSelector.vue'
import SearchInput from '@/common/components/input/SearchInput.vue'
import Icon from '@/common/components/CustomIcon.vue'
import SearchIcon from '@/assets/icons/SearchIcon_24.svg'
import SortButtonBox from '@/common/components/button/SortButtonBox.vue'
import RecruitCard from '@/common/components/card/RecruitCard.vue'
import type { Recruit } from '@/common/types/recruit'
import { useRouter } from 'vue-router'

const router = useRouter()


const handleViewDetail = (recruitId: string) => {
  router.push(`/recruit/${recruitId}`)
}

const sortType = ref<'left' | 'right'>('left')

const handleSortChange = (status: string) => {
  sortType.value = status as 'left' | 'right'
  // console.log('sortType', sortType.value)
}

const recruits: Recruit[] = [
  {
    id: '1',
    title: '부천 송내역 메리츠화재 빌딩 시설기사',
    companyName: '백상 코퍼레이션',
    salary: '월급 267만원',
    employmentType: '계약직',
    career: '1년',
    location: '경기도 부천시 원미구 송내대로 메리츠화재 빌딩',
    createdAt: '2025-04-15',
    deadline: '2025-04-29',
    dDay: 14,
  },
  {
    id: '2',
    title: '부천 송내역 메리츠화재 빌딩 시설기사',
    companyName: '백상 코퍼레이션',
    salary: '월급 267만원',
    employmentType: '계약직',
    career: '1년',
    location: '경기도 부천시 원미구 송내대로 메리츠화재 빌딩',
    createdAt: '2025-04-15',
    deadline: '2025-04-29',
    dDay: 14,
  },
  {
    id: '3',
    title: '부천 송내역 메리츠화재 빌딩 시설기사',
    companyName: '백상 코퍼레이션',
    salary: '월급 267만원',
    employmentType: '계약직',
    career: '1년',
    location: '경기도 부천시 원미구 송내대로 메리츠화재 빌딩',
    createdAt: '2025-04-15',
    deadline: '2025-04-29',
    dDay: 14,
  },
  {
    id: '4',
    title: '부천 송내역 메리츠화재 빌딩 시설기사',
    companyName: '백상 코퍼레이션',
    salary: '월급 267만원',
    employmentType: '계약직',
    career: '1년',
    location: '경기도 부천시 원미구 송내대로 메리츠화재 빌딩',
    createdAt: '2025-04-15',
    deadline: '2025-04-29',
    dDay: 14,
  },
  {
    id: '5',
    title: '부천 송내역 메리츠화재 빌딩 시설기사',
    companyName: '백상 코퍼레이션',
    salary: '월급 267만원',
    employmentType: '계약직',
    career: '1년',
    location: '경기도 부천시 원미구 송내대로 메리츠화재 빌딩',
    createdAt: '2025-04-15',
    deadline: '2025-04-29',
    dDay: 14,
  },
]


const handleSearchCompanyName = () => {
  console.log('searchCompanyName', searchCompanyName.value)
}

const selectedJob = ref('')
const selectedJobOptions = [
  { label: '전체', value: 'all' },
  { label: '전기', value: 'electric' },
  { label: '기획', value: 'planning' },
  { label: '개발', value: 'development' },
  { label: '앱 서비스', value: 'app_service' }
]

const selectedCareer = ref('')
const selectedCareerOptions = [
  { label: '전체', value: 'all' },
  { label: '경력무관', value: 'career_unrelated' },
  { label: '신입', value: 'new_graduate' },
  { label: '인턴', value: 'intern' },
  { label: '경력', value: 'career' },
]

const selectedLocation = ref('')
const selectedLocationOptions = [
  { label: '전체', value: 'all' },
  { label: '서울', value: 'seoul' },
  { label: '강남', value: 'gangnam' },
  { label: '구로', value: 'guro' },
]

const searchCompanyName = ref('')

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Material+Icons');
</style>
