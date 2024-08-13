import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '../../assets/rbsLogoS.png';
import { FaI } from 'react-icons/fa6';
import { RiContactsFill } from "react-icons/ri";

const FooterLinks = [
    {
        title: "021 278 7727",
        link: "/#phoneNo",
    },
    {
        title: "0800 787 727",
        link: "/#phoneNo2",
    },
    {
        title: " jay@rbslimited.kiwi",
        link: "/#email",
    },
    {
        title: "www.rbslimited.kiwi",
        link: "/#website",
    },
];

const Footer = () => {
  return (
    <>
    <div>
        <div className="container grid md:grid-cols-3 bg-20 pt-5 bg-lightBlue w-full">
            {/**Company */}
            <div className='py-8 px-4'>
                <img src={Logo} alt='logo' className='w-36'/>
            <div className='space-y-5'>
                <p className='pt-4 opacity-60'>
                "Staff You Can Rely On"
                </p>
            </div>
            </div>
            {/**Footer link */}
            <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-semibold sm:text-left
                    mb-5'>Contact Us</h1>
                    <ul className='space-y-5'>
                        {FooterLinks.map((link) => (
                                <li key={link.id}>
                                    <RiContactsFill />
                                    <a href={link.link}>{link.title}</a>
                                </li>
                            ))}
                    </ul>
                </div>
            {/**company address */}
            <div className='py-8 px-4 col-span-2 sm:col-auto'>
                <h1 className='text-xl font-semibold sm:text-left mb-5'>Social Media</h1>
                <div className='flex items-center gap-3 mt-6'>
                    <a href='#'>
                        <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                    </a>
                    <a href='#'>
                        <FaFacebook className='text-3xl hover:text-primary duration-300'/>
                    </a>
                    <a href='#'>
                        <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
                    </a>
                </div>
            </div>  
            </div>
        </div>
        </div>
        {/*copyright*/}
        <div className='bg-gray-200'>
            <div className='text-xs md:text-sm container p-4 flex justify-between'>
                <p>Copyright Reliable Business Services &copy; 2024</p>
                <div className='flex justify-center items-center gap-3'>
                    <a href='https://raghavt.netlify.app/'>Designed By Raghav Tiwari</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
