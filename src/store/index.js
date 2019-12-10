import Vue from "vue";
import Vuex from "vuex";

import auth from "@/store/auth.module";
import article from "@/store/article.module";
import profile from "@/store/profile.module";
import home from "@/store/home.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    article,
    profile,
    home
  }
});
