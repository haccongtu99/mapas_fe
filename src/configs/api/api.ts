import customAxios from './axios'
export default class Api {
  protected async get(url: string, configs?: Record<string, any>) {
    const res = await customAxios.get(url, configs)
    return res.data
  }

  protected async post(
    url: string,
    input?: Record<string, any>,
    configs?: Record<string, any>
  ) {
    const res = await customAxios.post(url, input, configs)
    return res.data
  }

  protected async patch(
    url: string,
    input?: Record<string, unknown>,
    configs?: Record<string, unknown>
  ) {
    const res = await customAxios.patch(url, input, configs)
    return res.data
  }

  protected async delete(url: string) {
    const res = await customAxios.delete(url)
    return res.data
  }
}
