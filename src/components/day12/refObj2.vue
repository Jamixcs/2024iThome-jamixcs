<script setup>
import { ref } from "vue";

const obj = { title: "今天是鐵人賽第 12 天" };
const refObj = ref(obj);
console.log(`refObj`, refObj);
</script>

<template>
  <p>用 refObj 取值：{{ refObj }}</p>
  <p>用 refObj.title 取值：{{ refObj.title }}</p>
</template>
