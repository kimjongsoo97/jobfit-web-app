import api from '@/api'  // axios 인스턴스

const BASE_URL=`/api/v1/user/skill`

const skillAPI = {
  // 1. 사용자 스펙 조회
  get() {
    return api.get(`${BASE_URL}`)
  },

  // 2. 사용자 스펙 수정
  patch(payload: {
    certificates: string[]
    specs: { [key: string]: string }[]
    career: string
  }) {
    return api.patch(`${BASE_URL}`, payload)
  },
  getSearch(name:string){
    return api.get(`${BASE_URL}/certification`,{
      params:{name}
    })
  },

}

export default skillAPI
