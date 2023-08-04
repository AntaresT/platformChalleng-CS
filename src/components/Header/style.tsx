'use client'
import styled from "styled-components";

interface ParagraphProps {
  color?: string;
}

interface MenuProps {
  open: boolean;
}

export const Head = styled.header`
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 320px) and (max-width: 769px){
    height: auto;
  }
`

export const Navigation = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;

  @media (min-width: 320px) and (max-width: 769px){
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

  @media (min-width: 320px) and (max-width: 1080px){
    margin-right: 0;
    width: auto;
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

  @media (min-width: 320px) and (max-width: 768px){
    flex-direction: column-reverse;
    margin-top: 0px;
  }
`

export const StyledMenu = styled.nav<MenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

export const StyledBurger = styled.button<MenuProps>`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${(props) => props.open ? '#0D0C1D' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${(props) => props.open  ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${(props) => props.open  ? '0' : '1'};
      transform: ${(props) => props.open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${(props) => props.open  ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`