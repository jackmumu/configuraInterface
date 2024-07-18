import { getButton } from "../../api/button";
import { configuraInterface } from "configuraInterface";
// initial state
const state = () => ({
  buttons: {
    buttons: [],
  },
});

// getters
const getters = {};

// actions
const actions = {
  getButtons: async ({ commit }: { commit: any }) => {
    const res = await getButton();
    const c = new configuraInterface({ data: res.data.buttons } as any);
    commit("buttons", c.getButtons);
  },
};

// mutations
const mutations = {
  buttons(state: any, buttons: any) {
    state.buttons = buttons;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
