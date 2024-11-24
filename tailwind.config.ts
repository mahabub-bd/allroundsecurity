import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerXs: "768px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1200px",
          "2xl": "1536px",
        },
      },

      colors: {
        bgColor: "var(--choosebg-color)",
        footerbgColor: "var(--footer-bg-color)",
        primaryColor: "var(--primary-color)",
        whiteColor: "var(--white-color)",
        blackColor: "var(--black-color)",
        teamBgColor: "var(--Team-bgColor)",
        serviceBgColor: "var(--service-bgColor)",
        buttoncColor: "var(--button-color)",
        buttonColor1: "var(--button-color1)",
        buttonColor2: "var(--button-color2)",
        primaryColorHover: "var(--primary-color-hover)",
        secondaryColor: "var(--secondary-color)",
        secondaryColorHover: "var(--secondary-color-hover)",
        textColor: "var(--text-Color)",
        bgMenuColor: "var(--bg-menu-color)",
        bgTopColor: "var(--bg-top-color)",
        bgCardColor: "var(--bg-card-color)",
        borderColor: "var(--border-color)",
        tabBorderColor: "var(--tab-border-color)",
        sectionBgColor: "var(--section-bg-color)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        titleFont: ["Montserrat", "sans-serif"],
        bodyFont: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: "-4px -4px 4px 4px #FFFFFF40",
        cardShadow: "4px 4px 4px 4px #000000",
        buttonShadow: "-4px -4px 4px 0px #FFFFFF40",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
