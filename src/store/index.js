import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    isLoading: false,
  },
  mutations: {
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading;
    },
  },
});

router.beforeEach(function(to, from, next) {
  store.commit("updateLoadingStatus", { isLoading: true });
  next();
});

// router.afterEach(function(to) {
//   store.commit("updateLoadingStatus", { isLoading: false });
// });

export default store;
