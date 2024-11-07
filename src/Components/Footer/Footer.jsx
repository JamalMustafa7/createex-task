import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className='bg-[#7030A0] text-white'>

        <div className=' p-12 flex gap-10 justify-between'>
            <div className='max-w-72'>
                <h3 className='text-xl font-semibold'>Invest Learning LTD</h3>
                <div className='mb-2'>
                    <p className='text-[13px]'><span className='font-semibold'>U.K Office:</span> Suite 3740 Unit 3A 34-35 
                    Hatton Garden Holborn London EC1N 8DX</p>
                </div>
                <div className='mb-2 text-center hidden sm:block'>
                    <p className='text-[13px]'><span className='font-semibold'>Nigeria Office:</span> 10 Fadeyi Aladura Street,
                    Off Orishe road, Obafemi Awolowo Way.  Ikeja Lgos. Nigeria.</p>
                </div>
                <div className='mb-2'>
                    <p className='text-[13px]'><span className='font-semibold'>Telephone:</span> +44(0) 7904122514</p>
                </div>
                <div>
                    <p className='text-[13px]'><span className='font-semibold'>Email:</span> info@ill.com</p>
                </div>
            </div>
            <div className='text-center hidden sm:block'>
                <h3 className='text-xl font-semibold'>Quick Links</h3>
                <ul className='capitalize gap-1 flex flex-col text-[15px]'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#" className=''>About</a></li>
                    <li><a href="#">Why</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Industries we serve</a></li>
                </ul>
            </div>
            <div>
                <h3 className='text-xl font-semibold'>Follow Us</h3>
                <div className='flex gap-3 mt-2'>
                    <a href='#'><FaFacebook size={25}/></a>
                    <a href='#'><BsYoutube  size={25}/></a>
                    <a href='#'><FaLinkedin size={25}/></a>
                    <a href='#'><FaGoogle   size={25}/></a>
                </div>
            </div>
        </div>
        <p className='pb-4 text-center'><span className='text-[13px] font-semibold'>Copyright &copy; Invest Learning LTD- All right reserved</span></p>
    </div>

  )
}
