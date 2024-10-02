<script setup>
import { ref } from "vue";

const howSproutsIs = ref("cute");

const changeMind = function () {
  // 根據目前的狀態來改變 Sprouts 的狀態
  if (howSproutsIs.value === "cute") {
    howSproutsIs.value = "quiet";
  } else if (howSproutsIs.value === "quiet") {
    howSproutsIs.value = "lazy";
  } else if (howSproutsIs.value === "lazy") {
    howSproutsIs.value = "naughty";
  } else {
    howSproutsIs.value = "cute";
  }
};
</script>
<template>
  <img v-if="howSproutsIs === 'cute'" src="./cute.png" />
  <img v-else-if="howSproutsIs === 'quiet'" src="./quiet.png" />
  <img v-else-if="howSproutsIs === 'lazy'" src="./lazy.png" />
  <img v-else src="./naughty.png" />
  <h3 v-if="howSproutsIs === 'cute'">Sprouts is CUTE!</h3>
  <h3 v-else-if="howSproutsIs === 'quiet'">Sprouts is QUIET!</h3>
  <h3 v-else-if="howSproutsIs === 'lazy'">Sprouts is LAZY!</h3>
  <h3 v-else>Sprouts is NAUGHTY!</h3>
  <button @click="changeMind">改變心意鈕</button>
</template>
<style>
img {
  border-radius: 15%;
}
</style>
