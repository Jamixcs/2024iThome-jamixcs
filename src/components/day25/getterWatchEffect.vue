<script setup>
import { reactive, watchEffect } from "vue";

const personData = reactive({
  height: 1.65,
  weight: 99.9,
});

watchEffect(() => {
  const bmi = personData.weight / personData.height ** 2;
  console.log(`當前 BMI: ${bmi.toFixed(2)}`);
});
// 增加體重
const fatter = () => {
  personData.weight += 10;
};
// 增加身高
const taller = () => {
  personData.height += 0.1;
};
</script>

<template>
  <button @click="fatter">變胖</button>
  <button @click="taller">變高</button>
  <p>BMI 變成：{{ (personData.weight / personData.height ** 2).toFixed(2) }}</p>
</template>
