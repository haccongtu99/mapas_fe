import { create } from 'zustand'

type State = {
  states: {
    email: string
    password?: string
    accessToken?: string
    refreshToken?: string
  }
}

type Action = {
  setAuth: (states: State['states']) => void
}

export const useAuthStores = create<State & Action>(set => ({
  states: {
    email: '',
    password: ''
  },
  setAuth: auth => set(() => ({ states: { ...auth } })),
  clearToken: () =>
    set(state => ({
      states: {
        ...state.states,
        accessToken: undefined,
        refreshToken: undefined
      }
    }))
}))
