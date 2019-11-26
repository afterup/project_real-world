import axios from 'axios';

// import {
//   ArticleService
// } from "@/common/api.service";

// import router from '@/router'

const state = {
  articles: [],
};

const actions = {
  fetchArticle({ commit }) {
    axios
      .get('/articles.json')
      .then(res => {
        console.log(res);
        const data = res.data;
        const articles = [];
        for (let key in data) {
          const article = data[key];
          // article.id = key;
          articles.push(article);
        }
        console.log('sdf');
        console.log(articles);
        commit('setArticles', articles);
      })
      .catch(err => console.log(err));
  },
  publishArticle(context, { title, description }) {
    axios
      .post('/articles.json', { title, description })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  },
};

const mutations = {
  setArticles(state, articles) {
    state.articles = articles;
  },
};

const getters = {
  articles(state) {
    return state.articles;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
