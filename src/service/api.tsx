import axios from 'axios'

export const apiCoin = axios.create({
  baseURL: 'https://rest.coinapi.io/v1'
})