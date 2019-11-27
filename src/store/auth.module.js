import { ApiService } from "@/common/api.service";
import JwtService from "@/common/jwt.service";
import { REGISTER, LOGIN, LOGOUT } from "@/store/action.types.js";
import { SET_USER_DATA, SET_ERROR, CHECK_AUTH } from "@/store/mutation.types.js";

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
  },
  [LOGIN]({ commit }, payload) {
    return new Promise((resolve, reject) => {
      ApiService.post("users/login", { user: payload })
        .then(({ data }) => {
          commit(SET_USER_DATA, data.user);
          resolve();
        })
        .catch(err => {
          console.log(err);
          commit(SET_ERROR, err);
          reject();
        });
    });
  },
  [LOGOUT]({ commit }) {
    commit(LOGOUT);
  },
  [CHECK_AUTH]({ commit }) {
    return new Promise((resolve, reject) => {
      if (JwtService.getToken()) {
        ApiService.get("user")
          .then(({ data }) => {
            commit(SET_USER_DATA, data.user);
            resolve();
          })
          .catch(err => {
            console.log(err);
            commit(SET_ERROR, err);
            reject();
          });
      }
    });
  }
};

const mutations = {
  [SET_USER_DATA](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    ApiService.setHeader(user.token);
    JwtService.saveToken(user.token);
  },
  [SET_ERROR](state, errors) {
    state.error = errors;
  },
  [LOGOUT](state) {
    JwtService.destroyToken();
    location.reload();
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
