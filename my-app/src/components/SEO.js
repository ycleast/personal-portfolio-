// src/components/SEO.js
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description }) => {
  const defaultTitle = "Your Name | Web Developer Portfolio";
  const defaultDescription = "Computer Science student specializing in web development";
  
  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  );
};

export default SEO;