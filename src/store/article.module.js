import { ApiService, ArticleService } from "@/common/api.service";
import {
  FETCH_ARTICLE,
  FETCH_ARTICLES,
  PUBLISH_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE
} from "@/store/action.types.js";
import {
  SET_ARTICLE,
  SET_ARTICLES,
  SET_LOADING_STATUS,
  FRESH_ARTICLE
} from "@/store/mutation.types.js";

const state = {
  isLoading: false,
  articles: [],
  article: {
    title: "",
    description: "",
    body: "",
    tagList: [],
    author: {}
  },
  error: null
};

const getters = {
  articles(state) {
    return state.articles;
  },
  article(state) {
    return state.article;
  },
  isLoading(state) {
    return state.isLoading;
  }
};

const actions = {
  [FETCH_ARTICLES]({ commit }, type, params) {
    commit(SET_LOADING_STATUS);
    ArticleService.get(type, params).then(({ data }) => {
      commit(SET_LOADING_STATUS);
      commit(SET_ARTICLES, data.articles);
    });
  },
  async [FETCH_ARTICLE]({ commit }, slug) {
    const { data } = await ArticleService.getOne(slug);
    commit(SET_ARTICLE, data.article);
    return data.article;
  },
  async [PUBLISH_ARTICLE]({ commit }, params) {
    const { data } = await ArticleService.post(params);
    return data.article.slug;
  },
  async [UPDATE_ARTICLE]({ commit }, params) {
    const { data } = await ArticleService.put(params);
  },
  [DELETE_ARTICLE]({ commit }, slug) {
    ArticleService.delete(slug);
  }
};

const mutations = {
  [FRESH_ARTICLE](state) {
    state.isLoading = false;
    state.article = {};
    state.error = null;
  },
  [SET_ARTICLES](state, articles) {
    state.articles = articles;
  },
  [SET_ARTICLE](state, article) {
    state.article = article;
  },
  [SET_LOADING_STATUS](state) {
    state.isLoading = !state.isLoading;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
