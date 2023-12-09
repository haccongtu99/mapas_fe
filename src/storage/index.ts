const storagePrefix = 'accessToken'
const keyRefreshToken = 'refreshToken'

const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(storagePrefix) as string)
  },

  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}`, JSON.stringify(token))
  },

  clearToken: () => {
    window.localStorage.removeItem(storagePrefix)
  },

  setRefreshToken: (refreshToken: string) => {
    window.localStorage.setItem(keyRefreshToken, JSON.stringify(refreshToken))
  },

  getRefreshToken: () => {
    return JSON.parse(window.localStorage.getItem(keyRefreshToken) as string)
  },

  clearRefreshToken: () => {
    window.localStorage.removeItem(keyRefreshToken)
  }
}

export default storage
