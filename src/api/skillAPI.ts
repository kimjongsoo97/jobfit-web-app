import api from '@/api'  // axios 인스턴스

const skillAPI = {
  // 1. 사용자 스펙 조회
  get() {
    return api.get('/api/v1/user/skill')
  },

  // 2. 사용자 스펙 수정
  patch(payload: {
    certificates: string[]
    specs: { [key: string]: string }[]
    career: string
  }) {
    return api.patch('/api/v1/user/skill', payload)
  },
  getSearch(){
    return api.get('/api/v1/user/certification')
  },


}

export default skillAPI
