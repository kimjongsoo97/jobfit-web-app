<template>
  <div class="relative flex w-fit h-full items-center">
    <input type="text" :name="props.name" :class="inputClass" v-model="inputValue" :placeholder="props.placeholder"
      :readonly="props.readonly" :id="id">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  className?: string,
  modelValue?: string,
  placeholder?: string,
  name?: string,
  readonly: {
    type: boolean,
    default: false,
  },
  id?: string,
  inputWidth: {
    type: string,
    default: 'w-[400px]',
  },
}>()

const inputValue = computed<string>({
  get: () => props.modelValue || '',
  set: (value) => {
    emit('update:modelValue', value)
  }
})

const inputWidth = props.inputWidth ? props.inputWidth : 'w-[400px]'

const inputClass = computed<string>(() => {
  return `${inputWidth} font-h4 text-gry-900 placeholder:text-gry-500 p-3 flex items-center bg-gry-100 border border-gry-400 rounded-xl`
})

const randomId = computed<string>(() => {
  // Math.random().toString(36).substring(2, 8) 로 6자리 랜덤
  const rand6 = Math.random().toString(36).substring(2, 8)
  // props.name이 undefined일 수 있으므로 기본값 처리
  const namePart = props.name ?? ''
  return `${rand6}_${namePart}`
})

const id = props.id ? props.id : randomId.value
</script>

<style scoped></style>
