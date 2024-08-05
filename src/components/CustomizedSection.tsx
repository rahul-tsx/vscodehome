import { FC } from 'react';
import customized from '../assets/images/swimlane-customized.png';

interface CustomizedSectionProps {}

const CustomizedSection: FC<CustomizedSectionProps> = () => {
	return (
		<main className='font-fontHeader'>
			<div className='mt-8 mb-[96px] grid grid-cols-12 items-center gap-5 p-10 mycontainer'>
				<div className=' flex flex-col lg:col-span-4  col-span-12 items-start  gap-y-5'>
					<h2 className='text-[30px] font-semibold -tracking-[0.2px] leading-[150%] text-headerForeground md:text-left'>
						Code fully customized
					</h2>
					<p className='font-medium text-homeForeground leading-[160%] text-left text-balance'>
						Customize your VS Code UI and layout so that it fits your coding
						style.
					</p>
					<div className='gap-y-5 flex flex-col justify-self-center '>
						<p className='font-medium text-left text-pretty'>
							<span className='mylinks'>Color themes</span> let you modify the
							colors in VS Code's user interface to suit your preferences and
							work environment..
						</p>

						<p className='font-medium text-left text-pretty'>
							<span className='mylinks'>Settings Sync</span> enables you to
							share your user settings across your VS Code instances with the
							Settings Sync feature.
						</p>
						<p className='font-medium text-left text-pretty'>
							<span className='mylinks'>Profiles </span>let you create sets of
							customizations and quickly switch between them or share them with
							others.
						</p>
					</div>
				</div>
				<div className='lg:col-span-8 col-span-12 '>
					<img
						src={customized}
						alt='Customization'
						className='w-full '
					/>
				</div>
			</div>
		</main>
	);
};

export default CustomizedSection;
