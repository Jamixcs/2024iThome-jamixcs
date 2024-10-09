<script setup>
import { ref, watch, computed } from "vue";

const count = ref(0);

const countDouble = computed(() => {
  return count.value * 2;
});
watch(countDouble, (newValue, oldValue) => {
  console.log(`countDouble 變更: ${oldValue} -> ${newValue}`);
});
</script>
<template>
  <button @click="count++">計數器：{{ count }}</button>
</template>
