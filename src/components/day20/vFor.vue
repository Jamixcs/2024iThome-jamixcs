<script setup>
import { ref } from "vue";

const letters = ref(["a", "b", "c"]);
</script>
<template>
  <li v-for="letter in letters">{{ letter }}</li>
</template>
