<template>
  <div class="max-w-[480px] w-full">
    <h2 class="text-[40px] font-semibold text-[#1b1c1f] leading-[56px] mb-5">
      로그인
    </h2>

    <!-- 로그인 폼 -->
    <form @submit.prevent="handleLogin" class="space-y-2">
      <!-- 아이디 입력 -->
      <div class="relative">
        <input v-model="user.username" type="username" placeholder="아이디"
          class="w-full h-[48px] px-3 rounded-xl border border-[#dedee4] text-[14px] font-semibold placeholder-[#babdc3]" />
      </div>

      <!-- 비밀번호 입력 -->
      <div class="relative">
        <input v-model="user.password" type="password" placeholder="비밀번호"
          class="w-full h-[48px] px-3 rounded-xl border border-[#dedee4] text-[14px] font-semibold placeholder-[#babdc3]" />
      </div>

      <!-- 로그인 버튼 -->
      <Button variant="point" size="lg" @click="handleLogin">
        <template #text>로그인</template>
      </Button>

      <!-- 구분선 -->
      <div class="relative py-5">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-[#dedee4]"></div>
        </div>
        <div class="relative flex justify-center">
          <span class="bg-white px-4 text-[12px] font-semibold text-[#6f727c]">또는</span>
        </div>
      </div>

      <!-- 카카오 로그인 -->
      <Button variant="kakao" size="lg" @click="handleKakaoLogin">
        <template #icon>
          <Icon fill="black">
            <KakaoIcon />
          </Icon>
        </template>
        <template #text>카카오 로그인</template>
      </Button>

      <!-- 하단 링크 -->
      <div class="flex items-center justify-between mt-5">
        <router-link to="/auth/find-username" class="font-h5 text-gry-800 hover:text-gry-900">아이디/비밀번호 찾기</router-link>
        <div class="flex items-center space-x-2">
          <span class="font-h5 text-gry-700">계정이 없으신가요?</span>
          <router-link to="/auth/signup" class="font-h5 text-point-600 hover:text-point-700">회원가입</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from '@/common/components/button/MainButton.vue'
import Icon from '@/common/components/CustomIcon.vue'
import KakaoIcon from '@/assets/icons/KakaoIcon_20.svg'
import { useLoginStore } from '@/stores/login'

const auth=useLoginStore();
const user=reactive({
    username:'',
    password:'',
})
const router = useRouter()

const disableSubmit=computed(()=>!(user.username&&user.password))

const handleLogin = async () => {
  console.log(user)
  try {
    await auth.login(user)
    router.push('/')
  } catch (error) {
    console.error('로그인 실패:', error)
  }
}

const handleKakaoLogin = async () => {
  try {
    // TODO: 카카오 로그인 로직 구현
    router.push('/')
  } catch (error) {
    console.error('카카오 로그인 실패:', error)
  }
}
</script>

<style></style>
