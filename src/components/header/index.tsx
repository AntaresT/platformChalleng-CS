import Image from "next/image";
import { BtnSignIn, BtnSignUp, Clickable, CoinPrice, Head, LinkText, Links, Navigation, RightEnd, Sign } from "./style";

import coinLogo from '../../assets/Logo.svg'
import CoinTicker from "../coinTicker";

export default function Header () {
  return(
    <Head>
      <Navigation>
        <Links>
          <a href="#" rel="noreferrer">
            <Image src={coinLogo} alt="Logo" />
          </a>
          
          <Clickable href="#" rel="noreferrer">
            <LinkText>About Us</LinkText>
          </Clickable>

          <Clickable href="#" rel="noreferrer">
            <LinkText>Top Cryptos</LinkText>
          </Clickable>


        </Links>

        <RightEnd>
          <CoinPrice>
            <CoinTicker />
          </CoinPrice>
          <Sign>
            <BtnSignIn>
              <LinkText>Sign In</LinkText>
            </BtnSignIn>

            <BtnSignUp>
              <LinkText color='white'>Sign Up</LinkText>
            </BtnSignUp>

          </Sign>
        </RightEnd>
      </Navigation>
    </Head>
  )
}