import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TypographyTest from '../views/tests/TypographyTest.vue'
import ButtonTest from '../views/tests/ButtonTest.vue'
import AuthView from '../views/AuthView.vue'
import RecruitView from '../views/RecruitView.vue'
import LoginPage from '../components/login/LoginPage.vue'
import SignUpFirstPage from '../components/signup/SignUpFirstPage.vue'
import SignUpSecondPage from '../components/signup/SignUpSecondPage.vue'
import SignUpSubmitPage from '../components/signup/SignUpSubmitPage.vue'
import RecruitListPage from '../components/recruit/RecruitListPage.vue'
import RecruitDetailPage from '../components/recruit/RecruitDetailPage.vue'
import OccupationListPage from '../components/occupation/OccupationListPage.vue'
import OccupationView from '../views/OccupationView.vue'
import ChallengeView from '../views/ChallengeView.vue'
import ChallengeListPage from '../components/challenge/ChallengeListPage.vue'
import MyPageView from '../views/MyPageView.vue'
import MyPageInfoPage from '../components/mypage/user-info/MyPageInfoPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
      children: [
        {
          path: 'login',
          name: 'login',
          component: LoginPage,
        },
        {
          path: 'signup',
          name: 'signup',
          component: SignUpFirstPage,
        },
        {
          path: 'signup/info',
          name: 'signup-info',
          component: SignUpSecondPage,
        },
        {
          path: 'signup/complete',
          name: 'signup-complete',
          component: SignUpSubmitPage,
        },
      ],
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: RecruitView,
      children: [
        {
          path: '',
          name: 'recruit-list',
          component: RecruitListPage,
        },
        {
          path: ':id',
          name: 'recruit-detail',
          component: RecruitDetailPage,
        },
      ],
    },
    {
      path: '/occupation',
      name: 'occupation',
      component: OccupationView,
      children: [
        {
          path: '',
          name: 'occupation-list',
          component: OccupationListPage,
        },
      ],
    },
    {
      path: '/challenge',
      name: 'challenge',
      component: ChallengeView,
      children: [
        {
          path: '',
          name: 'challenge-list',
          component: ChallengeListPage,
        },
      ],
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
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPageView,
      children: [
        {
          path: 'info',
          name: 'mypage-info',
          component: MyPageInfoPage,
        },
      ],
    },
  ],
  scrollBehavior() {
    // 항상 페이지 상단으로 스크롤
    return { top: 0 }
  },
})

export default router
