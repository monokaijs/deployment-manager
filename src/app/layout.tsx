import './globals.css'
import type { Metadata } from 'next'
import { Lexend_Deca } from 'next/font/google'
import {ReactNode} from "react";
import {ConfigProvider} from "antd";

const lexendDeca = Lexend_Deca({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Deployment Manager',
  description: 'A good shit by @MonokaiJs',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: lexendDeca.style.fontFamily,
              fontSize: 12
            }
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  )
}
