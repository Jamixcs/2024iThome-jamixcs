<script setup>
import mustache from "./components/day7/Mustache.vue";
import vHtml from "./components/day7/vHtml.vue";
import vBind from "./components/day8/vBind.vue";
import expression from "./components/day9/expression.vue";
import method from "./components/day9/method.vue";
import directives from "./components/day10/directives.vue";
import ref from "./components/day11/ref.vue";
</script>

<template>
  <main>
    <h2>Day7</h2>
    <mustache />
    <vHtml rawHtml="<strong>This is where I can put the HTML code</strong>" />
    <h2>Day8</h2>
    <vBind />
    <h2>Day9</h2>
    <expression />
    <method />
    <h2>Day10</h2>
    <directives />
    <h2>Day11</h2>
    <ref />
  </main>
</template>

<style>
h2 {
  background-color: black;
  color: white;
  text-align: center;
  padding: 10px;
  margin: 0 auto;
}
</style>
