<template>
  <nav class="sticky top-0 left-0 right-0 z-50 bg-white">
    <div class="container mx-auto px-8 h-20 flex items-center justify-between shadow-xs">
      <RouterLink to="/" class="h-10 w-32">
        <JobFitLogo />
      </RouterLink>

      <div class="flex items-center justify-between font-h3 gap-20 text-gry-900">
        <RouterLink v-for="menu in navMenus" :to="menu.path" :key="menu.name" class="cursor-pointer">{{ menu.name }}
        </RouterLink>
      </div>
      <div class="flex items-center justify-between gap-4">
        <RouterLink to="/auth/login" class="block w-20 font-h5 text-center text-gry-900 h-full cursor-pointer">로그인
        </RouterLink>
        <Button variant="point" size="sm" @click="handleSignup">
          <template #text>회원가입</template>
        </Button>
      </div>
    </div>
  </nav>
</template>

<script setup lang='ts'>
import { RouterLink } from 'vue-router'
import Button from '@/common/components/button/MainButton.vue'
import { useRouter } from 'vue-router'
import JobFitLogo from '@/assets/jobfit_logo.svg'

const router = useRouter()
const handleSignup = () => {
  router.push('/auth/signup')
}

const navMenus = [
  { name: '채용공고', path: '/recruit' },
  { name: '유망직업군', path: '/occupation' },
  { name: '챌린지', path: '/challenge' },
  // { name: '테스트(버튼)', path: '/test/button' },
  // { name: '테스트(글자)', path: '/test/typo' },
]
</script>

<style></style>
