<script setup>
import { ref, onUpdated, onBeforeUpdate } from "vue";

const count = ref(0);

// onUpdated(() => {
//   console.log(document.getElementById("count").textContent);
// });
onBeforeUpdate(() => {
  console.log(document.getElementById("count").textContent);
});
</script>

<template>
  <button id="count" @click="count++">{{ count }}</button>
</template>
