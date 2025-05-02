<template>
  <div class="relative">
    <button :class="[
      width,
      height,
      'px-4 flex items-center justify-between bg-gry-100 border border-gry-400 rounded-xl',
      isOpen ? 'border-gry-900' : '',
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
    ]" @click="toggleDropdown" :disabled="disabled">
      <span :class="['font-h4', selectedText ? 'text-gry-800' : 'text-gry-500']">
        {{ selectedText || placeholder }}
      </span>
      <span class="material-icons text-gry-700">
        {{ isOpen ? 'arrow_drop_up' : 'arrow_drop_down' }}
      </span>
    </button>
    <div v-if="isOpen" class="relative">
      <div class="absolute top-2 w-full bg-white rounded-xl shadow-lg z-10">
        <div v-for="option in options" :key="option.value" class="px-4 py-3 hover:bg-gry-100 cursor-pointer"
          @click="selectOption(option)">
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Option {
  label: string
  value: string | number
}

const props = defineProps<{
  placeholder?: string
  options: Option[]
  width?: string
  height?: string
  disabled?: boolean
  modelValue?: string | number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const isOpen = ref(false)
const selectedText = ref('')

const width = props.width || 'w-[180px]'
const height = props.height || 'h-[52px]'

const toggleDropdown = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value
  }
}

const selectOption = (option: Option) => {
  selectedText.value = option.label
  emit('update:modelValue', option.value)
  isOpen.value = false
}

// 초기 선택된 값 설정
if (props.modelValue) {
  const selectedOption = props.options.find(option => option.value === props.modelValue)
  if (selectedOption) {
    selectedText.value = selectedOption.label
  }
}
</script>

<style scoped></style>