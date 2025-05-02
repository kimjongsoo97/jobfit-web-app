import api from '@/api'

const BASE_URL = '/api/v1/user'

const LoginApi = {
  checkUsername(username: string) {
    return api.post(`${BASE_URL}/checkemail`, { username })
  },
  signUp(userData: {
    username: string
    password: string
    confirmPassword: string
    name: string
    otp: string
  }) {
    return api.post(`${BASE_URL}/signup`, userData);
  },
  withDraw() {
    return api.patch(`${BASE_URL}/withdraw`)
  },
  getProfile() {
    return api.get(`${BASE_URL}/profile`)
  },
  otpCreate(email: string) {
    return api.post(`/api/v1/otp`, { email })
  },
  otpCheck(email: string, otp: string) {
    return api.post(`/api/v1/otp/check`, { email, otp })
  }
}
export default LoginApi
