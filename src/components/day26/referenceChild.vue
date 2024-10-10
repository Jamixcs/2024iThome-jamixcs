<script setup></script>

<template>
  <input
    :ref="
      (el) => {
        if (el) {
          console.log('元素掛載:', el); // 元素掛載時
          el.value = '我是預設文字';
        } else {
          console.log('元素卸載:', el); // 元素卸載時，el 為 null
        }
      }
    "
  />
</template>
