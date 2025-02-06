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
        xxs: 'var(--radius)', //12px
        xs: 'calc(var(--radius) + 2px)', //14px
        sm: 'calc(var(--radius) + 4px)', //16px
        md: 'calc(var(--radius) + 6px)', //18px
        lg: 'calc(var(--radius) + 8px)', //20px
        xl: 'calc(var(--radius) + 10px)', //22px
        '2xl': 'calc(var(--radius) + 12px)', //24px
        '3xl': 'calc(var(--radius) + 14px)', //26px
        '4xl': 'calc(var(--radius) + 16px)', //28px
        '5xl': 'calc(var(--radius) + 18px)', //30px
        '6xl': 'calc(var(--radius) + 20px)', //32px
        '7xl': 'calc(var(--radius) + 22px)', //34px
        '8xl': 'calc(var(--radius) + 24px)', //36px
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
