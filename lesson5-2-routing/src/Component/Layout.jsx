import { Outlet, Link } from "react-router-dom"

import './Layout.css'

export const Layout = () => {
  return (
    <>
      <header className="header">
        <nav className="nav-header">
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer" />
    </>
  )
}