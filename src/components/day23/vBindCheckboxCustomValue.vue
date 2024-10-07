<script setup>
import { ref } from "vue";

const isChecked = ref("");
const isCheckedCustom = ref("");
const customTrueValue = ref("自定義的true動態值");
const customFalseValue = ref("自定義的false動態值");
</script>

<template>
  <div>
    <h3>單選 checkbox toggle yes/no</h3>
    <input
      type="checkbox"
      id="checkbox"
      v-model="isChecked"
      true-value="yes"
      false-value="no"
    />
    <label for="checkbox">點選選項</label>
    <p>是否選取？ {{ isChecked }}</p>
  </div>
  <div>
    <h3>單選 checkbox toggle 自定義的動態值</h3>
    <input
      type="checkbox"
      id="isCheckedCustom"
      v-model="isCheckedCustom"
      :true-value="customTrueValue"
      :false-value="customFalseValue"
    />
    <label for="isCheckedCustom">點選選項</label>
    <p>是否選取？ {{ isCheckedCustom }}</p>
  </div>
</template>
