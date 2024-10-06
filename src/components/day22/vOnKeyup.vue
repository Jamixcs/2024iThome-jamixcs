<script setup>
function handleKeyup(event) {
  alert(`你先按了 ${event.key} 鍵，再按 Ctrl 鍵，又放開！`);
}
function handleKeydown(event) {
  console.log(`你按下了 ${event.key} 鍵`);
}
</script>
<template>
  <h3>請先按 Enter 鍵，再按 Ctrl 鍵，再一起放開，才會觸發 keyup.ctrl</h3>
  <input
    type="text"
    @keyup.ctrl="handleKeyup"
    @keydown="handleKeydown"
    class="input22"
  />
</template>
<style>
.input22 {
  width: 350px;
}
</style>
