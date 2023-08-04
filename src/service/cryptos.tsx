import { apiCoin } from './api';

export async function getCoinsHeader() {
  
  const headers = {
    'X-CoinAPI-Key':  `${process.env.NEXT_PUBLIC_COIN_API_KEY}`
  }

  const coinResponse = await apiCoin.get(`/ohlcv/BITSTAMP_SPOT_BTC_USD/latest?period_id=1MIN&limit={10}`
    ,{ headers }
  )

  console.log(coinResponse, 'coin response')

  return coinResponse;

}