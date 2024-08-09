import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView1 from '../views/CartView1.vue'
import CartView2 from '../views/CartView2.vue'
import CartView3 from '../views/CartView3.vue'
import CartView4 from '../views/CartView4.vue'

const title = '世界計畫'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        title: `${title}`
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta:{
        title: `${title}-登入頁面`
      }
    },
    {
      path: '/cart1',
      name: 'cart1',
      component: CartView1,
      meta:{
        title: `${title}-購物車第一步`
      }
    },
    {
      path: '/cart2',
      name: 'cart2',
      component: CartView2,
      meta:{
        title: `${title}-購物車第二步`
      }
    },
    {
      path: '/cart3',
      name: 'cart3',
      component: CartView3,
      meta:{
        title: `${title}-購物車第三步`
      }
    },
    {
      path: '/cart4',
      name: 'cart4',
      component: CartView4,
      meta:{
        title: `${title}-購物車第四步`
      }
    },
  ]
})

export default router
