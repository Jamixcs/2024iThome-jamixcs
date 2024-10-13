<script setup>
import ChildEmit2 from "./childEmit2.vue";

const handler = function ({ number1, number2 }) {
  console.log(number1 + number2);
};
</script>
<template>
  <ChildEmit2 @add-num="handler" />
</template>
