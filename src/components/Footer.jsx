import React from 'react';
import { Link } from 'react-router-dom';
import { FaDumbbell, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-light pt-20 pb-10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-6">
                    <Link to="/" className="flex items-center space-x-2">
                        <FaDumbbell className="text-4xl text-primary" />
                        <span className="text-3xl font-black tracking-tighter uppercase">
                            RK <span className="text-primary">GYM</span>
                        </span>
                    </Link>
                    <p className="text-gray-500 leading-relaxed">
                        Premium fitness destination for those who want to transform their bodies and lives with expert guidance and state-of-the-art equipment.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all text-dark">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all text-dark">
                            <FaInstagram />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all text-dark">
                            <FaTwitter />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all text-dark">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl font-bold mb-8">Quick Links</h4>
                    <ul className="space-y-4">
                        <li><Link to="/about" className="text-gray-500 hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link to="/programs" className="text-gray-500 hover:text-primary transition-colors">Our Programs</Link></li>
                        <li><Link to="/trainers" className="text-gray-500 hover:text-primary transition-colors">Expert Trainers</Link></li>
                        <li><Link to="/pricing" className="text-gray-500 hover:text-primary transition-colors">Pricing Plans</Link></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="text-xl font-bold mb-8">Support</h4>
                    <ul className="space-y-4">
                        <li><Link to="/bmi" className="text-gray-500 hover:text-primary transition-colors">BMI Calculator</Link></li>
                        <li><Link to="/contact" className="text-gray-500 hover:text-primary transition-colors">Contact Us</Link></li>
                        <li><Link to="/diet-plans" className="text-gray-500 hover:text-primary transition-colors">Diet Plans</Link></li>
                        <li><Link to="/testimonials" className="text-gray-500 hover:text-primary transition-colors">Testimonials</Link></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-xl font-bold mb-8">Newsletter</h4>
                    <p className="text-gray-500 mb-6">Subscribe to get latest updates and offers.</p>
                    <div className="flex flex-col space-y-3">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:border-primary transition-colors"
                        />
                        <button className="bg-primary text-white py-3 rounded-lg font-bold uppercase tracking-widest hover:bg-red-600 transition-all">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 border-t border-gray-200 mt-20 pt-10 text-center">
                <p className="text-gray-500 text-sm italic">
                    &copy; {new Date().getFullYear()} RK GYM. All rights reserved. Designed for Resume.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
