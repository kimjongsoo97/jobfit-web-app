import api from '@/api'

const favoriteAPI = {
  getFavorite: async () => {
    const response = await api.get(`/api/v1/favorites`, {
    })
    return response.data
  },
  deleteFavorite: async (recruitId: string) => {
    const response = await api.delete(`/api/v1/favorites`, {
      data: {
        recruitId: recruitId,
      }
    })
    return response.data
  }
}

export default favoriteAPI
