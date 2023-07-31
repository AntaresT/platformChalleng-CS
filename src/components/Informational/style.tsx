'use client'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
`

export const CardBlock = styled.div`
`

export const Above = styled.div`
  padding-right: 136px;
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
`

export const Title = styled.h3`
  color: #FBAB34;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`

export const Subtitle = styled.h2`
  color: #5D6670;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.4px; 
`

export const Description = styled.p`
  color: #5D6670;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 
`

export const InfoBlock = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
`