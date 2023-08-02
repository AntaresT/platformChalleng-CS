import Image from "next/image";
import { ContactInput, Container, Description, Label, LeftSide, OverImg, RightSide, SubscribeBtn, Subtitle, Title } from "./style";
import ContactImg from '../../assets/ContactImg.svg';

export default function Contact() {
  return(
    <Container>
      <Image src={ContactImg} alt='ContactImg' layout="responsive"/>
      <OverImg>
        <RightSide>
          <Title>Lorem ipsum</Title>
          <Subtitle>Lorem ipsum</Subtitle>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
            purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
          </Description>
        </RightSide>

        <LeftSide>
          <Label>Email</Label>
          <ContactInput type="text" placeholder='Email' />
          <SubscribeBtn>Subscribe</SubscribeBtn>
        </LeftSide>
      </OverImg>
    </Container>
  )
}