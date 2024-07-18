<template>
  <div>
    <div class="header">
      <div>
        <el-button>{{ menustart?.text }}</el-button>
      </div>
      <div>
        <div v-for="item in menustart?.children">
          <el-button>{{ item.text }}</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("buttons/getButtons");
    console.log(store.state.buttons.buttons.find);
    const buttons = computed(() => store.state.buttons.buttons);
    const menustart = computed(() => {
      const buttons = store.state.buttons.buttons.buttons;
      return buttons.find((button) => button.id === "menu-start");
    });
    return {
      buttons,
      menustart,
    };
  },
};
</script>
