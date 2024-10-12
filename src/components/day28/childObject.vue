<script setup>
defineProps(["id", "title", "number"]);
</script>
<template>
  <div>我的 id：{{ id }}</div>
  <div>我的 title：{{ title }}</div>
  <div>我的 number：{{ number }}</div>
</template>
