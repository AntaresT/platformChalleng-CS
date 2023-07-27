import { apiCoin } from './api';
import { NextRequest } from 'next/server';

export async function getCoinsHeader(request: NextRequest) {
  
  const header = process.env.NEXT_PUBLIC_COIN_API_KEY;

  const coinResponse = await apiCoin.get('/assets?filter_asset_id=BTC,ETH,DOG')

  return coinResponse;

}