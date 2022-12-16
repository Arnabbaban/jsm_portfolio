import React, {useState} from 'react';
import{ HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from  'framer-motion';
import  { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <nav classname="app__navbar">
        <div className="app__navbar-logo">
            <img src={images.logo} alt="logo"/>
        </div>
        <ul className="app__navbar-links">
            {['home', 'about', 'work', 'skills', 'contact'].map((items) => (
                <li className='app__flex p-text' key={`link-${items}`}>
                    <div/>
                    <a href={`#${items}`}>{items}</a>
                </li>
            ))}
        </ul>
        <div className='app__navbar-menu'>
                <hiMenuAlt4 onClick={() => setToggle(true)} />
                {
                    toggle & (
                        <motion.div
                        whileInView={{x: [300,0]}}
                        transition={{ duration: .85,  ease: 'easeOut'}}
                        >
                        <HiX onClick={() => setToggle(false)}/>
                        {['home', 'about', 'work', 'skills', 'contact'].map((items) => (
                <li key={items}>
                    
                    <a href={`#${items}`} onClick={() => setToggle(false)}>{items}</a>
                </li>
            ))}

                        </motion.div>
                    )
                }


        </div>
    </nav>
  )
}

export default Navbar