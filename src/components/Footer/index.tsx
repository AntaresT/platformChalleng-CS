import { Foot, Label } from './style'
import Image from 'next/image'
import Logo from '../../assets/Logo.svg'

export default function Footer() {
  return(
    <Foot>
      <Label>Copyright © 2022 -  All rights reserved</Label>
      <Image src={Logo} alt="CoinSynchLogo" />
    </Foot>
  )
}