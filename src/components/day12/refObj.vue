<script setup>
import { ref } from "vue";

const obj = { title: "今天是鐵人賽第 12 天" };
const refObj = ref(obj);
console.log(`refObj`, refObj);
</script>

<template>{{ refObj }}</template>
