import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import logo from '../../assets/logo.png';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
    const { totalItems } = useCart();

    // Track scroll position
    const { scrollY } = useScroll();
    const scrollRange = [0, 800];

    // Colors: "Apple Glass" aesthetic - frosted & blue-tinted
    const bgColor = "rgba(12, 74, 110, 0.15)";
    const borderColor = "rgba(6, 182, 212, 0.2)";
    const boxShadow = "0 8px 32px 0 rgba(0, 0, 0, 0.37)";

    // Text/Icon dropshadow: Optimized for new deep background
    const textShadowParams = "0 1px 2px rgba(0,0,0,0.3)";

    // Height/Padding
    const navHeight = useTransform(scrollY, scrollRange, [80, 64]);
    const navPaddingX = useTransform(scrollY, scrollRange, [48, 24]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <motion.div
            className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none"
            style={{ paddingTop: 0 }}
        >
            <motion.nav
                style={{
                    width: "100%",
                    maxWidth: "100%",
                    borderRadius: 0,
                    backgroundColor: bgColor,
                    borderColor: borderColor,
                    boxShadow: boxShadow,
                    height: navHeight,
                    paddingLeft: navPaddingX,
                    paddingRight: navPaddingX,
                }}
                className="group pointer-events-auto backdrop-blur-3xl border-b overflow-hidden flex items-center justify-between"
            >
                {/* Surface Shine (Subtle horizontal light) */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent h-[1px] w-full top-0" />

                {/* Logo on Left */}
                <div className="relative z-10 flex items-center shrink-0">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        <img src={logo} alt="Chaamundeshwari Logo" className="h-10 sm:h-12 w-auto object-contain drop-shadow-2xl" />
                    </Link>
                </div>

                {/* Links and Icons Grouped on Right */}
                <div className="relative z-10 flex items-center space-x-4">
                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="px-5 py-2 rounded-full font-semibold transition-all text-sm lg:text-base hover:bg-white/10 hover:text-cyan-400"
                            >
                                <motion.span style={{
                                    color: "#ffffff",
                                    textShadow: textShadowParams
                                }} className="group-hover:text-cyan-400 transition-colors">
                                    {link.name}
                                </motion.span>
                            </Link>
                        ))}
                    </div>

                    {/* Cart Icon */}
                    <Link to="/checkout" className="relative p-2.5 rounded-full transition-colors hover:bg-white/10 group">
                        <div className="text-white group-hover:text-cyan-400 transition-colors drop-shadow-xl">
                            <ShoppingCart className="h-5 w-5" />
                        </div>
                        {totalItems > 0 && (
                            <span className="absolute top-0 right-0 bg-cyan-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-lg">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </div>
            </motion.nav>
        </motion.div>
    );
};

export default Navbar;
