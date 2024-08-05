import { FC } from 'react';
import anywhere from '../assets/images/swimlane-anywhere.png';

interface CodeAnywhereSectionProps {}

const CodeAnywhereSection: FC<CodeAnywhereSectionProps> = () => {
	return (
		<main className='font-fontHeader'>
			<div className='mt-8 mb-[96px] grid grid-cols-12 items-center gap-5 p-10 mycontainer'>
				<div className=' flex flex-col lg:col-span-4  col-span-12 items-start  gap-y-5'>
					<h2 className='text-[30px] font-semibold -tracking-[0.2px] leading-[150%] text-headerForeground md:text-left'>
						Code anywhere
					</h2>
					<p className='font-medium text-homeForeground leading-[160%] text-left text-pretty '>
						Code wherever you're most productive, whether you're connected to
						the cloud, a remote repository, or in the browser with VS Code for
						the Web (vscode.dev).
					</p>
					<div className='gap-y-5 flex flex-col justify-self-center '>
						<p className='font-medium text-left text-pretty'>
							<span className='mylinks'> Built-in Source Control </span>empowers
							you with Git support out-of-the-box. Many other source control
							providers are available through extensions.
						</p>

						<p className='font-medium text-left text-pretty'>
							<span className='mylinks'>GitHub Codespaces </span>provides
							cloud-powered development environments for any activity - whether
							it's a long-term project, or a short-term task like reviewing a
							pull request.
						</p>
					</div>
				</div>
				<div className='lg:col-span-8 col-span-12 '>
					<img
						src={anywhere}
						alt='Code Anywhere'
						className='w-full '
					/>
				</div>
			</div>
		</main>
	);
};

export default CodeAnywhereSection;
