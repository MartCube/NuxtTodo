const pkg = require('./package')

module.exports = {
	mode: 'universal',
	head: {
		title: 'My Todos',
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, height=device-height, initial-scale=1' }, { name: 'keywords', content: 'mart, cube, portfolio, site, web, developer' }, { hid: 'description', name: 'description', content: pkg.description }],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Customize the progress-bar color
	loading: { color: '#fff' },

	// Global css
	css: ['~/assets/style.scss'],

	// Plugins to load before mounting the App
	//plugins: ['~/plugins/vue-notifications.js'],

	// Nuxt.js modules
	modules: ['@nuxtjs/pwa'],

	pwa: {
		manifest: {
			name: 'ToDo App',
			short_name: 'ToDo',
			description: 'A simply todo app for testing pwa',
		},
	},

	// Build configuration
	build: {
		// You can extend webpack config here

		extend(config, ctx) {},
	},
}
