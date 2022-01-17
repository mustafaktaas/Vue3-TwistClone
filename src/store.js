import { createStore } from "vuex";
import Api from "./services/api";

const store = createStore({
  state:{
    courses: []
  },
  mutations:{
    SET_COURSES(state,courses){
      state.courses = courses;
    }
  },
  actions:{
    async loadCourses({commit}){
      let response = await Api().get('');
      commit('SET_COURSES',response.data);
    }
  }
});

export default store;
