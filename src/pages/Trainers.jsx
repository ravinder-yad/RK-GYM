import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaTwitter, FaFacebookF, FaAward, FaCheckCircle, FaStar, FaQuoteLeft, FaArrowRight, FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa';
import TrainerCard from '../components/TrainerCard';

const Trainers = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Strength', 'Yoga', 'Cardio'];

    const trainers = [
        {
            name: 'Rohit Sharma',
            role: 'Strength Coach',
            exp: '5 Years',
            category: 'Strength',
            img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80',
        },
        {
            name: 'Sarah Johnson',
            role: 'Yoga expert',
            exp: '6 Years',
            category: 'Yoga',
            img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80',
        },
        {
            name: 'Mike Tyson',
            role: 'Boxing Coach',
            exp: '12 Years',
            category: 'Cardio',
            img: 'https://pbs.twimg.com/media/Gqg7K1hWYAAMQfA.jpg',
        },
        {
            name: 'Aman Verma',
            role: 'Weight Loss Expert',
            exp: '4 Years',
            category: 'Cardio',
            img: 'https://starsunfolded.com/wp-content/uploads/2015/10/Aman-Verma-at-a-gym.jpg',
        },
        {
            name: 'Deepak Singh',
            role: 'Bodybuilding Trainer',
            exp: '6 Years',
            category: 'Strength',
            img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80',
        },
        {
            name: 'Emma Watson',
            role: 'Nutrition Expert',
            exp: '5 Years',
            category: 'Yoga',
            img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80',
        },
    ];

    const filteredTrainers = filter === 'All'
        ? trainers
        : trainers.filter(t => t.category === filter);

    const skills = [
        { label: 'Strength Training', value: 95 },
        { label: 'Weight Loss Coaching', value: 90 },
        { label: 'Cardio Training', value: 85 },
        { label: 'Yoga', value: 70 },
    ];

    const achievements = [
        { value: '15+', label: 'Certified Trainers' },
        { value: '500+', label: 'Clients Trained' },
        { value: '100+', label: 'Transformations' },
        { value: '5+', label: 'Years Experience' },
    ];

    return (
        <div className="bg-white">
            {/* 1️⃣ Top Banner Section - Cinematic Dark Style */}
            <section className="relative h-[500px] flex items-center justify-center bg-dark overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    alt="Trainers Background"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="container mx-auto px-6 relative z-10 text-center mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block bg-primary/20 px-4 py-1 rounded-full mb-6"
                    >
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Elite Squad</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-9xl font-black leading-none tracking-tighter uppercase italic text-white mb-6"
                    >
                        MEET OUR <span className="text-outline-white">TRAINERS</span>
                    </motion.h1>
                    <p className="text-xl text-gray-400 font-bold uppercase tracking-widest max-w-2xl mx-auto italic">
                        “Guiding You Towards a Stronger Body”
                    </p>
                </div>
            </section>

            {/* 2️⃣ Trainers Cards Section (Main Area) */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    {/* Advanced Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-20">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs transition-all ${filter === cat
                                    ? 'bg-primary text-white shadow-xl shadow-primary/30'
                                    : 'bg-light text-gray-400 hover:text-dark'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <AnimatePresence mode='popLayout'>
                            {filteredTrainers.map((trainer, index) => (
                                <TrainerCard key={trainer.name} trainer={trainer} index={index} />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* 3️⃣ Trainer Details Section (Highlight Area) */}
            <section className="py-32 bg-dark text-white overflow-hidden relative">
                <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-[60px] overflow-hidden border-8 border-white/5 shadow-2xl">
                            <img src="https://img.freepik.com/free-photo/sporty-shaved-head-male-coach-assisting-female-doing-squats-with-barbell_613910-11409.jpg?semt=ais_hybrid&w=740&q=80" className="w-full h-full object-cover" alt="Head Trainer" />
                        </div>
                        <div className="absolute -bottom-10 -right-10 bg-primary p-10 rounded-3xl shadow-2xl rotate-3">
                            <span className="text-3xl font-black italic uppercase tracking-tighter">Head Coach</span>
                        </div>
                    </motion.div>

                    <div>
                        <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block underline underline-offset-8">Head of Training</span>
                        <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-8 leading-none">ROHIT <span className="text-outline-white">SHARMA</span></h2>

                        <div className="flex items-center space-x-12 mb-10">
                            <div>
                                <p className="text-primary font-black uppercase text-[10px] tracking-widest mb-1">Experience</p>
                                <p className="text-2xl font-black italic">5+ Years</p>
                            </div>
                            <div>
                                <p className="text-primary font-black uppercase text-[10px] tracking-widest mb-1">Specialty</p>
                                <p className="text-2xl font-black italic">Strength Coach</p>
                            </div>
                        </div>

                        <ul className="grid grid-cols-2 gap-6 mb-12">
                            {['Muscle building', 'Fat loss', 'Personal training', 'Diet support'].map((skill, i) => (
                                <li key={i} className="flex items-center space-x-3 text-gray-400 font-bold uppercase text-xs tracking-widest">
                                    <FaCheckCircle className="text-primary" />
                                    <span>{skill}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="bg-primary text-white px-14 py-6 rounded-3xl font-black uppercase tracking-widest hover:bg-white hover:text-dark transition-all shadow-2xl">
                            BOOK TRAINING
                        </button>
                    </div>
                </div>
            </section>

            {/* 4️⃣ Skills Progress Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-20">
                        <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block">Our Expertise</span>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">PROFESSIONAL <br /> <span className="text-outline text-dark">SKILLSET</span></h2>
                    </div>

                    <div className="space-y-12">
                        {skills.map((skill, i) => (
                            <div key={i}>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="font-black uppercase tracking-widest italic text-sm">{skill.label}</span>
                                    <span className="text-primary font-black">{skill.value}%</span>
                                </div>
                                <div className="h-3 w-full bg-light rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.value}%` }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-primary"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5️⃣ Trainer Achievements Section */}
            <section className="py-24 bg-light border-y border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {achievements.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center group"
                            >
                                <h3 className="text-6xl md:text-8xl font-black italic tracking-tighter group-hover:text-primary transition-colors duration-500">{item.value}</h3>
                                <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.4em] italic mt-4">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6️⃣ Trainer Booking Preview (Fake UI) */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto bg-dark rounded-[80px] p-16 md:p-24 flex flex-col md:flex-row gap-16 items-center relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
                        <div className="flex-1 space-y-8 relative z-10">
                            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase text-white leading-none">BOOK A <br /> <span className="text-primary">SESSION</span></h2>
                            <p className="text-gray-400 text-xl font-medium">Select your preferred expert and start your transformation journey today.</p>
                        </div>

                        <div className="flex-1 w-full space-y-6 relative z-10">
                            <div className="grid grid-cols-1 gap-6">
                                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center space-x-6 hover:border-primary/50 transition-all group cursor-pointer">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-xl"><FaUser /></div>
                                    <div className="flex-1">
                                        <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Expert</p>
                                        <p className="text-white font-black uppercase tracking-widest italic">Select Trainer</p>
                                    </div>
                                    <FaArrowRight className="text-gray-600 group-hover:text-primary group-hover:translate-x-2 transition-all" />
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center space-x-6 hover:border-primary/50 transition-all group cursor-pointer">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-xl"><FaCalendarAlt /></div>
                                    <div className="flex-1">
                                        <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Date</p>
                                        <p className="text-white font-black uppercase tracking-widest italic">Pick a Date</p>
                                    </div>
                                    <FaArrowRight className="text-gray-600 group-hover:text-primary group-hover:translate-x-2 transition-all" />
                                </div>
                            </div>
                            <button className="w-full bg-primary text-white py-8 rounded-[40px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-dark transition-all shadow-2xl shadow-primary/20 text-xl">
                                BOOK NOW
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7️⃣ Motivation Quote Section */}
            <section className="py-32 bg-light border-y border-gray-100 italic">
                <div className="container mx-auto px-6 text-center">
                    <FaQuoteLeft className="text-6xl text-primary/10 mx-auto mb-10" />
                    <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight max-w-5xl mx-auto">
                        “YOUR BODY CAN STAND ALMOST ANYTHING. IT’S YOUR MIND YOU HAVE TO <span className="text-primary underline decoration-primary/20 underline-offset-[10px]">CONVINCE</span>.”
                    </h3>
                </div>
            </section>

            {/* 8️⃣ Call To Action Section */}
            <section className="py-40 bg-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-7xl md:text-[120px] font-black italic tracking-tighter uppercase mb-16 leading-none">TRAIN WITH <br /> THE <span className="text-primary italic">BEST</span> COACHES</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <button className="bg-primary text-white px-20 py-8 rounded-[40px] font-black uppercase tracking-[0.3em] hover:bg-dark hover:-translate-y-2 transition-all duration-700 shadow-[0_30px_60px_-15px_rgba(255,59,59,0.5)] text-2xl flex items-center group">
                            JOIN NOW <FaArrowRight className="ml-6 group-hover:translate-x-3 transition-transform" />
                        </button>
                        <button className="bg-dark text-white px-20 py-8 rounded-[40px] font-black uppercase tracking-[0.3em] hover:bg-primary hover:-translate-y-2 transition-all duration-700 shadow-2xl text-2xl">
                            CONTACT TRAINER
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Trainers;
