import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	prefix: 'twsv-',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--twsv-border) / <alpha-value>)',
				input: 'hsl(var(--twsv-input) / <alpha-value>)',
				ring: 'hsl(var(--twsv-ring) / <alpha-value>)',
				background: 'hsl(var(--twsv-background) / <alpha-value>)',
				foreground: 'hsl(var(--twsv-foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--twsv-primary) / <alpha-value>)',
					foreground: 'hsl(var(--twsv-primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--twsv-secondary) / <alpha-value>)',
					foreground: 'hsl(var(--twsv-secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--twsv-destructive) / <alpha-value>)',
					foreground: 'hsl(var(--twsv-destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--twsv-muted) / <alpha-value>)',
					foreground: 'hsl(var(--twsv-muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--twsv-accent) / <alpha-value>)',
					foreground: 'hsl(var(--twsv-accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--twsv-popover) / <alpha-value>)',
					foreground: 'hsl(var(--twsv-popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--twsv-card) / <alpha-value>)',
					foreground: 'hsl(var(--twsv-card-foreground) / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--twsv-radius)',
				md: 'calc(var(--twsv-radius) - 2px)',
				sm: 'calc(var(--twsv-radius) - 4px)'
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	}
};

export default config;
