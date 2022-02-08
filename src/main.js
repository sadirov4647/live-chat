import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueApexCharts from 'vue3-apexcharts';
import Select2 from 'vue3-select2-component'

createApp(App)
  .use(store)
  .use(router)
  .use(VueApexCharts)
  .use(Select2)
  .mount('#app');