import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Cornerstone Renovation LLC - Home Renovation Services',
        short_name: 'Cornerstone Renovation',
        description: 'Professional home renovation and remodeling services in Apple Valley, MN',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#2563eb',
        icons: [
            {
                src: '/logo.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
        ],
    }
}

