<script setup>
const props = defineProps({
  message: {
    type: String,
    validator(value) {
      // 驗證的值必須是這兩個字串之一
      return ["預設值一", "預設值二"].includes(value);
    },
  },
});
</script>
<template>
  <div>子組件在這邊可以接到：{{ message }}</div>
</template>
