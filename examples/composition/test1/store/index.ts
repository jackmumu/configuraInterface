import { createStore, createLogger } from "vuex";
import buttons from "./modules/buttons";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    buttons,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
