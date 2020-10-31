import { Link } from "gatsby"
import React from "react"
import NavBar from './navbar'
interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  return (
    <header
      className="bg-purple-700 mb-6 md:flex md:justify-between md:items-center md:py-6 md:px-4 "
    >
      <div className="flex justify-between w-full items-center my-0 py-6 px-4 md:p-0">
        <div className="">
          <h1 className="m-0 text-3xl font-bold">
            <Link
              to="/"
              className="text-white no-underline"
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
        <div className="md:hidden">
          <div >
            <button type="button"
              className="hover:text-purple-100 focus:text-purple-100 text-purple-500 focus:outline-none"
              onClick={() => { setMenuOpen(!menuOpen) }}
            >
              {!menuOpen && 'Menu'}
              {menuOpen && 'Close'}
            </button>
          </div>

        </div>
      </div>
      <NavBar menuOpen={menuOpen} className="md:flex md:justify-end" />
    </header >
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
