<script setup>
import { reactive } from "vue";

const myObj = reactive({ name: "a", data: ["a1", "a2", "a3"] });
</script>
<template>
  <div v-for="(value, key) in myObj">{{ key }}：{{ value }}</div>
</template>
