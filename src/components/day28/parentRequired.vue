<script setup>
import { ref } from "vue";
import ChildRequired from "./childRequired.vue";
const messageProps = ref(true);
</script>
<template>
  <ChildRequired :message="messageProps" />
  <!-- 傳入布林值 -->
  <ChildRequired />
  <!-- 不傳入值 -->
</template>
