<script setup>
import { ref } from "vue";

const count = ref(1);
</script>
<template>
  <h3>目前數字：{{ count }}</h3>
  <button @click="count++">點擊就馬上+1</button>
</template>
