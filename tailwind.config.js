export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  daisyui: {
  themes: [
    {
      mytheme: {
        "primary": "#570DF8",
        "secondary": "#F000B8",
        "accent": "#37CDBE",
        "neutral": "#3D4451",
        "base-100": "#ffffff", // background light
        "base-200": "#1f2937", // background dark mode
        "base-content": "#ffffff", // text in dark mode
      },
    },
  ],
}

};
