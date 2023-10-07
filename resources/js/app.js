
import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import store from './store'
import routes from './routes'

const app = createApp({});
console.log(`isi dari routes adalah ${routes}`)
const router = createRouter({
    history:createWebHistory(),
    routes
})



import ExampleComponent from './components/ExampleComponent.vue';
app.component('example-component', ExampleComponent);

import Products from './components/Products.vue';
app.component('products-component', Products);

import Cart from './components/Cart.vue';
app.component('cart-component', Cart);

import NotFound from './components/NotFoundComponent.vue';
app.component ('not-found', NotFound)



app.use(router).use(store).mount('#app');
