<script setup>
import { ref } from "vue";
import UnmountChild from "./unmountChild.vue";

const showChild = ref(true);
</script>
<template>
  <button @click="showChild = !showChild">切換卸載</button>
  <UnmountChild v-if="showChild" />
</template>
