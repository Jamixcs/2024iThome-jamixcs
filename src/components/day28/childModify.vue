<script setup>
import { ref } from "vue";

const props = defineProps(["message"]);
const defaultProps = ref(props.message);

function messageUpdate() {
  defaultProps.value = "從父組件定義的資料被修改了！";
}
</script>

<template>
  <h3>子組件在這邊可以接到：{{ defaultProps }}</h3>
  <button @click="messageUpdate">增值</button>
</template>
