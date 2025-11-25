import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '@/views/ProductList.vue'
import CompareView from '@/views/CompareView.vue'

const routes = [
  // Use the root path as the ProductList (no redirect)
  { path: '/', name: 'Home', component: ProductList },
  // { path: '/', redirect: '/products' },
  { path: '/products', name: 'ProductList', component: ProductList },
  { path: '/compare', name: 'CompareView', component: CompareView } // ✅ new route
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
