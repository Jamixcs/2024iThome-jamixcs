<script setup>
defineProps({
  message: Boolean,
  // 傳入的值類型設為：布林值
});

// defineProps({
//   message: [Boolean, Number, null],
//   // 傳入的值類型設為：布林值、數字、也可以是 null
// });
</script>
<template>
  <div>子組件在這邊可以接到：{{ message }}</div>
</template>
