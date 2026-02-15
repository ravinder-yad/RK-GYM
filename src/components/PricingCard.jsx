import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const PricingCard = ({ plan, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative p-10 rounded-[40px] border-2 transition-all duration-500 group ${plan.recommended
                    ? 'border-primary bg-dark text-white shadow-2xl shadow-primary/20 scale-105 z-10'
                    : 'border-gray-100 bg-light hover:border-primary/30'
                }`}
        >
            {plan.recommended && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                    Best Value
                </div>
            )}

            <div className="mb-10">
                <h3 className={`text-2xl font-black uppercase mb-4 ${plan.recommended ? 'text-white' : 'text-dark'}`}>{plan.name}</h3>
                <div className="flex items-baseline">
                    <span className="text-5xl font-black italic">{plan.price}</span>
                    <span className={`ml-2 font-bold uppercase text-xs tracking-widest ${plan.recommended ? 'text-gray-400' : 'text-gray-500'}`}>{plan.period}</span>
                </div>
            </div>

            <ul className="space-y-6 mb-12">
                {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-4">
                        <FaCheckCircle className={`text-xl flex-shrink-0 ${plan.recommended ? 'text-primary' : 'text-primary/60'}`} />
                        <span className={`font-semibold ${plan.recommended ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                    </li>
                ))}
            </ul>

            <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all ${plan.recommended
                    ? 'bg-primary text-white hover:bg-red-600 shadow-xl shadow-primary/30'
                    : 'bg-dark text-white hover:bg-primary'
                }`}>
                Select Plan
            </button>
        </motion.div>
    );
};

export default PricingCard;
