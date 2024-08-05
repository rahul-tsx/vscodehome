import { FC } from 'react';
import copilotSectionImg from '../assets/images/swimlane-copilot.png';

interface CopilotSectionProps {}

const CopilotSection: FC<CopilotSectionProps> = () => {
	return (
		<main className='font-fontHeader'>
			<div className='mt-8 mb-[96px] grid grid-cols-12  gap-5 p-10 mycontainer'>
				<div className=' flex flex-col lg:col-span-4  col-span-12 items-start  gap-y-5'>
					<h2 className='text-[30px] font-semibold -tracking-[0.2px] leading-[150%] text-headerForeground md:text-left'>
						Code with Github Copilot
					</h2>
					
					<p className='font-medium text-homeForeground leading-[160%] text-left text-balance'>
						Write code faster and smarter with GitHub Copilot, your AI pair
						programmer.
					</p>
					<p className='mylinks font-medium'>
						Try GitHub Copilot free for 30 days
					</p>
					<div className='gap-y-5 flex flex-col justify-self-center '>
					<p className='font-medium text-left text-pretty '>
						<span className='mylinks'>Completions</span> present suggestions
						automatically to help you code more efficiently.
					</p>

					<p className='font-medium text-left text-pretty'>
						<span className='mylinks'>Copilot Chat </span> understands the
						context of your code, workspace, extensions, settings, and more.
					</p>
					<p className='font-medium text-left text-pretty'>
						<span className='mylinks'>Inline Chat</span> enables you to
						iteratively generate edits and get answers to quick questions,
						directly on your code.
					</p>
					</div>
					
				</div>
				<div className='lg:col-span-8 col-span-12 '>
					<img
						src={copilotSectionImg}
						alt='Copilot'
						className='w-full '
					/>
				</div>
			</div>
		</main>
	);
};

export default CopilotSection;
