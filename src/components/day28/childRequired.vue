<script setup>
defineProps({
  // 這邊注意，message 有兩個屬性：設置資料類型的 type 屬性、設置必要性的 required 屬性
  message: {
    type: Boolean,
    required: true,
  },
});
</script>
<template>
  <div>子組件在這邊可以接到：{{ message }}</div>
</template>
