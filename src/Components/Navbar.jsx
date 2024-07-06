import { useState } from 'react';
import logo from "../assets/favcon-logo.jpg"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='bg-black text-gray-400 h-[50px] md:h-[75px] flex justify-between items-center'>
            <img className="h-[50px] md:h-[75px]" src={logo} alt="webLogo" />
            <ul className='hidden md:text-white md:px-5 md:flex'>
                <li className='p-5 font-bold primary-color'><a href="#">Home</a></li>
                <li className='p-5'><a href="#">Blogs</a></li>
            </ul>
            <div onClick={handleNav} className='block px-5 md:hidden'>
                {nav ? <AiOutlineClose size={25} color='red' /> : <AiOutlineMenu size={25} color='white' />}
            </div>
            <div className={nav ? 'fixed bg-black h-full w-[60%] top-0 left-0 ease-in-out transition-all' : 'fixed left-[-100%]'}>
                <img className="h-[75px] m-4" src={logo} alt="webLogo" />
                <ul className='px-10 text-white'>
                    <li className='font-bold py-4 primary-color'><a href="#">Home</a></li>
                    <li className=''><a href="#">Blogs</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;