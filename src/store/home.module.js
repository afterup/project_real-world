import { ArticleService, ApiService } from "@/common/api.service";
import { FETCH_ARTICLES } from "@/store/action.types.js";
import { SET_ARTICLES, SET_LOADING_STATUS, RESET_STATE } from "@/store/mutation.types.js";

const state = {
  isLoading: false,
  articles: [],
  tags: []
};

const getters = {
  articles(state) {
    return state.articles;
  },
  tags(state) {
    return state.tags;
  },
  isLoading(state) {
    return state.isLoading;
  }
};

const actions = {
  [FETCH_ARTICLES]({ commit }, params) {
    commit(SET_LOADING_STATUS);
    console.log(params);
    ArticleService.get(params.type, params.filters).then(({ data }) => {
      commit(SET_ARTICLES, data.articles);
      commit(SET_LOADING_STATUS);
    });
  },
  FETCH_TAGS({ commit }) {
    ApiService.get("tags").then(({ data }) => {
      commit("SET_TAGS", data.tags);
    });
  }
};

const mutations = {
  [SET_ARTICLES](state, articles) {
    state.articles = articles;
  },
  [SET_LOADING_STATUS](state) {
    state.isLoading = !state.isLoading;
  },
  SET_TAGS(state, tags) {
    state.tags = tags;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
