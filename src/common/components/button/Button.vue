<script setup lang='ts'>
import { computed } from 'vue';
const props = defineProps({
  variant: {
    type: String,
    validator: (value: string) => ['point', 'kakao', 'gray'].includes(value),
    default: 'point',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator: (value: string) => ['sm', 'lg'].includes(value),
    default: 'lg',
  },
});

// 추후 호버, 액티브 등 클래스 추가하여 변화 필요
let bgClass: String;
let textClass: String;
if (props.variant === 'point') {
  bgClass = 'bg-point-400 hover:bg-point-600';
  textClass = 'text-gary-100 font-h5';
} else if (props.variant === 'kakao') {
  bgClass = 'bg-kakao-yellow opacity-70 hover:opacity-100';
  textClass = 'text-black font-h5';
} else if (props.variant === 'gray') {
  bgClass = 'bg-gry-300 hover:bg-gry-400';
  textClass = 'text-gry-800 font-h5';
}

let sizeClass: String;
let roundedClass: String;
let pClass: String;
let heightClass: String;
if (props.size === 'lg') {
  sizeClass = 'w-full';
  roundedClass = 'rounded-xl';
  pClass = 'py-3';
  heightClass = 'h-12';
} else if (props.size === 'sm') {
  sizeClass = 'w-fit min-w-20';
  roundedClass = 'rounded-[10px]';
  pClass = 'py-2 px-2';
  heightClass = 'h-10';
}

const buttonClass = computed(() => {
  return [
    `${bgClass}`,
    `${sizeClass}`,
    `flex items-center justify-center`,
    `${roundedClass}`,
    `${pClass}`,
    `gap-3`,
    `transition-all duration-200`,
    `${heightClass}`,
  ]
})
const emit = defineEmits(['click']);
</script>

<template>
  <button :class="buttonClass" :disabled="disabled" @click="emit('click')">
    <slot name="icon" />
    <div :class="textClass">
      <slot name="text" />
    </div>
  </button>
</template>

<style></style>
