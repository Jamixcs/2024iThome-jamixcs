<script setup>
import { ref, watch } from "vue";

const count = ref(0);

watch(count, (newValue, oldValue) => {
  console.log(`count 變更: ${oldValue} -> ${newValue}`);
});
</script>
<template>
  <button @click="count++">計數器：{{ count }}</button>
</template>
