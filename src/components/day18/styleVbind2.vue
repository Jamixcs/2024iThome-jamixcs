<script setup>
import { ref, reactive, computed } from "vue";

const width = ref("400");
const backgroundColor = ref("lightgray");
const fontFamily = ref("serif");
const color = ref("cornflowerblue");
const halfWidth = computed(() => {
  return width.value / 2;
});
const content = reactive({
  width: halfWidth.value + "px",
  color: color,
  backgroundColor: backgroundColor,
});
</script>
<template>
  <h1
    :style="{
      width: width + 'px',
      backgroundColor: backgroundColor,
      'font-family': fontFamily,
    }"
  >
    鐵人賽今天是第 18 天哦！
  </h1>
  <h3 :style="content">你真的好棒喔✨✨✨</h3>
</template>
