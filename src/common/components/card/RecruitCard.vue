<template>
  <div class="relative flex gap-3 p-4 bg-gry-100 hover:bg-gry-200 border border-gry-300 rounded-lg cursor-pointer"
    @click="emit('viewDetail', recruit.id)">
    <div class="px-2 bg-white rounded-[10px] w-[52px] h-[30px] flex items-center justify-center">
      <span class="font-h4 text-point-600 text-nowrap">{{ displayDDay }}</span>
    </div>
    <div class="space-y-4 w-full flex flex-col">
      <h3 class="font-h3 text-black block">{{ recruit.title }}</h3>

      <div class="space-y-1 font-caption text-gry-900">
        <div class="grid grid-cols-2">
          <p>회사이름 : {{ recruit.companyName }}</p>
          <p>연봉 : {{ recruit.salary }}</p>
        </div>
        <div class="grid grid-cols-2">
          <p>고용형태 : {{ recruit.employmentType }}</p>
          <p>경력 : {{ recruit.career }}</p>
        </div>
        <p>근무지 : {{ recruit.location }}</p>
      </div>

      <!-- 등록일/마감일 -->
      <div class="grid grid-cols-2 font-h4">
        <div class="flex items-center space-x-2">
          <span class="text-gry-700">등록일</span>
          <span class="text-gry-900">{{ recruit.createdAt }}</span>
        </div>
        <div class="flex items-center space-x-2">
          <span class="text-gry-700">마감일</span>
          <span class="text-gry-900">{{ recruit.deadline }}</span>
        </div>
      </div>

      <!-- 버튼 그룹 -->
      <slot>
        <div class="flex space-x-2">
          <CircleButton @click="emit('addFavorite', recruit.id)" />
          <ToggleButton @click="emit('addChallenge', recruit.id)">
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
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Recruit } from '@/common/types/recruit'
import { computed } from 'vue'
import CircleButton from '@/common/components/button/CircleButton.vue'
import ToggleButton from '@/common/components/button/ToggleButton.vue'
import LinePlusIcon from '@/assets/icons/LinePlusIcon_24.svg'
import Icon from '@/common/components/CustomIcon.vue'

const emit = defineEmits<{
  (e: 'viewDetail', recruitId: string): void,
  (e: 'addChallenge', recruitId: string): void,
  (e: 'addFavorite', recruitId: string): void
}>()

const props = defineProps<{
  recruit: Recruit
}>()

const displayDDay = computed(() => {
  if (typeof props.recruit.dDay === 'number') {
    return `D-${props.recruit.dDay}`
  }
  return props.recruit.dDay
})
</script>

<style></style>