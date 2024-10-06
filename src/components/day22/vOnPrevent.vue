<template>
  <h3>預設</h3>
  <div @click="parentClick" class="parent">
    父元素
    <a href="https://www.example.com" @click="childClick" class="child"
      >子元素</a
    >
  </div>
  <h3>.prevent.self</h3>
  <div @click.prevent.self="parentClick" class="parent">
    父元素
    <a href="https://www.example.com" @click="childClick" class="child"
      >子元素</a
    >
  </div>
  <h3>.self.prevent</h3>
  <div @click.self.prevent="parentClick" class="parent">
    父元素
    <a href="https://www.example.com" @click="childClick" class="child"
      >子元素</a
    >
  </div>
</template>

<script setup>
function parentClick() {
  alert("父元素被觸發！");
  console.log("父元素被觸發！");
}

function childClick() {
  alert("子元素被觸發！");
  console.log("子元素被觸發！");
}
</script>

<style>
.parent {
  padding: 20px;
  border: 4px solid cornflowerblue;
}

.child {
  padding: 10px;
  color: white;
  background-color: sandybrown;
  text-decoration: none; /* 移除鏈接的下劃線 */
}
</style>
