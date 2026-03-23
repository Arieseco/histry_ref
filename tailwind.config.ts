import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './docs/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // prose の code 要素に自動付与されるバッククォートを無効化
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            // インラインコードをグレー背景＋角丸で見やすくスタイリング
            code: {
              backgroundColor: '#f1f5f9',
              borderRadius: '0.25rem',
              padding: '0.125rem 0.375rem',
              fontWeight: '400',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
