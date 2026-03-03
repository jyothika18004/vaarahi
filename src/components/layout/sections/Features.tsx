import { motion } from "framer-motion";
import { ShieldCheck, Microscope, Filter, Lock, Truck, Leaf } from "lucide-react";

const features = [
    {
        icon: <ShieldCheck className="h-8 w-8 text-cyan-400" />,
        title: "Certified & Compliant",
        desc: "Manufactured in accordance with BIS, FSSAI & ISO quality frameworks.",
        color: "from-cyan-500/10"
    },
    {
        icon: <Microscope className="h-8 w-8 text-blue-400" />,
        title: "100+ Quality Tests",
        desc: "Every batch is tested across multiple parameters to ensure safety and consistency.",
        color: "from-blue-500/10"
    },
    {
        icon: <Filter className="h-8 w-8 text-sky-400" />,
        title: "10-Stage Purification",
        desc: "Advanced multi-layer purification system for maximum purity and mineral balance.",
        color: "from-sky-500/10"
    },
    {
        icon: <Lock className="h-8 w-8 text-indigo-400" />,
        title: "Tamper-Proof Packaging",
        desc: "Sealed in hygienic, automated environments to prevent contamination.",
        color: "from-indigo-500/10"
    },
    {
        icon: <Truck className="h-8 w-8 text-cyan-500" />,
        title: "Strong Distribution Network",
        desc: "Efficient supply chain ensuring freshness and availability.",
        color: "from-cyan-600/10"
    },
    {
        icon: <Leaf className="h-8 w-8 text-emerald-400" />,
        title: "Sustainable Approach",
        desc: "Environment-conscious packaging and responsible sourcing practices.",
        color: "from-emerald-500/10"
    }
];

const Features = () => {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden bg-white/[0.02]">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-cyan-500/[0.03] blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[50vw] h-[50vw] bg-blue-500/[0.03] blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-2xl px-5 py-2.5 rounded-full border border-white/10 mb-6"
                    >
                        <div className="h-2 w-2 bg-cyan-500 rounded-full animate-pulse" />
                        <span className="text-white font-black text-[10px] uppercase tracking-[0.4em]">Quality Benchmark</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-6xl font-black text-white tracking-tighter italic uppercase mb-6"
                    >
                        Engineering <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                            Absolute Purity
                        </span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            {/* Card Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} to-transparent rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative h-full p-10 bg-white/[0.03] border border-white/10 rounded-[2.5rem] backdrop-blur-3xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 flex flex-col items-center text-center">
                                {/* Icon Container */}
                                <div className="mb-8 p-6 rounded-3xl bg-white/5 border border-white/5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner">
                                    {feature.icon}
                                </div>

                                <h3 className="text-xl font-black text-white italic uppercase tracking-tight mb-4 group-hover:text-cyan-400 transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-cyan-100/40 text-sm font-medium leading-relaxed uppercase tracking-tighter">
                                    {feature.desc}
                                </p>

                                {/* Bottom Accent */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-1 bg-cyan-500/20 rounded-full group-hover:w-16 group-hover:bg-cyan-500 transition-all duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
