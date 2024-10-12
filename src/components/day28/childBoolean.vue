<script setup>
const props = defineProps(["isShow"]);
console.log(props);
</script>
<template>
  <div>我被渲染出來了：{{ isShow }}</div>
</template>
