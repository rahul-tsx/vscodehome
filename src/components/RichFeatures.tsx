import { FC } from 'react';
import terminal from '../assets/icons/codicon-terminal.svg';
import runCode from '../assets/icons/codicon-debug.svg';
import versionControl from '../assets/icons/codicon-version-control.svg';
import buildTasks from '../assets/icons/codicon-build-tasks.svg';
import localHistory from '../assets/icons/codicon-local-history.svg';
import themes from '../assets/icons/codicon-themes.svg';
import accessibility from '../assets/icons/codicon-accessibility.svg';
import webSupport from '../assets/icons/codicon-web.svg';
interface RichFeaturesProps {}
interface richFeaturesInterface {
	icon: string;
	name: string;
	description: string;
}

const RichFeatures: FC<RichFeaturesProps> = () => {
	const richFeatures: richFeaturesInterface[] = [
		{
			icon: terminal,
			name: 'Integrated terminal',
			description:
				"Use your favorite shell whether it's zsh, pwsh, or git bash, all inside the editor.",
		},
		{
			icon: runCode,
			name: 'Run code',
			description: 'Run and debug your code without leaving your editor.',
		},
		{
			icon: versionControl,
			name: 'Version control',
			description:
				'Built-in support for git and many other source control providers.',
		},
		{
			icon: buildTasks,
			name: 'Build tasks',
			description: 'Run tools and analyze their results from within VS Code.',
		},
		{
			icon: localHistory,
			name: 'Local history',
			description:
				'Never lose your changes with automatically tracked local history.',
		},
		{
			icon: themes,
			name: 'Themes',
			description:
				'Your theme is an extension of your personality. Add some flair to your editor and add your touch.',
		},
		{
			icon: accessibility,
			name: 'Accessibility',
			description:
				'Optimized experience for screen readers, high contrast themes, and keyboard-only navigation.',
		},
		{
			icon: webSupport,
			name: 'Web support',
			description:
				'Whether you are on your phone, tablet, or desktop, you can access your code from anywhere.',
		},
	];
	return (
		<div className='grid grid-cols-12 gap-5 p-5 my-10 font-fontHeader'>
			<div className=' col-span-12 flex flex-col items-center '>
				<h2 className='text-[30px] font-semibold -tracking-[0.2px] leading-[250%] text-headerForeground text-center'>
					Code with rich features
				</h2>
				<p className='font-medium text-homeForeground leading-[160%] text-center text-pretty sm:w-[55ch] mb-5'>
					There's a lot more to an editor. Whether it's using built-in features
					or rich extensions, there's something for everyone.
				</p>
			</div>
			<div className='col-span-12'>
				<div className=' grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 cursor-default'>
					{richFeatures.map((feature, index) => (
						<div
							key={index}
							className='flex flex-col p-6 text-left bg-cardBackground hover:bg-cardHoverBackground border border-cardBorder hover:border-cardBorderActive items-start rounded-[10px]'>
							<img
								src={feature.icon}
								alt={feature.name}
								className='size-12 p-3 mb-5 bg-featureCardIconBackground rounded-[6px] items-center justify-center align-middle'
							/>
							<div className='flex-col text-start flex'>
								<p className='text-headerForeground font-semibold'>
									{feature.name}
								</p>
								<p className='text-sm pt-2 font-medium'>
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default RichFeatures;
