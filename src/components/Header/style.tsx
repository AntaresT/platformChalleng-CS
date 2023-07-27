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
`

export const Navigation = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
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
  height: ;

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
`