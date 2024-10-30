/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
       PoppinsBlack: ['Poppins-Black'],
        PoppinsBold: ['Poppins-Bold'],
        PoppinsExtraBold: ['Poppins-ExtraBold'],
        PoppinsExtraLight: ['Poppins-ExtraLight'],
        PoppinsLight: ['Poppins-Light'],
        PoppinsMedium: ['Poppins-Medium'],
        PoppinsRegular: ['Poppins-Regular'],
        PoppinsSemiBold: ['Poppins-SemiBold'],
        PoppinsThin: ['Poppins-Thin'],
      },
    },
  },
  plugins: [],
};
