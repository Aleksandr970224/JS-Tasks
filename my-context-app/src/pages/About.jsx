import { Link, Outlet } from "react-router-dom"

import './About.css'

export const About = () => {
  return (
    <>
      <h1>This page About</h1>

      <ul className="listAbout">
        <li>
          <Link to='/about/contacts'>Contacts</Link>
        </li>
        <li>
          <Link to='/about/team'>Team</Link>
        </li>
      </ul>

      <Outlet />
    </>
  )
}