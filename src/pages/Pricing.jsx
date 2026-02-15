import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShieldAlt, FaGem, FaCrown, FaArrowRight, FaCheckCircle, FaTimesCircle, FaDumbbell, FaLeaf, FaUserCheck, FaChevronDown, FaPercentage, FaMedal, FaStar } from 'react-icons/fa';
import PricingCard from '../components/PricingCard';

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);

    const plans = [
        {
            name: 'Monthly Plan',
            price: '₹800',
            period: '/ month',
            features: ['Gym Access', 'Cardio Area', 'Basic Support', 'Locker Access'],
            recommended: false,
            icon: <FaShieldAlt />
        },
        {
            name: '3 Months Plan',
            price: isYearly ? '₹1800' : '₹2000',
            period: '/ quarterly',
            features: ['Gym Access', 'Cardio + Strength', 'Trainer Guidance', 'Free WiFi', 'Locker Access'],
            recommended: true,
            icon: <FaGem />,
            tag: 'Most Popular'
        },
        {
            name: 'Yearly Plan',
            price: isYearly ? '₹6000' : '₹7000',
            period: '/ year',
            features: ['Full Gym Access', 'Personal Trainer Help', 'Diet Tips', 'VIP Locker Room', 'All Group Classes'],
            recommended: false,
            icon: <FaCrown />
        },
    ];

    const comparisonFeatures = [
        { name: 'Gym Access', monthly: true, quarterly: true, yearly: true },
        { name: 'Cardio Area', monthly: true, quarterly: true, yearly: true },
        { name: 'Strength Area', monthly: false, quarterly: true, yearly: true },
        { name: 'Trainer Guidance', monthly: false, quarterly: true, yearly: true },
        { name: 'Personal Trainer', monthly: false, monthlyValue: '✖', quarterly: false, quarterlyValue: '✖', yearly: true, yearlyValue: 'Dedicated' },
        { name: 'Diet Plan', monthly: false, quarterly: false, yearly: true },
        { name: 'Group Classes', monthly: 'Basic', quarterly: 'Standard', yearly: 'Unlimited' },
    ];

    const ptPlans = [
        { sessions: '1 Session', price: '₹300', desc: 'Single session trial' },
        { sessions: '10 Sessions', price: '₹2500', desc: 'Basic fundamentals' },
        { sessions: '1 Month PT', price: '₹5000', desc: 'Maximum results' },
    ];

    const faqs = [
        { q: "Can I cancel my membership?", a: "Yes, you can cancel your membership at any time. However, pre-paid amounts for 3-months or yearly plans are non-refundable." },
        { q: "Is a trainer included in the basic plan?", a: "The monthly plan includes basic gym floor support. Dedicated personal training is available in the Yearly plan or can be purchased separately." },
        { q: "Is the gym open daily?", a: "Yes, RK GYM is open 365 days a year. Weekdays: 6 AM - 10 PM. Weekends: 8 AM - 8 PM." },
        { q: "Is a diet plan included?", a: "Diet plans and nutritional guidance are included as a premium feature in our Yearly membership tier." },
    ];

    const benefits = [
        { title: 'Modern Equipment', desc: 'Elite gear from global brands.', icon: <FaDumbbell /> },
        { title: 'Clean Environment', desc: 'Hygienic and sanitized space.', icon: <FaLeaf /> },
        { title: 'Certified Trainers', desc: 'Expert guidance for every rep.', icon: <FaMedal /> },
        { title: 'Friendly Support', desc: 'Focus on your individual needs.', icon: <FaUserCheck /> },
    ];

    return (
        <div className="bg-white">
            {/* 1️⃣ Top Banner Section - Cinematic Dark Style */}
            <section className="relative h-[500px] flex items-center justify-center bg-dark overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    alt="Pricing Background"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="container mx-auto px-6 relative z-10 text-center mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block bg-primary/20 px-4 py-1 rounded-full mb-6"
                    >
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Pricing & Plans</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-9xl font-black leading-none tracking-tighter uppercase italic text-white mb-6"
                    >
                        MEMBERSHIP <span className="text-outline-white">PLANS</span>
                    </motion.h1>
                    <p className="text-xl text-gray-400 font-bold uppercase tracking-widest max-w-2xl mx-auto italic">
                        “Choose the plan that fits your fitness journey”
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    {/* Extra Smart Toggle */}
                    <div className="flex justify-center items-center space-x-6 mb-20">
                        <span className={`text-sm font-black uppercase tracking-widest ${!isYearly ? 'text-dark' : 'text-gray-400'}`}>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-20 h-10 bg-light rounded-full p-1 relative transition-colors duration-500"
                        >
                            <motion.div
                                animate={{ x: isYearly ? 40 : 0 }}
                                className="w-8 h-8 bg-primary rounded-full shadow-lg"
                            />
                        </button>
                        <span className={`text-sm font-black uppercase tracking-widest ${isYearly ? 'text-dark' : 'text-gray-400'}`}>Yearly <span className="text-primary text-[10px] ml-1">(Save 15%)</span></span>
                    </div>

                    {/* 2️⃣ Main Pricing Cards Section */}
                    <div className="grid md:grid-cols-3 gap-10 items-stretch">
                        {plans.map((plan, index) => (
                            <PricingCard key={index} plan={plan} index={index} />
                        ))}
                    </div>

                    {/* 3️⃣ Plan Comparison Table */}
                    <div className="mt-32">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">PLAN <span className="text-primary">COMPARISON</span></h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse bg-light rounded-[40px] overflow-hidden">
                                <thead>
                                    <tr className="bg-dark text-white">
                                        <th className="py-8 px-10 text-xs font-black uppercase tracking-widest">Features</th>
                                        <th className="py-8 px-10 text-xs font-black uppercase tracking-widest text-center">Monthly</th>
                                        <th className="py-8 px-10 text-xs font-black uppercase tracking-widest text-center">3 Months</th>
                                        <th className="py-8 px-10 text-xs font-black uppercase tracking-widest text-center">Yearly</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {comparisonFeatures.map((f, i) => (
                                        <tr key={i} className="hover:bg-white transition-colors">
                                            <td className="py-6 px-10 font-bold text-gray-700 uppercase tracking-widest text-xs">{f.name}</td>
                                            <td className="py-6 px-10 text-center">
                                                {typeof f.monthly === 'boolean'
                                                    ? (f.monthly ? <FaCheckCircle className="text-primary mx-auto" /> : <FaTimesCircle className="text-gray-300 mx-auto" />)
                                                    : <span className="text-[10px] font-black uppercase">{f.monthly}</span>
                                                }
                                            </td>
                                            <td className="py-6 px-10 text-center font-black">
                                                {typeof f.quarterly === 'boolean'
                                                    ? (f.quarterly ? <FaCheckCircle className="text-primary mx-auto" /> : <FaTimesCircle className="text-gray-300 mx-auto" />)
                                                    : <span className="text-[10px] font-black uppercase">{f.quarterly}</span>
                                                }
                                            </td>
                                            <td className="py-6 px-10 text-center font-black">
                                                {typeof f.yearly === 'boolean'
                                                    ? (f.yearly ? <FaCheckCircle className="text-primary mx-auto" /> : <FaTimesCircle className="text-gray-300 mx-auto" />)
                                                    : <span className="text-[10px] font-black uppercase text-primary">{f.yearlyValue || f.yearly}</span>
                                                }
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 4️⃣ Personal Training Pricing Section */}
                    <div className="mt-40">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block">1-on-1 Sessions</span>
                            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">PERSONAL <span className="text-outline text-dark">TRAINER PLANS</span></h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {ptPlans.map((p, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 text-center group"
                                >
                                    <h4 className="text-xl font-black uppercase italic mb-2 tracking-widest">{p.sessions}</h4>
                                    <p className="text-4xl font-black text-primary mb-4 italic">{p.price}</p>
                                    <p className="text-gray-400 font-medium text-sm italic mb-8">"{p.desc}"</p>
                                    <button className="w-full py-4 rounded-2xl bg-dark text-white font-black uppercase tracking-widest text-[10px] group-hover:bg-primary transition-all">Book Now</button>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* 5️⃣ Offer / Discount Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mt-32 bg-light p-16 md:p-24 rounded-[60px] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12"
                    >
                        <div className="relative z-10 w-24 h-24 bg-primary text-white text-5xl flex items-center justify-center rounded-full shadow-2xl rotate-12">
                            <FaPercentage />
                        </div>
                        <div className="text-center md:text-left flex-1 relative z-10">
                            <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">SPECIAL OFFER</h3>
                            <p className="text-xl text-gray-500 font-bold uppercase tracking-widest">Join yearly plan and get <span className="text-primary">1 month free</span></p>
                        </div>
                        <button className="bg-dark text-white px-12 py-6 rounded-[30px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-2xl relative z-10">Claim Now</button>
                        <div className="absolute top-0 right-0 w-64 h-full bg-white/50 -skew-x-12 translate-x-10" />
                    </motion.div>

                    {/* 6️⃣ Membership Benefits Section */}
                    <div className="mt-40 grid md:grid-cols-4 gap-8">
                        {benefits.map((b, i) => (
                            <div key={i} className="text-center p-8 bg-white rounded-3xl group">
                                <div className="text-primary text-3xl mb-6 flex justify-center group-hover:scale-125 transition-transform">{b.icon}</div>
                                <h4 className="text-lg font-black uppercase italic tracking-tighter mb-4">{b.title}</h4>
                                <p className="text-gray-400 text-xs font-medium italic">{b.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* 7️⃣ FAQ Section */}
                    <div className="mt-40 max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">GOT <span className="text-primary italic">QUESTIONS?</span></h2>
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

                    {/* 8️⃣ Call To Action Section */}
                    <div className="mt-40 text-center">
                        <h2 className="text-7xl md:text-[100px] font-black italic tracking-tighter uppercase mb-16 leading-none">START YOUR <br /> <span className="text-primary italic">FITNESS</span> JOURNEY</h2>
                        <div className="flex flex-wrap justify-center gap-8">
                            <button className="bg-primary text-white px-20 py-8 rounded-[40px] font-black uppercase tracking-[0.3em] hover:bg-dark hover:-translate-y-2 transition-all duration-700 shadow-[0_30px_60px_-15px_rgba(255,59,59,0.5)] text-2xl flex items-center group">
                                JOIN NOW <FaArrowRight className="ml-6 group-hover:translate-x-3 transition-transform" />
                            </button>
                            <button className="bg-dark text-white px-20 py-8 rounded-[40px] font-black uppercase tracking-[0.3em] hover:bg-primary hover:-translate-y-2 transition-all duration-700 shadow-2xl text-2xl">
                                CONTACT US
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
