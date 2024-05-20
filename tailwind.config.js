import tailwindcssforms from "@tailwindcss/forms"; // crossbrowser vendar prefixers - добавление вендорных префиксов
import tailwindcsstypography from "@tailwindcss/typography"; // crossbrowser vendar prefixers - добавление вендорных префиксов

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		fontFamily: {
			"sans": "var(--font-family)",
			// "serif": ["ui-serif", "Georgia", ...],
			// "mono": ["ui-monospace", "SFMono-Regular", ...],
			// "display": ["Oswald", ...],
			// "html": ["\"Open Sans\""],
		},

		backgroundImage: {
			"gradient-btn": "var(--bg-gradient)",
			"gradient-peach": "var(--bg-gradient-peach)",
			"gradient-yellow": "var(--bg-gradient-yellow)",
		},

		container: {
			center: true,
			padding: "1.5rem",
		},

		screens: {
			"sm": "640px",
			"md": "768px",
			"lg": "1024px",
			"xl": "1280px",
			"2xl": "1366px",
			"3xl": "1536px",
		},

	  	extend: {
			gridTemplateColumns: {
				// Complex site-specific column configuration
				"digital-life-columns": "repeat(16, minmax(10px, 1fr))",
				"news-columns": "repeat(3, minmax(250px, 325px))",
			},
			gridTemplateRows: {
				// Complex site-specific column configuration
				"digital-life-rows": "repeat(8, minmax(100px, 1fr))",
				// "news-rows": "repeat(16, minmax(10px, 1fr))",
			},

			boxShadow: {
				"btn": "var(--box-shadow)",
				"card": "var(--box-shadow-card)",
				"box": "var(--box-shadow-box)",
				"box2": "var(--box-shadow-box2)",
			},
			lineHeight: {
				"100": "100%",
				"120": "120%",
				"140": "140%",
			},
			spacing: {
				"8": "8px",
				"16": "16px",
				"24": "24px",
				"30": "30px",
			},
			padding: {
				"xxs": "4px",
				"xs": "8px",
				"sm": "16px",
				"md": "24px",
				"lg": "32px",
			},
			margin: {
				'6': '6px',
				'8': '8px',
				'16': '16px',
				'24': '24px',
				'32': '32px',
				'40': '40px',
				'48': '48px',
				'64': '64px',
				'80': '80px',
				'120': '120px',

			},
			colors: {
				"light-grey": "var(--color-light-grey)",
				grey: "var(--color-text-grey)",
				red: "var(--color-text-red)",
				title: "var(--color-text-title)",
				dark: "var(--color-text-dark)",
				"text-red": "var(--color-text-red)",
				"bg-btn-round": "var(--bg-grey)",
			},

		},
	  fontSize: {
		"xxsm": "12px",
		"sm": "14px",
		"base": "16px",
		"xl": "18px",
		"1xl": "20px",
		"2xl": "24px",
		"3xl": "32px",
		"4xl": "48px",
		"5xl": "3.052rem",
	  }
	},
	plugins: [
		tailwindcssforms,
		tailwindcsstypography
	],
}
