import * as firebase from 'firebase';
import axios from 'axios';
import router from '@/router';

const state = {
  user: null,
  isAuthenticated: false
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setIsAuthenticated(state, payload) {
    state.isAuthenticated = payload;
  }
};

const actions = {
  async register({ commit, dispatch }, payload) {
    try {
      commit('setLoading', true);
      commit('clearError');
      const userAuth = await firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password);

      /* Parser 에러 수정전 */
      axios
        .post('/users.json', { payload })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  },
  userLogin({ commit }, payload) {
    commit('setLoading', true);
    commit('clearError');
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit('setLoading', false);
        commit('setUser', user);
        console.log(user);
        commit('setIsAuthenticated', true);
        router.push({ name: 'home' });
      })
      .catch(() => {
        commit('setUser', null);
        commit('setIsAuthenticated', false);
      });
  },
  userSignOut({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit('setUser', null);
        commit('setIsAuthenticated', false);
        router.push('/');
      })
      .catch(() => {
        commit('setUser', null);
        commit('setIsAuthenticated', false);
        router.push('/');
      });
  }
};

const getters = {
  isAuthenticated(state) {
    return state.user !== null && state.user !== undefined;
  },
  currentUser(state) {
    return state.user;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
