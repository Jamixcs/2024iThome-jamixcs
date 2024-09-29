<script setup>
import { reactive } from "vue";

const myIronmanData = reactive({
  name: "++",
  topics: [
    "Day1：前言/自我介紹小廢話",
    "Day2：Vue 為啥我要認識你",
    "Day3：Vue 請你自我介紹五分鐘",
  ],
});
</script>

<template>
  <h3>今天是 9/15，鐵人賽已經過一半了嗎？</h3>
  <span>{{
    myIronmanData.topics.length >= 15
      ? "對！你一定可以完賽的"
      : "還沒！繼續加油！"
  }}</span>
  <br />
  <h3>今天是 9/16，鐵人賽已經過一半了嗎？</h3>
  <span>{{
    myIronmanData.topics.length >= 15
      ? "對！你一定可以完賽的"
      : "還沒！繼續加油！"
  }}</span>
  <br />
  <h3>今天是 9/17，鐵人賽已經過一半了嗎？</h3>
  <span>{{
    myIronmanData.topics.length >= 15
      ? "對！你一定可以完賽的"
      : "還沒！繼續加油！"
  }}</span>
</template>
