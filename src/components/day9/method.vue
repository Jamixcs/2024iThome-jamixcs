<template>
  <time :title="toTitleDate(date)" :datetime="date">
    {{ formatDate(date) }}
  </time>
</template>

<script setup>
import { ref } from "vue";

const date = ref(new Date());
const formatDate = (date) => {
  return date.toLocaleDateString();
};
const toTitleDate = (date) => {
  return date.toLocaleString();
};
</script>
