<script setup>
import { ref } from "vue";

const selectedOption = ref("");
</script>
<template>
  <div>
    <h3>radio</h3>
    <label>
      <input type="radio" value="選項一" v-model="selectedOption" />
      選項一
    </label>
    <label>
      <input type="radio" value="選項二" v-model="selectedOption" />
      選項二
    </label>
    <p>你選擇的選項是：{{ selectedOption }}</p>
  </div>
</template>
