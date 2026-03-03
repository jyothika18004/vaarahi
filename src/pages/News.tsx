
import SEO from '../components/common/SEO';


const News = () => {
    return (
        <div className="min-h-screen bg-transparent text-white selection:bg-cyan-500/30 pt-48 pb-24 px-6">
            <SEO
                title="Latest News & Updates"
                description="Stay updated with the latest news, events, and announcements from Vaaraahi Waters. Follow our journey in providing premium hydration."
            />
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Latest News</h1>
                    <div className="h-1 w-20 bg-cyan-500 rounded-full" />
                </div>

                <div className="space-y-12">
                    <article className="border-b border-white/10 pb-12 group">
                        <h2 className="text-3xl font-bold mb-3 hover:text-cyan-400 transition-colors cursor-pointer leading-tight">Varahi Waters Expands to New Region</h2>
                        <p className="text-sm font-bold text-cyan-500/60 uppercase tracking-widest mb-6">October 25, 2025</p>
                        <p className="text-xl text-cyan-100/60 leading-relaxed font-medium">We are excited to announce our expansion into the western districts, bringing pristine local hydration to even more communities...</p>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default News;
