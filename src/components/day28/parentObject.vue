<script setup>
import { reactive } from "vue";
import Child from "./childObject.vue";

const data = reactive({
  id: 1,
  title: "第一個內容",
  number: 100,
});
</script>
<template>
  <Child :id="data.id" :title="data.title" :number="data.number" />
  <Child v-bind="data" />
</template>
