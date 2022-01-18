import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'vue-axios'

createApp(App).use(store).use(router).use(axios).mount("#app");
