// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	srcDark: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Galta | Desarrollo web, e-commerce y automatización de procesos para pymes en Chile',
	siteDescription:
		'Diseño y desarrollo de sitios web, tiendas online, automatización con RPA e IA, y consultoría informática para empresas y pymes en Santiago de Chile.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo-light.png',
		srcDark: '/logo-dark.png',
		alt: 'Galta'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}