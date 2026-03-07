import { motion } from 'framer-motion';
import { Snowflake, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import truckImg from '../../../assets/truck.png';

const CoolingSection = () => {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-500/5 blur-[150px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Content Side */}
                    <div className="lg:col-span-12 xl:col-span-5 order-2 lg:order-1 space-y-10">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20"
                            >
                                <Snowflake className="w-3 h-3 text-blue-400" />
                                <span className="text-[10px] font-black text-blue-400 tracking-widest uppercase">Event Logistics</span>
                            </motion.div>
                            <h2 className="text-4xl lg:text-7xl font-black text-white tracking-tighter leading-none">
                                Premium <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 text-6xl lg:text-8xl">Cooling</span>
                            </h2>
                            <p className="text-cyan-100/40 text-lg lg:text-xl font-medium leading-relaxed italic">
                                "Serving the Hyderabad IT Corridor with chilled, clinical-grade purity for your events."
                            </p>
                            <p className="text-blue-400/80 text-[11px] font-black uppercase tracking-[0.2em]">Note: For cooling cans please contact us directly</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl">
                                <h3 className="text-white font-black text-xl mb-2">Cooling Cans</h3>
                                <p className="text-cyan-100/40 text-sm font-medium">15L - 20L chilled cans with specialized insulation to keep water cold for 12+ hours.</p>
                            </div>
                            <div className="p-8 rounded-[2rem] bg-blue-500/10 border border-blue-500/20 backdrop-blur-3xl">
                                <h3 className="text-blue-400 font-black text-xl mb-2">Rapid Supply</h3>
                                <p className="text-blue-100/40 text-sm font-medium">Fast, reliable delivery for weddings, parties, and corporate gatherings city-wide.</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                            <a href="tel:+919492266645" className="px-10 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-400 hover:text-white transition-all shadow-2xl flex items-center justify-center space-x-3">
                                <Phone className="w-4 h-4" />
                                <span>Order Cooling</span>
                            </a>
                            <Link to="/products" className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-xs uppercase tracking-widest text-white hover:bg-white/10 transition-all flex items-center justify-center">
                                <span>Collection</span>
                                <ArrowRight className="w-4 h-4 ml-3" />
                            </Link>
                        </div>
                    </div>

                    {/* Image Side - Truck */}
                    <motion.div
                        initial={{ opacity: 0, x: 100, rotate: 10 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="lg:col-span-12 xl:col-span-7 order-1 lg:order-2 flex justify-center lg:justify-end"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-20 bg-blue-500/10 blur-[120px] rounded-full -z-10 group-hover:bg-blue-500/20 transition-all duration-1000" />
                            <img
                                src={truckImg}
                                alt="Cooling Logistics Truck"
                                className="w-full max-w-[450px] max-h-[250px] md:max-h-[400px] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CoolingSection;
