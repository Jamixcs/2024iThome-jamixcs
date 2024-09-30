<script setup>
import { ref } from "vue";

const isSquare = ref("square");
const isCircle = ref(false);
function changeColor() {
  isCircle.value = "square";
  // 錯誤示範
  isCircle.value = true;
  console.log(isCircle.value);
}
</script>

<template>
  <h3 class="static" :class="[isSquare, isCircle]"></h3>
  <br />
  <button @click="changeColor">點我變圓形</button>
</template>

<style>
.static {
  width: 200px;
  height: 200px;
  border: 2px solid black;
}
.square {
  background-color: rgb(227, 223, 255);
}
.circle {
  background-color: rgb(173, 165, 227);
  border-radius: 50%;
}
</style>
