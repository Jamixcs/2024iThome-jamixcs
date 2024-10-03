<script setup>
import { ref } from "vue";

const items = ref([
  { name: "a", data: ["a1", "a2", "a3"] },
  { name: "b", data: ["b1", "b2", "b3"] },
  { name: "c", data: ["c1", "c2", "c3"] },
]);
</script>
<template>
  <div v-for="item in items">
    <li v-for="innerItem in item.data">{{ item.name }}：{{ innerItem }}</li>
  </div>
</template>
