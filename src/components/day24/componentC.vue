<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
onBeforeMount(() => {
  console.log(`componentC: before mount!`);
});
onMounted(() => {
  console.log(`componentC: mounted!`);
});
onBeforeUpdate(() => {
  console.log(`componentC: before update!`);
});
onUpdated(() => {
  console.log(`componentC: updated!`);
});
onBeforeUnmount(() => {
  console.log(`componentC: before unmount!`);
});
onUnmounted(() => {
  console.log(`componentC: unmounted!`);
});
</script>

<template>
  <div style="background-color: lightsteelblue; padding: 10px">
    <div style="font-size: 30px">componentC</div>
  </div>
</template>
