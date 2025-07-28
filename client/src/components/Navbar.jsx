import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Icons
import { FaAudible, FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contact/AuthProvider';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setSticky] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    const { user } = useContext(AuthContext);
    console.log(user);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Sell Your Book", path: "/admin/dashboard" },
        { link: "Blog", path: "/blog" },
    ];

    return (
        <header className='w-full bg-transparent fixed top-0 right-0 left-0 transition-all ease-in duration-300 z-50'>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky left-0 top-0 right-0 bg-blue-200 shadow-md" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>

                    <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'>
                        <FaAudible className='inline-block' /> BookHub
                    </Link>

                    {/* Desktop nav items */}
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ link, path }) => (
                            <Link
                                key={path}
                                to={path}
                                className={`block text-base uppercase cursor-pointer transition-all duration-200 
                                    ${currentPath === path ? 'text-blue-700 font-semibold' : 'text-black hover:text-blue-700'}`}
                            >
                                {link}
                            </Link>
                        ))}
                    </ul>

                    {/* Large device icons */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <button>
                            <FaBarsStaggered className='w-5 hover:text-blue-700' />
                        </button>
                    </div>

                    {/* Mobile menu toggle */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {menuOpen ? (
                                <FaXmark className='h-5 w-5 text-black' />
                            ) : (
                                <FaBarsStaggered className='h-5 w-5 text-black' />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile nav items */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${menuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {navItems.map(({ link, path }) => (
                        <Link
                            key={path}
                            to={path}
                            onClick={() => setMenuOpen(false)}
                            className={`block text-base uppercase cursor-pointer transition-all 
                                ${currentPath === path ? 'text-yellow-300 font-semibold' : 'text-white'}`}
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
