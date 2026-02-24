

import SEO from '../components/common/SEO';

const Awards = () => {
    return (
        <div className="container mx-auto px-4 py-32">
            <SEO
                title="Awards & Recognition"
                description="Vaaraahi Waters is proud to be recognized for its commitment to quality and purity. Explore our awards and certificates in the packaged drinking water industry."
            />
            <h1 className="text-4xl font-bold text-primary-900 mb-8">Awards & Recognition</h1>
            <div className="bg-white border rounded-lg p-6 shadow-sm mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-primary-700">Best Water Quality 2025</h2>
                <p className="text-gray-600">Awarded for meeting the highest standards of purity and taste.</p>
            </div>
            <div className="bg-white border rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">ISO 9001 Certified</h2>
                <p className="text-gray-600">Certified for Quality Management Systems.</p>
            </div>
        </div>
    );
};

export default Awards;
