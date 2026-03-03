import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogType?: string;
    ogImage?: string;
    twitterHandle?: string;
}

const SEO = ({
    title,
    description = "Chaamundeshwari Water - Pure, Premium, and Refreshing Packaged Drinking Water. Experience the clarity and quality of Chaamundeshwari Water.",
    canonical = "https://chaamundeshwariwater.com",
    ogType = "website",
    ogImage = "https://chaamundeshwariwater.com/og-image.jpg",
    twitterHandle = "@ChaamundeshwariWater"
}: SEOProps) => {
    const siteTitle = "Chaamundeshwari Water";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={canonical} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:site" content={twitterHandle} />
        </Helmet>
    );
};

export default SEO;
