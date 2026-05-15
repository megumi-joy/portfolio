/**
 * SeoMeta — shared meta tags (title, description, OG, Twitter) via react-helmet-async.
 * Used by all lobby pages.
 *
 * @param {string} title - Page title
 * @param {string} description - Page description (≤155 chars)
 * @param {string} ogImage - OG image URL (defaults to /og-default.png)
 * @param {string} canonicalUrl - Canonical page URL
 */
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://megumi-joy.github.io/portfolio';

export default function SeoMeta({ title, description, ogImage, canonicalUrl }) {
    const image = ogImage || `${BASE_URL}/og-default.png`;
    const url = canonicalUrl || BASE_URL + '/';

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Megumi Joy" />
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}
