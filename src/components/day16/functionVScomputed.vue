<script setup>
import { ref, reactive, computed } from "vue";

const myIronmanData = reactive({
  name: "++",
  topics: [
    "Day1：前言/自我介紹小廢話",
    "Day2：Vue 為啥我要認識你",
    "Day3：Vue 請你自我介紹五分鐘",
  ],
});

// 使用 computed 範例
const isPassHalfIronman = computed(() => {
  return myIronmanData.topics.length >= 15
    ? "對！你一定可以完賽的"
    : "還沒！繼續加油！";
});

// 使用一般函式
function isPassHalfIronmanFunction() {
  return myIronmanData.topics.length >= 15
    ? "對！你一定可以完賽的"
    : "還沒！繼續加油！";
}
</script>

<template>
  <h3>今天是 9/15，鐵人賽已經過一半了嗎？</h3>
  <span>使用 computed：{{ isPassHalfIronman }}</span>
  <br />
  <span>使用 function：{{ isPassHalfIronmanFunction() }}</span>
  <br />
</template>
