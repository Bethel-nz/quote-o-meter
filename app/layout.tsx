import type { Metadata } from 'next';
import ThemeProviderContext from '@/context/ThemeProvider';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeControl from '@/components/ThemeControl/ThemeControl';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Quote-O-Meter',
	description: 'micro-frontend / quote generation app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProviderContext>
					<main className='relative flex items-center justify-center w-full min-h-screen mx-auto text-black bg-white dark:text-white dark:bg-black'>
						<div>
							<ThemeControl />
						</div>
						<section>{children}</section>
					</main>
				</ThemeProviderContext>
			</body>
		</html>
	);
}
