module.exports = {
  content: [],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        // => @media (min-width: 480px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        'brand-blue': {
          500: '#1830a3',
          700: '#0D1958',
        },
        'brand-green' : {
          500: '#34c38f',
          700: '#1C5F46',
        },
        'btn-bg': '#d1bfec',
        'btn-bc': '#d1bfec',
        'btn-color': '#41333f',
      }
    },
    fontFamily: {
      sans: ["Poppins","sans-serif"],
    }
  },
  plugins: [],
}
