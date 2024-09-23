<template>
  <p v-if="truthyValue">Here is a "truthy value" of v-if example.</p>
  <p v-if="falsyValue">Here is a "falsy value" of v-if example.</p>
  <img :src="imagePath" />
  <br />
  <button @[eventName]="doSomething">Click Me!!!!</button>
</template>

<script setup>
const truthyValue = 123;
const falsyValue = "";
const imagePath = "src/components/day10/images/Jerry_watching.jpg";
const eventName = "click";
const doSomething = () => {
  console.log(`You are the BEST`);
};
</script>

<style>
img {
  width: 300px;
}
</style>
