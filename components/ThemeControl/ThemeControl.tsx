'use client';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
const ThemeControl = () => {
	const { theme, setTheme } = useTheme();
	return (
		<div className='flex items-center justify-between w-48 p-4 px-2 m-6 bg-gray-400 border-2 border-gray-100 rounded-full gap-y-10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
			<div
				className={`bg-black h-12 text-white rounded-full w-12 flex items-center justify-center p-4`}
			>
				<button onClick={() => setTheme('light')}>
					<Sun />
				</button>
			</div>
			<div
				className={`dark:bg-white h-12 dark:text-black rounded-full w-12 flex items-center justify-center p-4`}
			>
				<button onClick={() => setTheme('dark')}>
					<Moon />
				</button>
			</div>
		</div>
	);
};

export default ThemeControl;
