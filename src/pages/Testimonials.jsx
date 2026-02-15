import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const reviews = [
        {
            name: 'Michael Knight',
            role: 'Business Exec',
            comment: 'RK GYM has transformed my approach to fitness. The trainers are top-notch and the atmosphere is electric.',
            stars: 5,
        },
        {
            name: 'Sarah Connor',
            role: 'Athlete',
            comment: 'The best equipment I have ever used. The attention to detail in the layout and maintenance is perfect.',
            stars: 5,
        },
        {
            name: 'John Wick',
            role: 'Member',
            comment: 'The personal coaching program is what set me on the right path. I have never felt stronger.',
            stars: 5,
        },
    ];

    return (
        <div className="pt-32 pb-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="mb-20 text-center">
                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Testimonials</span>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">WHAT THEY SAY</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="p-12 bg-light rounded-[50px] space-y-8 relative overflow-hidden"
                        >
                            <FaQuoteLeft className="text-6xl text-primary/10 absolute -top-4 -left-4" />
                            <div className="flex text-yellow-400 space-x-1">
                                {[...Array(review.stars)].map((_, i) => <FaStar key={i} />)}
                            </div>
                            <p className="text-xl font-bold italic text-dark leading-relaxed">"{review.comment}"</p>
                            <div>
                                <h5 className="text-lg font-black uppercase tracking-tighter">{review.name}</h5>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">{review.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
