import { motion } from "framer-motion";
import introImg from "../../../assets/intro.png";

const Intro = () => {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-cyan-500/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Image Side - Compacted */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: -30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative order-2 lg:order-1 flex justify-center"
                    >
                        <div className="relative z-10 group max-w-[280px] lg:max-w-xs">
                            {/* Glass Frame */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-[3rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src={introImg}
                                    alt="Chaamundeshwari Purity Intro"
                                    className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
                                />
                                {/* Surface Shine */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
                            </div>

                            {/* Floating "Purity" Badge - Adjusted for smaller image */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-3xl border border-white/20 px-6 py-4 rounded-2xl shadow-2xl hidden md:block"
                            >
                                <p className="text-[9px] font-bold text-cyan-400 tracking-wider mb-1">Standard</p>
                                <h3 className="text-xl font-black text-white leading-none">Clinical Grade</h3>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="h-px w-10 bg-cyan-500" />
                            <span className="text-cyan-400 font-bold text-[9px] tracking-widest">The Essence of Chaamundeshwari</span>
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                            More Than Just Water.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                A Promise of Purity.
                            </span>
                        </h2>

                        <div className="space-y-4 text-cyan-100/60 font-medium leading-tight">
                            <p className="text-sm lg:text-base">
                                At <span className="text-white font-black">Chaamundeshwari Water</span>, we believe drinking water is not just a daily necessity — it is a matter of health, trust, and responsibility. Every bottle we produce represents our commitment to delivering safe, mineral-balanced, and hygienically processed drinking water to families, businesses, and communities.
                            </p>
                            <p className="text-sm lg:text-base">
                                From carefully sourced raw water to advanced purification and secure packaging, our processes are designed with precision and integrity. We do not simply manufacture packaged water; we engineer purity using technology, quality standards, and continuous monitoring systems.
                            </p>
                            <div className="pt-4 border-t border-white/5">
                                <p className="text-white font-black text-lg leading-snug">
                                    Our goal is simple — to ensure that every sip you take is refreshing, reliable, and safe.
                                </p>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 pt-6 border-t border-white/5"
                        >
                            <p className="text-[10px] font-bold text-cyan-400 tracking-wider">
                                Trusted by 10,000+ Premium Clients
                            </p>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Intro;
