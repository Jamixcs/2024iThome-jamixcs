<script setup>
import { reactive, computed } from "vue";

const myIronmanData = reactive({
  name: "++",
  topics: [
    "Day1：前言/自我介紹小廢話",
    "Day2：Vue 為啥我要認識你",
    "Day3：Vue 請你自我介紹五分鐘",
  ],
});

// 使用 computed 範例，可讀可寫
const isPassHalfIronman = computed({
  // getter
  get() {
    return myIronmanData.topics.length >= 15
      ? "對！你一定可以完賽的"
      : "還沒！繼續加油！";
  },
  // setter
  set() {
    myIronmanData.topics = Array(15).fill("一鍵完賽");
    console.log(myIronmanData.topics);
  },
});
</script>

<template>
  <h3>今天是 9/17，鐵人賽已經過一半了嗎？</h3>
  <h3>{{ isPassHalfIronman }}</h3>
  <button @click="isPassHalfIronman = '還沒！繼續加油！'">直接完賽！</button>
</template>
