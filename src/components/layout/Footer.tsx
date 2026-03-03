import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-black/40 text-white pt-32 pb-12 border-t border-white/5 backdrop-blur-3xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-cyan-500/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">

                    {/* Brand Identity */}
                    <div className="space-y-8 lg:col-span-1">
                        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="inline-block group">
                            <img
                                src={logo}
                                alt="Chaamundeshwari Logo"
                                className="h-20 w-auto object-contain drop-shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-transform duration-500 group-hover:scale-110"
                            />
                        </Link>
                        <p className="text-cyan-100/40 text-sm font-bold leading-tight uppercase tracking-tight italic">
                            Redefining the standard of hydration. Clinical-grade purity, mineral-rich balance, and elite service for a healthier tomorrow.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all group">
                                    <Icon className="h-5 w-5 text-white/60 group-hover:text-cyan-400 group-hover:scale-110 transition-all" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Access */}
                    <div className="lg:pl-12">
                        <h3 className="text-white font-black text-xs uppercase tracking-[0.4em] mb-8 italic">Navigation</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Elite Collection', path: '/products' },
                                { name: 'Our Identity', path: '/about' },
                                { name: 'Awards & Tech', path: '/awards' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-cyan-100/40 hover:text-cyan-400 font-bold text-sm uppercase tracking-widest transition-colors flex items-center group">
                                        <div className="w-0 group-hover:w-4 h-px bg-cyan-400 mr-0 group-hover:mr-3 transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support & Legal */}
                    <div>
                        <h3 className="text-white font-black text-xs uppercase tracking-[0.4em] mb-8 italic">Standard</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Quality Protocols', path: '/about' },
                                { name: 'Partner With Us', path: '/about' },
                                { name: 'Privacy Policy', path: '/privacy' },
                                { name: 'Terms of Service', path: '/terms' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-cyan-100/40 hover:text-cyan-400 font-bold text-sm uppercase tracking-widest transition-colors flex items-center group">
                                        <div className="w-0 group-hover:w-4 h-px bg-cyan-400 mr-0 group-hover:mr-3 transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Direct Contact */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-white font-black text-xs uppercase tracking-[0.4em] mb-8 italic">Contact Info</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4 group">
                                    <div className="p-3 bg-white/5 rounded-2xl border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                                        <Phone className="h-4 w-4 text-cyan-400" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Elite Line</p>
                                        <p className="text-white font-black text-sm">+91 9492266645</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 group">
                                    <div className="p-3 bg-white/5 rounded-2xl border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                                        <Mail className="h-4 w-4 text-cyan-400" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Official Inquiry</p>
                                        <p className="text-white font-black text-sm uppercase">Care@Chaamundeshwari.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 group">
                                    <div className="p-3 bg-white/5 rounded-2xl border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                                        <MapPin className="h-4 w-4 text-cyan-400" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Service Region</p>
                                        <p className="text-white font-black text-sm uppercase">Hyderabad IT Corridor, TS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center bg-black/5 p-6 rounded-[2rem] border border-white/5">
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
                        &copy; {new Date().getFullYear()} Chaamundeshwari Water Private Limited. Pure Precision.
                    </p>
                    <div className="flex items-center space-x-8 mt-4 md:mt-0">
                        <div className="flex items-center space-x-2">
                            <div className="h-1 w-1 bg-cyan-500 rounded-full animate-pulse" />
                            <span className="text-[9px] font-black text-cyan-400/60 uppercase tracking-widest">BIS Certified</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="h-1 w-1 bg-cyan-500 rounded-full animate-pulse" />
                            <span className="text-[9px] font-black text-cyan-400/60 uppercase tracking-widest">FSSAI Approved</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
