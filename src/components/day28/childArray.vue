<script setup>
defineProps(["message"]);
</script>
<template>
  <div>我被渲染出來了：{{ message.join(",") }}</div>
</template>
