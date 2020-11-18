import React from 'react';
import {NavLink,Link} from 'react-router-dom';

<NavLink to="/product">Products</NavLink>

const Navbar = (props) => {
  return (
  <nav>
		<a className="hamburger" href="/"><i className="fa fa-bars"></i></a>
		<ul>
			<li><a href="/#about">About</a></li>
			<li><a href="/#gallery">Gallery</a></li>
			<NavLink to="/blog">Blog</NavLink>
			<li><a href="/#contact">Contact</a></li>
		</ul>
	</nav>
  )
}

export default Navbar;