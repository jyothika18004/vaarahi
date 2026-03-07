import { Link, useLocation } from 'react-router-dom';
import { Home, Package, Info, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const BottomNav = () => {
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Products', path: '/products', icon: Package },
        { name: 'About', path: '/about', icon: Info },
        { name: 'Contact', path: '/contact', icon: MessageCircle },
    ];

    return (
        <nav className="md:hidden fixed bottom-6 left-6 right-6 z-50">
            <div className="bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-2 flex items-center justify-around shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="relative flex flex-col items-center p-3 transition-colors"
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-cyan-500/10 rounded-2xl -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <div className="relative">
                                <item.icon
                                    className={`w-6 h-6 transition-all duration-300 ${isActive ? 'text-cyan-400 scale-110' : 'text-white/40'}`}
                                />
                            </div>
                            <span className={`text-[10px] mt-1 font-bold transition-colors ${isActive ? 'text-cyan-400' : 'text-white/20'}`}>
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default BottomNav;
