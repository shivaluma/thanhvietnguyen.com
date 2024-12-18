import { PUBLIC_VERCEL_ENV } from 'astro:env/client'

const url =
  PUBLIC_VERCEL_ENV === 'production'
    ? 'https://thanhvietnguyen.com'
    : 'http://localhost:4321'

export const BASE_URL = url
