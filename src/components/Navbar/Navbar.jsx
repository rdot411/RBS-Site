import React from 'react'
import Logo from '../../assets/rbsLogoM.png';
import { FaBarsStaggered } from "react-icons/fa6";

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "#home",
    },
    {
        id: 2,
        name: "About Us",
        link: "#banner",
    },
    {
        id: 3,
        name: "Services",
        link: "#services",
    },
    {
        id: 4,
        name: "Contact Us",
        link: "#contact",
    },
]

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }
  return (
    <>
        <div className='bg-lightBlue'>
            <div className='container py-2'>
                <div className='flex justify-between items-center'>
                    {/*Logo*/}
                    <div data-aos="fade-down" data-aos-once="true">
                        <a href="#home">
                            <img src={Logo} alt='logo' className='w-41 h-auto'/>
                        </a>
                    </div>

                    {/*Links*/}
                    <div data-aos="fade-down" data-aos-once="true" data-aos-delay="300" className='hidden lg:flex justify-between items-center gap-4'>
                        <ul className='hidden  lg:flex justify-between items-center gap-4'>
                            {
                                Menu.map((menu) => (
                                    <li key={menu.id}>
                                        <a href={menu.link} className='inline-block
                                        text-xl p-4 hover:bg-primary hover:text-white'>{menu.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/*Responsive Mobile Menu*/}
                    <div className='lg:hidden'>
                        <button onClick={handleOpen}>
                            <FaBarsStaggered className='text-3xl'/>
                        </button>
                        {
                            open && (
                                <div>
                                    <ul className='bg-white space-y-3 p-4 rounded-md shadow-md absolute right-10 top-24 z-50'>
                                        {Menu.map((menu) => (
                                            <li key={menu.id}>
                                                <a href={menu.link} className='inline-block text-xl p-4 hover:bg-primary
                                                hover:text-white w-full rounded-md'>
                                                    {menu.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
