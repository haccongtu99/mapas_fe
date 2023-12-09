import customAxios from './axios'
export default class Api {
  protected async get(url: string, configs?: any) {
    const res = await customAxios.get(url, configs)
    return res.data
  }

  protected async post(
    url: string,
    input?: Record<string, unknown> | any,
    configs?: any
  ) {
    if (configs) {
      const res = await customAxios.post(url, input, configs)
      return res.data
    }
    const res = await customAxios.post(url, input)
    return res.data
  }

  protected async patch(
    url: string,
    input?: Record<string, unknown>,
    configs?: any
  ) {
    if (configs) {
      const res = await customAxios.post(url, input, configs)
      return res.data
    }
    const res = await customAxios.patch(url, input)
    return res.data
  }

  protected async delete(url: string, configs?: any) {
    const res = await customAxios.delete(url, configs)
    return res.data
  }
}
