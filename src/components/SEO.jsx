import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = 'BxOn | Premium Startup Development';
    const defaultDescription = 'Premium startup development services. Web Development, UI/UX, and AI Autonomous Workflows.';
    const defaultKeywords = 'startup, web development, ui/ux, ai, automation, software engineering, bxon';
    const defaultImage = '/BxOn.png'; // Make sure this image exists in public folder
    const siteUrl = 'https://bxon.in';

    const finalTitle = title ? `${title} | BxOn` : siteTitle;
    const finalDescription = description || defaultDescription;
    const finalKeywords = keywords || defaultKeywords;
    const finalImage = image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`;
    const finalUrl = url ? `${siteUrl}${url}` : siteUrl;

    return (
        <Helmet>
            <title>{finalTitle}</title>
            <meta name="description" content={finalDescription} />
            <meta name="keywords" content={finalKeywords} />
            <link rel="canonical" href={finalUrl} />

            {/* Open Graph Tags */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:image" content={finalImage} />
            <meta property="og:url" content={finalUrl} />
            <meta property="og:site_name" content="BxOn" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={finalDescription} />
            <meta name="twitter:image" content={finalImage} />
        </Helmet>
    );
};

export default SEO;
