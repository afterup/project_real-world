import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from "@/common/config";
import JwtService from "@/common/jwt.service";

export const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  setHeader() {
    Vue.axios.defaults.headers.common["Authorization"] = `Token ${JwtService.getToken()}`;
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource) {
    return Vue.axios.get(`${resource}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export const ArticleService = {
  get(type, params) {
    console.log(params);
    return ApiService.get("articles" + `${type === "feed" ? "/feed" : ""}`, {
      params: params
    }).catch(error => {
      throw new Error(`[RWV] ArticleService ${error}`);
    });
  },

  getOne(slug) {
    return ApiService.get(`articles/${slug}`).catch(error => {
      throw new Error(`[RWV] ArticleService ${error}`);
    });
  },

  post(params) {
    return ApiService.post("articles", params);
  },

  put(params) {
    return ApiService.put(`articles/${params.slug}`, params).catch(error => {
      throw new Error(`[RWV] ArticleService ${error}`);
    });
  },

  delete(slug) {
    return ApiService.delete(`articles/${slug}`).catch(error => {
      throw new Error(`[RWV] ArticleService ${error}`);
    });
  }
};

export const ProfileService = {
  get(params) {
    return ApiService.get(`profiles/${params}`).catch(error => {
      throw new Error(`[RWV] ProfileService ${error}`);
    });
  }
};

export const CommentService = {
  get(slug) {
    return ApiService.get(`articles/${slug}/comments`).catch(error => {
      throw new Error(`[RWV] CommentService ${error}`);
    });
  },
  post(slug, params) {
    console.log(params);
    return ApiService.post(`articles/${slug}/comments`, params).catch(error => {
      throw new Error(`[RWV] CommentService ${error}`);
    });
  },

  delete(slug, id) {
    return ApiService.delete(`articles/${slug}/comments/${id}`).catch(error => {
      throw new Error(`[RWV] CommentService ${error}`);
    });
  }
};
