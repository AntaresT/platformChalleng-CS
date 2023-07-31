'use client'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const BannerContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 140px;
  width: 590px;
`

export const Title = styled.h2`
  color: #FBAB34;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -0.48px;
  margin-top: 160px;

`

export const Subtitle = styled.span`
  color: #5D6670;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; 
  margin-top: 24px;
`

export const SingupBtn = styled.button`
  align-items: center;
  border-radius: 32px;
  border: none;
  background: #FBAB34;
  color: white;
  cursor: pointer;
  display: flex;
  height: 48px;
  padding: 14px 24px;
  margin-top: 32px;
  justify-content: center;
  gap: 10px;
  flex-shrink: 0; 
  width: 278px;

  &:hover{
    transform: scale(1.1);
  }
`

export const CardTiny = styled.div`
  display: flex;
  flex-direcion: row;
  margin-top: 84px;
`

export const CoinCard = styled.span`
  background: #FFF6E8;
  border-radius: 4px; 
  border-radius: 4px;
  color: #FBAB34;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  padding: 4px 16px;
  line-height: 32px;
  margin-right: 18px;
`

export const RightSide = styled.div`
  display: flex;
  width: 384px;
  height: 499px; 
`