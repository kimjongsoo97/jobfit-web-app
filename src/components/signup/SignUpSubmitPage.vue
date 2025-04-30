<template>
  <div class="max-w-[480px] w-full">
    <h2 class="text-[40px] font-semibold text-[#1b1c1f] leading-[56px]">
      000님, 회원이<br />
      되신걸 환영합니다
    </h2>

    <!-- 버튼 그룹 -->
    <div class="mt-5 flex space-x-5">
      <button @click="goToJobList"
        class="w-[230px] h-[48px] bg-[#8375ff] text-[#fafafc] rounded-xl text-[14px] font-semibold">
        채용공고 보러가기
      </button>
      <button @click="goToSpecRegister"
        class="w-[230px] h-[48px] bg-[#8375ff] text-[#fafafc] rounded-xl text-[14px] font-semibold">
        나의 스펙등록하기
      </button>
    </div>

    <!-- 홈으로 버튼 -->
    <button @click="goToHome"
      class="mt-5 w-full h-[48px] bg-[#efeff3] text-[#404249] rounded-xl text-[14px] font-semibold">
      홈으로
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

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
