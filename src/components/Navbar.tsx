import { FC, useState } from 'react';
import logo from '../assets/images/logo.png';
import { BiSun } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi';
import { GiHamburgerMenu as HamburgerBar } from 'react-icons/gi';

interface navItem {
	name: string;
	link?: string;
}
interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
	const [menu, setMenu] = useState<boolean>(false);
	const HamburgerMenuToggle = () => {
		setMenu((prev) => !prev);
	};
	const navLinks: navItem[] = [
		{ name: 'Docs' },
		{ name: 'Updates' },
		{ name: 'Blog' },
		{ name: 'API' },
		{ name: 'Extensions' },
		{ name: 'FAQ' },
		{ name: 'Learn' },
	];
	return (
		<header className='bg-headerBackground font-fontHeader sticky  top-0 '>
			<nav className=' flex justify-between mycontainer px-10 py-5 '>
				<ul className='flex xl:w-3/5'>
					<li className='flex space-x-3 items-center cursor-pointer text-headerForeground'>
						<img
							src={logo}
							alt='logo'
							className='size-8'
						/>
						<span className='text-xl font-semibold -tracking-[0.2px]'>
							Visual Studio Code
						</span>
					</li>
					{navLinks.map((nav, index) => (
						<li
							key={index}
							className='flex-1 content-center cursor-pointer hover:text-headerForeground transition-opacity duration-[0.8s] ease-in px-3 hidden lg:block '>
							{nav.name}
						</li>
					))}
				</ul>
				<ul className='lg:flex gap-5 items-center hidden '>
					<BiSun size={25} />
					<BiSearch
						size={25}
						className='xl:hidden'
					/>
					<span className='border border-searchInputBorder active:border-searchInputBorderActive text-searchInputForeground placeholder-searchInputPlaceholderForeground items-center space-x-2 px-3 py-2 rounded-sm hidden xl:flex'>
						<BiSearch size={25} />
						<input
							type='text'
							placeholder='Search Docs'
							className='bg-searchInputBackground outline-none '
						/>
					</span>
					<button className='bg-buttonPrimaryBackground text-buttonPrimaryForeground p-2 rounded-sm px-5'>
						Download
					</button>
				</ul>
				<HamburgerBar
					size={25}
					onClick={HamburgerMenuToggle}
					className='lg:hidden'
				/>
			</nav>
			<nav className='pb-5 px-10'>
				{menu && (
					<ul className='flex flex-col gap-y-3'>
						{navLinks.map((nav, index) => (
							<li
								key={index}
								className='flex-1 text-left cursor-pointer hover:text-headerForeground transition-opacity duration-[0.8s] ease-in px-3  '>
								{nav.name}
							</li>
						))}
						<ul className='flex gap-5 items-center px-2 '>
							<BiSun size={25} />
							<BiSearch
								size={25}
								className='xl:hidden'
							/>
							
							<button className='bg-buttonPrimaryBackground text-buttonPrimaryForeground p-2 rounded-sm px-5'>
								Download
							</button>
						</ul>
					</ul>
				)}
			</nav>
		</header>
	);
};

export default Navbar;
