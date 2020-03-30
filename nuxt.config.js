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
	modules: [
		'@nuxtjs/pwa',
		[
			'@nuxtjs/firebase',
			{
				config: {
					apiKey: 'AIzaSyBNJLThTiacyMzxl3fkSOTWbdqAbHGZsBI',
					authDomain: 'nuxt-todo-47779.firebaseapp.com',
					databaseURL: 'https://nuxt-todo-47779.firebaseio.com',
					projectId: 'nuxt-todo-47779',
					storageBucket: 'nuxt-todo-47779.appspot.com',
					messagingSenderId: '932025623931',
					appId: '1:932025623931:web:8fdd23e69b12274b8f49de',
					measurementId: 'G-XEGE0Z8107',
				},
				services: {
					firebase: true,
				},
			},
		],
	],

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
