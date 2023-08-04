'use client'
import styled from 'styled-components'

export const Foot = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 64px;
  padding: 0px 112px;

  @media (min-width: 320px) and (max-width: 769px){
    height: 56px;
    justify-content: center;
  }
`

export const Label = styled.label`
  color: #5D6670;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; 

  @media (min-width: 320px) and (max-width: 769px){
    display: none;
  }
`