import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  //vue의 data와 비슷..데이터를 state에 모아놓는다.
  //state의 변경은 mutations을 통해서 변경해야 한다.
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
    item: {},
    list: [],
  },
  //vue의 computed와 비슷
  getters,
  //state를 수정할 때 사용..동기적으로
  mutations,
  //state 수을 비동기적으로 처리할 때 사용
  //또는 여러 mutations을 연달아 실행할 때
  actions,
});
