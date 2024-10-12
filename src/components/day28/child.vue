<script setup>
// 1. 不需要 import 就可以使用。
const props = defineProps(["message"]);
// 2. 會 return 一個物件，其中包含定義的所有參數。
console.log(props);
</script>
<template>
  <h3>子組件在這邊可以接到：{{ message }}</h3>
  <!-- 3. 參數可以直接在模板中使用。 -->
</template>
