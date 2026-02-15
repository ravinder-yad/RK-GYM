import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaDumbbell } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Programs', path: '/programs' },
        { name: 'Trainers', path: '/trainers' },
        { name: 'Transformation', path: '/transformation' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'BMI', path: '/bmi' },
        { name: 'Contact', path: '/contact' },
    ];

    const isHomePage = location.pathname === '/';
    const hasLightHeader = isHomePage;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-md' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2 group">
                    <div className="relative">
                        <FaDumbbell className="text-3xl text-primary transform group-hover:rotate-45 transition-transform duration-300" />
                        <div className="absolute -inset-1 bg-primary/20 blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className={`text-2xl font-black tracking-tighter ${scrolled ? 'text-dark' : (hasLightHeader ? 'text-dark' : 'text-white')}`}>
                            RK <span className="text-primary">GYM</span>
                        </span>
                        <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${scrolled ? 'text-gray-500' : (hasLightHeader ? 'text-gray-500' : 'text-white/60')}`}>Premium Fitness</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-primary ${location.pathname === link.path
                                ? 'text-primary'
                                : scrolled ? 'text-dark' : (hasLightHeader ? 'text-dark' : 'text-white')
                                }`}
                        >
                            {link.name}
                            {location.pathname === link.path && (
                                <motion.div
                                    layoutId="underline"
                                    className="h-0.5 bg-primary mt-1"
                                />
                            )}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-red-600 transition-all shadow-lg hover:shadow-primary/30"
                    >
                        Join Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`lg:hidden text-3xl focus:outline-none ${scrolled ? 'text-dark' : (hasLightHeader ? 'text-dark' : 'text-white')}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 top-[70px] bg-white z-40 flex flex-col items-center justify-center space-y-8 lg:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`text-2xl font-bold uppercase tracking-widest ${location.pathname === link.path ? 'text-primary' : 'text-dark'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg uppercase tracking-widest shadow-xl"
                        >
                            Join Now
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
