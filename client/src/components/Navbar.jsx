import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

//icons
import { FaAudible, FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contact/AuthProvider';



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setSticky] = useState(false);

    const { user } = useContext(AuthContext);
    console.log(user);

    //toggle menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setSticky(true)
            }
            else {
                setSticky(false)
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, [])

    // navitems
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Sell Your Book", path: "/admin/dashboard" },
        { link: "Blog", path: "/blog" },
    ]
    return (
        <header className='w-full bg-transparent fixed top-0 right-0 left-0 transition-all
        ease-in duration-300'>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky left-0 top-0 right-0 bg-blue-200"
                : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>

                    <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2 '><FaAudible className='inline-block' />Book</Link>

                    <ul className='md:flex space-x-12 hidden '>
                        {
                            navItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base text-black 
                            uppercase cursor-pointer hover:text-blue-700'>{link}</Link>)
                        }
                    </ul>
                    {/* btn for large devices */}
                    <div className=' space-x-12 hidden lg:flex items-center'>
                        <button><FaBarsStaggered className='w-5 hover:text-blue-700' /></button>

                    </div>
                    {/* btn for medium devices */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {
                                menuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />
                            }
                        </button>
                    </div>

                </div>
                {/* for small devices  */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${menuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base text-white 
                            uppercase cursor-pointer '>{link}</Link>)
                    }
                </div>
            </nav>
        </header >
    )
}

export default Navbar