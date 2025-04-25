<template>
  <div class="flex flex-col gap-y-4">
    <Button variant="kakao-yellow" size="lg">
      <template #icon>
        <img src="@/assets/icons/KakaoIcon.svg" alt="카카오 로고" width="20" height="19" />
      </template>
      <template #text>
        <p class="font-h5">카카오로 시작하기</p>
      </template>
    </Button>
    <Button variant="purple" size="lg">
      <template #icon>
        <img src="@/assets/icons/LineEmailIcon.svg" alt="이메일 로고" width="24" height="24" />
      </template>
      <template #text>
        <p class="font-h5 text-gr-100">이메일로 가입하기</p>
      </template>
    </Button>
    <Button variant="purple" size="lg">
      <template #text>
        <p class="font-h5 text-gr-100">로그인</p>
      </template>
    </Button>
    <div class="flex gap-5">
      <Button variant="purple" size="lg">
        <template #text>
          <p class="font-h5 text-gr-100">채용공고 보러가기</p>
        </template>
      </Button>
      <Button variant="purple" size="lg">
        <template #text>
          <p class="font-h5 text-gr-100">나의 스펙등록하기</p>
        </template>
      </Button>
    </div>
    <!-- 아마도 인풋 태그 만들때 비율로 들어가면 될듯 함다 -->
    <div class="w-[97px]">
      <Button variant="purple-sub" size="sm">
        <template #text>
          <p class="font-caption text-purple-500">재요청</p>
        </template>
      </Button>
    </div>
    <!-- 클릭 함수 적용 -->
    <div class="w-[97px]">
      <Button variant="gray" size="sm" @click="handleClick">
        <template #text>
          <p class="font-caption text-gr-800">확인</p>
        </template>
      </Button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import Button from '../../common/components/Button.vue'

const handleClick = () => {
  console.log('clicked');
};
</script>

<style></style>
