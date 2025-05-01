<!-- 카드 컴포넌트 화 및 수정 필요 -->

<template>
  <div class="flex-1">
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-2xl font-semibold text-[#1b1c1f]">챌린지 7</h2>
    </div>

    <!-- 챌린지 카드 그리드 -->
    <div class="grid grid-cols-2 gap-4">
      <div v-for="challenge in challenges" :key="challenge.id"
        class="bg-[#fafafc] border border-[#efeff3] rounded-xl p-4">
        <!-- 챌린지 정보 -->
        <div class="space-y-4">
          <div class="space-y-1">
            <h3 class="text-[18px] font-semibold text-[#404249]">{{ challenge.title }}</h3>
            <p class="text-[14px] font-semibold text-[#989aa2]">{{ challenge.company }}</p>
          </div>

          <!-- 진행도 바 -->
          <div class="space-y-2">
            <div class="h-4 bg-[#efeff3] rounded-lg overflow-hidden">
              <div class="h-full bg-gradient-to-r from-[#897cff] to-[#6255d6] rounded-lg"
                :style="{ width: challenge.progress + '%' }"></div>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-xs font-semibold text-[#404249]">충족도</span>
              <span class="text-base font-semibold text-[#5b4af4]">{{ challenge.progress }}%</span>
            </div>
          </div>

          <!-- 마감일 -->
          <div class="flex items-center space-x-2">
            <span class="text-[14px] font-semibold text-[#404249]">마감일</span>
            <span class="text-[14px] font-semibold text-[#404249]">{{ challenge.deadline }}</span>
          </div>

          <!-- 챌린지 삭제 버튼 -->
          <button class="flex items-center space-x-2 px-4 py-2 bg-[#e8e5ff] text-[#5b4af4] rounded-2xl">
            <i class="material-icons text-base">delete</i>
            <span class="text-sm">챌린지 삭제</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const challenges = ref([
  {
    id: 1,
    title: 'Recruiting Manager',
    company: '(주)노타',
    progress: 45,
    deadline: 'D-day'
  },
  // 더미 데이터를 반복해서 7개의 항목 생성
  {
    id: 2,
    title: 'Recruiting Manager',
    company: '(주)노타',
    progress: 45,
    deadline: 'D-day'
  },
  {
    id: 3,
    title: 'Recruiting Manager',
    company: '(주)노타',
    progress: 45,
    deadline: 'D-day'
  },
  {
    id: 4,
    title: 'Recruiting Manager',
    company: '(주)노타',
    progress: 45,
    deadline: 'D-day'
  },
  {
    id: 5,
    title: 'Recruiting Manager',
    company: '(주)노타',
    progress: 45,
    deadline: 'D-day'
  },
  {
    id: 6,
    title: 'Recruiting Manager',
    company: '(주)노타',
    progress: 45,
    deadline: 'D-day'
  },
  {
    id: 7,
    title: 'Recruiting Manager',
    company: '(주)노타',
    progress: 45,
    deadline: 'D-day'
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
