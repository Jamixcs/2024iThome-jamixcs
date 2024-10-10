<script setup>
import ReferenceChild from "./referenceChild.vue";
import { ref } from "vue";

const show = ref(true);
const change = function () {
  show.value = !show.value;
};
</script>
<template>
  <ReferenceChild v-if="show" />
  <button @click="change">切換卸載</button>
</template>
