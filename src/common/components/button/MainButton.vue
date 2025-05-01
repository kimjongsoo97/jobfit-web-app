<script setup lang='ts'>
import { computed } from 'vue';
const props = defineProps({
  variant: {
    type: String,
    validator: (value: string) => ['point', 'kakao', 'gray', 'sub-point'].includes(value),
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
  className: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '',
  },
});

// 추후 호버, 액티브 등 클래스 추가하여 변화 필요
let bgClass: string;
let textClass: string;
if (props.variant === 'point') {
  bgClass = 'bg-point-400 hover:bg-point-600';
  textClass = 'text-gary-100 font-h5';
} else if (props.variant === 'kakao') {
  bgClass = 'bg-kakao-yellow hover:bg-kakao-yellow-hover';
  textClass = 'text-black font-h5';
} else if (props.variant === 'gray') {
  bgClass = 'bg-gry-300 hover:bg-gry-400';
  textClass = 'text-gry-800 font-h5';
} else if (props.variant === 'sub-point') {
  bgClass = 'bg-point-100 hover:bg-point-200';
  textClass = 'text-point-600 font-h5';
}

let sizeClass: string;
let roundedClass: string;
let pClass: string;
let heightClass: string;
if (props.size === 'lg') {
  sizeClass = props.width ? props.width : 'w-full';
  roundedClass = 'rounded-xl';
  pClass = 'py-3';
  heightClass = 'h-12';
} else if (props.size === 'sm') {
  sizeClass = props.width ? props.width : 'w-fit min-w-20';
  roundedClass = 'rounded-[10px]';
  pClass = 'py-2 px-2.5';
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
    `${props.className}`,
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
