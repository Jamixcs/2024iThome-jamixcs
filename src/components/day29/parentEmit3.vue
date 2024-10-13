<script setup>
import ChildEmit3 from "./childEmit3.vue";

const handler = function (data) {
  console.log(`子組件傳來的資料：`, data);
};
</script>
<template>
  <ChildEmit3 @send-number="handler" />
</template>
