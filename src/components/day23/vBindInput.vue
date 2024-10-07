<script setup>
import { ref } from "vue";

const text = ref("");
</script>
<template>
  <h3>input text</h3>
  <!-- <div>
    <input
      :value="text"
      @input="(event) => (text = event.target.value)"
      placeholder="請輸入一些內容..."
    />
    <p>當前輸入的內容是：{{ text }}</p>
  </div> -->
  <input v-model="text" />
  <p>你輸入的內容是：{{ text }}</p>
</template>
