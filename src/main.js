import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Redirect from './components/Redirect.vue'
import ShortenLinks from './components/ShortenLinks.vue'


const routes = [
    { path: '/:shortlink', component: Redirect },
    { path: '/shorten-links', component: ShortenLinks },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)
  

app.mount('#app')
