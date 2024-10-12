<script setup>
import { reactive } from "vue";
import Child from "./childNumber.vue";

const data = reactive({
  number: 100,
});
</script>
<template>
  <Child :message="100" />
  <Child :message="data.number" />
</template>
