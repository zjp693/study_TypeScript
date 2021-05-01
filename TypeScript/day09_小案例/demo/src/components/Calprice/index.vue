<template>
  <div class="calcprice">
    <h5>总价{{ sumPrice }}</h5>
    <ul>
      <li
        v-for="(item, i) in fruitList"
        :key="i"
        @click="handlerSelected(i)"
        :class="{ active: item.status }"
      >
        {{ item.name + "(" + item.price + ")" + "￥" }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  setup() {
    // -1.根据截图自己定义json数据,之后进行数据渲染
    type fruitType = {
      name: string;
      price: number;
      status: boolean;
    };
    const fruitList: Array<fruitType> = reactive([
      { name: "苹果", price: 10, status: false },
      { name: "梨子", price: 15, status: false },
      { name: "樱桃", price: 20, status: false },
      { name: "西瓜", price: 25, status: false },
    ]);

    // -2.鼠标点击每一行会给当前行添加背景色红色，并且总价也会累加
    // 2.1声明总价
    const sumPrice = ref<number>(0);
    // 2.1 给li添加点击事件
    function handlerSelected(i) {
      // 2.2 把每个水果的状态取反
      fruitList[i].status = !fruitList[i].status;
      // 2.3 当水果的状为true时，给li添加类名 active 并且累加总价
      if (fruitList[i].status) {
        sumPrice.value += fruitList[i].price;
        // 2.4 否则，给li删除类名 active 并且累减总价
      } else {
        sumPrice.value -= fruitList[i].price;
      }
    }
    // -3.当鼠标再次点击之前“点击过的行”，背景色就会移除，并且总价也在对应的减少
    return {
      fruitList,
      sumPrice,
      handlerSelected,
    };
  },
});
</script>


<style scoped>
.calcprice {
  width: 200px;
  border: 1px solid #ccc;
}

ul {
  width: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid #ccc;
}

li {
  width: 100%;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}

li.active {
  background-color: red;
}
</style>