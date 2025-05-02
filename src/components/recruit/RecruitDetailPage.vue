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
          {{ recruit.title }}
        </h2>
        <p class="font-h4 text-gry-700 mb-4">
          {{ recruit.description }}
        </p>
      </div>

      <!-- 북마크/챌린지 버튼 -->
      <div class="flex justify-end space-x-2 mb-8">
        <CircleButton @click="addFavorite" />
        <ToggleButton @click="addChallenge">
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
                  <span class="pl-5 font-p1 text-gry-900">{{ recruit.jobInfo.jobType }}</span>
                </div>
              </div>
              <div class="border-b border-gry-400 py-2 px-3">
                <div class="flex h-[30px] items-center">
                  <span class="w-[90px] font-h4 text-gry-800">모집인원</span>
                  <span class="pl-5 font-p1 text-gry-900">{{ recruit.jobInfo.recruitCount }}</span>
                </div>
              </div>
              <div class="border-b border-gry-400 py-2 px-3">
                <div class="flex h-[30px] items-center">
                  <span class="w-[90px] font-h4 text-gry-800">학력</span>
                  <span class="pl-5 font-p1 text-gry-900">{{ recruit.jobInfo.education }}</span>
                </div>
              </div>
              <div class="border-b border-gry-400 py-2 px-3">
                <div class="flex h-[30px] items-center">
                  <span class="w-[90px] font-h4 text-gry-800">전공</span>
                  <span class="pl-5 font-p1 text-gry-900">{{ recruit.jobInfo.major }}</span>
                </div>
              </div>
            </div>

            <!-- 직무내용 -->
            <div class="border-b border-gry-400 py-2 px-3">
              <div class="flex items-center">
                <span class="w-[90px] font-h4 text-gry-800 self-start">직무내용</span>
                <div class="pl-5 flex-1 font-p1 text-gry-900" v-html="formattedJobDescription">
                </div>
              </div>
            </div>

            <!-- 근무 조건 -->
            <div class="grid grid-cols-3 border-b border-gry-400 py-2 px-3">
              <div class="flex h-[30px] items-center">
                <span class="w-[90px] font-h4 text-gry-800">근무형태</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruit.jobInfo.workCondition.workType }}</span>
              </div>
              <div class="flex items-center h-full">
                <span class="w-[90px] font-h4 text-gry-800">근무일수</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruit.jobInfo.workCondition.workDays }}</span>
              </div>
              <div class="flex items-center h-full">
                <span class="w-[90px] font-h4 text-gry-800">총 근무 시간</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruit.jobInfo.workCondition.totalWorkHours }}</span>
              </div>
            </div>

            <div class="border-b border-gry-400 py-2 px-3">
              <div class="flex h-[30px] items-center">
                <span class="w-[90px] font-h4 text-gry-800">근무시간</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruit.jobInfo.workCondition.workHours }}</span>
              </div>
            </div>

            <div class="border-b border-gry-400 py-2 px-3">
              <div class="flex h-[30px] items-center">
                <span class="w-[90px] font-h4 text-gry-800">급여</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruit.jobInfo.workCondition.salary }}</span>
              </div>
            </div>

            <div class="border-b border-gry-400 py-2 px-3">
              <div class="flex h-[30px] items-center">
                <span class="w-[90px] font-h4 text-gry-800">경력조건</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruit.jobInfo.workCondition.career }}</span>
              </div>
            </div>

            <div class="border-b border-gry-400 py-2 px-3">
              <div class="flex h-[30px] items-center">
                <span class="w-[90px] font-h4 text-gry-800">필요자격</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruit.jobInfo.workCondition.requiredCertificates
                }}</span>
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
                <span class="pl-5 font-p1 text-gry-900">{{ recruit.recruitmentProcess.processMethod }}</span>
              </div>
              <div class="flex h-[30px] items-center">
                <span class="w-[90px] font-h4 text-gry-800">접수방법</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruit.recruitmentProcess.applicationMethod }}</span>
              </div>
            </div>

            <div class="grid grid-cols-2 border-b border-gry-400 py-2">
              <div class="flex h-[30px] items-center text-nowrap">
                <span class="w-[120px] font-h4 text-gry-800">제출 서류및 준비물</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruit.recruitmentProcess.requiredDocuments }}</span>
              </div>
              <div class="flex h-[30px] items-center">
                <span class="w-[90px] font-h4 text-gry-800">접수마감</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruit.recruitmentProcess.deadline }}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- 담당자 -->
        <section>
          <h2 class="font-h2 text-gry-900 mb-4">담당자</h2>
          <div class="bg-white border-t border-gry-400">
            <div class="grid grid-cols-3 gap-x-2 py-2 border-b border-gry-400">
              <div class="flex h-[30px] items-center">
                <span class="w-[120px] font-h4 text-gry-800">성명</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruit.contactPerson.name }}</span>
              </div>

              <div class="flex h-[30px] items-center">
                <span class="w-[120px] font-h4 text-gry-800">부서</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruit.contactPerson.department }}</span>
              </div>

              <div class="flex h-[30px] items-center">
                <span class="w-[120px] font-h4 text-gry-800">휴대전화</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruit.contactPerson.mobile }}</span>
              </div>
            </div>

            <div class="grid grid-cols-2 py-2 border-b border-gry-400">
              <div class="flex h-[30px] items-center">
                <span class="w-[120px] font-h4 text-gry-800">전화번호</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruit.contactPerson.phone }}</span>
              </div>

              <div class="flex h-[30px] items-center">
                <span class="w-[120px] font-h4 text-gry-800">팩스</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruit.contactPerson.fax }}</span>
              </div>
            </div>

            <div class="grid grid-cols-2 py-2 border-b border-gry-400">
              <div class="flex h-[30px] items-center">
                <span class="w-[120px] font-h4 text-gry-800">이메일</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruit.contactPerson.email }}</span>
              </div>

              <div class="flex h-[30px] items-center">
                <span class="w-[120px] font-h4 text-gry-800">접수 마감</span>
                <span class="pl-5 font-p1 text-gry-900">{{ recruit.contactPerson.deadline }}</span>
              </div>
            </div>
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
              <span class="pl-4 font-p1 text-gry-900">{{ recruit.companyInfo.name }}</span>
            </div>
            <div class="flex">
              <span class="min-w-[92px] font-h4 text-gry-800">대표자</span>
              <span class="pl-4 font-p1 text-gry-900">{{ recruit.companyInfo.representative }}</span>
            </div>
            <div class="flex">
              <span class="min-w-[92px] font-h4 text-gry-800">근로자수</span>
              <span class="pl-4 font-p1 text-gry-900">{{ recruit.companyInfo.employeeCount }}</span>
            </div>
            <div class="flex">
              <span class="min-w-[92px] font-h4 text-gry-800">가입보험</span>
              <span class="pl-4 font-p1 text-gry-900">{{ recruit.companyInfo.insurance }}</span>
            </div>
            <div class="flex">
              <span class="min-w-[92px] font-h4 text-gry-800">사업요약내용</span>
              <span class="pl-4 font-p1 text-gry-900">{{ recruit.companyInfo.businessSummary }}</span>
            </div>
            <div class="flex">
              <span class="block min-w-[92px] font-h4 text-gry-800">주소</span>
              <span class="block max-w-[241px] pl-4 font-p1 text-gry-900">{{ recruit.companyInfo.address }}</span>
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
import { computed } from 'vue'
import EvaArrowIcon from '@/assets/icons/EvaArrow_24.svg'
import { useRouter } from 'vue-router'

const router = useRouter()

// HTML 특수 문자와 개행 문자를 처리하는 함수
const formatText = (text: string): string => {
  // 먼저 HTML 엔티티를 디코딩
  const decodedText = text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")

  // 그 다음 다시 인코딩
  return decodedText
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\n/g, '<br />')
}

const recruit: RecruitDetail = {
  id: '1',
  title: '김포 더힐 실버케어 요양원',
  description: '김포 더힐 실버케어 요양원에서 함께 근무하실 남/여 요양보호사(퐁당당, 주간) 모집합니다.',
  jobInfo: {
    jobType: '간병인(재가제외)',
    recruitCount: '2명',
    education: '관계없음',
    major: '-',
    jobDescription: `김포시 마송에 위치한 프리미엄급 요양원입니다. 함께 근무하실 요양보호사 선생님들을 모십니다.

&lt;퐁당당 근무 : 식대포함 급여 2,420,000원&gt;
09:00 ~ 익일 09:00 (실근무시간 16시간 / 휴게시간 8시간)

&lt;주간 근무 : 식대포함 급여 2,300,000&gt;
09:00 ~ 18:00(실근무시간 8시간 / 휴게시간 1시간)

많은 지원 부탁드립니다.`,
    workCondition: {
      workType: '주간',
      workDays: '주5일',
      totalWorkHours: '-',
      workHours: '퐁당당 근무 09:00 ~ 익일 09:00 (실근무시간 16시간 / 휴게시간 8시간) 주',
      salary: '(월급) 230만원 상여금 : 0% - 연봉 또는 월급에 미포함',
      career: '무관',
      requiredCertificates: '자격증.외국어능력등등'
    }
  },
  recruitmentProcess: {
    processMethod: '서류,면접',
    applicationMethod: '전자우편',
    requiredDocuments: '기타..',
    deadline: '마감일'
  },
  contactPerson: {
    name: '최원민',
    department: '-',
    mobile: '010-1234-5678',
    phone: '031-1234-5678',
    fax: '031-1234-5678',
    email: 'aaaa123@naver.com',
    deadline: '마감일'
  },
  companyInfo: {
    name: '김포더힐실버케어요양원',
    representative: '강주대',
    employeeCount: '40명',
    insurance: '고용보험,산재보험,건강보험,국민연금',
    businessSummary: '요약내용',
    address: '경기도 김포시 통진읍 마송로 김포더힐실버케어요양원'
  }
}

// computed 속성으로 포맷된 jobDescription 생성
const formattedJobDescription = computed(() => formatText(recruit.jobInfo.jobDescription))

const addFavorite = () => {
  console.log('addFavorite')
}

const addChallenge = () => {
  console.log('addChallenge')
}

const goBack = () => {
  router.back()
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Material+Icons');
</style>
