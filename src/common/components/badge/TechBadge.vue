<template>
  <span class="px-3 py-2 bg-gry-200 text-gry-800 font-h5 rounded-xl flex items-center gap-2">
    <div>
      <slot />
    </div>
    <Icon v-if="props.isClose" @click="emit('click')" class="cursor-pointer" width="20" height="20">
      <CloseIcon />
    </Icon>
  </span>
</template>

<script setup lang="ts">
import Icon from '@/common/components/CustomIcon.vue'
import CloseIcon from '@/assets/icons/CloseIcon_20.svg'
const emit = defineEmits(['click'])
const props = defineProps({
  isClose: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped></style>