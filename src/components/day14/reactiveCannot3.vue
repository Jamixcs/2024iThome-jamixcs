<script setup>
import { reactive } from "vue";

const reactiveObj = reactive({ count: 0 });

let { count } = reactiveObj;
count++;
console.log(`reactiveObj`, reactiveObj);

console.log(`count`, count);
</script>

<template>
  <h3>已經斷開響應性連接的：{{ reactiveObj.count }}</h3>
  <h3>被解構的變數：{{ count }}</h3>
</template>
