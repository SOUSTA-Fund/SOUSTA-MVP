/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//     },
//   },
//   plugins: [],
// }

// module.exports = {
//   important: true,
//   // Active dark mode on class basis
//   darkMode: "class",
//   i18n: {
//     locales: ["en-US"],
//     defaultLocale: "en-US",
//   },
//   purge: {
//     content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
//     // These options are passed through directly to PurgeCSS
//   },
//   theme: {
//     extend: {
//       backgroundImage: (theme) => ({
//         check: "url('/icons/check.svg')",
//         landscape: "url('/images/landscape/2.jpg')",
//       }),
//     },
//   },
//   variants: {
//     extend: {
//       backgroundColor: ["checked"],
//       borderColor: ["checked"],
//       inset: ["checked"],
//       zIndex: ["hover", "active"],
//     },
//   },
//   plugins: [],
//   future: {
//     purgeLayersByDefault: true,
//   },
// };
