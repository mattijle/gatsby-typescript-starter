
import React from 'react';
import { Link } from 'gatsby';
interface Props {
    menuOpen: boolean
    className: string
}
export const NavBar = ({ menuOpen, className }) => {


    return (

        <nav className={`${!menuOpen ? "hidden" : "block"} px-4 pt-3 pb-6 w-full bg-purple-800 md:bg-purple-700 ${className}`}>
            <Link className="block text-white px-2 py-1 rounded font-semibold hover:bg-purple-600" to="/blog">Blog</Link>
            <a className="block text-white px-2 py-1 rounded font-semibold hover:bg-purple-600" href="#">MenuItem 2</a>
        </nav>

    )
}

NavBar.defaultProps = {
    menuOpen: false,
    className: ''
}
export default NavBar;