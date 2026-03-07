import { motion } from 'framer-motion';
import { Home, School, PartyPopper, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import deliveryImg from '../../../assets/delivery.png';

const services = [
    { icon: Home, title: "Home & Office", desc: "Doorstep delivery across Hyderabad." },
    { icon: PartyPopper, title: "Grand Weddings", desc: "Elegant 250ml & 500ml bottles." },
    { icon: Briefcase, title: "Corporate", desc: "Elite hydration for meetings." },
    { icon: School, title: "Schools", desc: "Safety certified student refills." }
];

const ServicesSection = () => {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden bg-white/[0.01]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: -30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="absolute -inset-10 bg-cyan-500/10 blur-[100px] rounded-full -z-10" />
                        <img
                            src={deliveryImg}
                            alt="Elite Delivery Service"
                            className="w-full max-h-[300px] md:max-h-[500px] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
                        />
                    </motion.div>

                    {/* Content Side */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20"
                            >
                                <span className="text-[10px] font-black text-cyan-400 tracking-widest uppercase">Elite Supply Logistics</span>
                            </motion.div>
                            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-none">
                                Pure Water for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Every Occasion</span>
                            </h2>
                            <p className="text-cyan-100/40 text-lg font-medium leading-relaxed">
                                Our logistics fleet ensures that clinical-grade purity reaches your doorstep, office, or event venue on time, every time.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {services.map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all group"
                                >
                                    <s.icon className="w-6 h-6 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-black text-white leading-tight mb-2">{s.title}</h3>
                                    <p className="text-[10px] font-medium text-cyan-100/30 uppercase tracking-widest">{s.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <Link to="/services" className="inline-flex items-center space-x-3 text-cyan-400 font-black text-[11px] tracking-widest uppercase hover:text-white transition-colors">
                            <span>View All Services</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
