<script setup>
import { ref } from "vue";
const fontSize = ref(99);
</script>
<template>
  <div :style="{ fontSize: fontSize + 'px' }">Hey🧡</div>
</template>
