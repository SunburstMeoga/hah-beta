import { createRouter,createWebHashHistory} from "vue-router";

const home = () => import("../popup/pages/homePage.vue")
const test = () => import("../popup/pages/testPage.vue")

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
  }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
  })