<script setup>
import { reactive } from "vue";

let state = reactive({ count: 0 });

function changeState() {
  state = reactive({ count: 1 });
  console.log(`更改物件`, state);
}
function changeValue() {
  state.count++;
  console.log(`修改屬性`, state);
}
</script>

<template>
  <div>
    <h3>替換物件範例</h3>
    <p>目前值：{{ state.count }}</p>
    <button @click="changeState">替換 state</button>

    <h3>修改屬性範例</h3>
    <p>目前值：{{ state.count }}</p>
    <button @click="changeValue">增加計數</button>
  </div>
</template>
