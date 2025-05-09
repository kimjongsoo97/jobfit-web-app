<template>

  <!-- 메인 컨텐츠 -->
  <div class="flex-1">
    <h2 class="font-h2 text-gry-900 mb-4">회원정보</h2>
    <hr class="border-gry-400 mb-6" />

    <!-- 회원 정보 폼 -->
    <div class="space-y-4">
      <!-- 이름 -->
      <InfoInput label="이름" name="username" v-model="user.name" :readonly="true" :is-label="true" />

      <!-- 이메일 -->
      <InfoInput label="이메일" name="email" v-model="user.email" :readonly="true" :is-label="true" />

      <!-- 비밀번호 -->

      <!-- 회원정보 수정 버튼 -->
      <Button @click="goChangePassword" variant="gray" width="w-[480px]" className="h-12 rounded-xl ml-[100px]">
        <template #text>비밀번호 변경</template>
      </Button>

      <!-- 회원 탈퇴 -->
      <button
      @click="withdraw"
        class="w-[480px] h-12 rounded-xl ml-[100px] flex items-center justify-center text-gry-800 hover:text-gry-900">
        <span class="block font-h5 text-center transition-all duration-200 hover:underline">회원 탈퇴</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue'
import InfoInput from '@/common/components/input/InfoInput.vue';
import Button from '@/common/components/button/MainButton.vue';
import InputInnerButton from '@/common/components/button/InputInnerButton.vue';
import LoginApi from '@/api/loginAPI';
import {useRouter} from 'vue-router';

const router=useRouter()
const user=ref({
  name:'',
  email:'',
})
const goChangePassword=()=>{
  router.push('check-password')
}
const getProfile=async()=>{
  try {
    const data= await LoginApi.getProfile();
    user.value=data.data.data
    console.log(data)
  }catch(error){
    console.error('프로필 정보 불러오기 실패')
  }
}
const withdraw = async () => {
  const confirmed = window.confirm('정말로 회원 탈퇴하시겠습니까? 탈퇴 후에는 복구가 불가능합니다.');

  if (!confirmed) return;

  try {
    await LoginApi.withDraw();
    alert('회원 탈퇴가 완료되었습니다.');
    // 로그아웃 후 로그인 페이지로 이동 등 추가 처리
    router.push('/auth/login');
  } catch (error) {
    console.error('회원 탈퇴 실패:', error);
    alert('회원 탈퇴 중 오류가 발생했습니다.');
  }
}
onMounted(()=>{
  getProfile()
})
</script>

<style></style>
