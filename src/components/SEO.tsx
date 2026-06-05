import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: string;
}

export default function SEO(props: SEOProps) {
  const {
    title,
    description,
    path,
    ogImage = 'https://ais-pre-lzs27gvlonm7klxedjuaid-68492222049.asia-southeast1.run.app/src/assets/images/shop_front_1780657913636.png',
    ogType = 'website',
  } = props;

  // Real App URL from environment or injected default from prompt details
  const siteUrl = 'https://ais-pre-lzs27gvlonm7klxedjuaid-68492222049.asia-southeast1.run.app';
  const canonicalUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      {/* Principal Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
