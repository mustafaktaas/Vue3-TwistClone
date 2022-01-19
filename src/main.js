import { createApp , onUnmounted, ref} from "vue";
import App from './App.vue'

import './assets/styles/207.css'
import './assets/styles/opt-in-dialog.css'
import './assets/styles/segmentify.css'
import './assets/styles/styles.css'
import router from './router'
import store from "./store";
import firebase from "firebase/compat/app";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";

const httpLink = createHttpLink({
  uri: "https://vue3twist.hasura.app/v1/graphql",
  headers: {
    'x-hasura-admin-secret': 'WNBEbuZgT0hsYopmNcuvkFTUSRhrndb0KCY3kKO5i4QByRXCJ5aJX3HmN78Il2RH'
  }
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

const firebaseConfig = {
    apiKey: "AIzaSyBQ2RuMLHjWCQI057yitriYQIfnufyPk1g",
  authDomain: "vue3-twist-ad32f.firebaseapp.com",
  projectId: "vue3-twist-ad32f",
  storageBucket: "vue3-twist-ad32f.appspot.com",
  messagingSenderId: "757715016969",
  appId: "1:757715016969:web:181f89b080b1ca8757c7d8",
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const db = firebaseApp.firestore();
const productsCollection = db.collection("products");

export const createproduct = (product) => {
  return productsCollection.add(product);
};

export const getproduct = async (id) => {
  const product = await productsCollection.doc(id).get();
  return product.exists ? product.data() : null;
};

export const useLoadproducts = () => {
  const products = ref([]);
  const close = productsCollection.onSnapshot((snapshot) => {
    products.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
  onUnmounted(close);
  return products;
};

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
app.use(apolloProvider);