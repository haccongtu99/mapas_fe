export type TAuthLogin = {
  email: string
  password?: string
}

export type TAuthLoginResponse = {
  accessToken: string
  refreshToken: string
  data: {
    email: string
    _id: string
  }
  message: string
}
