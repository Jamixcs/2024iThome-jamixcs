<script setup>
import ChildDefaultFunction from "./childDefaultFunction.vue";
const messageFunction = function () {
  return "父組件傳來的資料我是一個函式";
};
</script>
<template>
  <ChildDefaultFunction :message="messageFunction" />
  <ChildDefaultFunction />
</template>
