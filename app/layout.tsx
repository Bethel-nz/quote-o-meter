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
					<ThemeControl />
					<main className='min-h-[100dvh] text-black bg-white dark:text-white dark:bg-black w-full flex mt-4 mx-auto items-center justify-center'>
						{children}
					</main>
				</ThemeProviderContext>
			</body>
		</html>
	);
}
