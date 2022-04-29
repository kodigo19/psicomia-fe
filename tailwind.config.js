module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
        'brand-purple': {
          400: '#756e89',
          500: '#503a89',
          700: '#503a89',
        },
        'brand-green' : {
          500: '#503a89',
          700: '#503a89',
        },
        'brand-btn-bg': '#d1bfec',
        'brand-btn-bc': '#d1bfec',
        'brand-btn-color': '#41333f',
      }
    },
    fontFamily: {
      sans: ["Poppins","sans-serif"],
    }
  },
  plugins: [],
}
