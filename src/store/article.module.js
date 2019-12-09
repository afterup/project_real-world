import { ArticleService, ApiService } from "@/common/api.service";
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
  RESET_ARTICLE
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
  tags: [],
  error: null
};

const getters = {
  articles(state) {
    return state.articles;
  },
  article(state) {
    return state.article;
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
  async [FETCH_ARTICLE]({ commit }, slug, previousArticle) {
    if (previousArticle !== undefined) {
      commit(SET_ARTICLE, previousArticle);
      return previousArticle;
    } else {
      commit(SET_LOADING_STATUS);
      const { data } = await ArticleService.getOne(slug);
      commit(SET_ARTICLE, data.article);
      commit(SET_LOADING_STATUS);
      return data.article;
    }
  },
  FETCH_TAGS({ commit }) {
    ApiService.get("tags").then(({ data }) => {
      commit("SET_TAGS", data.tags);
    });
  },
  async [PUBLISH_ARTICLE]({ commit }, params) {
    const { data } = await ArticleService.post(params);
    return data.article.slug;
  },
  async [UPDATE_ARTICLE]({ commit }, params) {
    const { data } = await ArticleService.put(params);
    return data.article.slug;
  },
  [DELETE_ARTICLE]({ commit }, slug) {
    ArticleService.delete(slug);
  },
  RESET_ARTICLE({ commit }) {
    commit(RESET_ARTICLE);
  }
};

const mutations = {
  RESET_ARTICLES(state) {
    state.isLoading = false;
    state.articles = {};
    state.error = null;
  },
  [RESET_ARTICLE](state) {
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
