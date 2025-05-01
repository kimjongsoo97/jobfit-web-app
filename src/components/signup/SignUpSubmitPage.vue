<template>
  <div class="max-w-[480px] w-full">
    <h2 class="font-h1 text-gry-900">
      000님, 회원이<br />
      되신걸 환영합니다
    </h2>

    <!-- 버튼 그룹 -->
    <div class="mt-6 flex space-x-5 mb-5">
      <Button @click="goToJobList">
        <template #text>
          채용공고 보러가기
        </template>
      </Button>
      <Button @click="goToSpecRegister">
        <template #text>
          나의 스펙등록하기
        </template>
      </Button>
    </div>

    <!-- 홈으로 버튼 -->
    <Button variant="gray" @click="goToHome">
      <template #text>
        홈으로
      </template>
    </Button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Button from '@/common/components/button/MainButton.vue'

const router = useRouter()

const goToJobList = () => {
  router.push('/recruit')
}

const goToSpecRegister = () => {
  router.push('/spec/register')
}

const goToHome = () => {
  router.push('/')
}
</script>

<style></style>
