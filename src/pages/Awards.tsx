

import SEO from '../components/common/SEO';

const Awards = () => {
    return (
        <div className="min-h-screen bg-transparent text-white selection:bg-cyan-500/30 pt-48 pb-24 px-6">
            <SEO
                title="Awards & Recognition"
                description="Vaaraahi Waters is proud to be recognized for its commitment to quality and purity. Explore our awards and certificates in the packaged drinking water industry."
            />
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Awards & Recognition</h1>
                    <div className="h-1 w-20 bg-cyan-500 rounded-full" />
                </div>

                <div className="space-y-6">
                    <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] shadow-2xl backdrop-blur-3xl group hover:bg-white/10 transition-all">
                        <h2 className="text-3xl font-bold mb-4 text-cyan-400">Best Water Quality 2025</h2>
                        <p className="text-xl text-cyan-100/60 leading-relaxed font-medium">Awarded for meeting the highest standards of purity and taste.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] shadow-2xl backdrop-blur-3xl group hover:bg-white/10 transition-all">
                        <h2 className="text-2xl font-bold mb-4 text-white">ISO 9001 Certified</h2>
                        <p className="text-xl text-cyan-100/60 leading-relaxed font-medium">Certified for Quality Management Systems.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Awards;
