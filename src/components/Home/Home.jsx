import React from 'react';

const Hero = () => {
  return <>
    <div className='min-h-[550px] sm:min-h-[600px] bg-lightBlue flex justify-center items-center'>
        <div className='container pb-8 sm:pb-0'>
            <div className='grid grid-cols-1 sm:grid-cols-1 gap-10'>
                {/*text content*/}
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left'>
                    <h1 data-aos="zoom-out" data-aos-delay="200"

                     className='text-8xl lg:text-[12rem] font-bold bg-clip-text text-transparent
                    bg-gradient-to-b from-primary to-primary/90 font-hevlectica'>"Staff You Can Rely On"
                    <span className='text-3xl font-s text-dark'></span>
                    </h1>
                    <p data-aos="zoom-out" className='text-sm text-dark font-sans pt-5'>
                        {" "}
                        RBS specialises in temporary and permanent recruitment. We are committed to being your Reliable Business Partner. We have established strong relationship among our clients and candidates. RBS continues to grow through good leadership and by following the key principle of Being Reliable. Please check out our services and contact us. Thank you for your visit.
                    </p>
                </div>
                </div>
            </div>
        </div>
  </>;

  
};

export default Hero
