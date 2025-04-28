<template>
  <div class="flex flex-col gap-y-4 w-full">
    <BigButton variant="kakao">
      <template #icon>
        <img src="@/assets/icons/KakaoIcon.svg" alt="카카오 로고" width="20" height="19" />
      </template>
      <template #text>
        <p class="font-h5">카카오로 시작하기</p>
      </template>
    </BigButton>
    <BigButton variant="purple">
      <template #icon>
        <img src="@/assets/icons/LineEmailIcon.svg" alt="이메일 로고" width="24" height="24" />
      </template>
      <template #text>
        <p class="font-h5 text-gr-100">이메일로 가입하기</p>
      </template>
    </BigButton>
    <BigButton variant="purple">
      <template #text>
        <p class="font-h5 text-gr-100">로그인</p>
      </template>
    </BigButton>
    <BigButton variant="purple">
      <template #text>
        <p class="font-h5 text-gr-100">로그인</p>
      </template>
    </BigButton>
    <div class="flex gap-5">
      <BigButton variant="purple">
        <template #text>
          <p class="font-h5 text-gr-100">채용공고 보러가기</p>
        </template>
      </BigButton>
      <BigButton variant="purple">
        <template #text>
          <p class="font-h5 text-gr-100">나의 스펙등록하기</p>
        </template>
      </BigButton>
    </div>
    <BigButton variant="gray">
      <template #text>
        <p class="font-h5 text-gr-800">홈으로</p>
      </template>
    </BigButton>
  </div>
</template>

<script setup lang='ts'>
import BigButton from '../../common/components/BigButton.vue'

const handleClick = () => {
  console.log('clicked');
};
</script>

<style></style>
