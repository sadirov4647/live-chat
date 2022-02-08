import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueApexCharts from "vue3-apexcharts";
import vueSelect from 'vue-select2'

createApp(App).use(store).use(router).use(VueApexCharts).use(vueSelect).mount("#app");
