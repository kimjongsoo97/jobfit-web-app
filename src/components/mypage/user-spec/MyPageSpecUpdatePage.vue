<template>
  <!-- 메인 콘텐츠 영역 -->
  <div class="flex-1">
    <div class="flex items-center mb-4 relative">
      <h2 class="font-h2 text-gry-900">스펙 수정</h2>
      <Button size="sm" class="absolute right-0" width="w-[82px]" variant="gray" @click="handleSubmit">
        <template #text>수정 완료</template>
      </Button>
    </div>

    <hr class="border-gry-400 mb-6" />

    <!-- 나의 기술 섹션 -->
    <div class="mb-6">
      <h3 class="font-h3 text-gry-900 mb-2">나의 기술</h3>
      <!-- 검색 입력창 -->
      <div class="mb-4">
        <SearchInput placeholder="추가할 기술을 검색해 보세요" v-model="skillInputValue">
          <Icon class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" @click="handleSkillSearch">
            <SearchIcon />
          </Icon>
        </SearchInput>
      </div>
      <!-- 기술 태그 목록 -->
      <div class="flex flex-wrap gap-3">
        <TechBadge v-for="skill in skills" :key="skill" @click="removeSkill(skill)" is-close>{{ skill }}</TechBadge>
      </div>
    </div>

    <!-- 기타 스펙 섹션 -->
    <div class="mb-6">
      <h3 class="font-h3 text-gry-900 mb-2">기타 스펙</h3>
      <!-- 입력창 -->
      <div class="flex items-center mb-4">
        <SearchInput placeholder="추가할 기술을 검색해 보세요" v-model="specInputValue">
          <InputInnerButton width="w-[97px]" class="absolute right-3 top-1/2 -translate-y-1/2" variant="point"
            @click="handleSpecSearch">
            추가
          </InputInnerButton>
        </SearchInput>
      </div>
      <p class="font-h6 text-gry-600 mb-2">자격증 명의 정확한 명칭으로 입력 부탁드립니다. ex)Toeic, opic</p>
      <!-- 스펙 태그 목록 -->
      <div class="flex flex-wrap gap-3">
        <TechBadge v-for="spec in specs" :key="spec" @click="removeSpec(spec)" is-close>{{ spec }}</TechBadge>
      </div>
    </div>

    <!-- 경력사항 섹션 -->
    <div>
      <h3 class="font-h3 text-gry-900 mb-2">경력사항</h3>
      <div class="flex items-center">
        <SearchInput placeholder="경력사항을 입력해 보세요 ex) 3년" v-model="careerInputValue">
          <InputInnerButton width="w-[97px]" class="absolute right-3 top-1/2 -translate-y-1/2" variant="point"
            @click="handleCareerSearch">
            수정
          </InputInnerButton>
        </SearchInput>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TechBadge from '@/common/components/badge/TechBadge.vue'
import Button from '@/common/components/button/MainButton.vue'
import SearchInput from '@/common/components/input/SearchInput.vue'
import Icon from '@/common/components/CustomIcon.vue'
import SearchIcon from '@/assets/icons/SearchIcon_24.svg'
import InputInnerButton from '@/common/components/button/InputInnerButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const skills = ref(['JavaScript', 'Git', 'MySQL', 'React', 'Oracle', 'Java'])
const specs = ref(['Toeic : 930', 'Jlpt : 2급', 'opic : IH'])

const skillInputValue = ref('')
const specInputValue = ref('')
const careerInputValue = ref('3년')

const handleSkillSearch = () => {
  // 기술 검색 로직
}

const handleSpecSearch = () => {
  // 스펙 검색 로직
}

const handleCareerSearch = () => {
  // 경력사항 수정 로직
}

const removeSkill = (skill: string) => {
  // 나의 기술 삭제 로직
  skills.value = skills.value.filter((item) => item !== skill)
}

const removeSpec = (spec: string) => {
  // 기타 스펙 삭제 로직
  specs.value = specs.value.filter((item) => item !== spec)
}

const handleSubmit = () => {
  // 수정 완료 로직
  router.push('/mypage/spec')
}

</script>

<style></style>
