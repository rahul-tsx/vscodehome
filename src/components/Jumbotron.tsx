import { FC } from 'react';
import homeImage from '../assets/images/home-image.png';

interface JumbotronProps {}

const Jumbotron: FC<JumbotronProps> = () => {
	return (
		<main className='bg-hero-gradient font-fontHeader border-b border-heroBorderBottom '>
			<div className='mt-8 mb-[96px] grid grid-cols-12 items-center gap-5 p-10 mycontainer'>
				<div className=' flex flex-col lg:col-span-4  col-span-12 lg:items-start items-center'>
					<span className='text-sm font-semibold rounded-[32px] mb-2 text-foreground border border-solid border-cardBorder bg-cardBackground px-2 py-3 w-max'>
						Free. Built on open source. Runs everywhere.
					</span>
					<h1 className='text-[56px] lg:text-left text-headerForeground font-semibold -tracking-[0.4px] mt-4 leading-[5rem]  mb-2'>
						Code Editing. Redefined.
					</h1>
					<button className='bg-buttonPrimaryBackground py-3 px-6 text-2xl rounded-[4px]  text-buttonPrimaryForeground cursor-pointer font-semibold  mb-2'>
						Download for Windows
					</button>
					<p className='space-x-1 mb-2'>
						<span className='text-sm mylinks '>
							Web
						</span>
						,
						<span className='text-sm mylinks '>
							Insiders edition
						</span>
						, or{' '}
						<span className='text-sm mylinks '>
							Other platforms
						</span>
					</p>
					<p className='text-[11px] font-normal mb-2'>
						By using VS Code, you agree to its{' '}
						<span className='mylinks'>
							license
						</span>{' '}
						and{' '}
						<span className='mylinks'>
							privacy statement
						</span>
						.
					</p>
				</div>
				<div className='lg:col-span-8 col-span-12 '>
					<img
						src={homeImage}
						alt='homeImage'
						className='w-full '
					/>
				</div>
			</div>
		</main>
	);
};

export default Jumbotron;
