<script setup>
import { ref } from "vue";
import ChildDefault from "./childDefault.vue";
const messageProps = ref(10);
const messagePropsUndefined = ref(undefined);
</script>
<template>
  <ChildDefault :message="messageProps" />
  <ChildDefault />
  <!-- 不傳入值 -->
  <ChildDefault :message="messagePropsUndefined" />
  <!-- 傳入 undefined -->
</template>
