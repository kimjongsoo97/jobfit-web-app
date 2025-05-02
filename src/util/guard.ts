// src/router/auth-guard.ts
import type { RouteLocationNormalized, NavigationGuardReturn } from 'vue-router'
import { useLoginStore } from '@/stores/login'

export const isAuthenticated = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
): NavigationGuardReturn => {
  const auth = useLoginStore()
  if (!auth.isLogin) {
    //추후에 모달로 바꿀예정
    confirm('로그인이 필요합니다! 로그인 하시겠습니까?')
    //로그인 전의 위치를 기억해놨다가 로그인되면 리다이렉트하게됌
    return { name: 'login', query: { next: to.fullPath } }
  }

  console.log('로그인 인증 완료')
}
