<template>
  <div class="flex-1">
    <div class="flex items-center mb-4 relative">
      <h2 class="font-h2 text-gry-900">스펙 수정</h2>
      <Button size="sm" class="absolute right-0" width="w-[82px]" variant="gray" @click="handleSubmit">
        <template #text>수정 완료</template>
      </Button>
    </div>

    <hr class="border-gry-400 mb-6" />

    <!-- 나의 기술 -->
    <div class="mb-6">
      <h3 class="font-h3 text-gry-900 mb-2">나의 기술</h3>
      <SearchInput placeholder="추가할 기술을 검색해 보세요" v-model="skillInputValue">
        <Icon class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" @click="handleSkillSearch">
          <SearchIcon />
        </Icon>
      </SearchInput>

      <ul v-if="skillSuggestions.length" class="mt-2 border rounded bg-white p-2 shadow">
        <li v-for="s in skillSuggestions" :key="s" @click="handleSkillSearch(s)"
            class="cursor-pointer hover:bg-gray-100 px-2 py-1">
          {{ s }}
        </li>
      </ul>

      <div class="flex flex-wrap gap-3 mt-4">
        <TechBadge v-for="skill in skills" :key="skill" @click="removeSkill(skill)" is-close>{{ skill }}</TechBadge>
      </div>
    </div>

    <!-- 기타 스펙 -->
    <div class="mb-6">
      <h3 class="font-h3 text-gry-900 mb-2">기타 스펙</h3>
      <SearchInput placeholder="Toeic : 930 형식으로 입력해 주세요" v-model="specInputValue">
        <InputInnerButton width="w-[97px]" class="absolute right-3 top-1/2 -translate-y-1/2" variant="point"
          @click="handleSpecSearch">
          추가
        </InputInnerButton>
      </SearchInput>

      <p class="font-h6 text-gry-600 mb-2">자격증 명의 정확한 명칭으로 입력 부탁드립니다. ex) Toeic : 930</p>

      <div class="flex flex-wrap gap-3 mt-2">
        <TechBadge v-for="spec in specs" :key="spec" @click="removeSpec(spec)" is-close>{{ spec }}</TechBadge>
      </div>
    </div>

    <!-- 경력사항 -->
    <div>
      <h3 class="font-h3 text-gry-900 mb-2">경력사항</h3>
      <SearchInput placeholder="경력사항을 입력해 보세요 ex) 3년" v-model="careerInputValue">
      </SearchInput>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import skillAPI from '@/api/skillAPI'
import TechBadge from '@/common/components/badge/TechBadge.vue'
import Button from '@/common/components/button/MainButton.vue'
import SearchInput from '@/common/components/input/SearchInput.vue'
import InputInnerButton from '@/common/components/button/InputInnerButton.vue'
import Icon from '@/common/components/CustomIcon.vue'
import SearchIcon from '@/assets/icons/SearchIcon_24.svg'

const router = useRouter()

const allCertificates = ref<string[]>([]) // 전체 자격증
const skills = ref<string[]>([])          // 선택된 자격증
const skillSuggestions = ref<string[]>([])
const skillInputValue = ref('')

const specs = ref<string[]>([])
const specInputValue = ref('')
const careerInputValue = ref('')

// 마운트 시 전체 자격증, 기존 데이터 불러오기
onMounted(async () => {
  try {
    const { data } = await skillAPI.get()

    const info = data.data

    // 전체 자격증 → 자동완성 기준용
    allCertificates.value = [...new Set([
      ...(info.certificates || []),  // 사용자가 입력한 것 포함
      '정보보안', '전자회로', '전기기사', '전산응용설계사', '컴퓨터활용능력' // 예시 추가
    ])]

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
      console.warn( 'specs 데이터가 배열이 아님:', rawSpecs)
      specs.value = []
    }

    //  사용자 경력
    careerInputValue.value = info.career || ''
  } catch (error) {
    console.error('스펙 불러오기 실패:', error)
  }
})


// 자동완성 필터링
watch(skillInputValue, (val) => {
  if (!val) return (skillSuggestions.value = [])
  skillSuggestions.value = allCertificates.value
    .filter(c => c.includes(val) && !skills.value.includes(c))
    .slice(0, 5)
})

// 기술 추가
const handleSkillSearch = (selected: string) => {
  if (!skills.value.includes(selected)) {
    skills.value.push(selected)
  }
  skillInputValue.value = ''
  skillSuggestions.value = []
}

const handleSpecSearch = () => {
  const value = specInputValue.value.trim()

  // 값이 있을 때만 처리하고 없으면 null로 처리
  if (value) {
    if (!specs.value.includes(value)) {
      specs.value.push(value)
    }
    specInputValue.value = ''
  } else {
    specInputValue.value = null  // 값이 없을 경우 null로 처리
  }
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
