import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, MapPin, Youtube, Mail } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-black/40 text-white pt-16 pb-32 border-t border-white/5 backdrop-blur-3xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-cyan-500/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-16">

                    {/* Brand & Social - Left Column */}
                    <div className="lg:w-1/3 space-y-6">
                        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-block group">
                            <img
                                src={logo}
                                alt="Chaamundeshwari Logo"
                                className="h-16 w-auto object-contain drop-shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-transform duration-500 group-hover:scale-105"
                            />
                        </Link>
                        <p className="text-cyan-100/40 text-xs font-bold leading-relaxed max-w-sm">
                            Redefining the standard of hydration. Clinical-grade purity, mineral-rich balance, and elite service for a healthier tomorrow.
                        </p>
                        <div className="flex space-x-3">
                            {[
                                { Icon: Instagram, href: "https://www.instagram.com/chaamundeshwari_water/" },
                                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61581200279240&sk=photos" },
                                { Icon: Youtube, href: "https://www.youtube.com/@CHAAMUNDESHWARIWATER" }
                            ].map(({ Icon, href }, i) => (
                                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all group">
                                    <Icon className="h-4 w-4 text-white/60 group-hover:text-cyan-400 transition-all" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links & Contact - Right Side (Side-by-Side) */}
                    <div className="flex-grow grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                        {/* Navigation */}
                        <div>
                            <h3 className="text-white font-black text-[10px] tracking-widest mb-6">Navigation</h3>
                            <ul className="space-y-3">
                                {[
                                    { name: 'Home', path: '/' },
                                    { name: 'Elite Collection', path: '/products' },
                                    { name: 'Our Identity', path: '/about' },
                                    { name: 'Contact Us', path: '/contact' }
                                ].map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="text-cyan-100/40 hover:text-cyan-400 font-bold text-[13px] tracking-wide transition-colors flex items-center group">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Standard */}
                        <div>
                            <h3 className="text-white font-black text-[10px] tracking-widest mb-6">Standard</h3>
                            <ul className="space-y-3">
                                {[
                                    { name: 'Quality Protocols', path: '/about' },
                                    { name: 'Partner', path: '/about' },
                                    { name: 'Privacy', path: '/privacy' },
                                    { name: 'Terms', path: '/terms' }
                                ].map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="text-cyan-100/40 hover:text-cyan-400 font-bold text-[13px] tracking-wide transition-colors flex items-center group">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact - Spans 2 cols on mobile if needed, or aligns in 3rd on desktop */}
                        <div className="col-span-2 md:col-span-1 border-t md:border-t-0 border-white/5 pt-8 md:pt-0">
                            <h3 className="text-white font-black text-[10px] tracking-widest mb-8">Elite Contact</h3>
                            <div className="space-y-6">
                                <a href="tel:+919492266645" className="flex items-center space-x-4 group transition-all">
                                    <div className="p-2.5 rounded-xl bg-cyan-500/5 border border-cyan-500/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-all">
                                        <Phone className="h-4 w-4 text-cyan-400" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black text-white/20 tracking-widest uppercase mb-0.5">Direct Line</p>
                                        <p className="text-white font-black text-sm tracking-tighter group-hover:text-cyan-400 transition-colors">+91 9492266645</p>
                                    </div>
                                </a>

                                <a href="mailto:chaamundeshwariwater@gmail.com" className="flex items-center space-x-4 group transition-all">
                                    <div className="p-2.5 rounded-xl bg-cyan-500/5 border border-cyan-500/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-all">
                                        <Mail className="h-4 w-4 text-cyan-400" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black text-white/20 tracking-widest uppercase mb-0.5">Official Inquiry</p>
                                        <p className="text-white font-black text-sm tracking-tighter group-hover:text-cyan-400 transition-colors break-all">chaamundeshwariwater@gmail.com</p>
                                    </div>
                                </a>

                                <div className="flex items-center space-x-4 group">
                                    <div className="p-2.5 rounded-xl bg-cyan-500/5 border border-cyan-500/10">
                                        <MapPin className="h-4 w-4 text-cyan-400" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black text-white/20 tracking-widest uppercase mb-0.5">Global Region</p>
                                        <p className="text-white font-black text-sm tracking-tighter">Hyderabad, TS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar - Minimal */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-bold text-white/20 tracking-[0.1em]">
                        &copy; {new Date().getFullYear()} Chaamundeshwari Water. All Rights Reserved.
                    </p>
                    <div className="flex items-center space-x-6">
                        <span className="text-[9px] font-black text-cyan-400/40 tracking-wider">BIS CERTIFIED</span>
                        <span className="text-[9px] font-black text-cyan-400/40 tracking-wider">FSSAI APPROVED</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
