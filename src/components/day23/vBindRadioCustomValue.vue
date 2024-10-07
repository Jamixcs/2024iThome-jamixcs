<script setup>
import { ref } from "vue";

const selectedOption = ref("");
const selectedFirstValue = ref("自定義的選項一的值");
const selectedSecondValue = ref("自定義的選項二的值");
</script>
<template>
  <div>
    <h3>radio</h3>
    <label>
      <input
        type="radio"
        v-model="selectedOption"
        :value="selectedFirstValue"
      />
      選項一
    </label>
    <label>
      <input
        type="radio"
        v-model="selectedOption"
        :value="selectedSecondValue"
      />
      選項二
    </label>
    <p>你選擇的選項是：{{ selectedOption }}</p>
  </div>
</template>
