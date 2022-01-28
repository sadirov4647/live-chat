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
        path:'main-page',
        name:'Main',
        component:() => import('../components/Admin/AdminRoutes/MainPage.vue')
      },
      {
        path:'personal-settings',
        name:'PersonalSettings',
        component:() => import('../components/Admin/AdminRoutes/PersonalSettings.vue')
      },
      {
        path:'change-password',
        name:'ChangePassword',
        component:() => import('../components/Admin/AdminRoutes/ChangePassword.vue')
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
      {
        path:'bot-comments',
        name:'BotComments',
        component:() => import('../components/Admin/AdminRoutes/BotSettings/BotComments.vue')
      },
    ]
  },
  {
    path:'/operator',
    name:"Operator",
    component:Operator,
    children:[
      {
        path:"operator/:id",
        name:"Chatter",
        component:()=> import('../components/Operator/Chatter'),
        props:true
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
