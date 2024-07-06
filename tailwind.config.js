// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGrey: '#2e2e2e', // Custom dark grey color
        customBlue: '#3490dc', // Custom blue color
        customBlueDark: '#2779bd', // Darker shade of custom blue (for hover effects)
      },
      minWidth: {
        'sidebar': '280px', // Custom sidebar width
      },
      minHeight: {
        'sidebar': 'calc(100vh - 64px)', // Adjust height as per your design
      },
      maxWidth: {
        'sidebar': '280px', // Custom sidebar width
      },
      boxShadow: {
        'sidebar': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Custom sidebar box shadow
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
}
