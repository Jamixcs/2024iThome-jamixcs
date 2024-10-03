<script setup>
import { ref } from "vue";

const todoList = ref([
  { title: "散步", status: true },
  { title: "聽音樂", status: true },
  { title: "練鋼琴", status: true },
  { title: "寫鐵人賽", status: false },
]);
</script>
<template>
  <!-- 錯誤寫法 -->
  <!-- <li v-for="todo in todoList" v-if="!todo.status">
    {{ todo.title }}
  </li> -->
  <!-- 正確寫法 -->
  <template v-for="todo in todoList">
    <li v-if="!todo.status">
      {{ todo.title }}
    </li>
  </template>
</template>
