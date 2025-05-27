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
				prohealth: {
					light: "#EAF4FB",
					lighter: "#D6E9F7",
					primary: "#2A74B1",
					primaryDark: "#1F3A60",
					accent: "#3C92D1",
					white: "#FFFFFF",
					grayLight: "#F5F8FA",
					gray: "#7A8C9A",
					grayDark: "#4A5A6A",
				},
				dark: "#102A43", // aqui o text-dark que causou o erro
			},
		},
		fontFamily: {
			sans: ["Poppins", "sans-serif"], // ou 'Montserrat', 'Inter'
		},
		backgroundImage: {
			"prohealth-gradient":
				"linear-gradient(to bottom right, #EAF6FB, #CDE6F5, #B5D4EC)",
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
