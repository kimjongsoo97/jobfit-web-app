<template>
  <div :class="props.className" class="flex gap-5 h-full items-center relative">
    <label v-if="props.isLabel" :class="labelClass" :for="randomId">{{ props.label }}</label>
    <input :type="props.type" :name="props.name" :class="inputClass" v-model="inputValue"
      :placeholder="props.placeholder" :readonly="props.readonly" :id="id">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
interface InfoInputProps {
  className?: string,
  id?: string,
  label?: string,
  modelValue?: string,
  placeholder?: string,
  name?: string,
  readonly?: boolean,
  type?: 'text' | 'password',
  isLabel?: boolean,
  inputWidth?: string,
}

const props = withDefaults(defineProps<InfoInputProps>(), {
  readonly: false,
  type: 'text',
  isLabel: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const inputValue = computed<string>({
  get: () => props.modelValue || '',
  set: (value) => {
    emit('update:modelValue', value)
  }
})


const labelClass = computed<string>(() => {
  return 'block font-h3 text-gry-800 w-20'
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
