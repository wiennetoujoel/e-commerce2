import Cart from './components/Cart.vue'
import Products from './components/Products.vue'
import NotFound from './components/NotFoundComponent.vue'
import ExampleComponent from './components/ExampleComponent.vue'

const routes =[
    {
        path: '/cart',
        name : "cart",
        component : Cart
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
    {
        path : '/',
        name : "products",
        component: Products
    },
    {
        path:'/example',
        name : "example",
        component : ExampleComponent
    }
]

export default routes