<script setup>
import { reactive, watch } from "vue";

const ageData = reactive({
  name: "Jami",
  age: 29,
});

const addAge = function () {
  ageData.age++;
};

watch(ageData, (newAge, oldAge) => {
  console.log(`吃完湯圓長一歲: ${oldAge.age}歲 -> ${newAge.age}歲`);
});
</script>
<template>
  <button @click="addAge">吃一顆湯圓</button>
  <p>{{ ageData.name }} {{ ageData.age }} 歲了</p>
</template>
