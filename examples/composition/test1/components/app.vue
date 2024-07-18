<template>
  <div>
    <div class="header">
      <div class="header_one">
        <el-button>{{ menustart?.text }}</el-button>
      </div>
      <div class="header_two">
        <div v-for="item in menustart?.children">
          <el-button v-if="item.text" :id="item.id" :disabled="item.disabled">{{ item.text }}</el-button>
        </div>
      </div>
    </div>
    <div class="footer">
      <input v-model="id"></input>
      <el-button @click="hide">隐藏</el-button>
      <el-button @click="show">显示</el-button>
      <el-button @click="disabled">禁用</el-button>
      <el-button @click="undisabled">启用</el-button>
    </div>
  </div>
</template>
<script>
import { computed, ref} from "vue";
import { useStore } from "vuex";
import { configuraInterface } from "../../../../src/index";
export default {
  setup() {
    const store = useStore();
    store.dispatch("buttons/getButtons");
    const buttons = computed(() => store.getters.buttons.buttons);
    const menustart = computed(() => {
      const buttons = store.getters["buttons/buttons"];
      return buttons.find((button) => button.id === "menu-start");
    });
    const id = ref('')
    const hide = () => {
      const buttons = configuraInterface.hide(id.value)
      store.commit('buttons/buttons', buttons)
    };
    const show = () => {
      const buttons = configuraInterface.show(id.value)
      store.commit('buttons/buttons', buttons)
    };
    const disabled = () => {
      const buttons = configuraInterface.disabled(id.value)
      store.commit('buttons/buttons', buttons)
    };
    const undisabled = () => {
      const buttons = configuraInterface.undisabled(id.value)
      store.commit('buttons/buttons', buttons)
    };
    return {
      buttons,
      menustart,
      id,
      hide,
      show,
      disabled,
      undisabled,
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
