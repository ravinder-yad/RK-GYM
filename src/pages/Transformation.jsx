import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaArrowRight, FaTrophy, FaCheckCircle, FaUsers, FaDumbbell, FaChartLine, FaPlayCircle } from 'react-icons/fa';
import { GiWeightLiftingUp, GiLeg, GiMuscleUp } from 'react-icons/gi';

const Transformation = () => {
    const [sliderPos, setSliderPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);

    const handleMove = (e) => {
        if (!isDragging || !sliderRef.current) return;
        const rect = sliderRef.current.getBoundingClientRect();
        const x = e.clientX || (e.touches && e.touches[0].clientX);
        const position = ((x - rect.left) / rect.width) * 100;
        setSliderPos(Math.min(Math.max(position, 0), 100));
    };

    const transformations = [
        {
            name: 'Ravi Kumar',
            title: 'Weight Loss Transformation',
            before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80',
            after: 'https://images.unsplash.com/photo-1583454102339-01725902136a?auto=format&fit=crop&q=80',
            stats: { before: '85kg', after: '68kg', time: '5 Months' }
        },
        {
            name: 'Aman Singh',
            title: 'Muscle Gain Journey',
            before: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80',
            after: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80',
            stats: { before: '62kg', after: '75kg', time: '8 Months' }
        },
        {
            name: 'Emily Davis',
            title: 'Body Recomposition',
            before: 'https://images.unsplash.com/photo-1549476464-37392f717551?auto=format&fit=crop&q=80',
            after: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?auto=format&fit=crop&q=80',
            stats: { before: '25% BF', after: '12% BF', time: '4 Months' }
        }
    ];

    const successStories = [
        {
            name: 'Vikram Mehta',
            story: 'Lost 12kg in 4 months with RK Gym trainers. My energy levels have never been higher.',
            img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80'
        },
        {
            name: 'Sonal Verma',
            story: 'Gained muscle and improved my bench press by 30kg. The community here is unmatched.',
            img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80'
        }
    ];

    return (
        <div className="bg-white">
            {/* 1️⃣ Top Banner Section - Cinematic Dark Style */}
            <section className="relative h-[500px] flex items-center justify-center bg-dark overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    alt="Transformation Background"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="container mx-auto px-6 relative z-10 text-center mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block bg-primary/20 px-4 py-1 rounded-full mb-6"
                    >
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Real Evolution</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-9xl font-black leading-none tracking-tighter uppercase italic text-white mb-6"
                    >
                        BODY <span className="text-outline-white">TRANSFORMATIONS</span>
                    </motion.h1>
                    <p className="text-xl text-gray-400 font-bold uppercase tracking-widest max-w-2xl mx-auto italic">
                        “Real People. Real Results.”
                    </p>
                </div>
            </section>

            {/* 2️⃣ Before / After Gallery (Main Section) */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {transformations.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="bg-white p-8 rounded-[60px] shadow-sm hover:shadow-2xl transition-all duration-700 group border border-gray-100"
                            >
                                <div className="flex gap-4 mb-8">
                                    <div className="relative flex-1 aspect-[3/4] rounded-[30px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                                        <img src={item.before} className="w-full h-full object-cover" alt="Before" />
                                        <div className="absolute top-4 left-4 bg-dark/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-[8px] font-black uppercase tracking-widest">Before</div>
                                    </div>
                                    <div className="relative flex-1 aspect-[3/4] rounded-[30px] overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors">
                                        <img src={item.after} className="w-full h-full object-cover shadow-2xl" alt="After" />
                                        <div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-full text-white text-[8px] font-black uppercase tracking-widest">After</div>
                                    </div>
                                </div>
                                <div className="text-center px-4">
                                    <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-2">{item.name}</h4>
                                    <p className="text-primary font-black uppercase text-[10px] tracking-widest mb-6">{item.title}</p>
                                    <div className="grid grid-cols-3 gap-2 border-t border-gray-100 pt-6">
                                        <div>
                                            <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest">Before</p>
                                            <p className="text-lg font-black italic">{item.stats.before}</p>
                                        </div>
                                        <div>
                                            <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest">After</p>
                                            <p className="text-lg font-black italic text-primary">{item.stats.after}</p>
                                        </div>
                                        <div>
                                            <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest">Time</p>
                                            <p className="text-lg font-black italic text-dark">{item.stats.time}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3️⃣ Transformation Slider Section (Unique Feature) */}
            <section className="py-32 bg-light">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block italic">Interactive Tool</span>
                        <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6 leading-none">SEE THE <span className="text-outline text-dark">DIFFERENCE</span></h2>
                    </div>

                    <div
                        ref={sliderRef}
                        className="relative aspect-video rounded-[60px] overflow-hidden cursor-ew-resize select-none border-[12px] border-white shadow-premium"
                        onMouseMove={handleMove}
                        onTouchMove={handleMove}
                        onMouseDown={() => setIsDragging(true)}
                        onMouseUp={() => setIsDragging(false)}
                        onMouseLeave={() => setIsDragging(false)}
                    >
                        {/* After Image */}
                        <img
                            src="https://images.unsplash.com/photo-1583454102339-01725902136a?auto=format&fit=crop&q=80"
                            className="absolute inset-0 w-full h-full object-cover"
                            alt="After"
                        />
                        {/* Before Image (Clipped) */}
                        <div
                            className="absolute inset-0 overflow-hidden"
                            style={{ width: `${sliderPos}%` }}
                        >
                            <img
                                src="https://thecutgym.com/wp-content/uploads/2025/06/female-body-transformation-london-2-1-768x538.webp"
                                className="absolute inset-0 w-[500%] h-full object-cover grayscale"
                                alt="Before"
                                style={{ width: `${100 * (100 / sliderPos)}%` }}
                            />
                            <div className="absolute inset-0 bg-black/10"></div>
                        </div>

                        {/* Draggable Handle */}
                        <div
                            className="absolute inset-y-0 bg-white w-1 flex items-center justify-center translate-x-[-50%]"
                            style={{ left: `${sliderPos}%` }}
                        >
                            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                                <FaArrowRight className="text-xs rotate-180" />
                                <FaArrowRight className="text-xs" />
                            </div>
                        </div>

                        <div className="absolute bottom-10 left-10 bg-dark/60 backdrop-blur-md px-6 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-widest border border-white/20">Before</div>
                        <div className="absolute bottom-10 right-10 bg-primary/80 backdrop-blur-md px-6 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-widest border border-white/20">After</div>
                    </div>
                </div>
            </section>

            {/* 4️⃣ Success Stories Section */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">Member Voives</span>
                        <h2 className="text-6xl md:text-[100px] font-black tracking-tighter uppercase italic leading-none">SUCCESS <span className="text-outline text-dark">STORIES</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {successStories.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="bg-light p-16 rounded-[60px] relative overflow-hidden group hover:bg-dark hover:text-white transition-all duration-700"
                            >
                                <FaQuoteLeft className="text-8xl text-primary/5 absolute top-10 right-10 group-hover:text-primary/10 transition-colors" />
                                <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                                    <div className="w-32 h-32 rounded-[30px] overflow-hidden border-4 border-primary group-hover:border-white transition-colors flex-shrink-0">
                                        <img src={s.img} className="w-full h-full object-cover" alt={s.name} />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold italic leading-relaxed mb-8 text-gray-400 group-hover:text-gray-300">"{s.story}"</p>
                                        <h5 className="text-xl font-black uppercase italic tracking-tighter">{s.name}</h5>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5️⃣ Weight Loss vs Muscle Gain Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-10">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-dark rounded-[80px] p-20 text-white relative overflow-hidden group cursor-pointer"
                        >
                            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 transition-transform duration-1000" />
                            <div className="relative z-10">
                                <h3 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-6">WEIGHT LOSS <br /> <span className="text-primary italic">RESULTS</span></h3>
                                <p className="text-gray-400 font-medium mb-10 max-w-sm">From fat burning to high energy - see our shredding success stories.</p>
                                <button className="bg-white text-dark px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs flex items-center group/btn">
                                    Explore Fat Loss <FaArrowRight className="ml-3 group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-primary rounded-[80px] p-20 text-white relative overflow-hidden group cursor-pointer"
                        >
                            <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale-0 group-hover:scale-110 transition-transform duration-1000" />
                            <div className="relative z-10">
                                <h3 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-6">MUSCLE GAIN <br /> <span className="text-white italic">RESULTS</span></h3>
                                <p className="text-white/80 font-medium mb-10 max-w-sm">From average to beast - pack on lean mass with our bulking programs.</p>
                                <button className="bg-dark text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs flex items-center group/btn">
                                    Explore Hypertrophy <FaArrowRight className="ml-3 group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6️⃣ Video Transformation Section (Advanced) */}
            <section className="py-32 bg-light">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block">Visual Proof</span>
                        <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6 leading-none">VIDEO <span className="text-outline text-dark">CHRONICLES</span></h2>
                    </div>

                    <div className="max-w-4xl mx-auto aspect-video bg-dark rounded-[80px] overflow-hidden relative group cursor-pointer shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-all duration-1000" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-4xl shadow-2xl group-hover:scale-125 transition-transform">
                                <FaPlayCircle />
                            </div>
                        </div>
                        <div className="absolute bottom-12 left-12 text-white">
                            <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2 italic">Transformation Reel</p>
                            <h4 className="text-3xl font-black italic uppercase tracking-tighter">THE 2024 HIGHLIGHTS</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7️⃣ Stats Section (Motivational) */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { value: '100+', label: 'Transformations', icon: <FaChartLine /> },
                            { value: '500+', label: 'Happy Members', icon: <FaUsers /> },
                            { value: '15+', label: 'Expert Trainers', icon: <FaDumbbell /> },
                            { value: '10+', label: 'Years Experience', icon: <GiWeightLiftingUp /> },
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="text-center group p-10 bg-light rounded-[50px] hover:bg-dark hover:text-white transition-all duration-700"
                            >
                                <div className="text-primary text-3xl mb-4 flex justify-center transform group-hover:scale-125 transition-transform duration-500">{s.icon}</div>
                                <h3 className="text-6xl font-black italic tracking-tighter mb-2">{s.value}</h3>
                                <p className="text-gray-400 font-bold uppercase text-[9px] tracking-[0.4em] italic">{s.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8️⃣ Motivation Quote Section */}
            <section className="py-24 bg-light border-y border-gray-100 italic">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-tight max-w-5xl mx-auto">
                        “YOUR ONLY <span className="text-primary italic underline decoration-primary/20 underline-offset-8">LIMIT</span> IS YOU.”
                    </h3>
                </div>
            </section>

            {/* 9️⃣ Join CTA Section */}
            <section className="py-40 bg-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-7xl md:text-[120px] font-black italic tracking-tighter uppercase mb-16 leading-none">START YOUR <br /> <span className="text-primary italic">TRANSFORMATION</span> TODAY</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <button className="bg-primary text-white px-20 py-8 rounded-[40px] font-black uppercase tracking-[0.3em] hover:bg-dark hover:-translate-y-2 transition-all duration-700 shadow-[0_30px_60px_-15px_rgba(255,59,59,0.5)] text-2xl flex items-center group">
                            JOIN NOW <FaArrowRight className="ml-6 group-hover:translate-x-3 transition-transform" />
                        </button>
                        <button className="bg-dark text-white px-20 py-8 rounded-[40px] font-black uppercase tracking-[0.3em] hover:bg-primary hover:-translate-y-2 transition-all duration-700 shadow-2xl text-2xl">
                            VIEW PLANS
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Transformation;
