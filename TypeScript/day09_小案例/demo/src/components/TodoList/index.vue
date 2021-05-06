<template>
  <div id="app" class="main">
    <h2>小目标列表</h2>
    <div class="list">
      <h3>添加小目标</h3>
      <input
        type="text"
        class="text-keyword"
        placeholder="输入小目标后，按回车确认"
      />
      <p>共有2个目标，已完成0，还有2条未完成</p>
    </div>
    <ul>
      <li class="li1">
        <div>
          <span class="type-span"></span>
          <span>html5</span>
          <span class="close">X</span>
        </div>
      </li>
      <li class="li1">
        <div>
          <span class="type-span"></span>
          <span>css3</span>
          <span class="close">X</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>


<style scoped>
body {
  font-family: "微软雅黑";
  font-size: 14px;
}
input {
  font-size: 14px;
}
body,
ul,
div,
html {
  padding: 0;
  margin: 0;
}
.hidden {
  display: none;
}
.main {
  width: 800px;
  margin: 0 auto;
}
li {
  list-style-type: none;
  line-height: 40px;
  position: relative;
  border: 1px solid transparent;
  padding: 0 20px;
}
li .type-span {
  display: block;
  width: 10px;
  height: 10px;
  background: #ccc;
  margin: 14px 10px 0 0;
  float: left;
}
li .close {
  position: absolute;
  color: #f00;
  font-size: 20px;
  line-height: 40px;
  height: 40px;
  right: 20px;
  cursor: pointer;
  display: none;
  top: 0;
}
li:hover {
  border: 1px solid #09f;
}
li:hover .close {
  display: block;
}
li .text-keyword {
  height: 40px;
  padding-left: 10px;
  box-sizing: border-box;
  margin-left: 10px;
  width: 80%;
  display: none;
}
.text-keyword {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding-left: 10px;
  outline: none;
}
</style>