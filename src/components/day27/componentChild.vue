<script setup>
import { ref } from "vue";

const count = ref(0);
</script>
<template>
  <button @click="count++">我是一個計數器：{{ count }}</button>
</template>
