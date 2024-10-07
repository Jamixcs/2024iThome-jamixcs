<script setup>
import { ref } from "vue";

const textarea = ref("");
</script>
<template>
  <h3>textarea</h3>
  <textarea v-model="textarea" placeholder="請輸入一些內容..." />
  <p>你輸入的內容是：{{ textarea }}</p>
</template>
