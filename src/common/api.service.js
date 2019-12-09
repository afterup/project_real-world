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
    return Vue.axios
      .get("articles" + `${type === "feed" ? "/feed" : ""}`, { params: params })
      .catch(error => {
        throw new Error(`[RWV] ArticleService ${error}`);
      });
  },

  getOne(slug) {
    return Vue.axios.get(`articles/${slug}`).catch(error => {
      throw new Error(`[RWV] ArticleService ${error}`);
    });
  },

  post(params) {
    return Vue.axios.post("articles", params);
  },

  put(params) {
    return Vue.axios.put(`articles/${params.slug}`, params).catch(error => {
      throw new Error(`[RWV] ArticleService ${error}`);
    });
  },

  delete(slug) {
    return Vue.axios.delete(`articles/${slug}`).catch(error => {
      throw new Error(`[RWV] ArticleService ${error}`);
    });
  }
};

export const ProfileService = {
  get(params) {
    return Vue.axios.get(`profiles/${params}`).catch(error => {
      throw new Error(`[RWV] ProfileService ${error}`);
    });
  }
};
