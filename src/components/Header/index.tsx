import Image from "next/image";
import { BtnSignIn, BtnSignUp, Clickable, CoinPrice, Head, 
  LinkText, Links, Navigation, RightEnd, Sign, StyledBurger, StyledMenu } from "./style";

import coinLogo from '../../assets/Logo.svg'
import CoinTicker from "../CoinTicker";
import { getCoinsHeader } from "@/service/cryptos";

export default function Header () {

  // const [open, setOpen] = useState<Boolean>(false);

  // const Menu = ({ open }) => {
  //   return (
  //     <StyledMenu open={open}>
  //       <a href="/">
  //         About us
  //       </a>
  //       <a href="/">
  //         Pricing
  //       </a>
  //       <a href="/">
  //         Contact
  //       </a>
  //     </StyledMenu>
  //   )
  // }

  // const Burger = ({ open, setOpen }) => {
  //   return (
  //     <StyledBurger open={open} onClick={() => setOpen(!open)}>
  //       <div />
  //       <div />
  //       <div />
  //     </StyledBurger>
  //   )
  // }

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