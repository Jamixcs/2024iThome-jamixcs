<script setup>
import { ref, computed } from "vue";

const numbers = ref([1, 2, 3, 4]);

// const reversedNumbers = computed(() => {
//   return numbers.value.reverse(); // 這裡修改了原始數組
// });

const reversedNumbers = computed(() => {
  return [...numbers.value].reverse(); // 創建副本，安全地反轉
});
</script>

<template>
  <div>
    <h2>原始數組: {{ numbers }}</h2>
    <h2>反轉數組: {{ reversedNumbers }}</h2>
  </div>
</template>
