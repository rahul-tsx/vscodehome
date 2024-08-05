/** @type {import('tailwindcss').Config} */
import gradientMaskImage from 'tailwind-gradient-mask-image';
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				fontHeader:
					'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif',
			},

			colors: {
				lightblue: '#00bcf2',
				blue: '#0072be',
				stableBlue: '#0076bf',
				midblue: '#00188f',
				darkblue: '#002050',
				lightpurple: '#b4a0ff',
				purple: '#5c2d91',
				darkpurple: '#373277',
				lightmagenta: '#e3008c',
				magenta: '#b4009e',
				darkmagenta: '#5c005c',
				red: '#e81123',
				darkred: '#a80000',
				lightorange: '#ff8c00',
				orange: '#d83b01',
				insidersGreen: '#058f2d',
				lightyellow: '#fff100',
				yellow: '#ffcc00',
				lightgreen: '#bad80a',
				green: '#477a32',
				darkgreen: '#004b1c',
				lightteal: '#00b294',
				teal: '#008272',
				darkteal: '#004b50',
				gray95: 'darken(white, 5%)',
				lightgray: '#e3e3e3',
				gray: '#ccc',
				darkgray: '#333',
				white: '#ffffff',
				black: '#000000',
				background: '#0e0e0e',
				foreground: '#9ba3b4',
				headerForeground: '#e9eaeb',
				accentPrimary: '#0078d4',
				accentSecondary: '#0069b9',
				linkForeground: '#4daafc',
				linkForegroundHover: '#8fc3fe',
				linkUnderlineBackground: '#4daafc', // Assuming this is the same as linkForeground
				borderBackground: 'rgba(255, 255, 255, 0.12)',
				headerBackground: '#0e0e0e', // Assuming this is the same as background
				footerBackground: '#0e0e0e', // Assuming this is the same as background
				buttonPrimaryBackground: '#0078d4', // Assuming this is the same as accentPrimary
				buttonPrimaryForeground: '#ffffff', // Assuming this is the same as white
				buttonSecondaryBackground: '#0e0e0e', // Assuming this is the same as background
				buttonSecondaryForeground: '#9ba3b4', // Assuming this is the same as foreground
				buttonSecondaryBorder: 'rgba(255, 255, 255, 0.3)',
				iconButtonHoverBackground: 'rgba(255, 255, 255, 0.10)',
				navbarBorder: 'rgba(255, 255, 255, 0.12)', // Assuming this is the same as borderBackground
				searchInputBackground: 'transparent',
				searchInputBorder: 'rgba(255, 255, 255, 0.15)',
				searchInputBorderActive: '#0078d4', // Assuming this is the same as accentPrimary
				searchInputForeground: '#9ba3b4', // Assuming this is the same as foreground
				searchInputPlaceholderForeground: '#9ba3b4',
				cardBackground: 'rgba(255, 255, 255, 0.04)',
				cardHoverBackground: 'rgba(255, 255, 255, 0.08)',
				cardBorder: 'rgba(255, 255, 255, 0.07)',
				cardBorderActive: 'rgba(255, 255, 255, 0.2)',
				featureCardIconBackground: 'rgba(255, 255, 255, 0.07)',
				bannerBackground: '#0e0e0e', // Assuming this is the same as background
				bannerLinkColor: '#4daafc', // Assuming this is the same as linkForeground
				bannerText: '#9ba3b4', // Assuming this is the same as foreground
				heroBackground: 'linear-gradient(180deg, #0e0e0e 0%, #141414 100%)',
				heroBorderBottom: 'rgba(255, 255, 255, 0.12)', // Assuming this is the same as borderBackground
				homeForeground: '#9ba3b4', // Assuming this is the same as foreground
				codeBackground: 'rgba(255, 255, 255, 0.15)',
				codeForeground: '#cccccc',
				keybindingBackground: 'rgba(255, 255, 255, 0.15)',
				keybindingForeground: '#4daafc', // Assuming this is the same as linkForeground
			},
			screens: {
				xsm: '480px', // Custom media query size
				xssm: '360px',
				// Other custom sizes can be added here
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(180deg, #0e0e0e 0%, #141414 100%)',
			},
		},
	},
	plugins: [gradientMaskImage],
};
