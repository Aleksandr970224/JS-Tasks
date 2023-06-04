import { Link } from "react-router-dom"
import { Switcher } from "../Switcher/Switcher"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

import './Header.css'

export const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header style={{ background: theme }}>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>

      <Switcher ></Switcher>
    </header>
  )
}