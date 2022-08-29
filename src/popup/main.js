import { createApp } from 'vue'
import App from './pages/App.vue'
import { createRouter, createWebHashHistory } from "vue-router";
import vant from 'vant'
import 'vant/lib/index.css'
import '../assets/icons/iconfont.css'


const home = () => import("../popup/pages/homePage.vue")
const wallet = () => import("../popup/pages/walletInfo.vue")
const mnemonic = () => import("../popup/pages/mnemonicPage.vue")
const trande = () => import("../popup/pages/trandePage.vue")
const createWallet = () => import("../popup/pages/createWalletPage.vue")
const success = () => import("../popup/pages/successPage.vue")
const backupMnemonic = () => import("../popup/pages/backupMnemonic.vue")
const indexPage = () => import("../popup/pages/indexPage.vue")
const coinDetails = () => import("../popup/pages/coinDetails.vue")

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
  {
    path: "/trande",
    name: "trande",
    component: trande
  },
  {
    path: "/createWallet",
    name: "createWallet",
    component: createWallet
  },
  {
    path: "/success",
    name: "success",
    component: success
  },
  {
    path: "/backupMnemonic",
    name: "backupMnemonic",
    component: backupMnemonic
  },
  {
    path: "/indexPage",
    name: "indexPage",
    component: indexPage
  },
  {
    path: "/coinDetails",
    name: "coinDetails",
    component: coinDetails
  },
]

const VueRouter = createRouter({
  history: createWebHashHistory(),
  routes
})

// createApp(App).mount('#app')

const AppVue = createApp(App)
AppVue.use(VueRouter).use(vant).mount('#app')

