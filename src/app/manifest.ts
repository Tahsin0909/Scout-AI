import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'TripTrax',
        short_name: 'TripTrax',
        description: 'Plan, organize, and manage your outdoor adventures and expeditions with TripTrax.',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        orientation: 'portrait-primary',
        categories: ['travel', 'navigation', 'lifestyle'],
        icons: [
            {
                src: '/apexLogo-192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/apexLogo-192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'monochrome',
            },
        ],
    }
}