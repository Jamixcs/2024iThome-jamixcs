<script setup>
const props = defineProps({
  message: {
    type: Object,
    default(rawProps) {
      return { title: "子組件給的預設值" };
    },
  },
});
console.log(`props: `, props);
console.log(`props.message: `, props.message);
</script>
<template>
  <div>子組件在這邊可以接到：{{ message.title }}</div>
</template>
