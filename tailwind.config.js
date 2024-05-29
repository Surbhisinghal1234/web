/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", './about.html','./Products.html','./ContactUs.html','./BuildingWires.html','./BunchedWire.html','./AnnealedWire.html','./HardDrawnWire.html','./EarthingWire.html',"./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary': '#1C1678', 
        'secondary': '#301A91D3', 
        'accent': '#FFD700',
      },
      
      fontFamily:{

      }
    },
  },
  plugins: [
   
  ],
}

