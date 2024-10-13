<script setup>
import ChildEmit from "./childEmit.vue";

const handler = function () {
  console.log("子組件傳來了消息！");
};
</script>
<template>
  <ChildEmit @click-button="handler" />
</template>
