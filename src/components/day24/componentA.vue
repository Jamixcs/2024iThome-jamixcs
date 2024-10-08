<script setup>
import ComponentB from "./componentB.vue";
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, ref } from "vue";

onBeforeMount(() => {
  console.log(`componentA: before mount!`);
});
onMounted(() => {
  console.log(`componentA: mounted!`);
});
onBeforeUpdate(() => {
  console.log(`componentA: before update!`);
});
onUpdated(() => {
  console.log(`componentA: updated!`);
});
const showComponentB = ref(true);
</script>
<template>
  <div style="background-color: lavender; padding: 10px">
    <div style="font-size: 30px">componentA</div>
    <button @click="showComponentB = !showComponentB">
      componentB 切換顯示
    </button>
    <ComponentB v-if="showComponentB" />
  </div>
</template>
