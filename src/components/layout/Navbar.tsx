import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import logo from '../../assets/logo.png';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
    const { totalItems } = useCart();
    const [isOpen, setIsOpen] = useState(false);

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
        { name: 'About', path: '/about' },
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

                {/* Center Links */}
                <div className="relative z-10 hidden md:flex items-center justify-center space-x-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="px-5 py-2 rounded-full font-bold transition-all text-sm lg:text-base hover:bg-white/10"
                        >
                            <motion.span style={{
                                color: "#ffffff",
                                textShadow: textShadowParams
                            }}>
                                {link.name}
                            </motion.span>
                        </Link>
                    ))}
                </div>

                {/* Right Icons */}
                <div className="relative z-10 flex items-center space-x-3 shrink-0">
                    <Link to="/checkout" className="relative p-2.5 rounded-full transition-colors hover:bg-white/10">
                        <div className="text-white drop-shadow-xl">
                            <ShoppingCart className="h-5 w-5" />
                        </div>
                        {totalItems > 0 && (
                            <span className="absolute top-0 right-0 bg-white text-cyan-700 text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-lg">
                                {totalItems}
                            </span>
                        )}
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2.5 rounded-full transition-colors hover:bg-white/10 text-white"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Nav Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute top-full left-4 right-4 mt-20 p-4 bg-primary-800/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-primary-500/50 md:hidden flex flex-col space-y-2 pointer-events-auto"
                        style={{
                            boxShadow: "0 20px 40px -10px rgba(8, 145, 178, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.2)"
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-3 rounded-2xl block text-white font-medium hover:bg-primary-700 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Navbar;
