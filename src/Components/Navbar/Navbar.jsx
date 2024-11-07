import React from 'react'
import styles from './navbar.module.css';
import { Button } from '../ReusableComponents/Button';
import { GiHamburgerMenu } from "react-icons/gi";
export const Navbar = () => {
  return (
    <div className='h-16 sm:h-[100px] justify-center flex items-center px-5 sm:px-10 sm:justify-start'>
        <GiHamburgerMenu className='block mr-auto sm:hidden text-[#3F3F3F] cursor-pointer'/>
        <div className='hidden sm:block'>
            <img src='/Images/logo.png' className='w-10'/>
        </div>
        

        <div className={`sm:ml-auto hidden sm:flex  ${styles.navNavigation}`}>
            <ul className='text-[#696969] capitalize gap-10 mr-10 items-center flex'>
                <li><a href="#">Home</a></li>
                <li><a href="#" className='text-[#121212]'>About</a></li>
                <li><a href="#">Why</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Industries we serve</a></li>
            </ul>
            <div>
                <Button />
            </div>
        </div>
        <h5 className='uppercase text-[#7030A0] block sm:hidden'>INVEST LEARNING LTD</h5>
    </div>
  )
}
