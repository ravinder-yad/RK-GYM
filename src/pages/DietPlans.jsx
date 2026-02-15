import React from 'react';
import { motion } from 'framer-motion';
import { FaAppleAlt, FaLeaf, FaDrumstickBite } from 'react-icons/fa';

const DietPlans = () => {
    const diets = [
        {
            title: 'Weight Loss Plan',
            icon: <FaLeaf className="text-green-500" />,
            kcal: '1500-1800 kcal',
            focus: 'High Fiber, Low Carb',
            desc: 'Focuses on negative calorie balance while maintaining satiety with high volumes of vegetables and lean proteins.',
        },
        {
            title: 'Muscle Building',
            icon: <FaDrumstickBite className="text-red-500" />,
            kcal: '2800-3200 kcal',
            focus: 'High Protein, Complex Carbs',
            desc: 'Provides the necessary fuel and building blocks for hypertrophy and strength gains.',
        },
        {
            title: 'Balanced Wellness',
            icon: <FaAppleAlt className="text-orange-500" />,
            kcal: '2000-2200 kcal',
            focus: 'Micronutrients, Healthy Fats',
            desc: 'Optimized for long-term health, hormone balance, and sustainable energy levels throughout the day.',
        },
    ];

    return (
        <div className="pt-32 pb-24 bg-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Nutrition Guidance</span>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-8">FUEL YOUR BODY</h2>
                    <p className="text-gray-500 font-medium">Training is only 30% of the battle. The other 70% happens in the kitchen. Get our expert curated diet plans.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {diets.map((diet, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white p-12 rounded-[50px] shadow-premium hover:shadow-2xl transition-all group"
                        >
                            <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-500">{diet.icon}</div>
                            <h4 className="text-2xl font-black uppercase tracking-tighter mb-2">{diet.title}</h4>
                            <p className="text-primary font-bold uppercase text-[10px] tracking-widest mb-6">{diet.kcal} • {diet.focus}</p>
                            <p className="text-gray-500 font-medium leading-relaxed mb-10">{diet.desc}</p>
                            <button className="w-full py-4 border-2 border-dark rounded-2xl font-black uppercase tracking-widest group-hover:bg-dark group-hover:text-white transition-all">Download PDF</button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DietPlans;
