import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Asset Imports
import img100ml from "../../../assets/bottles/100ml.png";
import img250ml from "../../../assets/bottles/250ml.png";
import img500ml from "../../../assets/bottles/500ml.png";
import img1000ml from "../../../assets/bottles/1000ml.png";
import img5000ml from "../../../assets/bottles/5000ml.png";
import img10l from "../../../assets/bottles/10litre.png";

const heroProducts = [
  { name: "100ml Pocket", size: "100ml", image: img100ml, color: "from-cyan-500/20" },
  { name: "250ml Classic", size: "250ml", image: img250ml, color: "from-blue-500/20" },
  { name: "500ml Handy", size: "500ml", image: img500ml, color: "from-sky-500/20" },
  { name: "1L Pure", size: "1000ml", image: img1000ml, color: "from-indigo-500/20" },
  { name: "5L Family", size: "5000ml", image: img5000ml, color: "from-cyan-600/20" },
  { name: "10L Bulk", size: "10 Litre", image: img10l, color: "from-blue-600/20" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentProduct = heroProducts[currentIndex];

  return (
    <section className="relative min-h-screen bg-transparent overflow-hidden flex items-center pt-20">
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] rounded-full bg-gradient-to-tr ${currentProduct.color} to-transparent blur-[150px] opacity-30`}
          />
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left z-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-2xl px-5 py-2.5 rounded-full border border-white/10 mb-8 shadow-2xl"
            >
              <Droplets className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-white font-bold text-[10px] tracking-wide">Elite Hydration Series</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-8xl font-black text-white tracking-tight leading-none mb-8"
            >
              Pure <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Perfection
              </span>
            </motion.h1>

            <motion.p
              className="text-lg lg:text-2xl text-cyan-100/40 mb-10 max-w-xl mx-auto lg:mx-0 leading-tight font-bold"
            >
              Experience the clinical-grade purity of Chaamundeshwari. Sourced from deep aquifers, filtered for the elite.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/products" className="group px-10 py-5 w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-white rounded-2xl font-bold text-sm transition-all transform active:scale-95 shadow-[0_20px_40px_-10px_rgba(6,182,212,0.5)] flex items-center justify-center space-x-3">
                <span>Explore Collection</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Status Indicator */}
            <div className="mt-16 flex items-center justify-center lg:justify-start space-x-4">
              {heroProducts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1 transition-all duration-500 rounded-full ${idx === currentIndex ? 'w-12 bg-cyan-400' : 'w-4 bg-white/10 hover:bg-white/20'}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side: Animated Bottles */}
          <div className="relative h-[500px] lg:h-[700px] flex items-center justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 200, rotate: 15, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, x: -200, rotate: -15, scale: 0.8 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  opacity: { duration: 0.5 }
                }}
                className="absolute z-20"
              >
                <div className="relative group">
                  {/* Glass Platform Effect */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-10 bg-black/40 blur-2xl rounded-full scale-150 -z-10" />

                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="h-[400px] lg:h-[600px] w-auto object-contain drop-shadow-[0_50px_100px_rgba(0,0,0,0.6)]"
                  />

                  {/* Product Metadata Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -right-8 top-1/2 bg-white/10 backdrop-blur-3xl border border-white/20 p-6 rounded-3xl shadow-2xl z-30 hidden md:block"
                  >
                    <p className="text-[10px] font-bold text-cyan-400 tracking-wider mb-1">Purity Grade</p>
                    <h3 className="text-2xl font-black text-white leading-tight">{currentProduct.name}</h3>
                    <div className="flex items-center space-x-2 mt-4 text-white/40">
                      <span className="text-[10px] font-bold tracking-wider">{currentProduct.size}</span>
                      <ChevronRight className="h-3 w-3" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Static Glass Backdrop Ring */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full -z-10 hidden lg:block" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;