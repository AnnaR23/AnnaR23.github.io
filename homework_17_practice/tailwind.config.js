/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/pages/*.html'],
  theme: {
    extend: {
      colors: {
        main_regular: "#323264",
        main_alt: "#46466E",
        main_soft: "#686887",
        accent: "#F0145A",
        grey: "#B3B3BA",
        activ_regular: "#24A3FF",
},
      backgroundImage: {
        'gradient_supersoft': "linear-gradient(228.57deg, #323264 11.93%, #323264 57.17%, #643E72 87.46%)",
      },
    },
  },
  plugins: [],
}

