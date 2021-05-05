<template>
  <div>
    <router-link to="/">计算总价</router-link>
    &nbsp; &nbsp; &nbsp; &nbsp;
    <router-link to="/slide">轮播图</router-link>
    &nbsp; &nbsp; &nbsp; &nbsp;
    <router-link to="/todolist">任务列表</router-link>
    &nbsp; &nbsp; &nbsp; &nbsp;
    <router-link to="/message">留言版</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
