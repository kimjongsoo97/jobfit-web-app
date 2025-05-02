<template>
  <div class="w-[172px] h-[52px] bg-gry-300 rounded-xl flex p-1.5">
    <button :class="[
      'flex-1 h-10 w-20 flex items-center justify-center rounded-lg font-h4',
      activeButton === 'left' ? 'bg-white text-gry-800' : 'text-gry-700'
    ]" @click="handleClick('left')">
      {{ leftButtonText }}
    </button>
    <button :class="[
      'flex-1 h-10 w-20 flex items-center justify-center rounded-lg font-h4',
      activeButton === 'right' ? 'bg-white text-gry-800' : 'text-gry-700'
    ]" @click="handleClick('right')">
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
  (e: 'update:active', value: 'left' | 'right'): void
}>()

const leftButtonText = props.leftButtonText || '최신순'
const rightButtonText = props.rightButtonText || '마감순'

const activeButton = ref<'left' | 'right'>(props.initialActive || 'left')

const handleClick = (button: 'left' | 'right') => {
  activeButton.value = button
  emit('update:active', button)
}
</script>

<style scoped></style>