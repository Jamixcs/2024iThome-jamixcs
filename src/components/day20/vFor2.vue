<script setup>
import { ref } from "vue";

const title = ref("Plan");
const letters = ref(["a", "b", "c"]);
// const letters = ref([undefined, "b", "c"]);
</script>
<template>
  <!-- 字串拼接 -->
  <li v-for="(letter, index) in letters" :key="index">
    {{ title + " " + (index + 1) + "：" + letter }}
  </li>
  <!-- 插值 -->
  <li v-for="(letter, index) in letters" :key="index">
    {{ title }} {{ index + 1 }}：{{ letter }}
  </li>
</template>
