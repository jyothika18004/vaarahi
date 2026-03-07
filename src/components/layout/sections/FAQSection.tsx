import { motion } from 'framer-motion';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
    {
        q: "What is clinical-grade purity?",
        a: "It's our 10-stage purification promise including RO, UV, and Ozone sterilization."
    },
    {
        q: "Do you offer emergency supply?",
        a: "Yes, we prioritize corporate and event bulk orders with dedicated logistics."
    }
];

const FAQSection = () => {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden bg-white/[0.01]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
                    >
                        <HelpCircle className="w-3 h-3 text-blue-400" />
                        <span className="text-[10px] font-black text-blue-400 tracking-widest uppercase">Quick Support</span>
                    </motion.div>
                    <h2 className="text-4xl lg:text-7xl font-black text-white tracking-tighter mb-8">
                        Got <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Questions?</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
                    {faqs.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10"
                        >
                            <h3 className="text-lg font-black text-white mb-4">{f.q}</h3>
                            <p className="text-cyan-100/40 text-sm font-medium leading-relaxed">{f.a}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link to="/faq" className="inline-flex items-center space-x-4 px-10 py-5 bg-white text-black rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-cyan-400 hover:text-white transition-all shadow-xl active:scale-95">
                        <span>View All FAQ</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
