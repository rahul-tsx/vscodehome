import { FC } from 'react';
import python from '../assets/images/language-python.png';
import copilot from '../assets/images/copilot-extension.png';
import cextension from '../assets/images/c-extension.png';
import csextension from '../assets/images/cs-dev-kit-extension.png';
import jupyter from '../assets/images/jupyter-extension.png';
import gitlens from '../assets/images/gitlens-extension.png';
import remote from '../assets/images/remote-extension.png';
import gitpull from '../assets/images/github-pull-requests-extension.png';

interface ExtensionContainerProps {}

interface ExtensionListInterface {
	logo: string;
	name: string;
	description: string;
}

const ExtensionContainer: FC<ExtensionContainerProps> = () => {
	const extensionList: ExtensionListInterface[] = [
		{
			logo: python,
			name: 'Python',
			description: 'Adds rich language support for Python',
		},
		{
			logo: copilot,
			name: 'Github Copilot',
			description: 'Your AI pair programmer',
		},
		{
			logo: cextension,
			name: 'C/C++',
			description: 'Adds rich language support for C/C++',
		},
		{
			logo: jupyter,
			name: 'Jupyter',
			description: 'Language support for Jupyter notebook',
		},
		{
			logo: gitlens,
			name: 'GitLens',
			description: 'Supercharge your git experience',
		},
		{
			logo: csextension,
			name: 'C# Dev Kit',
			description: 'Powerful tool for your C# environment',
		},
		{
			logo: gitpull,
			name: 'Github Codespaces',
			description: 'Fully configured dev environments in the cloud',
		},
		{
			logo: gitpull,
			name: 'Github Pull Requests',
			description: 'Collaborate on issues and pull requests',
		},
		{
			logo: remote,
			name: 'Remote Development',
			description: 'Open folders in a container in a remote machine',
		},
	];
	return (
		<div className='grid grid-cols-12 gap-5 p-5 my-10 font-fontHeader'>
			<div className='xl:col-span-4 md:col-span-6 col-span-12 flex flex-col items-start '>
				<h2 className='text-[30px] font-semibold -tracking-[0.2px] leading-[150%] text-headerForeground text-left'>
					Code with extensions
				</h2>
				<p className='font-medium text-homeForeground leading-[160%] text-left text-balance'>
					Whether you're a beginner or an expert, we've got you covered. Choose
					from hundreds of extensions to power up your VS Code experience.
				</p>
				<p className='mylinks font-medium'>
					Learn more about extensions
				</p>
			</div>
			<div className='xl:col-span-8 md:col-span-6 col-span-12'>
				<div className=' grid lg:grid-cols-3 md:grid-cols-3 grid-cols-12 gap-5 gradient-mask-b-50'>
					{extensionList.map((extension, index) => (
						<div
							key={index}
							className='flex  xsm:col-span-4 md:col-span-1  lg:mx-0 xssm:col-span-6 col-span-12 flex-1 items-center   bg-cardBackground hover:bg-cardHoverBackground border border-cardBorder hover:border-cardBorderActive rounded-[6px] p-2 space-x-5  justify-center'>
							<img
								src={extension.logo}
								alt={extension.name}
								className='size-14'
							/>
							<div className='flex-col text-start xl:flex hidden'>
								<p>{extension.name}</p>
								<p>{extension.description}</p>
							</div>
						</div>
					))}
				</div>
				<p className='my-3'>
					View 50k+ extensions in the{' '}
					<span className='mylinks'>Extension Marketplace</span>
				</p>
			</div>
		</div>
	);
};

export default ExtensionContainer;
