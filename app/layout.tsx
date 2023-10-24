import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Provider from '@/components/Provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL('https://jsonify-k8pai.vercel.app'),
	title: 'JSONify',
	description: 'Manage JSON files with ease.',
	authors: { name: 'Sudarsan K Pai', url: 'https://k8pai.dev' },
	publisher: 'k8pai',
	category: 'Next.js Web Application',
	creator: 'k8pai',
	generator: 'Next.js',
	keywords: [
		'react',
		'server components',
		'next.js',
		'JSON',
		'Server Actions',
		'tailwindcss',
		'Financepeer',
	],
	viewport: { width: 'device-width', initialScale: 1 },
	icons: {
		icon: 'https://jsonify-k8pai.vercel.app/jsonify_icon.jpg',
		apple: 'https://jsonify-k8pai.vercel.app/jsonify_icon.jpg',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<Provider>
					<div
						className={` flex flex-col min-h-screen dark text-foreground bg-background`}
					>
						<Header />
						{children}
						<Footer />
					</div>
				</Provider>
			</body>
		</html>
	);
}
