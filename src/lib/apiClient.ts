import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
import type { PayloadDocsResponse } from '@/types/payload'

const baseURL = import.meta.env.VITE_API_BASE_URL + '/api' || '/api'

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api

export const getDocs = async <T>(url: string, config?: AxiosRequestConfig) => {
  const res = await api.get<PayloadDocsResponse<T>>(url, config)
  return res.data.docs
}

export const getOneDoc = async <T>(
  url: string,
  config?: AxiosRequestConfig,
) => {
  const docs = await getDocs<T>(url, {
    ...config,
    params: { limit: 1, ...(config?.params || {}) },
  })
  const one = docs[0]
  if (!one) throw new Error('Not found')
  return one
}
