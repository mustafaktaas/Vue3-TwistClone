import { createStore } from "vuex";
import Api from "./services/api";

const store = createStore({
  state:{
    products: []
  },
  mutations:{
    SET_PRODUCTS(state,products){
      state.products = products;
    }
  },
  actions:{
    async loadProducts({commit}){
      let response = await Api().get('');
      commit('SET_PRODUCTS',response.data);
    }
  }
});

export default store;
