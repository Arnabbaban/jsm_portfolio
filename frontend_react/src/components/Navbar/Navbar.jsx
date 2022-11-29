import React from 'react'
import  { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src={images.logo} alt="logo"/>
        </div>
        <ul>
            {['home', 'about', 'work', 'skills', 'contact'].map((items) => (
                <li key={`link-${items}`}>
                    <div/>
                    <a href={`#${items}`}>{items}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar