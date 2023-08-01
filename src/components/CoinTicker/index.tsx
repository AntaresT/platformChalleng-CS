'use client'
import { Coin, Container, LiveStock, Name, Price } from "./style";
import Marquee from "react-fast-marquee";
import { StyleSheetManager } from 'styled-components';

export default function CoinTicker() {

  return(
    <StyleSheetManager>
      <Container>
        <Marquee pauseOnHover={true}>
          <Coin>
            <Name>DOG</Name>
            <Price>R$ 21,12</Price>
            <LiveStock status={true}>+7,082</LiveStock>
          </Coin>
          <Coin>
            <Name>ETH</Name>
            <Price>R$ 14,45</Price>
            <LiveStock status={false}>-3,341</LiveStock>
          </Coin>
          <Coin>
            <Name>BIT</Name>
            <Price>R$ 22,38</Price>
            <LiveStock status={true}>+1,071</LiveStock>
          </Coin>
        </Marquee>
      </Container>
    </StyleSheetManager>
 ) 
}