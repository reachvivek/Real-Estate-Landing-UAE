import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://realestateuae.pages.dev'),
  title: {
    default: "PRESTIGE - UAE Real Estate | Properties in Dubai & Abu Dhabi",
    template: "%s | PRESTIGE UAE Real Estate"
  },
  description: "Discover premium properties for sale and rent in Dubai, Abu Dhabi, and across UAE. Luxury apartments, villas, and townhouses in Dubai Marina, Downtown, JBR, and more.",
  keywords: ["UAE real estate", "Dubai properties", "Abu Dhabi real estate", "properties for sale Dubai", "properties for rent Dubai", "luxury apartments Dubai", "Dubai Marina", "Downtown Dubai", "villas UAE"],
  authors: [{ name: "PRESTIGE Real Estate" }],
  creator: "PRESTIGE Real Estate",
  publisher: "PRESTIGE Real Estate",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://realestateuae.pages.dev',
    siteName: 'PRESTIGE UAE Real Estate',
    title: 'PRESTIGE - UAE Real Estate | Properties in Dubai & Abu Dhabi',
    description: 'Discover premium properties for sale and rent in Dubai, Abu Dhabi, and across UAE. Luxury apartments, villas, and townhouses.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PRESTIGE UAE Real Estate - Premium Properties',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PRESTIGE - UAE Real Estate | Properties in Dubai & Abu Dhabi',
    description: 'Discover premium properties for sale and rent in Dubai, Abu Dhabi, and across UAE.',
    images: ['/og-image.jpg'],
    creator: '@prestigeuae',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
