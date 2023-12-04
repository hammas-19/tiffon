export default defineNuxtConfig({
	runtimeConfig: {
    public: {
      API_BASE_URL: process.env.STRAPI_API_URL,
			API_READ_TOKEN: process.env.STRAPI_API_KEY,
      IMAGE_BASE_URL: process.env.IMAGE_BASE_URL
    },
  },
	app: {
		head: {
			title: "Tiffon",
			// titleTemplate: "%s | your slogan here",
			htmlAttrs: {
				lang: "en",
			},
			meta: [
				{ charset: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					hid: "description",
					name: "description",
					content: "meta description",
				}
			],
			link: [{ rel: "icon", type: "image/webp", href: "favicon" }],
		},
	},

	modules: ["@nuxtjs/tailwindcss"],

	tailwindcss: {
		cssPath: "~/assets/css/main.css",
		configPath: "~/tailwind.config.js",
		exposeConfig: true,
		injectPosition: 0,
		viewer: true,
	},
});
