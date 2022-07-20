import { createApp } from 'vue'
import App from './pages/App.vue'
import { createRouter,createWebHashHistory} from "vue-router";

const home = () => import("../popup/pages/homePage.vue")
const wallet = () => import("../popup/pages/walletInfo.vue")
const  mnemonic = () => import("../popup/pages/mnemonicPage.vue")

const routes = [
    
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      name: "home",
      component: home
    },
    {
        path: "/wallet",
        name: "wallet",
        component: wallet
    },
    {
        path: "/mnemonic",
        name: "mnemonic",
        component: mnemonic
    },
  ]

const VueRouter = createRouter({
    history:createWebHashHistory(),
    routes
  })

// createApp(App).mount('#app')

const AppVue = createApp(App)
AppVue.use(VueRouter).mount('#app')

