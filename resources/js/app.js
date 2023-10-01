/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap.js';
import { createApp } from 'vue';

const app = createApp({});

//import ExampleComponent from './components/ExampleComponent.vue';
//app.component('example-component', ExampleComponent);

//import ToDoComponent from './components/ToDoComponent.vue';
//app.component('todo-component', ToDoComponent);

/**import ProductsComponent from './components/ProductsComponent.vue';
app.component('products-component', ProductsComponent);

import CartComponent from './components/CartComponent.vue';
app.component('cart-component', CartComponent);

import ParentComponent from './components/ParentComponent.vue';
app.component('parent-component', ParentComponent);
**/
import ExampleComponent from './components/ExampleComponent.vue'
app.component("example-component", ExampleComponent)

import ToDoComponent from './components/ToDoComponent.vue'
app.component('to-do-component', ToDoComponent)

import InputFormComponent from './components/InputFormComponent.vue'
app.component('inputform-component', InputFormComponent)

import ToDoList from './components/ToDoList.vue'
app.component('todolist-component', ToDoList)

import Home from './components/Home.vue'
app.component('home-component', Home)

import Cart from './components/Cart.vue'
app.component('cart-component', Cart)

import Products from './components/Products.vue'
app.component('productlist-component', Products)



//import InputFormComponent from './components/InputFormComponent.vue';
//app.component('inputform-component', InputFormComponent);

//import ToDoList from './components/ToDoList.vue';
//app.component('todolist-component', ToDoList)


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');
