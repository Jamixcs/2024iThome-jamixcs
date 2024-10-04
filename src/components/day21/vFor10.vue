<script setup>
import { ref } from "vue";

const letters = ref(["a", "b", "c", "d", "e"]);
const filter = function () {
  letters.value.filter((letter) => letter.match(/a/));
  console.log(letters.value);
};
const filterCorrect = function () {
  letters.value = letters.value.filter((letter) => letter.match(/a/));
  console.log(letters.value);
};
</script>

<template>
  <div class="wrap">
    <div>
      <div>filter result：</div>
      <li v-for="(letter, index) in letters" :key="index">{{ letter }}</li>
      <button @click="filter">run filter</button>
      <button @click="filterCorrect">run filter Correct</button>
    </div>
  </div>
</template>
<style>
.wrap {
  display: flex;
}
.wrap > div {
  padding: 20px;
  border: 3px solid slateblue;
}
</style>
