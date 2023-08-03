'use client'
import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: #E09422;
  display: flex;
  justify-content: center;
`

export const Title = styled.h4`
  color: #FFE1B5;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  
  @media (min-width: 320px) and (max-width: 769px){
    font-size: 20px;
    margin: 0;
  }
`

export const Subtitle = styled.h2`
  color: #FFF;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.4px; 

  @media (min-width: 320px) and (max-width: 769px){
    font-size: 32px;
    margin: 0;

  }
`

export const Description = styled.p`
  color: #FFF;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 

  @media (min-width: 320px) and (max-width: 769px){
    font-size: 16px;
    margin-top: 16px;
  }
`

export const RightSide = styled.div`
  display: flex;
  flex-direction: Column;
  width: 385px;

  @media (min-width: 320px) and (max-width: 769px){
    width: 385px;
  }
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const OverImg = styled.div`
  z-index: 1;
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`

export const Label = styled.label`
  color: #FFF;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`

export const ContactInput = styled.input`
  border-radius: 6px;
  background: #FFF;
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.10);
  width: 374px;
  height: 48px;
  flex-shrink: 0; 
  padding-left: 16px;

  @media (min-width: 320px) and (max-width: 769px){
    width: 320px;
  }
`

export const SubscribeBtn = styled.button`
  align-self: center;
  border-radius: 32px;
  background: #FBAB34;
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.10);
  cursor: pointer;
  color: white;
  display: flex;
  width: 384px;
  height: 48px;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border: none;
  margin-top: 21px;

  &:hover{
    transform: scale(1.1);
    transition: all 0.5s ease;
  }

  @media (min-width: 320px) and (max-width: 769px){
    width: 320px;
  }
`
