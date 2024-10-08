<script setup>
import { onMounted, onBeforeMount } from "vue";

onMounted(() => {
  console.log(document.getElementById("button").textContent);
});
// onBeforeMount(() => {
//   console.log(document.getElementById("button").textContent);
// });
</script>
<template>
  <button id="button">Mount</button>
</template>
