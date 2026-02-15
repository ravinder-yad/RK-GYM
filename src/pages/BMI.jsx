import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWeight, FaArrowsAltV, FaCalculator, FaCheckCircle, FaExclamationTriangle, FaDumbbell, FaArrowRight, FaChartLine } from 'react-icons/fa';

const BMI = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [suggestion, setSuggestion] = useState('');

    const calculateBMI = (e) => {
        e.preventDefault();

        if (weight === 0 || height === 0 || weight === '' || height === '') {
            alert('Please enter valid weight and height');
        } else {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
            setBmi(bmiValue);

            if (bmiValue < 18.5) {
                setMessage('Underweight');
                setStatus('underweight');
                setSuggestion('You should focus on weight gain program and high-calorie diet.');
            } else if (bmiValue >= 18.5 && bmiValue < 25) {
                setMessage('Normal weight');
                setStatus('healthy');
                setSuggestion('Great job! Maintain your current fitness with regular exercise.');
            } else if (bmiValue >= 25 && bmiValue < 30) {
                setMessage('Overweight');
                setStatus('overweight');
                setSuggestion('We recommend starting a fat loss training and cardio plan.');
            } else {
                setMessage('Obese');
                setStatus('obese');
                setSuggestion('Start your transformation today with our expert weight loss plans.');
            }
        }
    };

    const getStatusColor = () => {
        switch (status) {
            case 'healthy': return 'text-green-500';
            case 'overweight': return 'text-yellow-500';
            case 'obese': return 'text-red-500';
            case 'underweight': return 'text-blue-500';
            default: return 'text-primary';
        }
    };

    const bmiInfo = [
        { category: 'Underweight', range: 'BMI < 18.5', color: 'bg-blue-50', text: 'text-blue-600' },
        { category: 'Normal', range: '18.5 – 24.9', color: 'bg-green-50', text: 'text-green-600' },
        { category: 'Overweight', range: '25 – 29.9', color: 'bg-yellow-50', text: 'text-yellow-600' },
        { category: 'Obese', range: '30+', color: 'bg-red-50', text: 'text-red-600' },
    ];

    return (
        <div className="bg-white">
            {/* 1️⃣ Top Banner - Cinematic Dark Style */}
            <section className="relative h-[500px] flex items-center justify-center bg-dark overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    alt="BMI Background"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="container mx-auto px-6 relative z-10 text-center mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block bg-primary/20 px-4 py-1 rounded-full mb-6"
                    >
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Fitness Tool</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-9xl font-black leading-none tracking-tighter uppercase italic text-white mb-6"
                    >
                        BMI <span className="text-outline-white">CALCULATOR</span>
                    </motion.h1>
                    <p className="text-xl text-gray-400 font-bold uppercase tracking-widest max-w-2xl mx-auto italic">
                        “Check Your Body Mass Index”
                    </p>
                </div>
            </section>

            {/* 2️⃣ BMI Input Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-white rounded-[60px] shadow-premium p-12 md:p-20 border border-gray-100">
                        <form onSubmit={calculateBMI} className="space-y-12">
                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <label className="block text-xs font-black uppercase tracking-[0.4em] text-gray-400 ml-4">Height (cm)</label>
                                    <div className="relative">
                                        <FaArrowsAltV className="absolute left-8 top-1/2 -translate-y-1/2 text-primary text-xl" />
                                        <input
                                            type="number"
                                            value={height}
                                            onChange={(e) => setHeight(e.target.value)}
                                            placeholder="175"
                                            className="w-full bg-light rounded-[30px] py-8 pl-20 pr-8 outline-none font-black text-3xl focus:ring-4 ring-primary/5 transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="block text-xs font-black uppercase tracking-[0.4em] text-gray-400 ml-4">Weight (kg)</label>
                                    <div className="relative">
                                        <FaWeight className="absolute left-8 top-1/2 -translate-y-1/2 text-primary text-xl" />
                                        <input
                                            type="number"
                                            value={weight}
                                            onChange={(e) => setWeight(e.target.value)}
                                            placeholder="70"
                                            className="w-full bg-light rounded-[30px] py-8 pl-20 pr-8 outline-none font-black text-3xl focus:ring-4 ring-primary/5 transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-8 rounded-[40px] font-black uppercase tracking-[0.3em] hover:bg-dark transition-all shadow-2xl shadow-primary/30 flex items-center justify-center space-x-6 text-xl"
                            >
                                <FaCalculator className="text-2xl" />
                                <span>Calculate BMI</span>
                            </button>
                        </form>

                        {/* 3️⃣ Result Section */}
                        <AnimatePresence>
                            {bmi && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mt-20 pt-20 border-t border-gray-100 text-center"
                                >
                                    <p className="text-gray-400 font-black uppercase text-xs tracking-[0.4em] mb-6 italic">Your Personalized Result</p>
                                    <div className="inline-block relative mb-10">
                                        <h2 className={`text-9xl font-black italic tracking-tighter ${getStatusColor()}`}>{bmi}</h2>
                                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-dark rounded-full flex items-center justify-center text-white scale-110 shadow-2xl">
                                            <FaChartLine />
                                        </div>
                                    </div>
                                    <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-4 text-dark">Category: {message}</h3>

                                    {/* 5️⃣ Suggestion Section */}
                                    <div className="bg-light p-10 rounded-[40px] max-w-2xl mx-auto mt-10 border border-primary/10">
                                        <p className="text-xl font-bold italic text-gray-600">"{suggestion}"</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* 4️⃣ BMI Info Section */}
            <section className="py-24 bg-light">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black tracking-tighter uppercase italic">BMI <span className="text-primary italic">RANGES</span></h2>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {bmiInfo.map((info, i) => (
                            <div key={i} className={`p-10 rounded-[40px] ${info.color} text-center shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-white`}>
                                <h4 className={`text-2xl font-black uppercase italic mb-2 ${info.text}`}>{info.category}</h4>
                                <p className="font-black tracking-widest text-sm opacity-60 italic">{info.range}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6️⃣ CTA Section */}
            <section className="py-40 bg-white text-center relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-7xl md:text-[100px] font-black italic tracking-tighter uppercase mb-16 leading-none italic">JOIN RK <span className="text-primary italic">GYM</span> & START <br /> YOUR JOURNEY</h2>
                    <button className="bg-primary text-white px-20 py-8 rounded-[40px] font-black uppercase tracking-[0.3em] hover:bg-dark hover:-translate-y-2 transition-all duration-700 shadow-[0_30px_60px_-15px_rgba(255,59,59,0.5)] text-2xl flex items-center group mx-auto">
                        JOIN NOW <FaArrowRight className="ml-6 group-hover:translate-x-3 transition-transform" />
                    </button>
                </div>
                <div className="absolute top-0 right-0 w-64 h-full bg-light opacity-50 -skew-x-12 translate-x-20"></div>
            </section>
        </div>
    );
};

export default BMI;
