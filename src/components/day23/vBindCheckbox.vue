<script setup>
import { ref } from "vue";

const isCheckedSingle = ref(false);
const isCheckedMultiple = ref([]);
</script>

<template>
  <div>
    <h3>單選 checkbox</h3>
    <input type="checkbox" id="checkbox" v-model="isCheckedSingle" />
    <label for="checkbox">點選選項</label>
    <p>是否選取？ {{ isCheckedSingle }}</p>
    <h3>多選 checkbox</h3>
    <input type="checkbox" id="Jami" value="Jami" v-model="isCheckedMultiple" />
    <label for="Jami">Jami</label>
    <input
      type="checkbox"
      id="Irene"
      value="Irene"
      v-model="isCheckedMultiple"
    />
    <label for="Irene">Irene</label>
    <input
      type="checkbox"
      id="Jenny"
      value="Jenny"
      v-model="isCheckedMultiple"
    />
    <label for="Jenny">Jenny</label>
    <p>你選擇的選項是：{{ isCheckedMultiple.join() }}</p>
  </div>
</template>
