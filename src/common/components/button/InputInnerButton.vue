<script setup lang='ts'>
import { computed } from 'vue';
const props = defineProps({
  variant: {
    type: String,
    validator: (value: string) => ['point', 'gray'].includes(value),
    default: 'point',
  },
  disabled: {
    type: Boolean,
    default: false,
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
if (props.variant === 'point' && !props.disabled) {
  bgClass = 'bg-point-100 hover:bg-point-200';
  textClass = 'text-point-600 font-caption';
} else if (props.variant === 'gray' && !props.disabled) {
  bgClass = `bg-gry-300 hover:bg-gry-400`;
  textClass = `font-caption text-gry-800`;
} else if (props.disabled) {
  bgClass = 'bg-gry-300';
  textClass = 'text-gry-500 font-caption';
}

const sizeClass: string = props.width ? props.width : 'w-fit';
const roundedClass: string = 'rounded-md';
const pClass: string = 'py-[5px] px-2.5';
const heightClass: string = 'h-8';

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
  <button type="button" :class="buttonClass" :disabled="disabled" @click="emit('click')" >
    <div :class="textClass">
      <slot />
    </div>
  </button>
</template>

<style></style>
