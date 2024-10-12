<script setup>
import { computed } from "vue";

const props = defineProps(["message"]);
const propsComputed = computed(() => {
  return "從父組件定義的資料被 computed 修改了！";
});
</script>

<template>
  <h3>子組件在這邊可以接到：{{ propsComputed }}</h3>
</template>
