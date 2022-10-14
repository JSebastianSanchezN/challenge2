import { createApp } from 'vue'
import store from './store';
import App from './App.vue'
import router from './router/router'

import './assets/main.css'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
