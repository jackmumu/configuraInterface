import { getButton } from "../../api/button";
// import { configuraInterface } from "configuraInterface";
import { configuraInterface } from "../../../../../src/index";
// initial state
const state = () => ({
  buttons: [],
});

// getters
const getters = {
  buttons: (state: any) => state.buttons,
};

// actions
const actions = {
  getButtons: async ({ commit }: { commit: any }) => {
    const res = await getButton();
    new configuraInterface({ data: res.data.buttons } as any);
    commit("buttons", configuraInterface.getButtons);
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
