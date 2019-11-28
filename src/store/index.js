import Vue from "vue";
import Vuex from "vuex";

import auth from "@/store/auth.module";
import article from "@/store/article.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    article
  }
});
