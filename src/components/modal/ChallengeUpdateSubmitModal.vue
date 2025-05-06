<template>
  <CustomModal :width="'w-[410px]'">
    <template #header>
      챌린지 공고에 등록이 완료되었어요
    </template>
    <template #subHeader>
      남은 개수 <span class="text-point-400">{{ props.challengeCount }}</span>/{{ props.challengeMaxCount }}
    </template>
    <template #button>
      <Button @click="handleMoveChallengeList">
        <template #text>챌린지 페이지로 이동</template>
      </Button>
      <Button @click="handleCloseModal">
        <template #text>채용공고 계속보기</template>
      </Button>
    </template>
  </CustomModal>
</template>

<script setup lang="ts">
import CustomModal from '@/common/components/CustomModal.vue'
import Button from '@/common/components/button/MainButton.vue'

const emit = defineEmits(['moveChallengeList', 'closeModal'])

const props = defineProps({
  challengeCount: Number,
  challengeMaxCount: Number,
})

const handleMoveChallengeList = () => {
  emit('moveChallengeList')
}

const handleCloseModal = () => {
  emit('closeModal')
}
</script>

<style></style>
