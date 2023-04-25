import "./../styles/globals.css"
import Link from "next/link"
import Image from "next/image"

import logo from "../public/kuyos_logo_pagina_web.png"
import Navegacion from "./components/Navegacion";

export const metadata = {
  title: 'Kuyos',
  icons: {
    icon: '/kuyos_logo_miniatura.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="h-screen bg-grey-blue">

        <div id="header" className="bg-header-blue py-4 flex self-center">

          <Link className="self-center w-2/6 ml-2 mr-[4vw] flex-shrink-0 sm:w-32 sm:ml-4" href="/">
            <Image src={logo} alt="Logo Kuyos"/>
          </Link>

          <Navegacion />
          
        </div>

        {children}

      </body>
    </html>
  )
}
