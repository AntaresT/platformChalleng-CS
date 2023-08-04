import { getCoinsHeader } from '@/service/cryptos';
import React, { createContext, useContext, useState } from 'react';

interface OHLCVType {
  ohlcv: {
    time_period_start: Date,
    time_period_end: Date,
    time_open: Date,
    time_close: Date,
    price_open: number,
    price_high: number,
    price_low: number,
    price_close: number,
    volume_traded: number,
    trades_count: number
  }[],
  setOhlcv: React.Dispatch<React.SetStateAction<{ 
    time_period_start: Date,
    time_period_end: Date,
    time_open: Date,
    time_close: Date,
    price_open: number,
    price_high: number,
    price_low: number,
    price_close: number,
    volume_traded: number,
    trades_count: number
  }[]>>,

}

const OHLCVContext = createContext({} as OHLCVType);

const ApiResult = getCoinsHeader();
console.log(ApiResult)

export const OHLCVProvider = ({ children }) => {
  
  const [ohlcv, setOhlcv] = useState({});

  return (
    <OHLCVContext.Provider value={{ ohlcv, setOhlcv }}>
      {children}
    </OHLCVContext.Provider>
  );
};

export const useOhlcv = () => {
  const context = useContext(OHLCVContext);
  if (!context) {
    throw new Error('Deve ser usado dentro de um UserProvider');
  }
  return context;
};