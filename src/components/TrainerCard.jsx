import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

const TrainerCard = ({ trainer, index }) => {
    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
        >
            <div className="relative overflow-hidden rounded-[40px] aspect-[3/4] mb-8">
                <img
                    src={trainer.img}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />

                {/* Social Overlay */}
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                        <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-dark hover:text-white transition-all transform -translate-y-10 group-hover:translate-y-0 duration-500 delay-75">
                            <FaInstagram className="text-xl" />
                        </a>
                        <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-dark hover:text-white transition-all transform -translate-y-10 group-hover:translate-y-0 duration-500 delay-150">
                            <FaTwitter className="text-xl" />
                        </a>
                        <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-dark hover:text-white transition-all transform -translate-y-10 group-hover:translate-y-0 duration-500 delay-200">
                            <FaFacebookF className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center md:text-left px-4">
                <span className="text-primary font-bold uppercase text-[10px] tracking-[0.3em] mb-2 block">{trainer.role}</span>
                <h4 className="text-2xl font-black tracking-tighter uppercase italic group-hover:text-primary transition-colors">{trainer.name}</h4>
                <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mt-1">Experience: {trainer.exp}</p>
            </div>
        </motion.div>
    );
};

export default TrainerCard;
