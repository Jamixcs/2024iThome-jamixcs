<script setup>
import { ref } from "vue";

const cute = ref(false);
const naughty = ref(true);
</script>
<template>
  <h3 v-show="cute">Sprouts is CUTE!</h3>
  <h3 v-show="naughty">Sprouts is NAUGHTY!</h3>
</template>
