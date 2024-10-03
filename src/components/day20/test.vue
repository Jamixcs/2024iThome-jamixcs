<script setup>
import { reactive, ref } from "vue";

const refObj = ref(0);
// const reactiveObj = reactive({ count: 0 });
// console.log(refObj);
// console.log(reactiveObj);
// 解構
const { count } = refObj;
</script>
<template>
  <!-- {{ refObj }}
  {{ reactiveObj }}
  {{ reactiveObj.count }} -->
  <!-- 解構 -->
  refObj:{{ refObj }}
</template>
