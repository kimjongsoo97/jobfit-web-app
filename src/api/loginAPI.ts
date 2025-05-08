import api from '@/api'

const BASE_URL = '/api/v1/user'

const LoginApi = {
  checkUsername(username: string) {
    return api.post(`${BASE_URL}/check/username`, { username })
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
  otpCreate(email: string, type: string) {
    return api.post(`/api/v1/otp`, { email, type })
  },
  otpCheck(email: string, otp: string, type: string) {
    return api.post(`/api/v1/otp/check`, { email, type, otp })
  },
  patchProfile(newPassword:string,confirmPassword:string){
    return api.patch(`${BASE_URL}/profile`,{newPassword,confirmPassword});
  },
  findUsername(email: string, otp: string, type: string) {
    return api.post(`${BASE_URL}/find-username`, { email, type, otp })
  },
  findPassword(email: string, otp: string, type: string) {
    return api.post(`${BASE_URL}/find-password`, { email, type, otp })
  },
}
export default LoginApi
