import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./global/global.scss";

Vue.config.productionTip = false;
document.title = "KabelSalat";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
