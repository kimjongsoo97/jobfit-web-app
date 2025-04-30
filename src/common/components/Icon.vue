<template>
  <div :class="iconClass">
    <slot />
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue';
const props = defineProps({
  width: {
    type: String,
    default: '24',
  },
  height: {
    type: String,
    default: '24',
  },
  fill: {
    type: String,
    default: 'none',
  },
  stroke: {
    type: String,
    default: 'none',
  },
});
let fillColor: String;
let strokeColor: String;
if (props.fill === 'white') {
  fillColor = 'fill-white';
} else if (props.fill === 'gray') {
  fillColor = 'fill-gry-100';
} else if (props.fill === 'dark-gray') {
  fillColor = 'fill-gry-500';
} else if (props.fill === 'black') {
  fillColor = 'fill-black';
} else if (props.fill === 'none') {
  fillColor = 'fill-none';
} else if (props.fill === 'point') {
  fillColor = 'fill-point-600';
} else {
  fillColor = props.fill;
}
if (props.stroke === 'white') {
  strokeColor = 'stroke-white';
} else if (props.stroke === 'gray') {
  strokeColor = 'stroke-gry-100';
} else if (props.stroke === 'dark-gray') {
  strokeColor = 'stroke-gry-800';
} else if (props.stroke === 'black') {
  strokeColor = 'stroke-black';
} else if (props.stroke === 'none') {
  strokeColor = 'stroke-none';
} else if (props.stroke === 'point') {
  strokeColor = 'stroke-point-600';
} else {
  strokeColor = props.stroke;
}
const iconClass = computed(() => {
  return [
    `${fillColor}`,
    `${strokeColor}`,
    `w-[${props.width}px]`,
    `h-[${props.height}px]`,
    'flex items-center justify-center',
  ]
})
</script>

<style></style>
