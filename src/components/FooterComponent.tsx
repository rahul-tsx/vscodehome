import { FC } from 'react';
import xIcon from '../assets/icons/x-icon.svg';
import githubIcon from '../assets/icons/github-icon.svg';
import youtubeIcon from '../assets/icons/youtube-icon.svg';
import microsoftIcon from '../assets/icons/microsoft.svg';

interface FooterComponentProps {}

const FooterComponent: FC<FooterComponentProps> = () => {
	return (
		<div className='py-[96px] px-[40px] flex flex-col gap-4 font-fontHeader '>
			<div className='flex justify-between'>
				<ul className='flex items-center space-x-10 '>
					<li>
						<img
							src={xIcon}
							alt='X'
							className='max-w-[18px] cursor-pointer'
						/>
					</li>
					<li>
						<img
							src={githubIcon}
							alt='github'
							className='max-w-6 cursor-pointer'
						/>
					</li>
					<li>
						<img
							src={youtubeIcon}
							alt='youtube'
							className='max-w-6 cursor-pointer'
						/>
					</li>
				</ul>

				<ul>
					<li>
						<img
							src={microsoftIcon}
							alt='microsoft'
							className='max-w-6 cursor-pointer'
						/>
					</li>
				</ul>
			</div>
			<div>
				<ul className='flex items-center space-x-10 text-homeForeground text-xs'>
					<li className='cursor-pointer'>Support</li>
					<li className='cursor-pointer'>Privacy</li>
					<li className='cursor-pointer'>Terms of use</li>
					<li className='cursor-pointer'>License</li>
				</ul>
			</div>
		</div>
	);
};

export default FooterComponent;
