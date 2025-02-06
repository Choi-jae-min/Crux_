
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontWeight : {
        60 : '60px'
      },
      fontSize : {
        12 : '12px',
        14 : '14px',
        16 : '16px',
        18 : '18px',
        24 : '24px',
        28 : '28px',
        40 : '40px',
        50 : '50px'
      },
      colors: {
        txt : {
          'point' : '#E75654',
          '01' : '#333333',
          '02' : '#4D4D4D',
          '03' : '#999999',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
}
