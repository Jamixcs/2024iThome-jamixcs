<script setup>
import { ref } from "vue";

// 只有頂級的 ref 屬性才會被解包
const count = ref(0);
const obj = { countKey: ref(1) };
// console.log(count);
// console.log(obj.countKey);
const { countKey } = obj;
console.log(countKey);
</script>

<template>
  <h3>count：{{ count }}</h3>
  <h3>count+1：{{ count + 1 }}</h3>
  <h3>obj.countKey：{{ obj.countKey }}</h3>
  <h3>obj.countKey+1：{{ obj.countKey + 1 }}</h3>
  <h3>解構的 countKey：{{ countKey }}</h3>
  <h3>解構的 countKey+1：{{ countKey + 1 }}</h3>
</template>
