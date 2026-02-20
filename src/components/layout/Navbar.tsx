import logo from '../../assets/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Droplets } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Tracking', path: '/tracking' },
        { name: 'Locations', path: '/locations' },
        { name: 'About', path: '/awards' }, // Using Awards page as generic About/Trust for now
    ];

    return (
        <nav className="fixed w-full z-50 bg-[#001F3F] shadow-lg border-b border-[#0077B6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img src={logo} alt="Vaarahi Logo" className="h-12 w-auto object-contain "/>

                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-white font-medium transition duration-300 hover:text-[#D4AF37]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/auth" className="text-white hover:text-accent transition">
                            <User className="h-6 w-6" />
                        </Link>
                        <Link to="/checkout" className="relative text-white hover:text-accent transition">
                            <ShoppingCart className="h-6 w-6" />
                            <span className="absolute -top-2 -right-2 bg-accent text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center shadow-md">
                                0
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-white hover:text-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0077B6] transition"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-primary border-t border-secondary overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 text-white font-medium hover:text-accent hover:bg-secondary rounded-md transition"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex items-center space-x-2 px-3 text-white">
                                <Link to="/checkout" onClick={() => setIsOpen(false)} className="flex items-center space-x-2 text-gray-600">
                                    <ShoppingCart className="h-5 w-5" />
                                    <span>Cart (0)</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
