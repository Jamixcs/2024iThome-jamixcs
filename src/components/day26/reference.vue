<script setup>
import { onMounted, ref, onBeforeMount } from "vue";

const input = ref(null);

onMounted(() => {
  input.value.value = "我是預設文字";
});
// onBeforeMount(() => {
//   input.value.value = "我是預設文字";
// });
</script>
<template>
  <input ref="input" />
</template>
