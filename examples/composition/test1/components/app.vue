<template>
  <div>
    <h1>App {{ buttons }}</h1>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("buttons/getButtons");

    const buttons = computed(() => store.state.buttons.buttons);

    return {
      buttons,
    };
  },
};
</script>
