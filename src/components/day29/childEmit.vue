<script setup>
const emit = defineEmits(["clickButton"]);
</script>
<template>
  <button @click="emit('clickButton')">我是一個按鈕，按我會傳遞訊息！</button>
</template>
