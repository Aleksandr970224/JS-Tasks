import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

import './Footer.css'

export const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer style={{ background: theme }}>
      <h1>Footer</h1>
    </footer>
  )
}