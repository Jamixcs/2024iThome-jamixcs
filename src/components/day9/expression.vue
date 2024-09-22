<script setup>
const a = 1;
let isOK = true;
</script>

<template>
  <div>{{ a / 2 }}</div>
  <div>{{ Math.floor(Math.random() * 10) }}</div>
  <div>{{ isOK ? "YES" : "NO" }}</div>
  <div>{{ [0, 1, 2, 3, 4].map((i) => i + 1).join(",") }}</div>
</template>
