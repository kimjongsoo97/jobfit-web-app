<template>
  <div :class="props.className" class="flex flex-col gap-1 h-full items-center ">
    <label v-if="isLabel" :class="labelClass" :for="randomId">{{ props.label }}</label>
    <div class="relative h-full">
      <input :type="type" :name="name" :class="inputClass" v-model="inputValue" :placeholder="placeholder"
        :readonly="props.readonly" :id="id">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])
const props = defineProps<{
  className?: string,
  id?: string,
  label?: string,
  modelValue?: string,
  placeholder?: string,
  name?: string,
  readonly?: boolean,
  type?: string,
  isLabel?: boolean,
  inputWidth?: string,
}>()

const inputValue = computed<string>({
  get: () => props.modelValue || '',
  set: (value) => {
    emit('update:modelValue', value)
  }
})

const type = props.type ? props.type : 'text'
const isLabel = props.isLabel ? props.isLabel : false

const labelClass = computed<string>(() => {
  return 'block font-h5 text-gry-800 self-start'
})

const inputWidth = props.inputWidth ? props.inputWidth : 'w-[480px]'

const inputClass = computed<string>(() => {
  return `${inputWidth} font-h5 text-gry-900 placeholder:text-gry-500 p-3 flex items-center bg-white border border-gry-400 rounded-xl`
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
