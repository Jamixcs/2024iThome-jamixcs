<script setup>
defineProps(["message"]);
</script>
<template>
  <h3>子組件在這邊可以接到：{{ message }}</h3>
</template>
