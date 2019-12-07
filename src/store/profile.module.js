import { ProfileService, ApiService } from "@/common/api.service";
import { FETCH_PROFILE, FETCH_USER, UPDATE_USER } from "@/store/action.types";
import { SET_PROFILE, SET_USER } from "@/store/mutation.types";

const state = {
  profile: {},
  user: {}
};

const getters = {
  profile(state) {
    return state.profile;
  },

  user(state) {
    return state.user;
  }
};

const actions = {
  [FETCH_PROFILE]({ commit }, username) {
    ProfileService.get(username).then(({ data }) => {
      commit(SET_PROFILE, data.profile);
    });
  },

  [FETCH_USER]({ commit }, username) {
    ApiService.query("/user").then(({ data }) => {
      commit(SET_USER, data.user);
    });
  },

  [UPDATE_USER]({ commit }, payload) {
    ApiService.put("/user", payload).then(({ data }) => {
      commit(SET_USER, data.user);
    });
  }
};

const mutations = {
  [SET_PROFILE](state, profile) {
    state.profile = profile;
  },

  [SET_USER](state, user) {
    state.user = user;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
