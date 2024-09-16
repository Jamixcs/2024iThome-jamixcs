<script setup>
import { defineProps } from "vue";

defineProps({
  rawHtml: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>{{ rawHtml }}</div>
  <div v-html="rawHtml"></div>
</template>
