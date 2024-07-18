import { createApp } from "vue";
import store from "./store/index";
import { ElButton, ElSelect } from "element-plus";
import 'element-plus/dist/index.css';
import App from "./components/app.vue";

const app = createApp(App);
app.component(ElButton.name as string, ElButton);
app.component(ElSelect.name  as string, ElSelect);
app.use(store);
app.mount("#app");
