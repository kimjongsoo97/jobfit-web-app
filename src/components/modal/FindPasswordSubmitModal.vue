<template>
  <CustomModal :width="'w-[410px]'">
    <template #header>
      아래 이메일로 비밀번호를 전송했어요
    </template>
    <template #subHeader>
      이메일 : <span class="text-point-400">{{ props.email }}</span>
    </template>
    <template #button>
      <Button @click="handleLoginPage" width="w-[140px]">
        <template #text>로그인 페이지</template>
      </Button>
    </template>
  </CustomModal>
</template>

<script setup lang="ts">
import CustomModal from '@/common/components/CustomModal.vue'
import Button from '@/common/components/button/MainButton.vue'

const emit = defineEmits(['handleLoginPage'])

const props = defineProps({
  email: String,
})

const handleLoginPage = () => {
  emit('handleLoginPage')
}
</script>

<style></style>
