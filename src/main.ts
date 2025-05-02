import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import { provideApolloClient } from '@vue/apollo-composable'
import instanceApollo from './apollo/instanceApollo'
import { createPinia } from 'pinia'

const routes = [
    { path: '/', name: 'Home', component: Home }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);
app.use(router);
provideApolloClient(instanceApollo);
app.mount("#app");
