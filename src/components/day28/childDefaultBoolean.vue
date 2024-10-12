<script setup>
const props = defineProps({
  isShow: Boolean,
});
</script>
<template>
  <div v-if="isShow">子組件在這邊可以接到：{{ isShow }}</div>
</template>
