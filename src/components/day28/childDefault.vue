<script setup>
defineProps({
  message: {
    type: Number,
    default: 1000,
  },
});
</script>
<template>
  <div>子組件在這邊可以接到：{{ message }}</div>
</template>
