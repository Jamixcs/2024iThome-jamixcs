<script setup>
import { ref } from "vue";

const isSquare = ref("square");
const isCircle = ref(null);
function changeColor() {
  isCircle.value = "circle";
}
</script>

<template>
  <h3 class="static" :class="[isSquare, isCircle ? 'circle' : '']"></h3>
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
