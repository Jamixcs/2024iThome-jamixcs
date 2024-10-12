<script setup>
import { ref } from "vue";
import Child from "./childBoolean.vue";

const data = ref(true);
</script>
<template>
  <!-- 不綁定值，會隱式轉換傳 true -->
  <Child isShow />
  <Child :isShow="true" />
  <Child :isShow="data" />
</template>
