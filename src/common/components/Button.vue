<script setup lang='ts'>
import { computed } from 'vue';
const props = defineProps({
  variant: {
    type: String,
    validator: (value: string) => ['purple', 'kakao-yellow', 'purple-sub', 'gray'].includes(value),
    default: 'purple',
  },
  size: {
    type: String,
    validator: (value: string) => ['lg', 'sm'].includes(value),
    default: 'lg',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

// 추후 호버, 액티브 등 클래스 추가하여 변화 필요
let bgClass: String;
if (props.variant === 'purple' || props.variant === 'purple-500') {
  bgClass = 'bg-purple-500';
} else if (props.variant === 'kakao-yellow') {
  bgClass = 'bg-kakao-yellow';
} else if (props.variant === 'purple-sub') {
  bgClass = 'bg-purple-100';
} else if (props.variant === 'gray') {
  bgClass = 'bg-gr-200';
}

let sizeClass: String;
let roundedClass: String;
let pClass: String;
if (props.size === 'lg') {
  sizeClass = 'w-full';
  roundedClass = 'rounded-xl';
  pClass = 'py-3';
} else if (props.size === 'sm') {
  sizeClass = 'w-full';
  roundedClass = 'rounded-md';
  pClass = 'py-[0.3125rem]';
}
const buttonClass = computed(() => {
  return [
    `${bgClass}`,
    `${sizeClass}`,
    `flex items-center justify-center`,
    `${roundedClass}`,
    `${pClass}`,
    `gap-3`,
  ]
})
const emit = defineEmits(['click']);
</script>

<template>
  <button :class="buttonClass" :disabled="disabled" @click="emit('click')">
    <slot name="icon" />
    <slot name="text" />
  </button>
</template>

<style></style>
