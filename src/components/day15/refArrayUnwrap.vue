<script setup>
import { reactive, ref } from "vue";

// Array
const classmates = reactive([ref("Jami"), ref("Irene"), ref("Jenny")]);
console.log(classmates);
console.log(classmates[0]);
console.log(classmates[0].value);

// Map
const classmateMap = reactive(new Map([["name", ref("Jami")]]));
console.log(classmateMap.get("name"));
console.log(classmateMap.get("name").value);
</script>

<template></template>
