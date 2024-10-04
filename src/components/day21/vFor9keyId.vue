<script setup>
import { ref } from "vue";
const questions = ref([
  { question: "早餐吃什麼：" },
  { question: "午餐吃什麼：" },
  { question: "晚餐吃什麼：" },
]);
const deleted = function (array, index) {
  array.splice(index, 1);
};
</script>
<template>
  <div for="input" v-for="(item, index) in questions" :key="item.question">
    <label>{{ item.question }}<input type="text" id="input" /></label>
    <button @click="deleted(questions, index)">刪除</button>
  </div>
</template>
