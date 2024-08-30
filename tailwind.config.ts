import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'web': '1170px'
      },
      backgroundColor: {
        'zefit-heavy': '#1D5BA2',
        'zefit-normal': '#0190D6',
        'zefit-neutral': '#00AEEF'
      },
      borderColor: {
        'zefit-heavy': '#1D5BA2',
        'zefit-normal': '#0190D6',
        'zefit-neutral': '#00AEEF'
      },
      textColor: {
        'zefit-heavy': '#1D5BA2',
        'zefit-normal': '#0190D6',
        'zefit-neutral': '#00AEEF'
      },
      textShadow: {
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.2)',
        'md': '2px 2px 4px rgba(0, 0, 0, 0.2)',
        'lg': '3px 3px 6px rgba(0, 0, 0, 0.2)',
        'xl': '4px 4px 8px rgba(0, 0, 0, 0.2)',
        'none': 'none',
      },
      animation: {
        'custom-fade-in': 'custom-fade-in 0.5s forwards',
        'custom-slide-left': 'custom-slide-left 25s linear infinite forwards',
        'custom-slide-right': 'custom-slide-right 25s linear infinite forwards'
      },
      keyframes: {
        'custom-fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'custom-slide-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'custom-slide-right': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      }
    }
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-xl': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
};
export default config;
