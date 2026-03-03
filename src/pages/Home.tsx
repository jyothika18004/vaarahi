import Hero from "../components/layout/sections/Hero";
import Intro from "../components/layout/sections/Intro";
import Features from "../components/layout/sections/Features";
import SEO from '../components/common/SEO';

const Home = () => {
    return (
        <div className="bg-transparent">
            <SEO
                title="Pure & Premium Packaged Drinking Water"
                description="Chaamundeshwari Water offers the purest packaged drinking water, processed with advanced filtration for a refreshing taste. Order your premium hydration today."
            />
            <Hero />
            <Intro />
            <Features />
        </div>
    );
};

export default Home;