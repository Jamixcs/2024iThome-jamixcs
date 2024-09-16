<script setup>
const dynamicId = "div2";
const button = "button";
const isButtonDisabled = true;
const isButtonDisabled2 = false;
const objAttributes = {
  id: "div3",
  class: "mainContent",
};
</script>

<template>
  <div v-bind:id="dynamicId">Here is v-bind example!</div>
  <button :class="button">Here is button example!</button>
  <br />
  <button :disabled="isButtonDisabled">Here is disabledButton example!</button>
  <button :disabled="isButtonDisabled2">Here is disabledButton example!</button>
  <p v-bind="objAttributes">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus
    ex reprehenderit commodi illo veniam exercitationem quia eius laborum
    doloribus.
  </p>
</template>

<style>
#div1 {
  color: red;
}
#div2 {
  color: green;
}
.button {
  background-color: yellow;
}
#div3 {
  color: blue;
}
.mainContent {
  background-color: plum;
}
</style>
