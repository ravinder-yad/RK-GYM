import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeartbeat, FaDumbbell, FaYinYang, FaArrowRight, FaCheckCircle, FaUserCheck, FaAppleAlt, FaRunning, FaUsers, FaMedal, FaLayerGroup } from 'react-icons/fa';
import { GiWeightLiftingUp, GiMuscleUp, GiLeg, GiStopwatch } from 'react-icons/gi';

const Programs = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Weight Loss', 'Muscle Gain', 'Yoga'];

    const programs = [
        {
            category: 'Weight Loss',
            title: 'Weight Loss Program',
            icon: <FaHeartbeat />,
            desc: 'Scientific fat-burning systems including HIIT, fasted cardio, and metabolic conditioning.',
            features: ['Fat burn workouts', 'Cardio training', 'Diet support'],
            image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80'
        },
        {
            category: 'Muscle Gain',
            title: 'Muscle Gain Program',
            icon: <GiMuscleUp />,
            desc: 'Hypertrophy focused training plans designed to pack on serious lean muscle mass.',
            features: ['Strength training', 'Heavy workouts', 'Bodybuilding focus'],
            image: 'https://img.freepik.com/free-photo/funny-stylish-bodybuilder-with-tattoo-his-arm-doing-exercises-with-dumbbells-isolated-dark-background_613910-5149.jpg?semt=ais_hybrid&w=740&q=80'
        },
        {
            category: 'All',
            title: 'Cardio Training',
            icon: <FaRunning />,
            desc: 'Boosting your heart health and endurance with high-intensity cardiovascular sessions.',
            features: ['Treadmill & HIIT', 'Indoor Cycling', 'Endurance training'],
            image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80'
        },
        {
            category: 'Yoga',
            title: 'Yoga Classes',
            icon: <FaYinYang />,
            desc: 'Find your inner peace and improve flexibility with our expert-led yoga flows.',
            features: ['Flexibility', 'Stress relief', 'Mind-Body Balance'],
            image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80'
        },
        {
            category: 'All',
            title: 'Personal Training',
            icon: <FaUserCheck />,
            desc: 'Get dedicated attention with a private coach for personalized results and form correction.',
            features: ['1-to-1 training', 'Custom workout plan', 'Form analysis'],
            image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80'
        },
        {
            category: 'All',
            title: 'Diet Planning',
            icon: <FaAppleAlt />,
            desc: 'Nutritional guidance tailored to your goals, whether it’s bulking or shredding.',
            features: ['Nutrition guidance', 'Fitness meal plans', 'Macros counting'],
            image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80'
        }
    ];

    const filteredPrograms = filter === 'All'
        ? programs
        : programs.filter(p => p.category === filter || p.category === 'All');

    const schedule = [
        { day: 'Monday', focus: 'Chest & Triceps', time: '6:00 AM - 10:00 PM' },
        { day: 'Tuesday', focus: 'Back & Biceps', time: '6:04 AM - 10:00 PM' },
        { day: 'Wednesday', focus: 'Legs & Core', time: '6:00 AM - 10:00 PM' },
        { day: 'Thursday', focus: 'Cardio & Abs', time: '6:00 AM - 10:00 PM' },
        { day: 'Friday', focus: 'Shoulders & Traps', time: '6:00 AM - 10:00 PM' },
        { day: 'Saturday', focus: 'Full Body / Crossfit', time: '8:00 AM - 8:00 PM' },
    ];

    return (
        <div className="bg-white">
            {/* 1️⃣ Top Banner Section - Cinematic Dark Style */}
            <section className="relative h-[500px] flex items-center justify-center bg-dark overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    alt="Programs Background"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="container mx-auto px-6 relative z-10 text-center mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block bg-primary/20 px-4 py-1 rounded-full mb-6"
                    >
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Professional Training</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-9xl font-black leading-none tracking-tighter uppercase italic text-white mb-6"
                    >
                        OUR FITNESS <span className="text-outline-white">PROGRAMS</span>
                    </motion.h1>
                    <p className="text-xl text-gray-400 font-bold uppercase tracking-widest max-w-2xl mx-auto italic">
                        “Choose the right program for your fitness goal”
                    </p>
                </div>
            </section>

            {/* 2️⃣ Filter & Programs Cards Section */}
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

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <AnimatePresence mode='popLayout'>
                            {filteredPrograms.map((program, index) => (
                                <motion.div
                                    key={program.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white p-12 rounded-[60px] shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 group border border-transparent hover:border-primary/10"
                                >
                                    <div className="w-20 h-20 bg-light rounded-3xl flex items-center justify-center text-primary text-4xl mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                        {program.icon}
                                    </div>
                                    <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-6">{program.title}</h3>
                                    <p className="text-gray-400 font-medium leading-relaxed mb-8">
                                        {program.desc}
                                    </p>
                                    <ul className="space-y-4 mb-12">
                                        {program.features.map((f, i) => (
                                            <li key={i} className="flex items-center space-x-3 text-sm font-bold text-gray-500">
                                                <FaCheckCircle className="text-primary" />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="flex items-center space-x-3 text-dark font-black uppercase tracking-widest text-xs group-hover:text-primary transition-colors">
                                        <span>View Details</span>
                                        <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* 3️⃣ Program Details Section (Highlight Area) */}
            <section className="py-32 bg-dark text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1534438097545-a2c22c57f2ad?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center opacity-10 grayscale"></div>
                <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-[80px] overflow-hidden border-8 border-white/5 shadow-2xl skew-y-2">
                            <img src="https://img.freepik.com/free-photo/funny-stylish-bodybuilder-with-tattoo-his-arm-doing-exercises-with-dumbbells-isolated-dark-background_613910-5149.jpg?semt=ais_hybrid&w=740&q=80" className="w-full h-full object-cover" alt="Muscle Gain" />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary rounded-full flex flex-col items-center justify-center rotate-12 shadow-2xl">
                            <span className="text-4xl font-black italic">PRO</span>
                            <span className="text-[10px] font-black uppercase tracking-widest">Training</span>
                        </div>
                    </motion.div>

                    <div>
                        <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block border-l-4 border-primary pl-4">Highlighted Program</span>
                        <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-10 leading-none">MUSCLE GAIN <br /> <span className="text-outline-white">SPECIALIST</span></h2>
                        <p className="text-xl text-gray-400 font-medium leading-relaxed mb-12">
                            Our flagship hypertrophy program designed for lifters who want to take their physique to the next stage. We use scientific training splits and nutritional tracking.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            {[
                                { title: 'Strength Increase', icon: <GiWeightLiftingUp /> },
                                { title: 'Muscle Growth', icon: <GiMuscleUp /> },
                                { title: 'Pro Support', icon: <FaUserCheck /> }
                            ].map((item, i) => (
                                <div key={i} className="text-center bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-primary/50 transition-all group">
                                    <div className="text-primary text-3xl mb-4 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
                                    <p className="text-[10px] font-black uppercase tracking-widest">{item.title}</p>
                                </div>
                            ))}
                        </div>
                        <button className="bg-primary text-white px-16 py-6 rounded-3xl font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 hover:bg-white hover:text-dark transition-all">
                            JOIN NOW
                        </button>
                    </div>
                </div>
            </section>

            {/* 4️⃣ Weekly Schedule Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">Training Log</span>
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">WEEKLY <br /> <span className="text-outline text-dark">SCHEDULE</span></h2>
                    </div>

                    <div className="max-w-5xl mx-auto bg-light rounded-[60px] overflow-hidden shadow-sm">
                        <table className="w-full text-left">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th className="py-10 px-12 text-xs font-black uppercase tracking-[0.3em]">Day</th>
                                    <th className="py-10 px-12 text-xs font-black uppercase tracking-[0.3em]">Program Focus</th>
                                    <th className="py-10 px-12 text-xs font-black uppercase tracking-[0.3em]">Timings</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {schedule.map((item, i) => (
                                    <tr key={i} className="hover:bg-white transition-colors group">
                                        <td className="py-10 px-12 font-black italic uppercase text-xl group-hover:text-primary transition-colors">{item.day}</td>
                                        <td className="py-10 px-12">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                                <span className="text-lg font-bold text-gray-600 uppercase tracking-widest">{item.focus}</span>
                                            </div>
                                        </td>
                                        <td className="py-10 px-12 text-gray-400 font-bold uppercase text-xs tracking-widest">{item.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 5️⃣ Programs Benefits Section */}
            <section className="py-32 bg-light">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { title: 'Professional Trainers', desc: 'Expert guidance for every rep.', icon: <FaMedal /> },
                            { title: 'Safe Workouts', desc: 'Prioritizing form and safety.', icon: <FaCheckCircle /> },
                            { title: 'Modern Machines', desc: 'Elite gear from global brands.', icon: <FaDumbbell /> },
                            { title: 'Personal Attention', desc: 'Focus on your individual needs.', icon: <FaLayerGroup /> },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-10 rounded-[40px] shadow-sm text-center group border border-transparent hover:border-primary/20 transition-all duration-700 hover:shadow-2xl"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl mb-8 mx-auto group-hover:bg-primary group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-black uppercase italic mb-4 tracking-tighter">{item.title}</h4>
                                <p className="text-sm text-gray-400 font-medium italic">"{item.desc}"</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6️⃣ Who Can Join Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex justify-center space-x-8 mb-12">
                            {['Beginners', 'Intermediate', 'Advanced', 'Men & Women'].map((level, i) => (
                                <div key={i} className="flex items-center space-x-3 bg-light px-8 py-4 rounded-full border border-gray-100">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span className="text-xs font-black uppercase tracking-widest text-dark">{level}</span>
                                </div>
                            ))}
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-6 leading-none">
                            PROGRAMS DESIGNED FOR <br /> <span className="text-primary">ALL FITNESS</span> LEVELS.
                        </h2>
                        <p className="text-gray-400 text-xl font-medium">Whether you are just starting or looking to compete, we have a path for you.</p>
                    </div>
                </div>
            </section>

            {/* 7️⃣ Call To Action Section */}
            <section className="py-40 bg-light relative overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-7xl md:text-9xl font-black italic tracking-tighter uppercase mb-16 leading-none">START YOUR <br /> <span className="text-primary">TRAINING</span> TODAY</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <button className="bg-primary text-white px-16 py-8 rounded-[40px] font-black uppercase tracking-[0.3em] hover:bg-dark hover:-translate-y-2 transition-all duration-700 shadow-[0_30px_60px_-15px_rgba(255,59,59,0.5)] text-2xl flex items-center group">
                            JOIN PROGRAM <FaArrowRight className="ml-6 group-hover:translate-x-3 transition-transform" />
                        </button>
                        <button className="bg-dark text-white px-16 py-8 rounded-[40px] font-black uppercase tracking-[0.3em] hover:bg-primary hover:-translate-y-2 transition-all duration-700 shadow-2xl text-2xl">
                            CONTACT TRAINER
                        </button>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-full bg-white opacity-40 -skew-x-12 translate-x-20"></div>
            </section>
        </div>
    );
};

export default Programs;
