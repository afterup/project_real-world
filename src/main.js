import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { CHECK_AUTH } from "./store/action.types";

import vuetify from "./plugins/vuetify";

import { ApiService } from "./common/api.service";

Vue.config.productionTip = false;

ApiService.init();

new Vue({
  router,
  store,
  created() {
    this.$store.dispatch(CHECK_AUTH);
  },
  vuetify,
  render: h => h(App)
}).$mount("#app");
