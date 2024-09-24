<script setup>
import { ref } from "vue";

const count = ref(0);
console.log(count.value);
</script>

<template>
  <button @click="count++">點擊數：{{ count }}</button>
</template>
