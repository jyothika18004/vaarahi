import { motion } from 'framer-motion';
import { Quote, Star, Users } from 'lucide-react';
import SEO from '../components/common/SEO';

const testimonials = [
    {
        name: "Sandeep Kumar",
        role: "Hostel Warden",
        location: "Kukatpally",
        content: "Chaamundeshwari Water has been our primary supplier for 2 years. Their punctuality and water quality are unmatched in the region.",
        initial: "S"
    },
    {
        name: "Anjali Rao",
        role: "Event Coordinator",
        location: "Gachibowli",
        content: "We exclusively use their 250ml bottles for our corporate seminars. The packaging is premium and the service is highly professional.",
        initial: "A"
    },
    {
        name: "Vikram Reddy",
        role: "Apartment Secretary",
        location: "Madhapur",
        content: "The best quality 20L can supply we've ever had. No issues with leakage or contamination. Highly recommended!",
        initial: "V"
    },
    {
        name: "Meera Deshmukh",
        role: "School Administrator",
        location: "Secunderabad",
        content: "Safety is our priority for students. Chaamundeshwari's clinical-grade purity gives us peace of mind every single day.",
        initial: "M"
    }
];

const Testimonials = () => {
    return (
        <div className="min-h-screen bg-[#030712] pt-32 pb-24 overflow-hidden relative">
            <SEO
                title="Testimonials | Trusted by Hyderabad Institutions"
                description="Read reviews from hostels, schools, and corporate offices who trust Chaamundeshwari Water for their daily hydration."
            />

            <div className="absolute bottom-0 left-0 w-[100vw] h-[50vh] bg-gradient-to-t from-cyan-500/5 to-transparent -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
                    >
                        <Users className="w-3 h-3 text-cyan-400" />
                        <span className="text-[10px] font-black text-cyan-400 tracking-widest uppercase">Trusted Voices</span>
                    </motion.div>
                    <h1 className="text-5xl lg:text-8xl font-black text-white tracking-tighter mb-6">
                        Pure <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Reputation</span>
                    </h1>
                    <div className="flex items-center justify-center space-x-2 text-cyan-400/60 mb-8">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-cyan-400" />)}
                        <span className="text-sm font-bold tracking-widest uppercase ml-2">5-Star Elite Service</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 md:p-14 rounded-[3.5rem] bg-white/[0.02] border border-white/5 relative group hover:bg-white/[0.04] transition-all duration-700"
                        >
                            <Quote className="absolute top-10 right-10 w-12 h-12 text-cyan-500/10 group-hover:text-cyan-500/20 transition-colors" />

                            <p className="text-xl md:text-2xl font-medium text-cyan-50 leading-relaxed mb-12 relative z-10">
                                "{t.content}"
                            </p>

                            <div className="flex items-center space-x-5">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-black text-2xl shadow-xl">
                                    {t.initial}
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-white">{t.name}</h4>
                                    <p className="text-cyan-400 font-bold text-xs tracking-wider uppercase">{t.role} • {t.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating Metric */}
                <div className="flex flex-wrap justify-center gap-12 text-center opacity-40">
                    <div className="space-y-1">
                        <p className="text-4xl font-black text-white">50+</p>
                        <p className="text-[10px] font-black text-cyan-400 tracking-widest uppercase">Hostels</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-4xl font-black text-white">20+</p>
                        <p className="text-[10px] font-black text-cyan-400 tracking-widest uppercase">Schools</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-4xl font-black text-white">10k+</p>
                        <p className="text-[10px] font-black text-cyan-400 tracking-widest uppercase">Refills</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
