/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
    fontFamily:{
      "poppins" : "Poppins, system-ui"
    },
    borderRadius : {
      "border" : " 50% 50% 50% 50% / 50% 50% 50% 50%",
      "full" : "9999px",
      "medium" : "10px 10px 10px 10px"
    },
    boxShadow:{
      "base" : '0px 0px 4px #dfdfdf',
      "sm" : '3px 3px 2px #636e72',
      "lg" : '0px 0px 10px #636e72',
    },
    backgroundImage:{
      "gridiant-btn" : " linear-gradient(to right, #3498db, #4498d2, #5198ca, #5c98c1, #6798b9)",
    },
    animation:{
      "round" : 'spin 6s linear infinite',
      "bounce1" : 'bounce 5s infinite ',
      "bounce2" : 'bounce 5s infinite 1s',
      "bounce3" : 'bounce 5s infinite 2s',
      "bounce4" : 'bounce 5s infinite 3s',
      "bounce5" : 'bounce 5s infinite 4s ',
      "bounce6" : 'bounce 5s infinite 5s',
    }
  },
  plugins: [],
}

