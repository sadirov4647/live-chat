import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueApexCharts from "vue3-apexcharts";
import vSelect from 'vue-select'

createApp(App).use(store).use(router).use(VueApexCharts).use(vSelect).mount("#app");
