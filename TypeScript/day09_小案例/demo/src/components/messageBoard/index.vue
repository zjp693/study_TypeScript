<template>
  <div id="app" class="container">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
      crossorigin="anonymous"
    />
    <h3>留言板:</h3>
    <div class="form-group" style="max-height: 300px; overflow: auto">
      <div
        class="row list-group-item"
        v-for="(item, index) in searchList"
        :key="index"
      >
        <!-- {{ item }} -->
        <div class="col-md-1">{{ item.nickname }}</div>
        <div class="col-md-5">{{ item.content }}</div>
        <div class="col-md-2">
          {{ item.date.toLocaleString("cn-GB", { hour12: false }) }}
        </div>
        <div class="col-md-4">
          <button
            class="btn btn-danger"
            type="button"
            @click="delMessage(item.index)"
          >
            删除
          </button>
          <button
            class="btn btn-info"
            type="button"
            @click="editMessage(item.id)"
          >
            修改
          </button>
        </div>
      </div>
    </div>
    <br /><br /><br />
    <form class="form-horizontal">
      <div class="form-group">
        <label for="search" class="col-sm-1 control-label">搜索</label>
        <div class="col-sm-11">
          <input
            type="text"
            class="form-control"
            id="search"
            v-model="keywords"
            placeholder="搜索留言"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="nikename" class="col-sm-1 control-label">昵称</label>
        <div class="col-sm-11">
          <input
            type="text"
            class="form-control"
            id="nikename"
            v-model="nickname"
            placeholder="请输入昵称"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="content" class="col-sm-1 control-label">内容</label>
        <div class="col-sm-11">
          <textarea
            id="content"
            class="form-control"
            rows="3"
            v-model="content"
          ></textarea>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-success col-sm-1 col-sm-push-9"
        @click="addMessage"
      >
        发表
      </button>
      <button
        type="button"
        class="btn btn-danger col-sm-1 col-sm-push-10"
        @click="clearMessage"
      >
        清屏
      </button>
    </form>
    <!-- 修改 -->
    <form class="form-horizontal" v-if="isEdit">
      <input type="hidden" />
      <div class="form-group">
        <label class="col-sm-1 control-label">修改：</label>
        <div class="col-sm-11">
          <textarea
            class="form-control"
            rows="3"
            v-model="editvalue"
          ></textarea>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-success col-sm-1 col-sm-push-11"
        @click="confirmMessage"
      >
        确认修改
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";

export default defineComponent({
  setup() {
    // 渲染留言版
    // 声明数据类型
    type mesType = {
      id: number;
      nickname: string;
      content: string;
      date: Date;
    };
    // 声明默认数据
    const messageList: Array<mesType> = reactive([
      {
        id: 1,
        nickname: "笑话",
        content: "今天天气真好",
        date: new Date(),
      },
      {
        id: 2,
        nickname: "小草",
        content: "是呀，那咱们出去晒太阳吧",
        date: new Date(),
      },
    ]);
    //     - 发表功能:做非空校验，如果昵称和内容有一项为空，就不能发表
    // 定义数据
    const nickname = ref<string>("");
    const content = ref<string>("");
    // 点击事件
    function addMessage() {
      console.log(nickname.value.trim().length);

      // 判断是否为空
      if (
        nickname.value.trim().length === 0 ||
        content.value.trim().length === 0
      )
        return alert("请输入昵称和内容！！！");

      // 添加到数组
      messageList.push({
        id: messageList.length,
        nickname: nickname.value,
        content: content.value,
        date: new Date(),
      });
      // 清空
      nickname.value = "";
      content.value = "";
    }

    //   注意: 日期的格式为:年-月-日-小时:分钟
    // - 删除功能:点击”删除”按钮，删除当前这一条留言
    function delMessage(id) {
      const index = messageList.findIndex((itme) => itme.id == id);
      messageList.splice(index, 1);
    }
    // - 修改功能:点击”修改”按钮，出现对应的修改框
    const isEdit = ref<boolean>(false);
    const editvalue = ref<string>("");
    const currentId = ref<number>();
    function editMessage(id) {
      messageList.some((item) => {
        if (item.id == id) {
          isEdit.value = true;
          currentId.value = id;
          editvalue.value = item.content;
        }
      });
    }
    const confirmMessage = () => {
      if (editvalue.value.trim().length == 0) return;
      messageList.some((item) => {
        if (item.id == currentId.value) {
          item.content = editvalue.value;
          isEdit.value = false;
          return true;
        }
      });
    };
    // - 清屏功能:点击”清屏”按钮，所有的留言都被删除
    function clearMessage() {
      messageList.splice(0, messageList.length);
    }
    // - 搜索功能：点击”搜索”按钮，匹配对应的数据
    const keywords = ref<string>("");
    const searchList = computed(() => {
      console.log(1);
      return messageList.filter((item) => {
        return (
          item.nickname.includes(keywords.value) ||
          item.content.includes(keywords.value)
        );
      });
    });
    return {
      messageList,
      nickname,
      content,
      addMessage,
      delMessage,
      editMessage,
      clearMessage,
      searchList,
      keywords,
      isEdit,
      editvalue,
      currentId,
      confirmMessage,
    };
  },
});
</script>


<style scoped>
</style>