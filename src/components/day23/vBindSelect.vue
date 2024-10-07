<script setup>
import { ref } from "vue";

const isSelected = ref("");
const isSelectedMultiple = ref([]);
const isSelectedVFor = ref("");
const options = [
  { title: `選項一`, value: `一` },
  { title: `選項二`, value: `二` },
  { title: `選項三`, value: `三` },
];
</script>

<template>
  <div>
    <h3>select</h3>
    <select v-model="isSelected">
      <option value="" disabled>請選擇</option>
      <option value="選項一">選項一</option>
      <option value="選項二">選項二</option>
      <option value="選項三">選項三</option>
    </select>
    <p>Select 當前狀態：{{ isSelected }}</p>
  </div>
  <div>
    <h3>select multiple</h3>
    <select v-model="isSelectedMultiple" multiple>
      <option value="選項一">選項一</option>
      <option value="選項二">選項二</option>
      <option value="選項三">選項三</option>
    </select>
    <p>Select 當前狀態：{{ isSelectedMultiple }}</p>
  </div>
  <div>
    <h3>select v-for</h3>
    <select v-model="isSelectedVFor">
      <option value="" disabled>請選擇</option>
      <option v-for="option in options" :value="option.value">
        {{ option.title }}
      </option>
    </select>
    <p>選項{{ isSelectedVFor }}</p>
  </div>
</template>
