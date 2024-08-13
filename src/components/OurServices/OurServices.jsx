import React from 'react';
import Slider from "react-slick";
import Img1 from '../../assets/staff.jpg';
import Img2 from '../../assets/forklift.jpg';
import Img3 from '../../assets/warehouse.jpg';
import Img4 from '../../assets/officeStaff.jpg';
import Img5 from '../../assets/laboring.jpg';
import Img6 from '../../assets/supervisor.jpg';
import Img7 from '../../assets/reach.jpg';
import Img8 from '../../assets/handshake.jpg';
import Img9 from '../../assets/production.jpg';
import { FaCheck } from "react-icons/fa";

const MenuData = [
    {
        id: 1,
        name: "Warehouse Staff",
        img: Img1,
    },
    {
        id: 2,
        name: "Office/Admin Staff",
        img: Img4,
    },
    {
        id: 3,
        name: "Picking & Packing Staff",
        img: Img3,
    },
    {
        id: 4,
        name: "Laboring Jobs",
        img: Img5,
    },
    {
        id: 5,
        name: "Supervisory Jobs",
        img: Img6,
    },
    {
        id: 5,
        name: "Staff Training",
        img: Img1,
    },
    {
        id: 6,
        name: "Forklift & Reach Operators",
        img: Img7,
    },
    {
        id: 7,
        name: "Contract Work/Re-work",
        img: Img8,
    },
    {
        id: 8,
        name: "Permanent/Temporary Staff",
        img: Img2,
    },
    {
        id: 9,
        name: "Production & Manufacturing Staff",
        img: Img9,
    },
]

const OurMenu = () => {
  const settings = {
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
        {
            breakpoint: 10000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
  }

  return (
    <div className='py-16 bg-primary text-white' id='services'>
        <div className="container">
            {/**Header */}
            <div className='mb-10 space-y-5'>
                <h1 className='text-center text-4xl font-bold'>Our Services</h1>
                <div className='text-center sm:max-w-sm mx-auto text-xsopaxity-75'>
                    {" "}
                    The greatest challenge of the current employment market is surely locating and retaining talent. We understand the importance of having the right people in the right job for the success of your business, we are dedicated to helping you to achieve this goal.<br/><br/>
                    With years of professional experience in the industrial employment sector. Our aim is to provide you with the best and most reliable people for your vacancy, whether it’s a permanent position or a short-term temporary role.

                </div>
                <hr/>
            </div>
            {/**Slider */}
            <div>
                <Slider {...settings}>
                    {MenuData.map((menu) => (
                            <div className='my-'>
                                <div>
                                    {/**Img */}
                                    <div className='mb-3 flex justify-center'>
                                        <img src={menu.img} alt='description image' className='
                                        w-auto sm:max-w-[200px] md:max-w-[250px] shadow-1'/>
                                    </div>
                                    {/**Text*/}
                                    <div className='flex flex-col items-center gap-4'>
                                        <FaCheck className='text-3xl'/>
                                        <h1 className='text-2xl'>{menu.name}</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default OurMenu
