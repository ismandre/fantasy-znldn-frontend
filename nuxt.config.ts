import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/eslint"],
	devtools: { enabled: true },
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
	compatibilityDate: "2025-07-15",
	css: ["@picocss/pico"],
	// css: ["./app/assets/css/main.css"],
	eslint: {
		config: {
			stylistic: {
				semi: true,
				quotes: "double",
				commaDangle: "always-multiline",
				indent: "tab",
			},
		},
	},
});
