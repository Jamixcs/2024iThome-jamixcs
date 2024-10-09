<script setup>
import { reactive, watch } from "vue";

const personData = reactive({
  height: 1.65,
  weight: 99.9,
});

const getBmi = () => {
  return personData.weight / personData.height ** 2;
};

watch(
  () => getBmi(),
  (newBmi, oldBmi) => {
    console.log("BMI 變化:", oldBmi, "->", newBmi);
  },
  { immediate: true }
);

const fatter = function () {
  personData.weight += 10; // 這裡直接賦值，會觸發 BMI 的重新計算
};
</script>
<template>
  <button @click="fatter">變胖</button>
  <p>bmi 變成：{{ getBmi() }}</p>
</template>
