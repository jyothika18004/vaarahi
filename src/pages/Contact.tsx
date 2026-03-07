import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import SEO from '../components/common/SEO';

const Contact = () => {
    return (
        <div className="min-h-screen bg-[#030712] pt-24 pb-20 overflow-hidden relative">
            <SEO
                title="Contact Us | Chaamundeshwari Water"
                description="Get in touch with Chaamundeshwari Water for premium hydration solutions. Support, inquiries, and service requests."
            />

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-cyan-500/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Header - More Compact */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4"
                    >
                        <MessageCircle className="w-2.5 h-2.5 text-cyan-400" />
                        <span className="text-[9px] font-black text-cyan-400 tracking-widest uppercase">Support Center</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-5xl font-black text-white tracking-tighter mb-4"
                    >
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-cyan-100/40 text-sm font-medium max-w-lg mx-auto leading-relaxed"
                    >
                        Our elite support team is ready to assist with your hydration needs.
                    </motion.p>
                </div>

                <div className="max-w-2xl mx-auto">
                    {/* Contact Form - Main focus */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 lg:p-10 shadow-2xl relative overflow-hidden"
                    >
                        <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-1.5 text-left">
                                    <label className="text-[9px] font-black text-white/30 tracking-widest uppercase ml-4">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-medium"
                                    />
                                </div>
                                <div className="space-y-1.5 text-left">
                                    <label className="text-[9px] font-black text-white/30 tracking-widest uppercase ml-4">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-medium"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5 text-left">
                                <label className="text-[9px] font-black text-white/30 tracking-widest uppercase ml-4">Message</label>
                                <textarea
                                    rows={3}
                                    placeholder="How can we help?"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all font-medium resize-none"
                                />
                            </div>
                            <button className="w-full py-4 bg-white text-black hover:bg-cyan-400 hover:text-white rounded-xl font-black text-[11px] tracking-widest uppercase transition-all shadow-xl active:scale-[0.98]">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
