<script setup>
import { ref } from "vue";

const title = ref("樂團");
const bandList = ref([
  { name: "溫蒂漫步", songs: ["Spring Spring", "我想和你一起", "艾菲號"] },
  { name: "甜約翰", songs: ["降雨機率", "城市的浪漫運作", "留給你的我從未"] },
]);
</script>

<template>
  <li v-for="(band, index) in bandList">
    {{ title }} {{ index + 1 }}：{{ band.name }}
    <ul v-for="song in band.songs">
      歌曲：{{
        song
      }}
    </ul>
  </li>
</template>

<style>
ul {
  margin: 0;
}
</style>
