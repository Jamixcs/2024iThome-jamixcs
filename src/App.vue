<script setup>
import mustache from "./components/day7/Mustache.vue";
import vHtml from "./components/day7/vHtml.vue";
import vBind from "./components/day8/vBind.vue";
import expression from "./components/day9/expression.vue";
import method from "./components/day9/method.vue";
import directives from "./components/day10/directives.vue";
import ref from "./components/day11/ref.vue";
import refObj from "./components/day12/refObj.vue";
import refObj2 from "./components/day12/refObj2.vue";
import reactive from "./components/day14/reactive.vue";
import reactiveProxy from "./components/day14/reactiveProxy.vue";
import reactiveBestPractice from "./components/day14/reactiveBestPractice.vue";
import reactiveObjReturn from "./components/day14/reactiveObjReturn.vue";
import reactiveCannot from "./components/day14/reactiveCannot1.vue";
import reactiveCannot2 from "./components/day14/reactiveCannot2.vue";
import reactiveCannot3 from "./components/day14/reactiveCannot3.vue";
import refUnwrapByReactive from "./components/day15/refUnwrapByReactive.vue";
import refUnwrapByReactive2 from "./components/day15/refUnwrapByReactive2.vue";
import refArrayUnwrap from "./components/day15/refArrayUnwrap.vue";
import refTemplateUnwrap from "./components/day15/refTemplateUnwrap.vue";
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
    <h2>Day12</h2>
    <refObj />
    <refObj2 />
    <h2>Day14</h2>
    <reactive />
    <reactiveProxy />
    <reactiveBestPractice />
    <reactiveObjReturn />
    <reactiveCannot />
    <reactiveCannot2 />
    <reactiveCannot3 />
    <h2>Day15</h2>
    <refUnwrapByReactive />
    <refUnwrapByReactive2 />
    <refArrayUnwrap />
    <refTemplateUnwrap />
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
