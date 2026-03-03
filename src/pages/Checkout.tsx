import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, MessageCircle, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import SEO from '../components/common/SEO';

const Checkout = () => {
    const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

    const handleWhatsAppCheckout = () => {
        const phoneNumber = "9492266645";
        let message = "Hello Chaamundeshwari Water! 🌊\n\nI would like to place an order:\n";

        cart.forEach(item => {
            message += `- ${item.quantity}x ${item.name} (${item.size}) - ₹${item.price * item.quantity}\n`;
        });

        message += `\n*Total Items:* ${totalItems}`;
        message += `\n*Total Amount:* ₹${totalPrice}`;
        message += `\n\nPlease confirm my order. Thanks!`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-transparent text-white selection:bg-cyan-500/30 pt-32 pb-24 px-6 font-primary">
            <SEO
                title="Your Cart - Vaaraahi Waters"
                description="Review your premium water order and checkout via WhatsApp."
            />

            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase italic">Your Cart</h1>
                        <div className="flex items-center space-x-3">
                            <div className="h-1 w-12 bg-cyan-500 rounded-full" />
                            <p className="text-cyan-400 font-bold tracking-[0.4em] uppercase text-[10px] opacity-80">Elite Hydration Reservation</p>
                        </div>
                    </motion.div>

                    <Link to="/products" className="group flex items-center space-x-3 text-white/40 hover:text-cyan-400 transition-all font-bold text-xs uppercase tracking-[0.2em]">
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        <span>Continue Shopping</span>
                    </Link>
                </div>

                {cart.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white/[0.02] border border-white/10 p-20 rounded-[4rem] shadow-2xl backdrop-blur-3xl text-center"
                    >
                        <div className="mb-8 flex justify-center">
                            <div className="p-10 rounded-full bg-cyan-500/5 border border-cyan-500/10">
                                <MessageCircle className="h-20 w-20 text-cyan-500/20" />
                            </div>
                        </div>
                        <p className="text-3xl text-white/40 mb-10 font-light italic tracking-tight">Your cart is as clear as our water.</p>
                        <Link to="/products" className="inline-block px-12 py-5 bg-white text-black hover:bg-cyan-400 hover:text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl transition-all active:scale-95">
                            Browse Collection
                        </Link>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Cart Items List */}
                        <div className="lg:col-span-7 space-y-6">
                            {cart.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="bg-white/[0.03] border border-white/10 p-6 rounded-[2.5rem] backdrop-blur-3xl flex items-center space-x-8 group hover:bg-white/[0.05] transition-all duration-500"
                                >
                                    <div className="h-24 w-24 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-3xl flex items-center justify-center border border-white/5 group-hover:border-cyan-500/30 transition-all shadow-inner">
                                        <img src={item.image} alt={item.name} className="h-16 w-auto object-contain drop-shadow-2xl" />
                                    </div>

                                    <div className="flex-grow">
                                        <h3 className="text-xl font-black text-white tracking-tight">{item.name}</h3>
                                        <div className="flex items-center space-x-3 mt-1">
                                            <span className="text-cyan-400 font-black text-[10px] uppercase tracking-widest">{item.size}</span>
                                            <span className="text-white/10">•</span>
                                            <span className="text-white/60 font-bold text-sm">₹{item.price}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center bg-black/20 rounded-2xl border border-white/5 p-1 gap-1">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="w-8 h-8 flex items-center justify-center hover:bg-white/5 rounded-xl transition-colors text-white/40 hover:text-cyan-400"
                                        >
                                            <Minus className="h-3 w-3" />
                                        </button>
                                        <span className="w-8 text-center font-black text-sm">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="w-8 h-8 flex items-center justify-center hover:bg-white/5 rounded-xl transition-colors text-white/40 hover:text-cyan-400"
                                        >
                                            <Plus className="h-3 w-3" />
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="p-3 text-white/10 hover:text-red-500 transition-all hover:bg-red-500/5 rounded-2xl"
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        {/* Order Summary - PREMIUM REDESIGN */}
                        <div className="lg:col-span-5">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 p-10 rounded-[3.5rem] backdrop-blur-3xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] sticky top-32"
                            >
                                <div className="flex items-center space-x-4 mb-10">
                                    <div className="h-px flex-grow bg-white/10" />
                                    <h3 className="text-sm font-black text-white/40 uppercase tracking-[0.4em]">Summary</h3>
                                    <div className="h-px flex-grow bg-white/10" />
                                </div>

                                <div className="space-y-6 mb-12">
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/40 font-bold text-sm uppercase tracking-widest">Subtotal ({totalItems} items)</span>
                                        <span className="text-xl font-bold">₹{totalPrice}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/40 font-bold text-sm uppercase tracking-widest">Shipping</span>
                                        <span className="text-cyan-400 font-black text-xs uppercase tracking-[0.2em] px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">Complimentary</span>
                                    </div>
                                    <div className="pt-8 mt-8 border-t border-white/5 flex justify-between items-end">
                                        <div>
                                            <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-1">Total Balance</p>
                                            <span className="text-5xl font-black text-white tracking-tighter italic">₹{totalPrice}</span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={handleWhatsAppCheckout}
                                    className="group relative w-full py-6 bg-cyan-500 hover:bg-cyan-400 text-white rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-cyan-500/20 transition-all duration-300 transform active:scale-95 flex items-center justify-center overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    <MessageCircle className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
                                    <span>Checkout via WhatsApp</span>
                                </button>

                                <div className="mt-8 pt-8 border-t border-white/5 text-center">
                                    <p className="text-[9px] text-white/20 leading-relaxed font-black uppercase tracking-[0.4em] mb-4">
                                        Secure Order Protocol
                                    </p>
                                    <div className="flex items-center justify-center space-x-4 opacity-20 filter grayscale">
                                        <div className="h-1 w-1 bg-white rounded-full" />
                                        <div className="h-1 w-1 bg-white rounded-full" />
                                        <div className="h-1 w-1 bg-white rounded-full" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Checkout;
