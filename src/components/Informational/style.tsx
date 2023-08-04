'use client'
import styled from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #F7F7F7 100%);
  display: flex;
  justify-content: center;
  margin-top: 120px;

  @media (min-width: 320px) and (max-width: 1010px){
    flex-direction: column-reverse;
  }
`

export const CardBlock = styled.div`

  @media (min-width: 320px) and (max-width: 769px){
    margin-top: 50px;
  }

  @media (min-width: 320px) and (max-width: 480px){
    margin-top: 50px;
    display: flex;
    overflow: auto;
  }
`

export const Above = styled.div`
  padding-right: 136px;
  display: flex;

  @media (min-width: 320px) and (max-width: 769px){
    padding-right: 0px;
  }

`

export const Below = styled.div`
  padding-right: 32px;
  display: flex;
  justify-content: end;
`

export const SingupBtn = styled.button`
  align-items: center;
  border: none;
  border-radius: 32px;
  background: #FBAB34;
  color: white;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  height: 48px;
  justify-content: center;
  margin-top: 32px;
  padding: 14px 24px;
  width: 176px;

  &:hover{
    transform: scale(1.1);
  }

  @media (min-width: 320px) and (max-width: 769px){
    display: none;
  }
`

export const Title = styled.h5`
  color: #FBAB34;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  
  @media (min-width: 481px) and (max-width: 769px){
    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: 320px) and (max-width: 480px){
    font-size: 16px;
    line-height: 24px;
    margin: 0px;

  }

`

export const Subtitle = styled.h3`
  color: #5D6670;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.4px; 

  @media (min-width: 481px) and (max-width: 769px){
    font-size: 32px;
    line-height: 40px;
  }

  @media (min-width: 320px) and (max-width: 480px){
    font-size: 24px;
    line-height: 32px;
    margin: 0px;

  }

`

export const Description = styled.p`
  color: #5D6670;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 

  @media (min-width: 481px) and (max-width: 769px){
    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: 320px) and (max-width: 480px){
    font-size: 14px;
    line-height: 24px;
    margin: 16px 0px 0px 0px;
  }
`

export const InfoBlock = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;

  @media (min-width: 320px) and (max-width: 1024px){
    align-self: center;
  }


`