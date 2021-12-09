import { createRouter, createWebHashHistory } from 'vue-router'
import CartList from '../components/cart/Cart_List.vue';
import ProductList from '../components/product/Product_List.vue';
import EmailInput from '../components/checkout/email-input.vue';
import ItemsYouBought from "../components/checkout/Item-list.vue";

const routes = [
   {
    path: '/inventory',
    component: ProductList
  },
  {
    path: '/cart',
    component: CartList
  },
  {
    path: '/',
    redirect: '/inventory'
  },
   {
    path: '/email-input',
    component: EmailInput
  },
  {
    path: '/your-items',
    component: ItemsYouBought,
    name: 'bought'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
