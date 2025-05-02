<script setup lang='ts'>
import { computed } from 'vue';
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});

const bgClass = 'bg-point-100 hover:bg-point-200';
const textClass = 'text-point-600 font-caption';

const sizeClass = 'w-fit';
const roundedClass = 'rounded-[20px]';
const pClass = 'py-2 px-2.5';
const heightClass = 'h-10';

const buttonClass = computed(() => {
  return [
    `${bgClass}`,
    `${sizeClass}`,
    `flex items-center justify-center cursor-pointer`,
    `${roundedClass}`,
    `${pClass}`,
    `gap-1`,
    `transition-all duration-200`,
    `${heightClass}`,
  ]
})
const emit = defineEmits(['click']);
</script>

<template>
  <button :class="buttonClass" :disabled="props.disabled" @click="emit('click')">
    <slot name="icon" />
    <div :class="textClass">
      <slot name="text" />
    </div>
  </button>
</template>

<style></style>
