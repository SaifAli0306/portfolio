import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Muhammad Saif Ali – Full Stack Web & Android Developer',
	description:
		'A passionate full-stack developer skilled in React, ASP.NET, Java, and Firebase. Developer of the Dynamic Resume Manager App. Explore my work and skills!',
	keywords: [
		'Muhammad Saif Ali',
		'Full Stack Developer',
		'Android Developer',
		'React Developer',
		'Java Developer',
		'ASP.NET Developer',
		'Resume App',
		'Firebase',
		'Next.js Portfolio',
		'Web Developer in Pakistan',
	],
	authors: [{ name: 'Muhammad Saif Ali' }],
	creator: 'Muhammad Saif Ali',
	openGraph: {
		title: 'Muhammad Saif Ali – Full Stack Portfolio',
		description:
			'Explore the portfolio of Muhammad Saif Ali, a full stack developer passionate about modern web and mobile apps. Creator of the Dynamic Resume Manager App.',
		url: 'https://your-portfolio.vercel.app', // change this to your live URL after deployment
		siteName: 'Muhammad Saif Ali – Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Muhammad Saif Ali – Full Stack Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Muhammad Saif Ali – Full Stack Developer',
		description:
			'Passionate full-stack developer building complete web and mobile solutions. Explore my projects, skills, and resume.',
		creator: '@yourusername', // optional: update with your real Twitter handle
		images: ['/og-image.jpg'],
	},
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
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
