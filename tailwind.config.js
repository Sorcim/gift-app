/** @type {import('tailwindcss').Config} */
import formsPlugin from '@tailwindcss/forms'
import aspectRatioPlugin from '@tailwindcss/aspect-ratio'

export default {
  content: ['./inertia/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [formsPlugin, aspectRatioPlugin],
}
