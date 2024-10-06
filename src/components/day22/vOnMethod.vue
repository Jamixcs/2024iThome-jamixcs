<script setup>
import { ref } from "vue";

const greetMessage = ref("哈囉哈囉哈囉");
const greet = function (event) {
  alert(greetMessage.value);
  if (event) {
    alert(event.target.innerHTML);
  }
};
</script>
<template>
  <button @click="greet">我是按鈕請點我</button>
</template>
