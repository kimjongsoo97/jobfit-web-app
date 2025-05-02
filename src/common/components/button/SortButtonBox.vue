<template>
  <div class="w-[172px] h-[52px] bg-gry-300 hover:bg-gry-400 rounded-xl flex p-1.5" @click="handleClick()">
    <button :class="[
      'flex-1 h-10 w-20 flex items-center justify-center rounded-lg font-h4',
      activeButton === 'left' ? 'bg-white text-gry-800' : 'text-gry-700'
    ]">
      {{ leftButtonText }}
    </button>
    <button :class="[
      'flex-1 h-10 w-20 flex items-center justify-center rounded-lg font-h4',
      activeButton === 'right' ? 'bg-white text-gry-800' : 'text-gry-700'
    ]">
      {{ rightButtonText }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  leftButtonText?: string
  rightButtonText?: string
  initialActive?: 'left' | 'right'
}>()

const emit = defineEmits<{
  (e: 'update:status', value: 'left' | 'right'): void
}>()

const leftButtonText = props.leftButtonText || '최신순'
const rightButtonText = props.rightButtonText || '마감순'

const activeButton = ref<'left' | 'right'>(props.initialActive || 'left')

const handleClick = () => {
  if (activeButton.value === 'left') {
    activeButton.value = 'right'
  } else {
    activeButton.value = 'left'
  }
  emit('update:status', activeButton.value)
}
</script>

<style scoped></style>
