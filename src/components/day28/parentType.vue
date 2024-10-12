<script setup>
import { ref } from "vue";
import ChildType from "./childType.vue";
const messageProps = ref(true);
const messagePropsIncorrect = ref("notBoolean");
</script>
<template>
  <ChildType :message="messageProps" />
  <!-- 傳入布林值 -->
  <ChildType :message="messagePropsIncorrect" />
  <!-- 傳入字串 -->
</template>
