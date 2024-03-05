import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import RedirectPage from './components/RedirectPage.vue'
import ShortenLinks from './components/ShortenLinks.vue'
import "./assets/reset.css";


const routes = [
    { path: '/:shortlink', component: RedirectPage },
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
