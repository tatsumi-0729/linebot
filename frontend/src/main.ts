import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  // 下記で最初にApp.vueを読み込む設定になっている。
  render: (h) => h(App),
}).$mount("#app");
