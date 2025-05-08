<template>
  <CustomModal :width="'w-[410px]'">
    <template #header>
      아래 이메일로 아이디를 전송했어요
    </template>
    <template #subHeader>
      이메일 : <span class="text-point-400">{{ props.email }}</span>
    </template>
    <template #button>
      <Button @click="handleFindPasswordPage">
        <template #text>비밀번호 찾기</template>
      </Button>
      <Button @click="handleLoginPage">
        <template #text>로그인 페이지</template>
      </Button>
    </template>
  </CustomModal>
</template>

<script setup lang="ts">
import CustomModal from '@/common/components/CustomModal.vue'
import Button from '@/common/components/button/MainButton.vue'

const emit = defineEmits(['handleFindPasswordPage', 'handleLoginPage'])

const props = defineProps({
  email: String,
})

const handleFindPasswordPage = () => {
  emit('handleFindPasswordPage')
}

const handleLoginPage = () => {
  emit('handleLoginPage')
}
</script>

<style></style>
