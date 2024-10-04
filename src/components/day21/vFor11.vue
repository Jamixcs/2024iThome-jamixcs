<script setup>
import { ref } from "vue";

const letters = ref(["a", "b", "c", "d", "e"]);
const pop = function () {
  letters.value.pop();
};
const filter = function () {
  letters.value = letters.value.filter((letter) => letter.match(/a/));
};
</script>

<template>
  <div class="wrap">
    <div>
      <div>pop result：</div>
      <li v-for="(letter, index) in letters" :key="index">{{ letter }}</li>
      <button @click="pop">run pop</button>
    </div>
    <div>
      <div>filter result：</div>
      <li v-for="(letter, index) in letters" :key="index">{{ letter }}</li>
      <button @click="filter">run filter</button>
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
