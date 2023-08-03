import styled from "styled-components"

interface StockType {
  status?: boolean;
}

export const Container = styled.div`
  width: 100%;

  @media (min-width: 481px) and (max-width: 1080px){
    position: absolute;
    max-width: 360px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`

export const Coin = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 24px;
  justify-content: center;
`

export const Name = styled.p`
  color: #4E4B59;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin-right: 8px;
`

export const Price = styled.p`
  color: #5D6670;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin-right: 8px;
`

export const LiveStock = styled.p<StockType>`
  color: ${props => props.status? '#149E55' : '#A12226'};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`