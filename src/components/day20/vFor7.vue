<script setup>
import { ref } from "vue";

const items = ref(["a", "b", "c"]);
</script>
<template>
  <template v-for="item in items">
    <li>{{ item }}</li>
    <div class="divider"></div>
  </template>
</template>
<style>
.divider {
  border-bottom: 10px rgb(116, 184, 140) solid;
}
</style>
