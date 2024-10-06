<script setup>
function warn(message) {
  alert(message);
}
</script>
<template>
  <button @click="warn('早點睡覺！')">我是按鈕請點我</button>
</template>
