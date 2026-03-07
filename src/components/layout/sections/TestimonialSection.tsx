import { motion } from 'framer-motion';
import { Quote, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
    {
        content: "Chaamundeshwari transformed our hostel hydration—pure, punctual, and priced right!",
        author: "Hostel Warden",
        meta: "Kukatpally",
        initial: "H"
    },
    {
        content: "Reliable bulk supply for our office; quality beats market leaders consistently.",
        author: "IT Manager",
        meta: "Hi-Tech City",
        initial: "I"
    }
];

const TestimonialSection = () => {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-xl text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-2 text-cyan-400 font-black text-[10px] tracking-widest uppercase mb-4"
                        >
                            <Star className="w-3 h-3 fill-cyan-400" />
                            <span>Client Trust</span>
                        </motion.div>
                        <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-none">
                            Trusted by <br />
                            <span className="text-white/20">Market Leaders</span>
                        </h2>
                    </div>
                    <Link to="/testimonials" className="group flex items-center space-x-4 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                        <span className="text-[11px] font-black text-white uppercase tracking-widest">Read All Reviews</span>
                        <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 relative group hover:bg-white/[0.04] transition-all duration-700"
                        >
                            <Quote className="absolute top-10 right-10 w-12 h-12 text-cyan-500/10 group-hover:text-cyan-500/20 transition-colors" />

                            <p className="text-xl md:text-2xl font-medium text-cyan-50 leading-relaxed mb-12 relative z-10">
                                "{t.content}"
                            </p>

                            <div className="flex items-center space-x-5">
                                <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-black text-xl">
                                    {t.initial}
                                </div>
                                <div>
                                    <h4 className="font-black text-white">{t.author}</h4>
                                    <p className="text-cyan-400/60 font-bold text-[10px] tracking-widest uppercase">{t.meta}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
