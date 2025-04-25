import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TypographyTest from '../views/tests/TypographyTest.vue'
import ButtonTest from '../views/tests/ButtonTest.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/test/typo',
      name: 'typo',
      component: TypographyTest,
    },
    {
      path: '/test/button',
      name: 'button',
      component: ButtonTest,
    },
  ],
  scrollBehavior() {
    // 항상 페이지 상단으로 스크롤
    return { top: 0 }
  },
})

export default router
