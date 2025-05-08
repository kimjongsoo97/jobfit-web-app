export interface CreateChallengeRequest {
  recruitId: number
}

export interface ChallengeListInfo {
  challengeId: number
  userId: number
  recruitId: number
  title: string
  companyName: string
  registrationDate: string
  progress: number
}

export interface ChallengeDetailInfo {
  challengeId: number
  userId: number
  recruitId: number
  title: string
  companyName: string
  registrationDate: string
  progress: number
  careerType: string
  strengths: string
  weaknesses: string
  content: string
}