<template>
  <button :class="buttonClass" @click="onClick">
    <slot />
  </button>
</template>

<script setup lang='ts'>
import { computed } from 'vue';
const emit = defineEmits<{
  (e: 'click'): void
}>()

const props = defineProps<{
  variant: 'point' | 'gray'
  className?: string
}>()

let bgClass: String;
let borderClass: String;
let textClass: String;
if (props.variant === 'point') {
  bgClass = 'bg-white/10 hover:bg-white/20';
  borderClass = 'border-gry-400 border-1';
  textClass = 'text-white';
} else {
  bgClass = 'bg-white opacity-10 hover:opacity-20';
  borderClass = 'border-gry-400 border-1';
  textClass = 'text-gry-900';
}

const buttonClass = computed(() => {
  return [
    `${bgClass}`,
    `${borderClass}`,
    `${textClass}`,
    `h-10 py-2 px-7 rounded-full font-h5`,
    `transition-all duration-200`,
    props.className,
  ]
})

const onClick = () => {
  emit('click')
}
</script>

<style></style>
