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
  [FETCH_ARTICLE]({ commit }, slug) {
    console.log(slug);
    ArticleService.getOne(slug)
      .then(({ data }) => {
        commit(SET_ARTICLE, data.article);
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

const mutations = {
  [SET_ARTICLES](state, articles) {
    state.articles = articles;
  },
  [SET_ARTICLE](state, article) {
    console.log("why?");
    state.article = article;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
