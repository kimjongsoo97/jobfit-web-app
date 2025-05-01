<template>

  <!-- 메인 컨텐츠 -->
  <div class="flex-1">
    <h2 class="font-h2 text-gry-900 mb-4">회원정보</h2>
    <hr class="border-gry-400 mb-6" />

    <!-- 회원 정보 폼 -->
    <div class="space-y-4">
      <!-- 이름 -->
      <InfoInput label="이름" name="username" v-model="name" readonly="true" is-label="true" />

      <!-- 이메일 -->
      <InfoInput label="이메일" name="email" v-model="email" readonly="true" is-label="true" />

      <!-- 비밀번호 -->
      <InfoInput class="relative w-fit" label="비밀번호" name="password" v-model="password" readonly="true" is-label="true">
        <InputInnerButton variant="point" className="absolute right-2 top-1/2 -translate-y-1/2">
          비밀번호 변경
        </InputInnerButton>
      </InfoInput>

      <!-- 회원정보 수정 버튼 -->
      <Button variant="gray" width="w-[480px]" className="h-12 rounded-xl ml-[100px]">
        <template #text>회원정보 수정</template>
      </Button>

      <!-- 회원 탈퇴 -->
      <button
        class="w-[480px] h-12 rounded-xl ml-[100px] flex items-center justify-center text-gry-800 hover:text-gry-900">
        <span class="block font-h5 text-center transition-all duration-200 hover:underline">회원 탈퇴</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InfoInput from '@/common/components/input/InfoInput.vue';
import Button from '@/common/components/button/MainButton.vue';
import InputInnerButton from '@/common/components/button/InputInnerButton.vue';


const name = ref<string>('김종수')
const email = ref<string>('rlawhdtn97@naver.com')
const password = ref<string>('********')
</script>

<style scoped></style>
