'use client';

import { Poppins, Roboto } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const roboto = Roboto({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
});

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
});

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Quote(randomQuote: Quote) {
	const router = useRouter();
	const [fade, setFade] = useState(false);

	return (
		<section className={`min-h-screen mt-4 flex flex-col justify-center items-center mx-4`}>
			<div className='flex flex-col items-center justify-center'>
				<AnimatePresence mode='wait'>
					<motion.div
						key={fade ? 'hidden' : 'visible'}
						className='transition-opacity duration-1000 ease-in-out'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<p className={`text-2xl text-center mt-4 ${poppins.className}`}>
							Author: {randomQuote.author}
						</p>

						<p className={`text-2xl text-center mt-4 ${poppins.className}`}>
							Category: {randomQuote.category}
						</p>

						<div className='mt-24 grow max:w-96'>
							<p
								className={`text-5xl text-center max-w-3xl leading-normal ${roboto.className}`}
							>
								{randomQuote.quote}
							</p>
						</div>
					</motion.div>
				</AnimatePresence>
				<button
					type='submit'
					className='flex items-center max-w-xs gap-4 p-3 mt-6 mb-4 text-xl text-white bg-black border-2 border-black border-solid rounded-md shadow-xl dark:text-black shadow-gray-100/10 dark:bg-white hover:cursor-pointer dark:hover:bg-white'
					onClick={() => {
						setFade(true);
						setTimeout(() => router.refresh(), 1000);
						setTimeout(() => setFade(false), 1200);
					}}
				>
					<motion.span
						animate={{ rotate: fade ? 300 : 0 }}
						initial={{ rotate: 0 }}
					>
						<Loader2 />
					</motion.span>
					<span>Get New Quote</span>
				</button>
			</div>
		</section>
	);
}
