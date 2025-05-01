<template>
  <div class="max-w-[480px] w-full">
    <h2 class="font-h1 text-gry-900 mb-1">
      회원가입
    </h2>
    <p class="font-h4 text-gry-700 mb-8">
      회원가입하고 내 지원 가능성 확인해보세요!
    </p>

    <!-- 가입 버튼들 -->
    <div class="space-y-4 mb-10">
      <Button variant="point" @click="handleEmailSignUp">
        <template #icon>
          <Icon stroke="white">
            <LineEmailIcon />
          </Icon>
        </template>
        <template #text>
          이메일로 가입하기
        </template>
      </Button>

      <Button variant="kakao" @click="handleKakaoSignUp">
        <template #icon>
          <Icon fill="black">
            <KakaoIcon />
          </Icon>
        </template>
        <template #text>
          카카오로 시작하기
        </template>
      </Button>
    </div>

    <!-- 하단 링크 -->
    <div class="flex items-center justify-center space-x-3">
      <span class="font-h5 text-gry-800">혹시 회원이신가요?</span>
      <router-link to="/auth/login" class="font-h5 text-point-600">로그인 하기</router-link>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router'
import Button from '@/common/components/button/MainButton.vue'
import Icon from '@/common/components/CustomIcon.vue'
import LineEmailIcon from '@/assets/icons/LineEmailIcon_24.svg'
import KakaoIcon from '@/assets/icons/KakaoIcon_20.svg'

const router = useRouter()

const handleEmailSignUp = () => {
  router.push('/auth/signup/info')
}

const handleKakaoSignUp = () => {
  // 카카오 로그인 구현
  router.push('/auth/signup/info')
}
</script>

<style></style>
