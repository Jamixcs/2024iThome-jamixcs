<script setup>
function handleKeyup(event) {
  if (event.key === "Enter") {
    alert("你按下了 Enter 鍵又放開！");
  }
}
</script>
<template>
  <input
    type="text"
    @keyup.enter="handleKeyup"
    placeholder="請按鍵盤上的 Enter 鍵再放開"
  />
</template>
