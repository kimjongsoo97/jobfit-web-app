<!-- 카드 컴포넌트 화 및 수정 필요 -->
<template>
  <div class="flex-1">
    <div class="flex justify-between items-center mb-4">
      <h2 class="font-h2 text-gry-900">즐겨찾기 {{ recruits.length > 0 ? recruits.length : '' }}</h2>
    </div>
    <div v-if="recruits.length > 0">
      <!-- 검색 및 필터 영역 -->
      <div class="flex justify-between mb-8">
        <!-- 검색창 -->
        <SearchInput placeholder="회사 이름을 검색해보세요" inputWidth="min-w-[480px]">
          <Icon class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" @click="handleSearchCompanyName">
            <SearchIcon />
          </Icon>
        </SearchInput>

        <!-- 정렬 탭 -->
        <SortButtonBox />
      </div>

      <!-- 채용공고 카드 그리드 -->
      <div class="grid grid-cols-2 gap-4">

        <RecruitCard v-for="recruit in recruits" :key="recruit.id" :recruit="recruit">

          <!-- 즐겨찾기 버튼 -->
          <ToggleButton :isActive="true" @click="handleToggleFavorite(recruit.id)">
            <template #icon>
              <Icon fill="point">
                <StarIcon />
              </Icon>
            </template>
            <template #text>
              <span>즐겨찾기 삭제</span>
            </template>
          </ToggleButton>
        </RecruitCard>
      </div>
    </div>
    <!-- 아무것도 없는경우 -->
    <div v-if="recruits.length === 0" class="bg-gry-100 border border-gry-300 rounded-xl py-[100px]">
      <div class="flex flex-col items-center justify-center gap-3">
        <Icon width="36" height="36">
          <ListAltIcon />
        </Icon>
        <p class="text-center font-h4 text-gry-700 whitespace-pre-line" style="line-height: 30px;">
          아직 즐겨찾기된 채용공고가없어요<br />
          채용공고를 보고 즐겨찾기 설정해보세요!
        </p>
        <Button size="sm" @click="handleGoToRecruitList">
          <template #text>
            채용공고 보러가기
          </template>
        </Button>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import SearchInput from '@/common/components/input/SearchInput.vue'
import SortButtonBox from '@/common/components/button/SortButtonBox.vue'
import SearchIcon from '@/assets/icons/SearchIcon_24.svg'
import Icon from '@/common/components/CustomIcon.vue'
import RecruitCard from '@/common/components/card/RecruitCard.vue'
import ToggleButton from '@/common/components/button/ToggleButton.vue'
import StarIcon from '@/assets/icons/FillStarIcon_24.svg'
import ListAltIcon from '@/assets/icons/ListAltIcon_36.svg'
import Button from '@/common/components/button/MainButton.vue'
import { useRouter } from 'vue-router'
import type { Recruit } from '@/common/types/recruit'

const sortBy = ref('latest') // 'latest' | 'deadline'
const router = useRouter()

const handleSearchCompanyName = () => {
  console.log('searchCompanyName')
}

const handleToggleFavorite = (recruitId: string) => {
  console.log('toggleFavorite', recruitId)
}

const handleGoToRecruitList = () => {
  router.push('/recruit')
}

const recruits = ref<Recruit[]>([])
// const recruits = ref<Recruit[]>([
//   {
//     id: "1",
//     dDay: 14,
//     title: '부천 송내역 메리츠화재 빌딩 시설기사',
//     companyName: '백상 코퍼레이션',
//     salary: '월급 267만원',
//     employmentType: '계약직',
//     career: '1년',
//     location: '경기도 부천시 원미구 송내대로 메리츠화재 빌딩',
//     createdAt: '2025-04-15',
//     deadline: '2025-04-29'
//   },
//   // 더미 데이터를 반복해서 5개의 항목 생성
//   {
//     id: "2",
//     dDay: 14,
//     title: '부천 송내역 메리츠화재 빌딩 시설기사',
//     companyName: '백상 코퍼레이션',
//     salary: '월급 267만원',
//     employmentType: '계약직',
//     career: '1년',
//     location: '경기도 부천시 원미구 송내대로 메리츠화재 빌딩',
//     createdAt: '2025-04-15',
//     deadline: '2025-04-29'
//   },
//   {
//     id: "3",
//     dDay: 14,
//     title: '부천 송내역 메리츠화재 빌딩 시설기사',
//     companyName: '백상 코퍼레이션',
//     salary: '월급 267만원',
//     employmentType: '계약직',
//     career: '1년',
//     location: '경기도 부천시 원미구 송내대로 메리츠화재 빌딩',
//     createdAt: '2025-04-15',
//     deadline: '2025-04-29'
//   },
//   {
//     id: "4",
//     dDay: 14,
//     title: '부천 송내역 메리츠화재 빌딩 시설기사',
//     companyName: '백상 코퍼레이션',
//     salary: '월급 267만원',
//     employmentType: '계약직',
//     career: '1년',
//     location: '경기도 부천시 원미구 송내대로 메리츠화재 빌딩',
//     createdAt: '2025-04-15',
//     deadline: '2025-04-29'
//   },
//   {
//     id: "5",
//     dDay: 14,
//     title: '부천 송내역 메리츠화재 빌딩 시설기사',
//     companyName: '백상 코퍼레이션',
//     salary: '월급 267만원',
//     employmentType: '계약직',
//     career: '1년',
//     location: '경기도 부천시 원미구 송내대로 메리츠화재 빌딩',
//     createdAt: '2025-04-15',
//     deadline: '2025-04-29'
//   }
// ])
</script>

<style></style>