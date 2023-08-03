'use client'
import styled from "styled-components";

interface ParagraphProps {
  color?: string;
}

export const Head = styled.header`
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 481px) and (max-width: 769px){
    height: auto;
  }
`

export const Navigation = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;

  @media (min-width: 481px) and (max-width: 769px){
    align-items: start;
    margin-top: 24px;
  }
`
  
export const Links = styled.div`
  align-items: center;
  display: flex; 
  justify-content: space-between;
  width: 320px;
`

export const Clickable = styled.a`
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid #5D6670;
  }
`

export const LinkText = styled.p<ParagraphProps>`
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.color || '#5D6670'};
  margin: 0;
  weight: 400;
`

export const CoinPrice = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0; 
  height: 64px;
  margin-right: 80px;
  padding-left: 0px;
  justify-content: flex-end;
  width: 360px;

  @media (min-width: 481px) and (max-width: 1080px){
    margin-right: 0;
  }

`

export const Sign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: fit-content;
`

export const BtnSignIn = styled.button`
  border: none;
  border-radius: 32px;
  background: white; 
  gap: 8px; 
  margin-right: 24px;
  padding: 8px 16px; 

  &:hover {
    cursor: pointer;
    background: #F4F3F8;
  }

`

export const BtnSignUp = styled.button`
  border-radius: 32px;
  background: #FBAB34; 
  border: none;
  display: flex;
  width: 100px;
  padding: 8px 16px; 
  justify-content: center;
  align-items: center;
  gap: 8px; 

  &:hover {
    cursor: pointer;
    background: #FFB94F; 
    
  }
`

export const RightEnd = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  height: auto;

  @media (min-width: 769px) and (max-width: 1100px){
    flex-direction: column-reverse;
    margin-top: 60px;
  }

  @media (min-width: 481px) and (max-width: 768px){
    flex-direction: column-reverse;
    margin-top: 0px;
  }
`