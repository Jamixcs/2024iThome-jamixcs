<script setup>
import mustache from "./components/day7/Mustache.vue";
import vHtml from "./components/day7/vHtml.vue";
import vBind from "./components/day8/vBind.vue";
</script>

<template>
  <main>
    <mustache />
    <vHtml rawHtml="<strong>This is where I can put the HTML code</strong>" />
    <vBind />
  </main>
</template>
