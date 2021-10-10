const state = {
  name: null,
  yob: null,
  yod: null,
};

const mutations = {
  setName(state, name) {
    state.name = name;
  },
  setYob(state, yob) {
    state.yob = yob;
  },
  setYod(state, yod) {
    state.yod = yod;
  },
};

const actions = {};

export default {
  state,
  mutations,
  actions,
};
