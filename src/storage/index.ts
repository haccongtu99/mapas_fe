const storagePrefix = 'accessToken'

const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(storagePrefix) as string)
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}`, JSON.stringify(token))
  },
  clearToken: () => {
    window.localStorage.removeItem(storagePrefix)
  }
}

export default storage
