import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Admin from "../views/Admin.vue";
import Operator from "../views/Operator.vue";
import AdminBot from "../views/AdminBot.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin-bot",
    name: "AdminBot",
    component: AdminBot,
  },
  {
    path:'/admin',
    name:"Admin",
    component:Admin
  },
  {
    path:'/operator',
    name:"Operator",
    component:Operator
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
