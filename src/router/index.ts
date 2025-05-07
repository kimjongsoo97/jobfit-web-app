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
import CheckPasswordPage from '../components/mypage/user-info/ChangePasswordPage.vue'
import ChangePasswordPage from '../components/mypage/user-info/ChangePasswordPage.vue'
import MyPageChallengeListPage from '../components/mypage/user-challenge/MyPageChallengeListPage.vue'
import MyPageChallengeDetailPage from '../components/mypage/user-challenge/MyPageChallengeDetailPage.vue'
import MyPageSpecListPage from '../components/mypage/user-spec/MyPageSpecListPage.vue'
import MyPageSpecUpdatePage from '../components/mypage/user-spec/MyPageSpecUpdatePage.vue'
import MyPageFavoriteListPage from '../components/mypage/user-favorite/MyPageFavoriteListPage.vue'
import { isAuthenticated } from '@/util/guard'


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
      beforeEnter: isAuthenticated,
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
      beforeEnter: isAuthenticated,
      children: [
        {
          path: 'info',
          name: 'mypage-info',
          component: MyPageInfoPage,
        },
        {
          path: 'check-password',
          name: 'mypage-info-check-password',
          component: CheckPasswordPage,
        },
        {
          path: 'change-password',
          name: 'mypage-info-change-password',
          component: ChangePasswordPage,
        },
        {
          path: 'challenge',
          name: 'mypage-challenge',
          component: MyPageChallengeListPage,
        },
        {
          path: 'challenge/:id',
          name: 'mypage-challenge-detail',
          component: MyPageChallengeDetailPage,
        },
        {
          path: 'spec',
          name: 'mypage-spec',
          component: MyPageSpecListPage,
        },
        {
          path: 'spec/update',
          name: 'mypage-spec-update',
          component: MyPageSpecUpdatePage,
        },
        {
          path: 'favorite',
          name: 'mypage-favorite',
          component: MyPageFavoriteListPage,
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
