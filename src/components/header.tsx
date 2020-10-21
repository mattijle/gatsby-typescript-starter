import { Link } from "gatsby"
import React from "react"

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (

  <header
    className="bg-purple-700 mb-6"
  >

    <div
      className="max-w-screen-lg my-0 mx-auto py-6 px-4 "
    >
      <h1 className="m-0 text-3xl font-bold">
        <Link
          to="/"
          className="text-white no-underline"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
