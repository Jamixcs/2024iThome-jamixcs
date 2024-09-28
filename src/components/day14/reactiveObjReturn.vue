<script setup>
import { reactive } from "vue";

const rawObj = {};
const proxyObj = reactive(rawObj);
const proxyObj2 = reactive(proxyObj);

console.log(
  `reactive(rawObj) 是否等於 proxyObj：`,
  reactive(rawObj) === proxyObj
);
console.log(
  `reactive(proxyObj) 是否等於 proxyObj：`,
  reactive(proxyObj) === proxyObj
);
console.log(
  `reactive(proxyObj2) 是否等於 proxyObj：`,
  reactive(proxyObj2) === proxyObj
);
</script>

<template></template>
