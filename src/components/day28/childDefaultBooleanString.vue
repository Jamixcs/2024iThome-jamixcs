<script setup>
const props = defineProps({
  isShow: [String, Boolean],
});

console.log(`props: `, props);
console.log(`props.isShow: `, props.isShow);
</script>
<template>
  <div v-if="isShow">子組件在這邊可以接到：{{ isShow }}</div>
</template>

<!-- <script setup>
const props = defineProps({
  isShow: [Boolean, String],
});
console.log(`props: `, props);

console.log(`props.isShow: `, props.isShow);
</script>
<template>
  <div v-if="isShow">子組件在這邊可以接到：{{ isShow }}</div>
</template> -->
