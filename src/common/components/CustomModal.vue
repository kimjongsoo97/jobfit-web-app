<template>
  <div class="fixed h-screen w-full top-0 left-0 z-50 bg-black/50 flex justify-center items-center">
    <div class="flex flex-col gap-[30px] bg-white rounded-[20px] px-5 pb-5 pt-[30px]" :class="props.width">
      <div class="flex flex-col justify-center items-center">
        <div class="block font-h4 text-gry-900">
          <slot name="header"></slot>
        </div>
        <div class="block font-h5 text-gry-800">
          <slot name="subHeader"></slot>
        </div>
      </div>
      <div class="flex justify-center gap-2.5">
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  width: {
    type: String,
    default: '',
  },
})
</script>

<style></style>