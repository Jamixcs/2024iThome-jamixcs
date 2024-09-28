<script setup>
import { reactive } from "vue";

const obj = { today: "今天是鐵人賽第 14 天，你還活著嗎" };
const reactiveObj = reactive(obj);
console.log(`Proxy 物件是否等於原始物件:`, obj === reactiveObj);
</script>

<template></template>
