<script setup>
import { ref } from "vue";
import Child from "./childArray.vue";

const data = ref(["data1", "data2", "data3"]);
</script>
<template>
  <Child :message="['data1', 'data2', 'data3']" />
  <Child :message="data" />
</template>
