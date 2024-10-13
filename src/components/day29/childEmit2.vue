<script setup>
import { ref } from "vue";
const number1 = ref("");
const number2 = ref("");

const emit = defineEmits(["addNum"]);

const submit = function () {
  const num1 = Number(number1.value);
  const num2 = Number(number2.value);
  if (
    !isNaN(num1) &&
    !isNaN(num2) &&
    number1.value.trim() !== "" &&
    number2.value.trim() !== ""
  ) {
    emit("addNum", { number1: num1, number2: num2 });
  } else {
    console.log("資料無效，無法計算");
  }
};
</script>

<template>
  <p>
    <label for="number1"
      >請輸入第一個數字：<input id="number1" v-model="number1"
    /></label>
  </p>
  <p>
    <label for="number2"
      >請輸入第二個數字：<input id="number2" v-model="number2"
    /></label>
  </p>
  <button type="button" @click="submit">幫我計算</button>
</template>
