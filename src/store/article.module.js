import { ArticleService, CommentService } from "@/common/api.service";
import {
  FETCH_ARTICLE,
  PUBLISH_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE
} from "@/store/action.types.js";
import { SET_ARTICLE, SET_LOADING_STATUS, RESET_ARTICLE } from "@/store/mutation.types.js";

const state = {
  article: {
    title: "",
    description: "",
    body: "",
    tagList: [],
    author: {}
  },
  comments: []
};

const getters = {
  article(state) {
    return state.article;
  }
};

const actions = {
  async [FETCH_ARTICLE]({ commit }, slug, previousArticle) {
    console.log(slug, previousArticle);

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
  async FETCH_COMMENT({ commit }) {},
  async [PUBLISH_ARTICLE]({ commit }, params) {
    const { data } = await ArticleService.post(params);
    return data.article.slug;
  },
  async PUBLISH_COMMENT({ commit }, params) {
    console.log(params.slug, params.body);
    const { data } = await CommentService.post(params.slug, { body: params.body });
    return data.comment;
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
  [RESET_ARTICLE](state) {
    state.isLoading = false;
    state.article = {};
    state.error = null;
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
