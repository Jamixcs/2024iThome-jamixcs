<script setup>
import { onUnmounted, onBeforeUnmount } from "vue";

onUnmounted(() => {
  console.log(document.getElementById("unmountChild").textContent);
});
// onBeforeUnmount(() => {
//   console.log(document.getElementById("unmountChild").textContent);
// });
</script>
<template>
  <div id="unmountChild">unmountChild</div>
</template>
