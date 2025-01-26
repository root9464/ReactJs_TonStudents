import { heroui } from '@heroui/theme';

import { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        xxs: '12px',
        xs: '16px',
        sm: '18px',
        md: '20px',
        lg: '22px',
        xl: '24px',
        '2xl': '26px',
        '3xl': '28px',
        '4xl': '30px',
        '5xl': '32px',
        '6xl': '34px',
        '7xl': '36px',
        '8xl': '38px',
        '9xl': '40px',
        xxl: '42px',
        xxxl: '44px',
      },
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        card: {
          DEFAULT: 'rgb(var(--card))',
          foreground: 'rgb(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'rgb(var(--popover))',
          foreground: 'rgb(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'rgb(var(--primary))',
          foreground: 'rgb(var(--primary-foreground))',
          '20': 'rgba(var(--primary), 0.2)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary))',
          foreground: 'rgb(var(--secondary-foreground))',
        },
        tertiary: {
          DEFAULT: 'rgb(var(--tertiary))',
          foreground: 'rgb(var(--tertiary-foreground))',
        },
        muted: {
          DEFAULT: 'rgb(var(--muted-primary))',
          secondary: 'rgb(var(--muted-secondary))',
          tertiary: 'rgb(var(--muted-tertiary))',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent))',
          foreground: 'rgb(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'rgb(var(--destructive))',
          foreground: 'rgb(var(--destructive-foreground))',
        },
        border: 'rgb(var(--border))',
        input: 'rgb(var(--input))',
        ring: 'rgb(var(--ring))',
      },
      fontSize: {
        xxs: ['10px', '14px'],
      },
      screens: {
        ssm: '600px',
      },
      height: {
        tma: 'var(--tg-viewport-height)',
      },
    },
  },
  plugins: [heroui()],
} satisfies Config;
