import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlay, FaDumbbell, FaHeartbeat, FaUsers, FaStar, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import { GiWeightLiftingUp, GiMuscleUp, GiLeg, GiYinYang } from 'react-icons/gi';
import TrainerCard from '../components/TrainerCard';
import PricingCard from '../components/PricingCard';

const Home = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        initial: {},
        whileInView: { transition: { staggerChildren: 0.1 } }
    };

    const stats = [
        { label: 'Active Members', value: '500+', icon: <FaUsers /> },
        { label: 'Expert Trainers', value: '10+', icon: <FaDumbbell /> },
        { label: 'Success Stories', value: '100+', icon: <GiWeightLiftingUp /> },
        { label: 'Weekly Classes', value: '40+', icon: <FaHeartbeat /> },
    ];

    const programs = [
        { title: 'Weight Loss', icon: <FaHeartbeat />, desc: 'Intense fat-burning HIIT sessions.', color: 'from-blue-500 to-cyan-500' },
        { title: 'Muscle Gain', icon: <GiMuscleUp />, desc: 'Hypertrophy focused lifting plans.', color: 'from-red-500 to-orange-500' },
        { title: 'Cardio', icon: <GiLeg />, desc: 'Boost stamina and heart health.', color: 'from-purple-500 to-pink-500' },
        { title: 'Yoga', icon: <GiYinYang />, desc: 'Flexibility and mental peace.', color: 'from-green-500 to-emerald-500' },
    ];

    return (
        <div className="overflow-hidden bg-white selection:bg-primary selection:text-white">

            {/* 2️⃣ REVERTED CINEMATIC HERO SECTION - Premium White Design */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
                <div className="hero-glow top-0 left-0" />
                <div className="hero-glow bottom-0 right-0 opacity-10" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center space-x-3 bg-primary/5 px-5 py-2 rounded-full mb-8"
                            >
                                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">The Ultimate Fitness Hub</span>
                            </motion.div>

                            <h1 className="text-7xl md:text-[120px] font-black leading-[0.8] tracking-tighter uppercase italic mb-8 text-dark">
                                <span className="block">PUSH YOUR</span>
                                <span className="text-outline block mb-2">LIMITS</span>
                                <span className="text-primary block">BEYOND.</span>
                            </h1>

                            <p className="text-xl text-gray-400 font-bold uppercase tracking-[0.2em] max-w-xl mb-12 leading-relaxed">
                                We don't just build bodies, we build <span className="text-dark font-black underline decoration-primary decoration-4 underline-offset-8">LEGENDS</span>.
                            </p>

                            <div className="flex flex-wrap gap-8 items-center">
                                <Link
                                    to="/contact"
                                    className="bg-primary text-white px-14 py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-dark transition-all duration-500 shadow-2xl shadow-primary/40 flex items-center group relative overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center">
                                        Join The Tribe <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                                    </span>
                                </Link>
                                <Link to="/programs" className="font-black uppercase tracking-widest text-sm text-dark hover:text-primary transition-colors flex items-center group">
                                    Our Programs <span className="ml-3 w-10 h-px bg-dark group-hover:w-16 group-hover:bg-primary transition-all duration-500" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative z-10 aspect-[4/5] rounded-[60px] overflow-hidden shadow-premium skew-y-3 group">
                                <img
                                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms]"
                                    alt="Hero"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10" />
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
                        </motion.div>
                    </div>
                </div>

                {/* Floating Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-300 text-xs font-black uppercase tracking-[0.4em]"
                >
                    Scroll Down
                </motion.div>
            </section>

            {/* 3️⃣ QUICK STATS - ANIMATED GRID */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                {...fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="bg-light p-10 rounded-[50px] text-center group hover:bg-dark hover:text-white transition-all duration-700"
                            >
                                <div className="text-3xl text-primary mb-4 flex justify-center transform group-hover:scale-125 transition-transform duration-500">{stat.icon}</div>
                                <h3 className="text-5xl font-black mb-1 italic tracking-tighter uppercase">{stat.value}</h3>
                                <p className="text-gray-400 font-bold uppercase text-[9px] tracking-[0.4em] italic uppercase">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4️⃣ ABOUT - SECTION WITH REVEAL */}
            <section className="py-32">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        {...fadeInUp}
                        className="relative group"
                    >
                        <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-premium">
                            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Gym" />
                        </div>
                        <div className="absolute -bottom-10 -right-10 bg-primary text-white py-12 px-16 rounded-[40px] shadow-2xl skew-x-[-10deg]">
                            <h4 className="text-5xl font-black italic tracking-tighter">15+</h4>
                            <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Years Legacy</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">Our Story</span>
                        <h2 className="text-6xl md:text-8xl font-black mb-10 leading-[0.85] tracking-tighter uppercase italic">WE BREATHE <br /> <span className="text-outline-white text-dark">FITNESS.</span></h2>
                        <p className="text-xl text-gray-500 font-medium leading-relaxed mb-12">
                            RK GYM isn't just a place to sweat. It's an arena where results are the only currency. Since 2010, we've helped 10k+ people redefine their biological limits.
                        </p>
                        <div className="flex flex-col space-y-6 mb-12">
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mt-1"><FaDumbbell /></div>
                                <div>
                                    <h5 className="font-black uppercase tracking-tighter">Elite Equipment</h5>
                                    <p className="text-sm text-gray-400">Pure iron and state-of-the-art tech.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mt-1"><GiMuscleUp /></div>
                                <div>
                                    <h5 className="font-black uppercase tracking-tighter">Pro Trainers</h5>
                                    <p className="text-sm text-gray-400">Certified by global fitness bodies.</p>
                                </div>
                            </div>
                        </div>
                        <Link to="/about" className="inline-block border-2 border-dark text-dark px-14 py-5 rounded-full font-black uppercase tracking-widest hover:bg-dark hover:text-white transition-all">
                            Explore Legacy
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 5️⃣ PROGRAMS - MODERN CARDS */}
            <section className="py-32 bg-light">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center text-center mb-24">
                        <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">Our Expertise</span>
                        <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic mb-8">CHOOSE YOUR <span className="text-outline">CRAFT</span></h2>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-4 gap-6"
                    >
                        {programs.map((prog, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-white p-12 rounded-[60px] shadow-sm hover:shadow-2xl hover:-rotate-2 transition-all duration-700 group cursor-pointer border border-transparent hover:border-primary/20"
                            >
                                <div className={`w-20 h-20 bg-gradient-to-br ${prog.color} text-white text-3xl flex items-center justify-center rounded-[25px] mb-10 shadow-lg group-hover:scale-110 transition-transform`}>
                                    {prog.icon}
                                </div>
                                <h4 className="text-3xl font-black mb-4 uppercase italic tracking-tighter">{prog.title}</h4>
                                <p className="text-gray-400 font-medium leading-relaxed mb-10">{prog.desc}</p>
                                <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                    <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 6️⃣ TRAINERS PREVIEW */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">The Experts</span>
                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic">MASTER <br /> COACHES.</h2>
                        </div>
                        <p className="text-gray-500 font-medium text-lg leading-relaxed lg:border-l-4 border-primary pl-8">
                            Training with the best is the only way to become the best. Our coaches don't just instruct, they lead by example.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
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
                        ].map((t, i) => <TrainerCard key={i} trainer={t} index={i} />)}
                    </div>

                    <div className="text-center mt-24">
                        <Link to="/trainers" className="bg-dark text-white px-20 py-6 rounded-full font-black uppercase tracking-[0.3em] hover:bg-primary transition-all shadow-2xl">
                            Meet All Trainers
                        </Link>
                    </div>
                </div>
            </section>

            {/* 7️⃣ TRANSFORMATION */}
            <section className="py-32 bg-dark text-white">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block italic underline decoration-primary decoration-4 underline-offset-8">Transformation Story</span>
                        <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic mb-10 leading-[0.8]">FROM <br /> <span className="text-outline-white">ZERO</span> TO <br /> HERO.</h2>
                        <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[40px] border border-white/10 mb-12">
                            <FaQuoteLeft className="text-4xl text-primary mb-6" />
                            <p className="text-2xl font-bold italic leading-relaxed mb-8 text-gray-300">"Joining RK GYM was the best decision of my life. The environment here is different—it pushes you even when you want to quit."</p>
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-3xl font-black italic">JW</div>
                                <div>
                                    <h5 className="font-black uppercase tracking-widest tracking-tighter">James Wilson</h5>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">Lost 25kg in 6 Months</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="flex gap-4">
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                className="flex-1 aspect-[3/4] rounded-[50px] overflow-hidden grayscale border-4 border-white/5 shadow-2xl"
                            >
                                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Before" />
                            </motion.div>
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                className="flex-1 aspect-[3/4] rounded-[50px] overflow-hidden border-4 border-primary shadow-[0_0_50px_rgba(255,59,59,0.3)] mt-12"
                            >
                                <img src="https://images.unsplash.com/photo-1570829460005-c840387bb1ca?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" alt="After" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8️⃣ MEMBERSHIP PLANS */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">Pricing</span>
                        <h2 className="text-6xl md:text-[100px] font-black tracking-tighter uppercase italic leading-none">JOIN THE <span className="text-primary">RK</span> FAMILY</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10 items-center">
                        {[
                            {
                                name: 'Basic',
                                price: '$29',
                                period: '/ month',
                                features: ['Access to Gym Area', 'Locker Room', 'Expert Guidance', 'Free WiFi'],
                                recommended: false,
                            },
                            {
                                name: 'Professional',
                                price: '$59',
                                period: '/ month',
                                features: ['Full Gym Access', 'Personal Training', 'Diet Support', 'Group Classes'],
                                recommended: true,
                            },
                            {
                                name: 'Elite',
                                price: '$149',
                                period: '/ quarter',
                                features: ['Daily Coach Session', 'VIP Lounge', 'Post-Workout Shakes', 'Body Analysis'],
                                recommended: false,
                            },
                        ].map((p, i) => <PricingCard key={i} plan={p} index={i} />)}
                    </div>
                </div>
            </section>

            {/* 1️⃣1️⃣ CTA */}
            <section className="py-48 relative bg-dark text-white text-center overflow-hidden">
                <div className="absolute inset-0 opacity-20 scale-110 grayscale" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80')" }}>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-7xl md:text-[140px] font-black mb-16 tracking-tighter uppercase italic leading-[0.8]"
                    >
                        THE TIME <br /> IS <span className="text-primary italic">NOW.</span>
                    </motion.h2>
                    <Link to="/contact" className="inline-block bg-primary text-white px-24 py-10 rounded-[40px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-primary transition-all duration-700 shadow-2xl text-3xl group">
                        START YOUR LEGACY
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
