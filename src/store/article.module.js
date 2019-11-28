import { ApiService, ArticleService } from "@/common/api.service";
import {
  FETCH_ARTICLE,
  FETCH_ARTICLES,
  PUBLISH_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE
} from "@/store/action.types.js";
import { SET_ARTICLE, SET_ARTICLES } from "@/store/mutation.types.js";

const state = {
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
  }
};

const actions = {
  [FETCH_ARTICLES]({ commit }, type, params) {
    ArticleService.get(type, params).then(({ data }) => {
      commit(SET_ARTICLES, data.articles);
      console.log(data);
    });
  },
  async [FETCH_ARTICLE]({ commit }, slug) {
    const { data } = await ArticleService.getOne(slug);
    commit(SET_ARTICLE, data.article);
    return data.article;
  },
  async [PUBLISH_ARTICLE]({ commit }, params) {
    const { data } = await ArticleService.post(params);
    console.log(data);
  },
  async [UPDATE_ARTICLE]({ commit }, params) {
    const { data } = await ArticleService.put(params);
    console.log(data);
  },
  [DELETE_ARTICLE]({ commit }, slug) {
    ArticleService.delete(slug);
  }
};

const mutations = {
  [SET_ARTICLES](state, articles) {
    state.articles = articles;
  },
  [SET_ARTICLE](state, article) {
    state.article = article;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
