import type { Config } from "tailwindcss";
module.exports = {
	content: [
		"./src/pages/**/*.{js,jsx,tsx,mdx}",
		"./src/components/**/*.{js,jsx,tsx,mdx}",
		"./src/app/**/*.{js,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				gastroemfoco: {
					background: "#F4FEFF",
					lighter: "#D6E9F7",
					primary: "#2A74B1",
					primaryDark: "#1F3A60",
					accent: "#3C92D1",
					white: "#FFFFFF",
					grayLight: "#F5F8FA",
					gray: "#7A8C9A",
					grayDark: "#4A5A6A",
				},
				primary: "#172048",
				secundary: "#C4C4C4",
			},
		},
		fontFamily: {
			sans: ["Poppins", "sans-serif"],
		},
		backgroundImage: {
			"gastro-gradient": "linear-gradient(90deg, #56e0e0 0%, #007299 100%)",
		},
		fontWeight: {
			normal: "400",
			medium: "500",
			semibold: "600",
			bold: "700",
		},
	},

	plugins: [],
} satisfies Config;
