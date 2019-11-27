import { ApiService } from "@/common/api.service";
import JwtService from "@/common/jwt.service";
import { REGISTER, LOGIN, LOGOUT, FETCH_USER, CHECK_AUTH } from "@/store/action.types.js";
import { SET_USER_DATA, SET_ERROR, DESTROY_USER } from "@/store/mutation.types.js";

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
  },
  error(state) {
    return state.error;
  }
};

const actions = {
  [REGISTER]({ commit }, credentials) {
    return new Promise(resolve => {
      ApiService.post("users", { user: credentials })
        .then(({ data }) => {
          commit(SET_USER_DATA, data.user);
          resolve(data);
        })
        .catch(({ response }) => {
          console.log(response.data.errors);
          commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [LOGIN]({ commit }, payload) {
    return new Promise(resolve => {
      ApiService.post("users/login", { user: payload })
        .then(({ data }) => {
          commit(SET_USER_DATA, data.user);
          resolve(data);
        })
        .catch(({ response }) => {
          commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [LOGOUT]({ commit }) {
    commit(DESTROY_USER);
  },
  [CHECK_AUTH]({ commit }) {
    return new Promise(() => {
      if (JwtService.getToken()) {
        console.log();
        ApiService.setHeader();
        ApiService.get("user")
          .then(({ data }) => {
            commit(SET_USER_DATA, data.user);
          })
          .catch(({ response }) => {
            commit(SET_ERROR, response);
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
  [DESTROY_USER](state) {
    JwtService.destroyToken();
    location.reload();
  }
  // [PURGE_AUTH](state) {
  //   state.isAuthenticated = false;
  //   state.user = {};
  //   state.errors = {};
  //   JwtService.destroyToken();
  // }
};

export default {
  state,
  getters,
  actions,
  mutations
};
