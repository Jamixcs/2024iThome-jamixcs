<script setup>
import { reactive } from "vue";

const reactiveObj = reactive(123);
const reactiveObj2 = reactive("abc");

console.log(reactiveObj);
console.log(reactiveObj + 1);
console.log(reactiveObj2);
console.log(reactiveObj2 + "edf");
</script>

<template>
  <h3>{{ reactiveObj }}</h3>
  <h3>{{ reactiveObj2 }}</h3>
</template>
