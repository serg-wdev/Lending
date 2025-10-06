import type { Metadata } from "next";
import { Poppins, Roboto } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700', '800'],
    variable: '--font-poppins',
});

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-roboto',
});

export const metadata: Metadata = {
    title: "Cornerstone Renovation LLC - Quality Home Renovation Services",
    description: "Professional home renovation and remodeling services in Apple Valley, MN. Kitchen remodeling, bathroom renovation, painting, siding, and handyman services. Renovation you can trust.",
    keywords: "home renovation, remodeling, kitchen remodel, bathroom renovation, painting, siding, Apple Valley MN, Lakeville, Burnsville",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Cornerstone Renovation LLC",
        "description": "Professional home renovation and remodeling services in Apple Valley, MN",
        "url": "https://cornerstonerenovation.com",
        "telephone": "(952) 465-8195",
        "email": "cornerstone_renovation@outlook.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Apple Valley",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "44.746995",
            "longitude": "-93.216944"
        },
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "44.746995",
                "longitude": "-93.216944"
            },
            "geoRadius": "50000"
        },
        "services": [
            "Kitchen Remodeling",
            "Bathroom Renovation",
            "Interior Painting",
            "Exterior Painting",
            "Siding Installation",
            "Deck Installation",
            "Handyman Services"
        ]
    };

    return (
        <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    );
}
