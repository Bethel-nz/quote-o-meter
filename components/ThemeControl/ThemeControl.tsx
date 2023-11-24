'use client';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
const ThemeControl = () => {
	const { theme, setTheme } = useTheme();
	return (
		<div className='flex flex-col items-center justify-between h-[12em] px-2 p-4 m-2 border-2  gap-y-10 bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100'>
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
