import React from 'react'
import BgPng from '../../assets/bs_card_back2.jpg'

const backgroundStyle = {
    backgroundImage: `url(${BgPng})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "contain",
    backgroundPosition: 'right',
    height: '100%',
    width: '100%',
};
const Newsletter = () => {
  return (
    <>
    <div id='contact'>
    <h1 className='text-5xl text-primary font-bold font-hevlectica text-center py-5'>Contact Us</h1>
    <p className='uppercase text-lg text-dark font-semibold text-center ml-4'>Please send us your query by filling the form below OR Call on 021 278 7727.</p><br/>
    <section className='container min-h-[420px] flex justify-center items-center py-5 sm:py-0'>
      <form action='' method='post' className='flex-col-center grid grid-cols-1 sm:grid-cols-1 gap-6 text-align-center'>
        <div className='text-lg text-gray-500 tracking-wide leading-5'>
            <label htmlFor='name' hidden>
                Name
            </label>
            <input type='text' name='name' id='name' placeholder='Name*' required></input>
        </div>
        <div className='text-lg text-gray-500 tracking-wide leading-5 py-3'>
            <label htmlFor='email' hidden>
                Email
            </label>
            <input type='text' name='email' id='email' placeholder='Email Address*' required></input>
        </div>
        <div className='text-lg text-gray-500 tracking-wide leading-5 py-3'>
            <label htmlFor='phone number' hidden>
                Phone Number
            </label>
            <input type='tel' name='phone' id='phone' placeholder='Phone Number*' required></input>
        </div>
        <div className='text-lg text-gray-500 tracking-wide leading-5 py-3'>
            <label htmlFor='company name' hidden>
                Company Name
            </label>
            <input type='text' name='compName' id='compName' placeholder='Company Name'></input>
        </div>
        <div className='text-lg text-gray-500 tracking-wide leading-5 py-3'>
            <label htmlFor='Subject' hidden>
                Subject
            </label>
            <input type='text' name='subject' id='subject' placeholder='Subject*' required></input>
        </div>
        <div className='text-lg text-gray-500 tracking-wide leading-5 py-6'>
            <label htmlFor='message' hidden>
                Message
            </label>
            <textarea name='message' id='message' placeholder='Message*' required></textarea><hr /><br/>
            <input className='primary-btn' type='submit' value='Submit'/>
        </div>
      </form>
    </section>
    </div>
    </>
  )
}

export default Newsletter
