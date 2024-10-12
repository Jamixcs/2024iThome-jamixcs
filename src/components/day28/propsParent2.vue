<script setup>
import { ref } from "vue";
import Band from "./propsBand.vue"; // import 子組件
const bandList = ref([
  { name: "溫蒂漫步", songs: ["Spring Spring", "我想和你一起", "艾菲號"] },
  { name: "甜約翰", songs: ["降雨機率", "城市的浪漫運作", "留給你的我從未"] },
  { name: "椅子樂團", songs: ["樹屋", "來自月球的L", "另一個答案"] },
]);
</script>
<template>
  <div>
    <Band v-for="band in bandList" :key="band.id" :name="band.name" />
  </div>
</template>
