import api from '@/api'

const BASE_URL='api/v1/trends'

const trendAPI={
   all(params={page:1,size:10}){
    return api.get(BASE_URL,{params})
   }
}
export default trendAPI
