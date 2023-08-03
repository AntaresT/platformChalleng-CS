'use client'
import styled from "styled-components"

interface TableRowProps {
  lineindex: string;
}

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 120px;
  margin-bottom: 120px;
`

export const Title = styled.h3`
  color: #5D6670;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; 
`

export const Table = styled.table`
  border-collapse: collapse;
  text-align: start;
  width: 1216px;

  @media (min-width: 320px) and (max-width: 1300px){
    width: auto;
  }
`

export const Tr = styled.tr<TableRowProps>`
  background-color: ${props => props.lineindex};
  height: 64px; 
`

export const Th = styled.th`
  color: #8C8A97;
  text-align: start;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  padding-left: 20px;
`

export const Td = styled.td`
  color: #5D6670;
  justify-content: start;
  align-items: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding-left: 20px;
  padding-right: 60px;

  @media (min-width: 320px) and (max-width: 769px){
    font-size: 15px;
  }

`

export const Text = styled.p`
  margin-left: 16px;
`

export const ShowItemsBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color: white;
  margin-top: 32px;
  color: #FBAB34;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  &:hover{
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`

export const TraderBtn = styled.button`
  border-radius: 32px;
  background: #149E55;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  width: 80px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px; 

  &:hover{
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`