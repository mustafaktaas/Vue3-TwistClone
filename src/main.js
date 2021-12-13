import { createApp } from 'vue'
import App from './App.vue'

import './assets/styles/207.css'
import './assets/styles/opt-in-dialog.css'
import './assets/styles/segmentify.css'
import './assets/styles/styles.css'
import router from './router'
import store from "./store";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
