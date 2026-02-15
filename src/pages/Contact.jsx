import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaClock, FaInstagram, FaFacebookF, FaYoutube, FaChevronDown, FaArrowRight, FaMap } from 'react-icons/fa';

const Contact = () => {
    const [formStatus, setFormStatus] = useState(null);
    const [activeFaq, setActiveFaq] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');
        setTimeout(() => setFormStatus('success'), 2000);
    };

    const contactInfo = [
        { title: 'Address', val: 'RK Gym, Global Plaza, New Delhi', icon: <FaMapMarkerAlt /> },
        { title: 'Phone', val: '9876543210', icon: <FaPhoneAlt /> },
        { title: 'Email', val: 'rkgym@gmail.com', icon: <FaEnvelope /> },
        { title: 'Timing', val: '6 AM – 10 PM', icon: <FaClock /> },
    ];

    const faqs = [
        { q: "What are the gym timings?", a: "We are open from 6:00 AM to 10:00 PM daily, including weekends." },
        { q: "Is a professional trainer available?", a: "Yes, certified trainers are available during all working hours to guide you." },
        { q: "How can I join?", a: "You can join directly by visiting our gym or through the Membership plans on our website." },
    ];

    return (
        <div className="bg-white">
            {/* 1️⃣ Top Banner - Cinematic Dark Style */}
            <section className="relative h-[500px] flex items-center justify-center bg-dark overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    alt="Contact Background"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="container mx-auto px-6 relative z-10 text-center mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block bg-primary/20 px-4 py-1 rounded-full mb-6"
                    >
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Get Help</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-9xl font-black leading-none tracking-tighter uppercase italic text-white mb-6"
                    >
                        CONTACT <span className="text-outline-white">RK GYM</span>
                    </motion.h1>
                    <p className="text-xl text-gray-400 font-bold uppercase tracking-widest max-w-2xl mx-auto italic">
                        “We are here to help you on your fitness journey”
                    </p>
                </div>
            </section>

            {/* 2️⃣ Contact Info Section */}
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((info, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-light p-10 rounded-[40px] text-center border border-transparent hover:border-primary/20 transition-all group"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary text-2xl mb-8 mx-auto shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                                    {info.icon}
                                </div>
                                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-2">{info.title}</h4>
                                <p className="text-xl font-black uppercase italic tracking-tighter text-dark">{info.val}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3️⃣ Contact Form Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-stretch">
                        <div className="flex-1 bg-light p-12 md:p-20 rounded-[80px]">
                            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-12">SEND US A <span className="text-primary">MESSAGE</span></h2>
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-white rounded-[25px] py-6 px-8 outline-none font-bold focus:ring-4 ring-primary/5 transition-all shadow-sm" required />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Email Address</label>
                                        <input type="email" placeholder="john@example.com" className="w-full bg-white rounded-[25px] py-6 px-8 outline-none font-bold focus:ring-4 ring-primary/5 transition-all shadow-sm" required />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Phone Number</label>
                                    <input type="tel" placeholder="9876543210" className="w-full bg-white rounded-[25px] py-6 px-8 outline-none font-bold focus:ring-4 ring-primary/5 transition-all shadow-sm" required />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Your Message</label>
                                    <textarea rows="5" placeholder="How can we help you?" className="w-full bg-white rounded-[40px] py-8 px-10 outline-none font-bold focus:ring-4 ring-primary/5 transition-all shadow-sm resize-none" required />
                                </div>
                                <button
                                    disabled={formStatus === 'sending' || formStatus === 'success'}
                                    className={`w-full py-8 rounded-[40px] font-black uppercase tracking-[0.3em] shadow-2xl transition-all flex items-center justify-center space-x-4
                                        ${formStatus === 'success' ? 'bg-green-500 text-white' : 'bg-primary text-white hover:bg-dark shadow-primary/30'}`}
                                >
                                    {formStatus === 'sending' ? (
                                        <span className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                                    ) : formStatus === 'success' ? (
                                        <span>Message Sent Successfully!</span>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        <div className="flex-1 space-y-10">
                            {/* Gym Preview Image / Map Thumbnail */}
                            <div className="rounded-[80px] overflow-hidden aspect-[4/3] relative group">
                                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-dark/40 flex items-center justify-center">
                                    <div className="bg-white p-8 rounded-full shadow-2xl animate-bounce">
                                        <FaMapMarkerAlt className="text-primary text-3xl" />
                                    </div>
                                </div>
                                <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-md p-8 rounded-[40px] border border-white/20">
                                    <h4 className="text-white font-black italic uppercase tracking-widest">Global Plaza, HQ</h4>
                                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest mt-2">Open Daily: 6 AM - 10 PM</p>
                                </div>
                            </div>

                            {/* Social Media Section */}
                            <div className="bg-dark p-12 rounded-[60px] text-white text-center">
                                <h4 className="text-xs font-black uppercase tracking-[0.5em] text-primary mb-10">Follow RK GYM</h4>
                                <div className="flex justify-center space-x-8">
                                    {[
                                        { icon: <FaInstagram />, label: 'Instagram' },
                                        { icon: <FaFacebookF />, label: 'Facebook' },
                                        { icon: <FaYoutube />, label: 'YouTube' },
                                    ].map((s, i) => (
                                        <motion.a
                                            key={i}
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            href="#"
                                            className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-3xl hover:bg-primary transition-all shadow-xl"
                                        >
                                            {s.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4️⃣ Google Map Section */}
            <section className="py-24 bg-light border-y border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="rounded-[80px] overflow-hidden h-[500px] shadow-premium relative border-[15px] border-white">
                        <iframe
                            title="Gym Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.565744265557!2d77.214476!3d28.613939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjIiTiA3N8KwMTInNTEuOSJF!5e0!3m2!1sen!2sin!4v1645454545454!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* 6️⃣ FAQ Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">COMMON <span className="text-primary italic">QUESTIONS</span></h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-light rounded-[30px] overflow-hidden">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-full p-8 flex justify-between items-center text-left"
                                >
                                    <span className="font-black uppercase tracking-widest italic text-sm">{faq.q}</span>
                                    <FaChevronDown className={`transition-transform duration-500 ${activeFaq === i ? 'rotate-180 text-primary' : 'text-gray-400'}`} />
                                </button>
                                <AnimatePresence>
                                    {activeFaq === i && (
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: 'auto' }}
                                            exit={{ height: 0 }}
                                            className="px-8 pb-8 text-gray-500 font-medium leading-relaxed"
                                        >
                                            {faq.a}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7️⃣ CTA Section */}
            <section className="py-40 bg-light text-center relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-7xl md:text-[100px] font-black italic tracking-tighter uppercase mb-16 leading-none">VISIT OUR <br /> <span className="text-primary italic">GYM</span> TODAY</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <button className="bg-primary text-white px-20 py-8 rounded-[40px] font-black uppercase tracking-[0.3em] hover:bg-dark hover:-translate-y-2 transition-all duration-700 shadow-[0_30px_60px_-15px_rgba(255,59,59,0.5)] text-2xl flex items-center group">
                            GET DIRECTIONS <FaArrowRight className="ml-6 group-hover:translate-x-3 transition-transform" />
                        </button>
                        <button className="bg-dark text-white px-20 py-8 rounded-[40px] font-black uppercase tracking-[0.3em] hover:bg-primary hover:-translate-y-2 transition-all duration-700 shadow-2xl text-2xl">
                            CALL NOW
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
