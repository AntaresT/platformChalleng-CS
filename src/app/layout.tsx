import StyledComponentsRegistry from '@/lib/registry'
import type { Metadata } from 'next'
import { Roboto_Flex as Roboto } from 'next/font/google'
import './global.css'

const roboto = Roboto({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'CoinSynch',
  description: 'A React Next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
