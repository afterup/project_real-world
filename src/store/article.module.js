import { ApiService, ArticleService } from "@/common/api.service";
import { FETCH_ARTICLE, FETCH_ARTICLES } from "@/store/action.types.js";
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
  type: "",
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
  [FETCH_ARTICLES]({ commit }) {
    ArticleService.get()
      .then(({ data }) => {
        commit(SET_ARTICLES, data.articles);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
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
