<script setup>
import { reactive } from "vue";

const obj = { answer: "" };
const reactiveObj = reactive(obj);

// 修改原始物件
function changeOriginal() {
  obj.answer = "原始物件鼠掉了";
  console.log(obj);
}
// 修改代理物件
function changeReactive() {
  reactiveObj.answer = "代理物件鼠掉了";
  console.log(reactiveObj);
}
</script>

<template>
  <div class="container">
    <h1>今天是鐵人賽第 14 天</h1>
    <p>點擊下面的按鈕來看看原始物件和代理物件的不同反應。</p>
    <div>
      <h3>· 原始物件 你還活著嗎？ {{ obj.answer }}</h3>
      <button @click="changeOriginal">原始物件要回答</button>
    </div>
    <div>
      <h3>· 代理物件 你還活著嗎？ {{ reactiveObj.answer }}</h3>
      <button @click="changeReactive">代理物件要回答</button>
    </div>
  </div>
</template>
