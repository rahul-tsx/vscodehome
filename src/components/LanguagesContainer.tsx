import { FC } from 'react';
import javascript from '../assets/images/language-js.png';
import typescript from '../assets/images/language-ts.png';
import python from '../assets/images/language-python.png';
import cpp from '../assets/images/language-cpp.png';
import csharp from '../assets/images/language-cs.png';
import html from '../assets/images/language-html.png';
import java from '../assets/images/language-java.png';
import json from '../assets/images/language-json.png';
import markdown from '../assets/images/language-markdown.png';
import php from '../assets/images/language-php.png';
import powershell from '../assets/images/language-powershell.png';
import yaml from '../assets/images/language-yaml.png';

interface LanguagesContainerProps {}

interface LanguagesListInterface {
	image: string;
	name: string;
}

const LanguagesContainer: FC<LanguagesContainerProps> = () => {
	const languageList: LanguagesListInterface[] = [
		{ image: javascript, name: 'JavaScript' },
		{ image: typescript, name: 'TypeScript' },
		{ image: python, name: 'Python' },
		{ image: cpp, name: 'C++' },
		{ image: csharp, name: 'C#' },
		{ image: html, name: 'HTML' },
		{ image: java, name: 'Java' },
		{ image: json, name: 'JSON' },
		{ image: markdown, name: 'Markdown' },
		{ image: php, name: 'PHP' },
		{ image: powershell, name: 'PowerShell' },
		{ image: yaml, name: 'YAML' },
	];
	return (
		<div className='grid grid-cols-12 gap-5 p-5 font-fontHeader'>
			<div className='xl:col-span-4 md:col-span-6 col-span-12 flex flex-col items-start '>
				<h2 className='text-[30px] font-semibold -tracking-[0.2px] leading-[150%] text-headerForeground md:text-left'>
					Code in any language
				</h2>
				<p className='font-medium text-homeForeground leading-[160%] text-left text-balance'>
					VS Code supports almost every major programming language. Several ship
					in the box, like JavaScript, TypeScript, CSS, and HTML, but extensions
					for others can be found in the VS Code Marketplace.
				</p>
			</div>
			<div className='xl:col-span-8 md:col-span-6 col-span-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-12'>
				{languageList.map((language, index) => (
					<div
						key={index}
						className='flex  items-center sm:col-span-4 md:col-span-1 xsm:col-span-6 col-span-12 flex-1  justify-between xsm:justify-start'>
						<img
							src={language.image}
							alt={language.name}
							className='size-14'
						/>
						<p>{language.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default LanguagesContainer;
