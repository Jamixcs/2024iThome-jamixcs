<script setup>
import { ref } from "vue";
import { reactive } from "vue";

const count = ref(0);
const reactiveObj = reactive({ count }); // 作為物件傳入
const reactiveObj2 = reactive(count); // 直接傳入

console.log(`reactiveObj`, reactiveObj);
console.log(`reactiveObj.count`, reactiveObj.count);
console.log(`reactiveObj2`, reactiveObj2);
console.log(`reactiveObj2.value`, reactiveObj2.value);
</script>

<template>
  <h3>reactiveObj.count >> {{ reactiveObj.count }}</h3>
  <h3>reactiveObj2.value >> {{ reactiveObj2.value }}</h3>
  <h3>reactiveObj2 >> {{ reactiveObj2 }}</h3>
  <h3>reactive(0) >> {{ reactive(0) }}</h3>
</template>
