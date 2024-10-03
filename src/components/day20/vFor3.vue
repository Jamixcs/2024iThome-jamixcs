<script setup>
import { ref } from "vue";

const title = ref("樂團");
const bands = ref([{ name: "溫蒂漫步" }, { name: "甜約翰" }]);
</script>
<template>
  <!-- 未解構寫法 -->
  <li v-for="(item, index) in bands">
    {{ title }} {{ index + 1 }}：{{ item.name }}
  </li>
  <!-- 解構寫法 -->
  <!-- <li v-for="({ name }, index) in bands">
    {{ title }} {{ index + 1 }}：{{ name }}
  </li> -->
</template>
