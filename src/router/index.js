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
    component:Admin,
    props:true,
    children:[
      {
        path:'chat',
        name:'Chat',
        component:() => import('../components/Admin/AdminRoutes/Chat.vue')
      },
      {
        path:'main-page',
        name:'Main',
        component:() => import('../components/Admin/AdminRoutes/MainPage.vue')
      },
      {
        path:'report',
        name:'Report',
        component:() => import('../components/Admin/AdminRoutes/Report.vue')
      },
      {
        path:'report/:id',
        name:'ReportChild',
        component:() => import('../components/Admin/AdminRoutes/ReportChild.vue'),
        props:true
      },
      {
        path:'operator-settings',
        name:'OperatorSettings',
        component:() => import('../components/Admin/AdminRoutes/OperatorSettings.vue'),
      },
      {
        path:"add-operator",
        name:"AddOperator",
        component:() => import('../components/Admin/AdminRoutes/AddOperator.vue')
      },
      {
        path:'bot-settings',
        name:'BotSettings',
        component:() => import('../components/Admin/AdminRoutes/BotSettings/BotSettings.vue')
      },
    ]
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
