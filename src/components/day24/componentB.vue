<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref,
} from "vue";
import ComponentC from "./componentC.vue";

onBeforeMount(() => {
  console.log(`componentB: before mount!`);
});
onMounted(() => {
  console.log(`componentB: mounted!`);
});
onBeforeUpdate(() => {
  console.log(`componentB: before update!`);
});
onUpdated(() => {
  console.log(`componentB: updated!`);
});
onBeforeUnmount(() => {
  console.log(`componentB: before unmount!`);
});
onUnmounted(() => {
  console.log(`componentB: unmounted!`);
});

const count = ref(0);
const showComponentC = ref(true);
</script>

<template>
  <div style="background-color: lightgrey; padding: 10px">
    <div style="font-size: 30px">componentB</div>
    <button @click="count++">計數器：{{ count }}</button>
    <button @click="showComponentC = !showComponentC">
      componentC 切換顯示
    </button>
    <ComponentC v-if="showComponentC" />
  </div>
</template>
