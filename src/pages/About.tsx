import { motion } from 'framer-motion';
import { Shield, Users, Droplets, Target, CheckCircle2, Waves, Building2, School } from 'lucide-react';
import SEO from '../components/common/SEO';

const About = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" as const }
    };

    const bentoItems = [
        {
            title: "50+ Hostels",
            description: "Major student accommodations in Kukatpally and Secunderabad trust us daily.",
            icon: Users,
            size: "col-span-1 md:col-span-2",
            color: "bg-cyan-500/10",
            iconColor: "text-cyan-500"
        },
        {
            title: "10+ Companies",
            description: "IT firms and manufacturing units relying on bulk 20L refills.",
            icon: Building2,
            size: "col-span-1",
            color: "bg-cyan-600/10",
            iconColor: "text-cyan-600"
        },
        {
            title: "20+ Schools",
            description: "Safe drinking water for thousands of students city-wide.",
            icon: School,
            size: "col-span-1",
            color: "bg-cyan-700/10",
            iconColor: "text-cyan-700"
        },
        {
            title: "BIS Certified",
            description: "Pristine local sources since our launch in 2025.",
            icon: Shield,
            size: "col-span-1 md:col-span-2",
            color: "bg-cyan-800/10",
            iconColor: "text-cyan-800"
        }
    ];

    return (
        <div className="min-h-screen bg-transparent text-white selection:bg-cyan-500/30">
            <SEO
                title="About Chaamundeshwari Water | The Standard of Purity in Hyderabad"
                description="Hyderabad's trusted mineral water supplier. BIS-certified, RO+UV+OZONE purified hydration."
            />

            {/* --- HERO SECTION: Apple Minimalist --- */}
            <section className="relative pt-48 pb-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center space-y-8"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold border border-cyan-500/20 backdrop-blur-md"
                        >
                            <Droplets className="w-4 h-4 fill-cyan-500/20" />
                            <span>Established 2025</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-[5.5rem] font-bold tracking-tight text-white leading-[1.05]">
                            Purity by design. <br />
                            <span className="text-cyan-400">Hyderabad's new standard.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-cyan-100/60 max-w-3xl mx-auto leading-relaxed font-medium">
                            Trusted by 80+ institutions across the city, Chaamundeshwari Water
                            delivers mineral-rich, BIS-certified hydration from pristine local sources.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Liquid Element */}
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-cyan-500/20 to-transparent rounded-full blur-[120px] -z-10" />
            </section>

            {/* --- BENTO GRID: Trust & Stats --- */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">Trusted by Institutions</h2>
                        <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {bentoItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                {...fadeIn}
                                transition={{ delay: idx * 0.1, duration: 0.8 }}
                                className={`group p-8 rounded-[2.5rem] ${item.color} border border-white/10 shadow-sm backdrop-blur-2xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 ${item.size} flex flex-col justify-between overflow-hidden relative`}
                            >
                                <div className="absolute top-0 right-0 p-12 -translate-y-1/2 translate-x-1/2 bg-white/5 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700" />

                                <div className={`${item.iconColor} p-4 rounded-2xl bg-white/10 w-fit mb-8 shadow-sm group-hover:scale-110 transition-transform backdrop-blur-md`}>
                                    <item.icon className="w-8 h-8" />
                                </div>

                                <div className="space-y-3 relative z-10">
                                    <h3 className="text-3xl font-bold text-white">{item.title}</h3>
                                    <p className="text-lg text-cyan-100/60 leading-snug">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- LOCATIONS SECTION: Service Network --- */}
            <section className="py-24 px-6 bg-white/[0.02]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] border border-cyan-500/20 mb-6"
                        >
                            <Building2 className="w-3 h-3" />
                            <span>Service Network</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white italic uppercase text-center">Our Presence in <span className="text-cyan-400">Hyderabad</span></h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {["Gachibowli", "Kondapur", "Madhapur", "Raidurg", "Mindspace"].map((location, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="px-10 py-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-3xl hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-500 group"
                            >
                                <span className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors uppercase italic tracking-tighter">{location}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-cyan-100/40 font-bold uppercase tracking-[0.4em] text-[10px]">Rapid response delivery across the IT corridor</p>
                    </div>
                </div>
            </section>

            {/* --- PROCESS SECTION: Liquid Detail --- */}
            <section className="py-24 px-6 bg-gradient-to-b from-transparent to-cyan-500/5">
                <div className="max-w-6xl mx-auto">
                    <div className="rounded-[3rem] bg-white/5 border border-white/10 shadow-2xl p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center backdrop-blur-3xl">
                        <motion.div {...fadeIn} className="max-w-2xl relative z-10">
                            <Waves className="w-16 h-16 text-cyan-400 mx-auto mb-8 animate-pulse" />
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Clinical grade purification.</h2>
                            <p className="text-xl text-cyan-100/70 leading-relaxed mb-12">
                                We process premium mineral-rich water through advanced **RO+UV+OZONE**
                                purification in our state-of-the-art Hyderabad plant. Zero contaminants,
                                absolute clarity.
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {["Clean Aquifers", "RO Process", "Ozone Sterilized", "FSSAI Compliant"].map((label, i) => (
                                    <div key={i} className="space-y-2">
                                        <CheckCircle2 className="w-6 h-6 text-cyan-500 mx-auto" />
                                        <span className="text-sm font-bold text-cyan-100/40 uppercase tracking-widest">{label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Liquid Background Shape */}
                        <div className="absolute top-0 left-0 w-full h-full -z-0 opacity-10 pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0 80 Q 25 70 50 80 T 100 80 L 100 100 L 0 100 Z" fill="currentColor" className="text-cyan-500" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- TESTIMONIALS: Floating Glass Cards --- */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            {...fadeIn}
                            className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 shadow-xl backdrop-blur-2xl relative group"
                        >
                            <Droplets className="absolute top-10 right-10 w-12 h-12 text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors" />
                            <p className="text-2xl font-semibold leading-relaxed mb-10 text-cyan-50">
                                "Vaaraahi Waters transformed our hostel hydration—pure, punctual, and priced right!"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xl">
                                    H
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-white">Hostel Warden</h4>
                                    <span className="text-cyan-400/60 font-semibold text-sm uppercase">Kukatpally</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            {...fadeIn}
                            transition={{ delay: 0.2 }}
                            className="p-12 rounded-[3.5rem] bg-cyan-900/40 border border-cyan-500/30 shadow-2xl relative group overflow-hidden backdrop-blur-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent" />
                            <p className="text-2xl font-semibold leading-relaxed mb-10 text-white relative z-10">
                                "Reliable bulk supply for our office; quality beats market leaders."
                            </p>
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-xl backdrop-blur-md">
                                    I
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-white">IT Manager</h4>
                                    <span className="text-cyan-400/60 font-semibold text-sm uppercase tracking-widest">Hi-Tech City</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA: Liquid Contrast --- */}
            <section className="py-32 px-6 flex justify-center">
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="max-w-5xl w-full p-20 rounded-[4rem] bg-cyan-950/80 border border-cyan-500/20 text-white text-center shadow-2xl relative overflow-hidden group backdrop-blur-3xl"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.3)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    <div className="relative z-10">
                        <Target className="w-12 h-12 text-cyan-400 mx-auto mb-8" />
                        <h2 className="text-5xl md:text-6xl font-bold mb-8">Pure water for every Hyderabadi.</h2>
                        <p className="text-xl text-cyan-100/60 mb-12 max-w-2xl mx-auto">
                            Ongoing NABL lab testing for zero contaminants. Join the 80+ institutions already powered by Vaaraahi.
                        </p>
                        <button className="px-12 py-6 bg-cyan-500 text-white rounded-full font-bold text-xl shadow-xl shadow-cyan-500/40 hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95">
                            Partner With Us
                        </button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default About;
