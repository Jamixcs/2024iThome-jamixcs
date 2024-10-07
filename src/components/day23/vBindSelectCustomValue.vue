<script setup>
import { ref } from "vue";

const isSelected = ref("");
</script>

<template>
  <div>
    <h3>select</h3>
    <select v-model="isSelected">
      <option value="" disabled>請選擇</option>
      <option value="{ option: 1 }">選項一</option>
      <option value="{ option: 2 }">選項二</option>
      <option value="{ option: 3 }">選項三</option>
    </select>
    <p>Select 當前狀態：{{ isSelected }}</p>
  </div>
</template>
