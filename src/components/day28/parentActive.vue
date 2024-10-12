<script setup>
import { ref } from "vue";
import Child from "./Child.vue";

const data = ref([
  {
    id: 1,
    title: "第一個內容",
  },
  {
    id: 2,
    title: "第二個內容",
  },
  {
    id: 3,
    title: "第三個內容",
  },
]);
</script>
<template>
  <Child
    v-for="dataItem in data"
    :key="dataItem.id"
    :message="dataItem.title"
  />
</template>
