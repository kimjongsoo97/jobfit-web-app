<template>
  <!-- 메인 컨텐츠 -->
  <main class="mx-auto px-4 pt-14">
    <!-- 채용공고 제목 -->
    <div class="flex justify-between items-center">
      <div>
        <h2 class="font-h2 text-gry-900 mb-2 flex items-center">
          <Icon fill="point" class="inline-block mr-2 cursor-pointer" @click="goBack">
            <EvaArrowIcon />
          </Icon>
          {{ recruitDetail.title }}
        </h2>
        <p class="font-h4 text-gry-700 mb-4">
          {{ recruitDetail.summary }}
        </p>
      </div>

      <!-- 북마크/챌린지 버튼 -->
      <div class="flex justify-end space-x-2 mb-8">
        <CircleButton @click="addFavorite" />
        <ToggleButton @click="addChallenge(recruitDetail.recruitId)">
          <template #icon>
            <Icon fill="point">
              <LinePlusIcon />
            </Icon>
          </template>
          <template #text>
            <span class="font-p1 text-point-600">챌린지 추가</span>
          </template>
        </ToggleButton>
      </div>
    </div>

    <div class="flex">
      <!-- 왼쪽 컨텐츠 -->
      <section class="min-w-[70%] pr-5">
        <!-- 구인 정보 -->
        <section class="mb-8">
          <h2 class="font-h2 text-gry-900 mb-4">구인 정보</h2>
          <div class="bg-white border-t border-gry-400">
            <div class="grid grid-cols-2 ">
              <div class="border-b border-gry-400 py-2 px-3">
                <div class="flex h-[30px] items-center">
                  <span class="w-[90px] font-h4 text-gry-800">모집직종</span>
                  <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.jobType }}</span>
                </div>
              </div>
              <div class="border-b border-gry-400 py-2 px-3">
                <div class="flex h-[30px] items-center">
                  <span class="w-[90px] font-h4 text-gry-800">모집인원</span>
                  <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.recruitNumber }}</span>
                </div>
              </div>
              <div class="border-b border-gry-400 py-2 px-3">
                <div class="flex h-[30px] items-center">
                  <span class="w-[90px] font-h4 text-gry-800">학력</span>
                  <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.educationType }}</span>
                </div>
              </div>
              <div class="border-b border-gry-400 py-2 px-3">
                <div class="flex h-[30px] items-center">
                  <span class="w-[90px] font-h4 text-gry-800">전공</span>
                  <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.educationType }}</span>
                </div>
              </div>
            </div>

            <!-- 직무내용 -->
            <div class="border-b border-gry-400 py-2 px-3">
              <div class="flex items-center">
                <span class="w-[90px] font-h4 text-gry-800 self-start">직무내용</span>
                <div class="pl-5 flex-1 font-p1 text-gry-900" v-html="formattedContent">
                </div>
              </div>
            </div>

            <!-- 근무 조건 -->
            <div class="grid grid-cols-3 border-b border-gry-400 py-2 px-3">
              <div class="flex h-[30px] items-center">
                <span class="w-[90px] font-h4 text-gry-800">근무형태</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.workType }}</span>
              </div>
              <div class="flex items-center h-full">
                <span class="w-[90px] font-h4 text-gry-800">근무일수</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.workSchedule }}</span>
              </div>
              <div class="flex items-center h-full">
                <span class="w-[90px] font-h4 text-gry-800">총 근무 시간</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.totalTime }}</span>
              </div>
            </div>

            <div class="border-b border-gry-400 py-2 px-3">
              <div class="flex h-[30px] items-center">
                <span class="w-[90px] font-h4 text-gry-800">근무시간</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.workTime }}</span>
              </div>
            </div>

            <div class="border-b border-gry-400 py-2 px-3">
              <div class="flex h-[30px] items-center">
                <span class="w-[90px] font-h4 text-gry-800">급여</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.wage }}</span>
              </div>
            </div>

            <div class="border-b border-gry-400 py-2 px-3">
              <div class="flex h-[30px] items-center">
                <span class="w-[90px] font-h4 text-gry-800">경력조건</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.careerType }}</span>
              </div>
            </div>

            <div class="border-b border-gry-400 py-2 px-3">
              <div class="flex h-[30px] items-center">
                <span class="w-[90px] font-h4 text-gry-800">필요자격</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.applyDocument }}</span>
              </div>
            </div>
          </div>
        </section>
        <!-- 전형사항 -->
        <section class="mb-8">
          <h2 class="font-h2 text-gry-900 mb-4">전형사항</h2>
          <div class="bg-white border-t border-gry-400">
            <div class="grid grid-cols-2 border-b border-gry-400 py-2">
              <div class="flex h-[30px] items-center">
                <span class="w-[120px] font-h4 text-gry-800">전형방법</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.recruitmentMethod }}</span>
              </div>
              <div class="flex h-[30px] items-center">
                <span class="w-[90px] font-h4 text-gry-800">접수방법</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.applyMethod }}</span>
              </div>
            </div>

            <div class="grid grid-cols-2 border-b border-gry-400 py-2">
              <div class="flex h-[30px] items-center text-nowrap">
                <span class="w-[120px] font-h4 text-gry-800">제출 서류및 준비물</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.applyDocument }}</span>
              </div>
              <div class="flex h-[30px] items-center">
                <span class="w-[90px] font-h4 text-gry-800">접수마감</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.endDate }}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- 담당자 -->
        <section>
          <h2 class="font-h2 text-gry-900 mb-4">담당자</h2>
          <div class="bg-white border-t border-gry-400">
            <div class="grid grid-cols-2 gap-x-2 py-2 border-b border-gry-400">
              <div class="flex h-[30px] items-center">
                <span class="w-[120px] font-h4 text-gry-800">성명</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.manager }}</span>
              </div>

              <div class="flex h-[30px] items-center">
                <span class="w-[90px] font-h4 text-gry-800">부서</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.managerOrganization }}</span>
              </div>

              <!-- <div class="flex h-[30px] items-center">
                <span class="w-[120px] font-h4 text-gry-800">휴대전화</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.managerPhonenumber }}</span>
              </div> -->
            </div>

            <div class="grid grid-cols-2 py-2 border-b border-gry-400">
              <div class="flex h-[30px] items-center">
                <span class="w-[120px] font-h4 text-gry-800">전화번호</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.managerPhonenumber }}</span>
              </div>
              <div class="flex h-[30px] items-center">
                <span class="w-[90px] font-h4 text-gry-800">접수 마감</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.endDate }}</span>
              </div>
              <!-- <div class="flex h-[30px] items-center">
                <span class="w-[120px] font-h4 text-gry-800">팩스</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.managerPhonenumber }}</span>
              </div> -->
            </div>

            <!-- <div class="grid grid-cols-2 py-2 border-b border-gry-400">
              <div class="flex h-[30px] items-center">
                <span class="w-[120px] font-h4 text-gry-800">이메일</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.companyAddress }}</span>
              </div>

              <div class="flex h-[30px] items-center">
                <span class="w-[120px] font-h4 text-gry-800">접수 마감</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruitDetail.endDate }}</span>
              </div>
            </div> -->
          </div>
        </section>
      </section>
      <!-- 오른쪽 컨텐츠 -->
      <section class="min-w-[30%]">
        <h2 class="font-h2 text-gry-900 mb-4">기업 정보</h2>
        <div class="bg-gry-100 border border-gry-400 rounded-lg p-4">
          <div class="space-y-4">
            <div class="flex">
              <span class="min-w-[92px] font-h4 text-gry-800">사업장명</span>
              <span class="pl-4 font-p1 text-gry-900">{{ recruitDetail.companyName }}</span>
            </div>
            <!-- <div class="flex">
              <span class="min-w-[92px] font-h4 text-gry-800">대표자</span>
              <span class="pl-4 font-p1 text-gry-900">{{ recruitDetail.companyName }}</span>
            </div>
            <div class="flex">
              <span class="min-w-[92px] font-h4 text-gry-800">근로자수</span>
              <span class="pl-4 font-p1 text-gry-900">{{ recruitDetail.companyName }}</span>
            </div> -->
            <div class="flex">
              <span class="min-w-[92px] font-h4 text-gry-800">가입보험</span>
              <span class="pl-4 font-p1 text-gry-900">{{ recruitDetail.insurance }}</span>
            </div>
            <div class="flex">
              <span class="min-w-[92px] font-h4 text-gry-800">사업요약내용</span>
              <span class="pl-4 font-p1 text-gry-900">{{ recruitDetail.summary }}</span>
            </div>
            <div class="flex">
              <span class="block min-w-[92px] font-h4 text-gry-800">주소</span>
              <span class="block max-w-[241px] pl-4 font-p1 text-gry-900">{{ recruitDetail.companyAddress }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- 플로팅 버튼 -->
    <button
      class="fixed right-40 bottom-10 w-[60px] h-[60px] bg-white border border-[#efeff3] rounded-full flex items-center justify-center">
      <span class="material-icons">add</span>
    </button>
  </main>
</template>

<script setup lang="ts">
import type { RecruitDetail } from '@/common/types/recruit'
import CircleButton from '@/common/components/button/CircleButton.vue'
import ToggleButton from '@/common/components/button/ToggleButton.vue'
import Icon from '@/common/components/CustomIcon.vue'
import LinePlusIcon from '@/assets/icons/LinePlusIcon_24.svg'
import { computed, onMounted, ref } from 'vue'
import EvaArrowIcon from '@/assets/icons/EvaArrow_24.svg'
import { useRouter, useRoute } from 'vue-router'
import challengeAPI from '@/api/challengeAPI'
import recruitAPI from '@/api/recuritAPI'
import type { RecruitDetailModel } from '@/models/recruitModel'
import type { CreateChallengeRequest } from '@/models/challengeModel'
import { formatTextToHtml } from '@/util/format'
const router = useRouter()
const route = useRoute()

onMounted(() => {
  recruitAPI.getRecruitDetail(Number(route.params.id))
    .then((res) => {
      console.log(res)
      recruitDetail.value = res.data
    })
    .catch((err) => {
      console.log(`채용공고 상세 조회 실패 | 메시지 : ${err.message} | 상태코드 : ${err.status} | 에러내역 : ${err.response?.data}`)
    })
})

const recruitDetail = ref<RecruitDetailModel>({
  recruitId: 0,
  category: '',
  companyName: '',
  summary: '',
  recruitNumber: '',
  educationType: '',
  jobType: '',
  workPlace: '',
  content: '',
  careerType: '',
  wage: '',
  workTime: '',
  workType: '',
  workSchedule: '',
  totalTime: '',
  insurance: '',
  recruitmentMethod: '',
  applyMethod: '',
  applyDocument: '',
  manager: '',
  managerPhonenumber: '',
  managerOrganization: '',
  companyAddress: '',
  title: '',
  jobPosting: '',
  registerDate: new Date(),
  endDate: new Date()
})

// computed 속성으로 포맷된 Content 생성
const formattedContent = computed(() => formatTextToHtml(recruitDetail.value.content))

const addFavorite = () => {
  console.log('addFavorite')
}

const addChallenge = (recruitId: number) => {
  const request: CreateChallengeRequest = {
    recruitId: recruitId
  }
  challengeAPI.createChallenge(request)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(`챌린지 생성 실패 | 메시지 : ${err.message} | 상태코드 : ${err.status} | 에러내역 : ${err.response?.data}`)
    })
}

const goBack = () => {
  router.back()
}
</script>

<style></style>
