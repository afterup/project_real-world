import { ProfileService } from "@/common/api.service";
import { FETCH_PROFILE } from "@/store/action.types";
import { SET_PROFILE } from "@/store/mutation.types";

const state = {
  profile: {}
};

const getters = {
  profile(state) {
    return state.profile;
  }
};

const actions = {
  [FETCH_PROFILE]({ commit }, username) {
    ProfileService.get(username).then(({ data }) => {
      commit(SET_PROFILE, data.profile);
    });
  }
};

const mutations = {
  [SET_PROFILE](state, profile) {
    state.profile = profile;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
