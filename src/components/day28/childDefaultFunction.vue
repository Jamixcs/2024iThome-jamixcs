<script setup>
const props = defineProps({
  message: {
    type: Function,
    default() {
      return "預設的函式";
    },
  },
});
console.log(`props: `, props);
console.log(`props.message: `, props.message);
</script>
<template>
  <!-- <div>子組件在這邊可以接到：{{ message }}</div> -->
  <div>子組件在這邊可以接到：{{ message() }}</div>
</template>
