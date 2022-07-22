import { createRouter,createWebHashHistory} from "vue-router";

const home = () => import("../popup/pages/homePage.vue")
const test = () => import("../popup/pages/testPage.vue")
const trande = () => import("../popup/pages/trandePage.vue")
const transfer = () => import("../popup/pages/transferPage.vue")
const vote = () => import("../popup/pages/votePage.vue")

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: home
  },
  {
    path: "/test",
    name: "test",
    component: test
  },
  {
    path: "/trande",
    name: "trande",
    component: trande
  },
  {
    path: "/transfer",
    name: "transfer",
    component: transfer
  },
  {
    path: "/vote",
    name: "vote",
    component: vote
  }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
  })