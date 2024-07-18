import { getButton } from "../../api/button";
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
    commit("buttons", res.data);
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
