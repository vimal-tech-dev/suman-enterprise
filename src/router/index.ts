// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
// import ProductList from '@/views/ProductList.vue'
// import CompareView from '@/views/CompareView.vue'
import ProductsPage from '@/views/ProductsPage.vue';
import ComparePage from '@/views/ComparePage.vue';

const routes = [
  // Use the root path as the ProductList (no redirect)
  { path: '/', name: 'Home', component: ProductsPage },
  // { path: '/', redirect: '/products' },
  { path: '/products', name: 'Products', component: ProductsPage },
  // { path: '/products', name: 'ProductList', component: ProductList },
  // { path: '/compare', name: 'CompareView', component: CompareView }, // ✅ new route

  { path: '/compare', name: 'compare', component: ComparePage } // ✅ new route
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
