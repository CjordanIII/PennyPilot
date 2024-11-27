import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        'small': '.97',
       " xl-small":".97"
      },
      backgroundImage:{
        'custom-bg':"url(/assets/background/loginBackground.jpg)"
      },
      fontFamily:{
        bricolage: ['Bricolage Grotesque', 'sans-serif']
      },
      colors: {
        offwhite:"#F5F5F5",
        darkblue: "#2A7EC9",
        midblue: "#98B0FF",
        logoblue:"#2A7EC9",
        lightgrey:"#717680",
        whiteblue:"#F5FAFF",
        customblack:"#1D1B20",
        navhoverbackground:"#E8EEFA"
      },
    },
  },
  plugins: [],
};
export default config;
