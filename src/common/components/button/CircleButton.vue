<template>
  <button :class="buttonClass">
    <slot>
      <Icon fill="dark-gray">
        <LineStarIcon />
      </Icon>
    </slot>
  </button>
</template>

<script setup lang='ts'>
import Icon from '@/common/components/Icon.vue'
import LineStarIcon from '@/assets/icons/LineStarIcon_24.svg'
import { computed } from 'vue';
const props = defineProps({
  variant: {
    type: String,
    validator: (value: string) => ['point', 'gray'].includes(value),
    default: 'gray',
  },
});

let bgClass: String;
let hoverBgClass: String;
if (props.variant === 'point') {
  bgClass = 'bg-point-100';
  hoverBgClass = 'hover:bg-point-200';
} else if (props.variant === 'gray') {
  bgClass = 'bg-gry-200';
  hoverBgClass = 'hover:bg-gry-300';
}
const buttonClass = computed(() => {
  return [
    `${bgClass}`,
    `${hoverBgClass}`,
    'w-10 h-10 rounded-full',
    'transition-all duration-200',
    'flex items-center justify-center',
  ]
})

</script>

<style></style>
