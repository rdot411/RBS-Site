import React from 'react'
import BannerImg from '../../assets/bs_card_front.jpg';
import BannerImg2 from '../../assets/bs_card_back2.jpg';
import { FaUserCheck } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

const hello = 1;
console.log(hello);
const Banner = () => {
  return (
    <>
        <div className='min-h-[620px] flex justify-center items-center py-12 sm:py-0' id='banner'>
            <div className="container">
                <div className=" flex-col-center grid grid-cols-1 sm:grid-cols-1 gap-6 text-center">
                    {/*Text content section*/}
                    <div className='flex flex-col justify-center gap-6 pt-10 sm:pt-5'>
                        <p className='uppercase text-3xl font-semibold text-dark'>About Us</p>
                        <h1 className='text-5xl text-primary font-bold font-hevlectica'>Jay  K Kumar</h1>
                        <h2 className='uppercase text-2xl font-semibold text-dark'>Business Development</h2>
                        <p className='text-sm text-gray-500 tracking-wide leading-5'>With over 15 years of experience in the world of Transport and Logistics we work very closely with our employers and our job seekers to find the Right Candidate for the Right job. At RBS we strongly believe that being Reliable is the absolute key to succeeding in any role. We pride ourselves on being a Reliable Business partner.</p>
                    {/*img section*/}
                    <div className='flex justify-center items-center lg:flex-row-reverse'>
                        <img src={BannerImg} alt='business card' className='max-w-[450px] w-full mx-auto
                        shadow-1'/>
                    </div>
                    {/*img section*/}
                    <div className='flex justify-center items-center'>
                        <img src={BannerImg2} alt='business card' className='max-w-[450px] w-full mx-auto
                        shadow-1 pb-10'/>
                    </div>
                    <hr/>
                    {/*Pros Section*/}
                    <div className='flex-col-center grid grid-cols-1 sm:grid-cols-1 gap-6 text-center'>
                    <div className='container flex gap-5 items-'>    
                    <p className='uppercase text-3xl font-semibold text-dark text-left ml-4'>Reliable Staff</p>
                    <FaUserCheck className='text-3xl text-lightBlue'/>
                    </div>
                    <p className='text-sm text-gray-500 tracking-wide leading-5'>We work closely with you to find the right candidate for the right job. If you need temp or permanent staff please contact us at admin@rbslimited.kiwi.</p>
                    <hr/>
                    <div className='flex-col-center grid grid-cols-1 sm:grid-cols-1 gap-6 text-center'>
                    <div className='container flex gap-5 items-center'>    
                    <p className='uppercase text-3xl font-semibold text-dark text-left ml-4'>Professional Team</p>
                    <RiTeamFill className='text-3xl text-lightBlue'/>
                    </div>
                    <p className='text-sm text-gray-500 tracking-wide leading-5'>We value our professional relations with our employers and job seekers. Our professional and experienced team is always here to help you.</p>
                    <hr/>
                    <div className='flex-col-center grid grid-cols-1 sm:grid-cols-1 gap-6 text-center'>
                    <div className='container flex gap-5 items-center'>    
                    <p className='uppercase text-3xl font-semibold text-dark text-left ml-4'>Job Seekers</p>
                    <FaSearch className='text-3xl text-lightBlue'/>
                    </div>
                    <p className='text-sm text-gray-500 tracking-wide leading-5'>Looking for a job? Please get in touch to register and discuss potential job opportunities. We are always looking for Reliable people to join our team. We can also help with further training and help you get your forklift licence.</p>
                    <hr/>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Banner
