<script setup>
import { reactive, watch } from "vue";

const ageData = reactive({
  name: "Jami",
  age: 29,
});

const addAge = function () {
  ageData.age++;
};

// 淺層監聽
watch(
  () => ageData,
  (newAge, oldAge) => {
    console.log(
      `() => ageData 偵聽器觸發！吃完湯圓長一歲：${oldAge.age}歲 -> ${newAge.age}歲`
    );
  }
);
// 深層監聽
watch(
  () => ageData.age,
  (newAge, oldAge) => {
    console.log(
      `() => ageData.age 偵聽器觸發！吃完湯圓長一歲：${oldAge}歲 -> ${newAge}歲`
    );
  }
);
watch(ageData, (newAge, oldAge) => {
  console.log(
    `ageData 偵聽器觸發！吃完湯圓長一歲：${oldAge.age}歲 -> ${newAge.age}歲`
  );
});
</script>
<template>
  <button @click="addAge">吃一顆湯圓</button>
  <p>{{ ageData.name }} {{ ageData.age }} 歲了</p>
</template>
