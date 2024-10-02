<script setup>
import { ref, reactive, computed } from "vue";

const backgroundColor = reactive({
  backgroundColor: ref("lightgray"),
});
const color = reactive({
  color: ref("cornflowerblue"),
});
const titleFont = reactive({
  fontFamily: ref("serif"),
});

const baseWidth = ref("400");
const halfWidth = computed(() => {
  return baseWidth.value / 2;
});
const contentWidth = reactive({
  width: halfWidth.value + "px",
});
</script>
<template>
  <h1 :style="[{ width: baseWidth + 'px' }, backgroundColor, titleFont]">
    鐵人賽今天是第 18 天哦！
  </h1>
  <h3 :style="[color, backgroundColor, contentWidth]">你真的好棒喔✨✨✨</h3>
</template>
