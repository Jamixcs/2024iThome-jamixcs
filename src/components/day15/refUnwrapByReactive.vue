<script setup>
import { ref } from "vue";
import { reactive } from "vue";

const countRef = ref(0);
const reactiveObj = reactive({ count: countRef });

console.log(reactiveObj);
console.log(reactiveObj.count); // 輸出 countRef 的引用，這裡是 ref 物件
</script>

<template>
  <h3>reactiveObj：{{ reactiveObj }}</h3>
  <h3>用 .count 存取內部屬性值：{{ reactiveObj.count }}</h3>
</template>
