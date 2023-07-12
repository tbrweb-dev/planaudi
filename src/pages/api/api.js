import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://modelo-tbrweb-3.vercel.app/api/'
})
