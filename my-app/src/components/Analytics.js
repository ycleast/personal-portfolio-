// src/components/Analytics.js
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const Analytics = () => {
    const location = useLocation();

    useEffect(() => {
        // Replace with your GA tracking ID
        const trackingId = 'G-XXXXXXXXXX';

        // Initialize Google Analytics
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', trackingId);

        // Send pageview on route change
        gtag('event', 'page_view', {
            page_path: location.pathname + location.search,
        });
    }, [location]);

    return (
        <Helmet>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}></script>
        </Helmet>
    );
};

export default Analytics;