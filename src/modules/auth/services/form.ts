import { createFormContext } from '@mantine/form'
import { TAuthLogin } from '../types'

export const initialAuthForm: TAuthLogin = {
  email: '',
  password: ''
}

export const [AuthProvider, useAuthFormContext, useAuthForm] =
  createFormContext<TAuthLogin>()
