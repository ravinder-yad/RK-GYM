import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBullseye, FaEye, FaDumbbell, FaUsers, FaMedal, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import { GiMuscleUp, GiWeightLiftingUp } from 'react-icons/gi';
import TrainerCard from '../components/TrainerCard';

const About = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const trainersPreview = [
        {
            name: 'Alex Rivera',
            role: 'Crossfit Specialist',
            exp: '8+ Years',
            img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80',
        },
        {
            name: 'Sarah Johnson',
            role: 'Yoga expert',
            exp: '6+ Years',
            img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80',
        },
        {
            name: 'Mike Tyson',
            role: 'Boxing Coach',
            exp: '12+ Years',
            img: 'https://pbs.twimg.com/media/Gqg7K1hWYAAMQfA.jpg',
        },
    ];

    const galleryImages = [
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80',
        'https://content.jdmagicbox.com/comp/nagpur/m4/0712px712.x712.150414211941.m3m4/catalogue/arena-gym-and-fitness-manewada-road-nagpur-gyms-d5jfl.jpg',
        'https://content.jdmagicbox.com/comp/delhi/d7/011pxx11.xx11.230518104228.n3d7/catalogue/fitness-arena-unisex-gym-baba-colony-delhi-gyms-I7Fus5QJeI.jpg',
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80',
    ];

    return (
        <div className="bg-white">
            {/* 1️⃣ Top Banner Section - SAMTU SAM PROGRAMS STYLE */}
            <section className="relative h-[500px] flex items-center justify-center bg-dark overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                    alt="About RK Gym"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="container mx-auto px-6 relative z-10 text-center mt-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block"
                    >
                        Learn More
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-7xl md:text-[120px] font-black leading-none tracking-tighter uppercase italic text-white"
                    >
                        ABOUT <span className="text-outline-white">RK</span> GYM
                    </motion.h1>
                    <p className="text-xl text-gray-400 font-bold uppercase tracking-widest mt-8">Where Strength Meets <span className="text-white">Discipline</span></p>
                </div>
            </section>

            {/* 2️⃣ Gym Story Section */}
            <section className="py-32">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative group"
                    >
                        <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-premium border-b-[20px] border-primary/10 group-hover:border-primary transition-all duration-700">
                            <img src="https://images.unsplash.com/photo-1570829460005-c840387bb1ca?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000" alt="Gym Story" />
                        </div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] block underline">History & Legacy</span>
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85]">OUR <br /> <span className="text-outline-white text-dark">STORY.</span></h2>
                        <div className="space-y-6 text-lg text-gray-500 font-medium leading-relaxed">
                            <p>RK Gym started with a simple belief: that everyone has a biological potential that remains untapped. Our journey began in 2010 as a small personal training studio dedicated to helping individuals discover their inner strength.</p>
                            <p>Over the years, we have focused on three core pillars: <span className="text-dark font-black italic">Discipline, Scientific Training, and Relentless Transformation.</span> We don't just provide equipment; we provide an arena for excellence.</p>
                            <p>Today, RK Gym is more than just a fitness center—it's a community of high-performers, dreamers, and achievers who refuse to settle for average.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3️⃣ Mission & Vision Section */}
            <section className="py-32 bg-light">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
                    <motion.div
                        {...fadeInUp}
                        className="bg-white p-14 rounded-[60px] shadow-sm hover:shadow-2xl transition-all duration-700 group border border-transparent hover:border-primary/20"
                    >
                        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary text-4xl mb-10 group-hover:bg-primary group-hover:text-white transition-all">
                            <FaBullseye />
                        </div>
                        <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-8">OUR MISSION</h3>
                        <ul className="space-y-5 text-gray-500 font-medium text-lg">
                            <li className="flex items-center space-x-3"><span className="w-2 h-2 rounded-full bg-primary" /> <span>Help people stay fit and resilient.</span></li>
                            <li className="flex items-center space-x-3"><span className="w-2 h-2 rounded-full bg-primary" /> <span>Build strong, iron-willed bodies.</span></li>
                            <li className="flex items-center space-x-3"><span className="w-2 h-2 rounded-full bg-primary" /> <span>Create a sustainable healthy lifestyle.</span></li>
                        </ul>
                    </motion.div>

                    <motion.div
                        {...fadeInUp}
                        className="bg-white p-14 rounded-[60px] shadow-sm hover:shadow-2xl transition-all duration-700 group border border-transparent hover:border-primary/20"
                    >
                        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary text-4xl mb-10 group-hover:bg-primary group-hover:text-white transition-all">
                            <FaEye />
                        </div>
                        <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-8">OUR VISION</h3>
                        <ul className="space-y-5 text-gray-500 font-medium text-lg">
                            <li className="flex items-center space-x-3"><span className="w-2 h-2 rounded-full bg-primary" /> <span>To be the best performance gym in the city.</span></li>
                            <li className="flex items-center space-x-3"><span className="w-2 h-2 rounded-full bg-primary" /> <span>Support every member's unique fitness journey.</span></li>
                            <li className="flex items-center space-x-3"><span className="w-2 h-2 rounded-full bg-primary" /> <span>Inspire global transformation through discipline.</span></li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* 4️⃣ Why Choose RK Gym */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">The RK Edge</span>
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic">WHY US?</h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { title: 'Modern Equipment', icon: <FaDumbbell />, desc: 'Elite high-performance machines.' },
                            { title: 'Certified Trainers', icon: <GiMuscleUp />, desc: 'Global certification standards.' },
                            { title: 'Clean Environment', icon: <FaMedal />, desc: 'Hygiene is our top priority.' },
                            { title: 'Personal Guidance', icon: <GiWeightLiftingUp />, desc: 'Tailored plans for your body.' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeInUp}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 bg-light rounded-[40px] text-center group hover:bg-dark hover:text-white transition-all duration-700"
                            >
                                <div className="text-4xl text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h4 className="text-xl font-black uppercase italic tracking-tighter mb-4">{item.title}</h4>
                                <p className="text-sm text-gray-400 font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5️⃣ Owner / Founder Section */}
            <section className="py-32 bg-dark text-white overflow-hidden relative">
                <div className="hero-glow opacity-20" />
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-[60px] overflow-hidden border-8 border-white/5 shadow-2xl skew-y-3">
                            <img src="https://rkfitnessgym.com/wp-content/uploads/2022/10/unknown_292491272_1038597093455742_4236501565798257397_n.jpg" className="w-full h-full object-cover" alt="Founder" />
                        </div>
                        <div className="absolute -bottom-10 -right-10 bg-primary px-10 py-6 rounded-3xl shadow-2xl rotate-3">
                            <p className="text-2xl font-black italic tracking-tighter uppercase">RK FOUNDER</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-10"
                    >
                        <FaQuoteLeft className="text-7xl text-primary/20" />
                        <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">MESSAGE FROM <br /> <span className="text-primary italic">THE FOUNDER</span></h2>
                        <p className="text-2xl font-bold italic text-gray-300 leading-relaxed">
                            "I started RK GYM because I was tired of commercial gyms that lacked soul. Fitness is a spiritual journey of the body. We are here to help you conquer yourself, one rep at a time."
                        </p>
                        <div className="pt-10 border-t border-white/10 flex items-center space-x-6">
                            <div className="w-16 h-16 rounded-full border-2 border-primary overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1541534741688-6078c64b5ca5?auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="text-xl font-black italic tracking-tighter uppercase">ROHIT KUMAR</p>
                                <p className="text-[10px] text-primary font-bold uppercase tracking-widest italic">CEO, RK Group</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 6️⃣ Trainers Intro Preview */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">Elite Squad</span>
                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic">MASTER TRAINERS</h2>
                        </div>
                        <Link to="/trainers" className="bg-dark text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-primary transition-all shadow-xl text-xs">
                            View All Coaches
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {trainersPreview.map((t, i) => <TrainerCard key={i} trainer={t} index={i} />)}
                    </div>
                </div>
            </section>

            {/* 7️⃣ Achievements / Experience Section */}
            <section className="py-24 bg-light border-y border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: 'Happy Members', value: '500+', icon: <FaUsers /> },
                            { label: 'Transformations', value: '100+', icon: <GiWeightLiftingUp /> },
                            { label: 'Years Experience', value: '15+', icon: <FaMedal className="inline" /> },
                            { label: 'Expert Trainers', value: '10+', icon: <FaDumbbell /> },
                        ].map((stat, i) => (
                            <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="text-center group">
                                <h3 className="text-6xl md:text-7xl font-black italic tracking-tighter text-dark group-hover:text-primary transition-colors">{stat.value}</h3>
                                <p className="text-gray-400 font-bold uppercase text-[9px] tracking-[0.4em] italic mt-2">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8️⃣ Gym Environment Photos */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">Real Environment</span>
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic underline decoration-primary/10 decoration-8 underline-offset-8">THE ARENA</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {galleryImages.map((img, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                                className={`rounded-[30px] md:rounded-[50px] overflow-hidden shadow-premium aspect-[4/5] ${i % 3 === 1 ? 'md:-translate-y-12' : ''}`}
                            >
                                <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Gym Arena" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9️⃣ Call To Action Section */}
            <section className="py-24 bg-light relative overflow-hidden group">
                <div className="container mx-auto px-6 flex flex-col items-center text-center">
                    <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-12">FEELING <span className="text-primary italic">INSPIRED?</span></h2>
                    <Link to="/contact" className="bg-primary text-white px-16 py-8 rounded-[40px] font-black uppercase tracking-[0.3em] hover:bg-dark hover:-translate-y-2 transition-all duration-700 shadow-[0_30px_60px_-15px_rgba(255,59,59,0.5)] text-2xl group flex items-center">
                        JOIN RK GYM NOW <FaArrowRight className="ml-6 group-hover:translate-x-3 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
