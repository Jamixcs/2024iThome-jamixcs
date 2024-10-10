<script setup>
import { onMounted, ref } from "vue";

const list = ref(["a", "b", "c"]);
const itemRefs = ref([]);

onMounted(() => {
  console.log(list.value);
});
</script>
<template>
  <li v-for="item in list" ref="itemRefs">{{ item }}</li>
</template>
