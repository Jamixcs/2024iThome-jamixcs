<script setup>
import { ref } from "vue";

const cute = ref(true);
const naughty = ref(false);
</script>
<template>
  <h3 v-if="cute">Sprouts is CUTE!</h3>
  <h3 v-if="naughty">Sprouts is NAUGHTY!</h3>
</template>
