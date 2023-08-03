'use client'
import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 6px;
  background: #FFF;
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.05);
  display: inline-flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  margin: 32px;
  width: 280px;

  @media (min-width: 481px) and (max-width: 769px){
    width: 232px;
  }

`

export const Title = styled.h4`
  color: #FBAB34;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  margin-top: 16px;
  line-height: 24px; 
`

export const Subtitle = styled.h2`
  color: #5D6670;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`

export const Description = styled.p`
  color: #5D6670;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`