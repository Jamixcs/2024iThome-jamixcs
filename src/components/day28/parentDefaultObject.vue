<script setup>
import { reactive } from "vue";
import ChildDefaultObject from "./childDefaultObject.vue";
const messagePropsObject = reactive({
  message: { title: "父組件原本的資料" },
});
</script>
<template>
  <ChildDefaultObject v-bind="messagePropsObject" />
  <ChildDefaultObject />
</template>
