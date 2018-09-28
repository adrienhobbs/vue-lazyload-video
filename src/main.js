import Vue from "vue";
import App from "./App.vue";
import OnVisible from "vue-on-visible";
Vue.use(OnVisible);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
