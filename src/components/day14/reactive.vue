<script setup>
import { reactive } from "vue";
import { ref } from "vue";

const obj = { today: "今天是鐵人賽第 14 天，你還活著嗎" };
const reactiveObj = reactive(obj);
const refObj = ref(obj);
console.log(reactiveObj);
console.log(refObj);
</script>

<template>
  <h3>reactive example: {{ reactiveObj.today }}</h3>
  <!-- refObj 會自動解包，內部是 Proxy 物件 -->
  <h3>ref example: {{ refObj }}</h3>
  <!-- 再用 .today 取得值 -->
  <h3>ref example: {{ refObj.today }}</h3>
</template>
