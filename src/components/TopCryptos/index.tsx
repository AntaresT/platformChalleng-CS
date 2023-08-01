'use client'
import { useState } from 'react';
import { Container, ShowItemsBtn, Table, Td, Text, Th, Title, Tr, TraderBtn} from './style'
import Bitcoin from '../../assets/bitcoin.png'
import Image from 'next/image'

export default function TopCryptos() {
  const data = [
    { name: "Bitcoin BTC", price: 'US$ 25.499,92', change: '+5,76%'},
    { name: "Bitcoin BTC", price: 'US$ 25.499,92', change: '-1,23%'},
    { name: "Bitcoin BTC", price: 'US$ 25.499,92', change: '+3,21%'},
    { name: "Bitcoin BTC", price: 'US$ 25.499,92', change: '-5,65%'},
    { name: "Bitcoin BTC", price: 'US$ 25.499,92', change: '+4,10%'},
    { name: "Bitcoin BTC", price: 'US$ 25.499,92', change: '-6,12%'},
    { name: "Bitcoin BTC", price: 'US$ 25.499,92', change: '+1,11%'},
    { name: "Bitcoin BTC", price: 'US$ 25.499,92', change: '+2,76%'},
    { name: "Bitcoin BTC", price: 'US$ 25.499,92', change: '+3,76%'},
    { name: "Bitcoin BTC", price: 'US$ 25.499,92', change: '-2,86%'},
    { name: "Bitcoin BTC", price: 'US$ 25.499,92', change: '-4,76%'},
  ]

  const [showAll, setShowAll] = useState(false);
  const initialItemsToShow = 4;
  const itemsToShow = showAll ? data.length : initialItemsToShow;

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  return(
    <Container>
      <Title>Top Crpytos</Title>
      <Table>
        <thead>
          <tr>
            <Th>#</Th>
            <Th>Cyptyo</Th>
            <Th>Price</Th>
            <Th>Change</Th>
            <Th>Trade</Th>
          </tr>
        </thead>
        <tbody>
        {data.slice(0, itemsToShow).map((item, index) => (
            <Tr key={index} lineindex={index % 2 === 0? '#FFF' : '#F6F6F6'}>
              <Td>{index+1}</Td>
              <Td style={{display: 'flex'}}>
                <Image src={Bitcoin} alt='crypto' /> 
                <Text>{item.name}</Text>
              </Td>
              <Td>{item.price}</Td>
              <Td>{item.change}</Td>
              <Td>
                <TraderBtn>Buy</TraderBtn>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
      <ShowItemsBtn onClick={handleShowMore}>{showAll? 'Show less' : 'Show more +'}</ShowItemsBtn>

    </Container>
  )
}