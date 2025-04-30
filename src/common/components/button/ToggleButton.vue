<script setup lang='ts'>
import { computed } from 'vue';
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});

let bgClass: String;
let textClass: String;
bgClass = 'bg-point-100 hover:bg-point-200';
textClass = 'text-point-600 font-caption';

let sizeClass: String;
let roundedClass: String;
let pClass: String;
let heightClass: String;
sizeClass = 'w-fit';
roundedClass = 'rounded-[20px]';
pClass = 'py-2 px-2.5';
heightClass = 'h-10';

const buttonClass = computed(() => {
  return [
    `${bgClass}`,
    `${sizeClass}`,
    `flex items-center justify-center`,
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
  <button :class="buttonClass" :disabled="disabled" @click="emit('click')">
    <slot name="icon" />
    <div :class="textClass">
      <slot name="text" />
    </div>
  </button>
</template>

<style></style>
