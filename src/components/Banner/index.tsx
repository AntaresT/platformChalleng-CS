'use client'
import { BannerContent, CardTiny, CoinCard, Container, ImgContainer, 
  LeftSide, RightSide, SingupBtn, Subtitle, Title } from "./style";
import bottomBannerImg from '../../assets/bottomBannerImg.svg'
import banner1 from '../../assets/Banner1.png'
import banner2 from '../../assets/Banner2.png'
import banner3 from '../../assets/Banner3.png'
import arrow from '../../assets/arrow.svg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Banner() {

  return(
    <Container>

      <BannerContent>
      {/* Div esquerda */}
        <LeftSide>
          <Title>Lorem ipsum dolor sit amet, consectetur</Title>
          <Subtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
          </Subtitle>
          <SingupBtn>Sign up <Image src={arrow} alt='arrow' /></SingupBtn>
          <CardTiny>
            <CoinCard>Crypto</CoinCard>
            <CoinCard>Crypto</CoinCard>
            <CoinCard>Crypto</CoinCard>
          </CardTiny>
        </LeftSide>

      {/* Div direita carousel */}
        <RightSide>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            style={{width: 500}}
          >
            <SwiperSlide>
              <Image src={banner1} alt="bannerImg-1" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={banner2} alt="bannerImg-2" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={banner3} alt="bannerImg-3" />
            </SwiperSlide>
          </Swiper>
        </RightSide>

      </BannerContent>

      <ImgContainer>
        <Image 
          src={bottomBannerImg} 
          alt='bottom-banner'
          fill={true}
        />
      </ImgContainer>
    </Container>
  )
} 