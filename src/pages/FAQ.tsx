import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageSquare, Phone } from 'lucide-react';
import SEO from '../components/common/SEO';

const faqs = [
    {
        question: "How do I book for weddings or large events?",
        answer: "For events and bulk orders (20L cans or 100+ bottles), please contact us directly via phone or message. This ensures we can manage cooling requirements and delivery timing perfectly for your event."
    },
    {
        question: "What is the delivery timeline for regular orders?",
        answer: "We offer morning and afternoon delivery slots. Orders placed before 10 AM are typically delivered the same day, while later orders are scheduled for the next morning."
    },
    {
        question: "Can I book 20L water cans online?",
        answer: "Currently, online booking is available only for 250ml - 10L bottles. 20L cans and Cooling cans must be ordered via a direct call or message to our service team."
    },
    {
        question: "Is your water certified for clinical safety?",
        answer: "Yes, Chaamundeshwari water is BIS and FSSAI certified. We use a 10-stage purification process including RO, UV, and Ozone treatment to ensure clinical-grade purity."
    },
    {
        question: "Do you supply water to schools and hostels?",
        answer: "Absolutely. We already serve over 50+ hostels and 20+ schools in Hyderabad with dedicated refill schedules and priority support."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-[#030712] pt-32 pb-24 overflow-hidden relative">
            <SEO
                title="FAQ | Chaamundeshwari Water Purity Support"
                description="Common questions about water delivery, bulk ordering, and quality certifications for Chaamundeshwari Water."
            />

            <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-blue-500/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
                    >
                        <HelpCircle className="w-3 h-3 text-blue-400" />
                        <span className="text-[10px] font-black text-blue-400 tracking-widest uppercase">Support Center</span>
                    </motion.div>
                    <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6">
                        Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Questions</span>
                    </h1>
                    <p className="text-cyan-100/40 text-lg font-medium max-w-xl mx-auto">
                        Everything you need to know about our elite hydration services and delivery.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="overflow-hidden"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                className={`w-full text-left p-6 md:p-8 rounded-[2rem] border transition-all duration-500 flex items-start justify-between group ${activeIndex === i
                                        ? "bg-white/[0.05] border-white/20"
                                        : "bg-white/[0.02] border-white/5 hover:border-white/10"
                                    }`}
                            >
                                <span className={`text-lg md:text-xl font-bold transition-colors ${activeIndex === i ? "text-cyan-400" : "text-white"}`}>
                                    {faq.question}
                                </span>
                                <ChevronDown className={`w-6 h-6 text-white/20 transition-transform duration-500 shrink-0 ml-4 ${activeIndex === i ? "rotate-180 text-cyan-400" : ""}`} />
                            </button>
                            <AnimatePresence>
                                {activeIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <div className="p-8 md:p-10 text-cyan-100/60 text-base md:text-lg leading-relaxed font-medium">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Direct Support CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 p-10 md:p-16 rounded-[3rem] bg-gradient-to-tr from-white/[0.02] to-transparent border border-white/5 text-center"
                >
                    <MessageSquare className="w-12 h-12 text-cyan-400 mx-auto mb-6 opacity-40" />
                    <h2 className="text-3xl font-black text-white mb-4">Still have questions?</h2>
                    <p className="text-cyan-100/40 font-medium mb-10 max-w-md mx-auto">We're here to help you with personalized hydration solutions.</p>
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                        <a href="tel:+919492266645" className="px-10 py-4 bg-white text-black rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-cyan-400 hover:text-white transition-all shadow-xl active:scale-95 flex items-center space-x-3">
                            <Phone className="w-4 h-4" />
                            <span>Contact Support</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FAQ;
