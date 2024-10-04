<script setup>
import { ref } from "vue";

const letters = ref([
  ["a", "b", "c"],
  ["d", "a", "f"],
]);

function filterA(array) {
  return array.filter((letter) => letter.match(/a/));
}
</script>

<template>
  <ul v-for="letterArray in letters">
    <li v-for="innerLetter in filterA(letterArray)">{{ innerLetter }}</li>
  </ul>
</template>
