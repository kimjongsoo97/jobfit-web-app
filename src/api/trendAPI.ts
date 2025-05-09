import api from '@/api'

const BASE_URL='api/v1/trends'

const trendAPI = {
   all(params?: { page?: number; size?: number; searchKey?: string }) {
     return api.get(BASE_URL, params ? { params } : undefined)
   }
 }
export default trendAPI
