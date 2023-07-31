import Image from "next/image";
import { Container, Description, Subtitle, Title } from "./style";
import InfoIcon1 from '../../assets/InfoIcon1.png'

export default function SolutionCard() {
  return(
    <Container>
      <Image src={InfoIcon1} alt='CriptoCoin' />
      <Title>For your company</Title>
      <Subtitle>Crypto Solutions</Subtitle>
      <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</Description>
    </Container>
  )
}