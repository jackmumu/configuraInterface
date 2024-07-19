<template>
  <div>
    <div class="header">
      <div class="header_one">
        <el-button>{{ menustart?.text }}</el-button>
      </div>
      <div class="header_two">
        <div v-for="item in menustart?.children">
          <el-button v-if="item.text" :id="item.id" :disabled="item.disabled" @click="copy(item.id)">{{ item.text }}</el-button>
        </div>
      </div>
    </div>
    <div class="footer">
      <input v-model="id"></input>
      <el-button v-for="item in statusButtons" @click="status(item.id)">{{item.text}}</el-button>
    </div>
  </div>
</template>
<script>
import { computed, ref} from "vue";
import { useStore } from "vuex";
import { ElMessage } from "element-plus";
import { configuraInterface } from "../../../../src/index";
export default {
  setup() {
    const statusButtons = [
      {
        id: 'hide',
        text: '隐藏',
      },
      {
        id: 'show',
        text: '显示',
      },
      {
        id: 'disabled',
        text: '禁用',
      },
      {
        id: 'undisabled',
        text: '启用',
      },
    ];
    const store = useStore();
    store.dispatch("buttons/getButtons");
    const buttons = computed(() => store.getters.buttons.buttons);
    const menustart = computed(() => {
      const buttons = store.getters["buttons/buttons"];
      return buttons.find((button) => button.id === "menu-start");
    });
    const id = ref('')
    const copy = (id) => {
      navigator.clipboard.writeText(id)
      ElMessage.success(`复制成功 ${id}`)
    }
    const status = (operation)=> {
      const buttons = configuraInterface[operation](id.value)
      store.commit('buttons/buttons', buttons)
    }
    return {
      buttons,
      menustart,
      id,
      status,
      copy,
      statusButtons
    };
  },
};
</script>
<style scoped>
.header_one,
.header_two {
  display: flex;
  justify-content: center;
}
</style>
