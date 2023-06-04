import { Outlet } from 'react-router-dom'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'

import './Layout.css'

export const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}