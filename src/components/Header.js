import React from "react";
import { Link } from "gatsby";

export const Header = () =>
    <ul>
        <li><Link to='/' activeClassName='activeLink'>Home</Link></li>
        <li><Link to='/about' activeClassName='activeLink'>About us</Link></li>
    </ul>
