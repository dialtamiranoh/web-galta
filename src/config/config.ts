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
	siteTitle: 'Galta | Consultora informática de desarrollo web y automatización en Chile',
	siteDescription:
		'Sitios web, e-commerce, automatización de procesos y consultoría informática para empresas en Chile.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo-light.svg',
		srcDark: '/logo-dark.svg',
		alt: 'Galta'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}