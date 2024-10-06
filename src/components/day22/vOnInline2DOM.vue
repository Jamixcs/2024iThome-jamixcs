<script setup>
function warn(message, event) {
  alert(message);
  if (event) {
    alert(event.target.innerHTML);
  }
}
</script>
<template>
  <li>於表達式傳入 $event 參數寫法：</li>
  <button @click="warn('早點睡覺！', $event)">我是按鈕請點我</button>
  <li>handler 寫箭頭函式：</li>
  <button
    @click="
      (event) => {
        warn('早點睡覺！', event);
      }
    "
  >
    我是按鈕請點我
  </button>
</template>
