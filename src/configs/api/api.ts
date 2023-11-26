import { customAxios } from '.'

export default class Api {
  protected async get(url: string) {
    const res = await customAxios.get(url)
    return res.data
  }

  protected async post(
    url: string,
    input?: Record<string, unknown>,
    headersType?: string
  ) {
    if (headersType) {
      const res = await customAxios.post(url, input, {
        headers: { 'Content-Type': 'multipart/form-res' }
      })
      return res.data
    }
    const res = await customAxios.post(url, input)
    return res.data
  }

  protected async patch(url: string, input?: Record<string, unknown>) {
    const res = await customAxios.patch(url, input)
    return res.data
  }

  protected async delete(url: string) {
    const res = await customAxios.delete(url)
    return res.data
  }
}
