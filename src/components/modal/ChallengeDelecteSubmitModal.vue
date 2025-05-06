<template>
  <CustomModal :width="'w-[330px]'">
    <template #header>
      삭제가 완료되었습니다
    </template>
    <template #subHeader>
      남은 개수 <span class="text-point-400">{{ props.challengeCount }}</span>/{{ props.challengeMaxCount }}
    </template>
    <template #button>
      <div class="w-[140px]">
        <Button @click="handleCloseModal">
          <template #text>확인</template>
        </Button>
      </div>
    </template>
  </CustomModal>
</template>

<script setup lang="ts">
import CustomModal from '@/common/components/CustomModal.vue'
import Button from '@/common/components/button/MainButton.vue'

const emit = defineEmits(['closeModal'])

const props = defineProps({
  challengeCount: Number,
  challengeMaxCount: Number,
})

const handleCloseModal = () => {
  emit('closeModal')
}
</script>

<style></style>