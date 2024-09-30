<script setup>
import { ref, computed } from "vue";

const shapeType = ref("square");

const classObj = computed(() => ({
  square: shapeType.value === "square",
  circle: shapeType.value === "circle",
}));

function changeShape() {
  shapeType.value = shapeType.value === "square" ? "circle" : "square";
  console.log(`變形了`, shapeType);
}
console.log(`第一次`, shapeType);
</script>

<template>
  <h3 class="static" :class="classObj"></h3>
  <br />
  <button @click="changeShape">點我變形</button>
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
