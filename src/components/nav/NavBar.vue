<template>
  <nav class="sticky top-0 left-0 right-0 z-50 bg-white">
    <div class="container mx-auto px-8 h-20 flex items-center justify-between shadow-xs">
      <RouterLink to="/" class="h-10 w-32 font-h3 bg-gray-300">
        LOGO
        <!-- <img src="@/assets/logo.svg" alt="JobFit" class="h-10 w-32" /> -->
      </RouterLink>

      <div class="flex items-center justify-between font-h3 gap-20">
        <RouterLink to="/recruit" class="cursor-pointer">채용공고</RouterLink>
        <RouterLink to="/occupation" class="cursor-pointer">유망직업군</RouterLink>
        <RouterLink to="/challenge" class="cursor-pointer">챌린지</RouterLink>
      </div>
      <div class="flex items-center justify-between gap-4">
        <RouterLink to="/auth/login" class="w-20 font-h5 text-center h-full cursor-pointer">로그인</RouterLink>
        <Button variant="point" size="sm" @click="handleSignup">
          <template #text>회원가입</template>
        </Button>
      </div>
    </div>
  </nav>
</template>

<script setup lang='ts'>
import { RouterLink } from 'vue-router'
import Button from '@/common/components/button/Button.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const handleSignup = () => {
  router.push('/auth/signup')
}
</script>

<style></style>