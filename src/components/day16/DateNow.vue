<script setup>
import { computed } from "vue";

const now = computed(() => Date.now());
</script>

<template>
  <h3>現在是幾秒：{{ now }}</h3>
</template>
