import { ApiService } from "@/common/api.service";
import { saveToken } from "@/common/jwt.service";
import { REGISTER } from "@/store/action.types.js";
import { SET_USER_DATA, SET_ERROR } from "@/store/mutation.types.js";

const state = {
  isAuthenticated: false,
  user: {},
  error: null
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [REGISTER]({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post("users", { user: credentials })
        .then(({ data }) => {
          commit(SET_USER_DATA, data.user);
          resolve();
        })
        .catch(({ response }) => {
          console.log(response.data.errors);
          commit(SET_ERROR, response.data.errors);
          reject();
        });
    });
  }
};

const mutations = {
  [SET_USER_DATA](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    ApiService.setHeader(user.token);
    saveToken(user.token);
  },
  [SET_ERROR](state, errors) {
    state.error = errors;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
