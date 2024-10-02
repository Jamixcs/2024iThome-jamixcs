<script setup>
import { ref } from "vue";

const cute = ref(true);
const changeMind = function () {
  cute.value = !cute.value;
};
</script>
<template>
  <img v-if="cute" src="./cute.png" />
  <img v-else src="./naughty.png" />
  <h3 v-if="cute">Sprouts is CUTE!</h3>
  <h3 v-else>Sprouts is NAUGHTY!</h3>
  <button @click="changeMind">改變心意鈕</button>
</template>
<style>
img {
  border-radius: 15%;
}
</style>
