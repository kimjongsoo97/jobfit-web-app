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

    <!-- 나의 기술 (자격증 자동완성) -->
    <div class="mb-6">
      <h3 class="font-h3 text-gry-900 mb-2">나의 기술</h3>
      <!-- 검색 입력창 (돋보기 아이콘은 클릭 안 함) -->
      <SearchInput placeholder="추가할 기술을 검색해 보세요" v-model="skillInputValue" class="w-fit">
        <Icon class="absolute right-4 top-1/2 -translate-y-1/2 cursor-default">
          <SearchIcon />
        </Icon>
      </SearchInput>

      <!-- 자동완성 리스트 -->
      <ul v-if="skillSuggestions.length" class="mt-2 border rounded bg-white p-2 shadow max-h-60 overflow-auto">
        <li v-for="s in skillSuggestions" :key="s.name" @click="handleSkillSearch(s.name)"
          class="cursor-pointer hover:bg-gray-100 px-2 py-1">
          {{ s.name }} <!-- name 키는 보이지 않고 값만 보여짐 -->
        </li>
      </ul>

      <div class="flex flex-wrap gap-3 mt-4">
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

        </SearchInput>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { debounce } from 'lodash'
import skillAPI from '@/api/skillAPI'
import TechBadge from '@/common/components/badge/TechBadge.vue'
import Button from '@/common/components/button/MainButton.vue'
import SearchInput from '@/common/components/input/SearchInput.vue'
import InputInnerButton from '@/common/components/button/InputInnerButton.vue'
import Icon from '@/common/components/CustomIcon.vue'
import SearchIcon from '@/assets/icons/SearchIcon_24.svg'

const router = useRouter()

interface SkillSuggestion {
  name: string
  value: string
}

const skills = ref<string[]>([])
const skillSuggestions = ref<SkillSuggestion[]>([])
const skillInputValue = ref('')

const specs = ref<string[]>([])
const specInputValue = ref('')
const careerInputValue = ref('')

// 마운트 시 전체 자격증, 기존 데이터 불러오기
onMounted(async () => {
  try {
    const { data } = await skillAPI.get()

    const info = data.data
    //  실제 사용자가 선택한 기술
    skills.value = info.certificates || []

    //  실제 사용자가 등록한 스펙
    const rawSpecs = info.specs
    if (Array.isArray(rawSpecs)) {
      specs.value = rawSpecs.map((item: any) => {
        const [key, value] = Object.entries(item)[0]
        return `${key} : ${value}`
      })
    } else {
      console.warn('specs 데이터가 배열이 아님:', rawSpecs)
      specs.value = []
    }

    //  사용자 경력
    careerInputValue.value = info.career || ''
  } catch (error) {
    console.error('스펙 불러오기 실패:', error)
  }
})

const fetchSkillSuggestions = debounce(async (keyword: string) => {
  if (!keyword.trim()) {
    skillSuggestions.value = []
    return
  }

  try {
    console.log(keyword)
    const { data } = await skillAPI.getSearch(keyword)
    console.log(data) // {data: [{name: '자격증', value: '자격증'}, {name: '자격증', value: '자격증'}]}
    skillSuggestions.value = data.data || []
  } catch (error) {
    console.error('자격증 검색 실패:', error)
  }
}, 300)



// 자동완성 필터링

watch(skillInputValue, (val) => {
  fetchSkillSuggestions(val)
})

// 기술 추가
const handleSkillSearch = (selected: string) => {
  if (!skills.value.includes(selected)) {
    skills.value.push(selected)
  }
  skillInputValue.value = ''
  skillSuggestions.value = []
}

// 기타 스펙 추가
const handleSpecSearch = () => {
  const value = specInputValue.value.trim()
  if (value && !specs.value.includes(value)) specs.value.push(value)
  specInputValue.value = ''
}

// 경력 사항

const removeSkill = (skill: string) => {
  skills.value = skills.value.filter(s => s !== skill)
}

const removeSpec = (spec: string) => {
  specs.value = specs.value.filter(s => s !== spec)
}

// 저장
const handleSubmit = async () => {
  const formattedSpecs = specs.value.map(spec => {
    const [key, value] = spec.split(':').map(s => s.trim())
    return { [key]: value }
  })

  const payload = {
    certificates: skills.value,
    specs: formattedSpecs,
    career: careerInputValue.value,
  }

  try {
    await skillAPI.patch(payload)
    router.push('/mypage/spec')
  } catch (error) {
    console.error('스펙 저장 실패:', error)
  }
}
</script>
