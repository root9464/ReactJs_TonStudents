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
        xxs: '13px',
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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        tertiary: {
          DEFAULT: 'var(--tertiary)',
          foreground: 'var(--tertiary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted-primary)',
          secondary: 'var(--muted-secondary)',
          tertiary: 'var(--muted-tertiary)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
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
