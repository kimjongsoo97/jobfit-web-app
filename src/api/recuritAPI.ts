import api from '@/api'

const recruitAPI = {
  getRecruit: async (page: number, size: number, sortType: string, companyName: string, region: string, job: string, careerType: string) => {
    const response = await api.get(`/api/v1/recruit`, {
      params: {
        page: page,
        size: size,
        sortType: sortType,
        companyName: companyName,
        region: region,
        job: job,
        careerType: careerType
      }
    })
    return response.data
  }
}

export default recruitAPI
