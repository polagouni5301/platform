import tailwindAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        coral: {
          DEFAULT: "hsl(var(--coral))",
          hover: "hsl(var(--coral-hover))",
          dark: "hsl(var(--coral-dark))",
        },

        cream: "hsl(var(--cream))",
        white: "hsl(var(--white))",
        charcoal: {
          DEFAULT: "hsl(var(--charcoal))",
          muted: "hsl(var(--charcoal-muted))",
        },
        amber: {
          DEFAULT: "hsl(var(--amber))",
          soft: "hsl(var(--amber-soft))",
        },
        success: "hsl(var(--success))",
        login: {
          bg: "hsl(var(--login-bg))",
          panel: "hsl(var(--login-panel))",
          gradient: "hsl(var(--login-gradient))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        display: [
          '"Funnel Sans"',
          '"Space Grotesk"',
          "system-ui",
          "sans-serif",
        ],
        sans: ['"Funnel Sans"', "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "pulse-dot": { "0%, 100%": { opacity: "1", transform: "scale(1)" }, "50%": { opacity: "0.6", transform: "scale(1.3)" } },
        "float-slow": { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        "float-slower": { "0%, 100%": { transform: "translateY(0) rotate(0deg)" }, "50%": { transform: "translateY(-14px) rotate(2deg)" } },
        "fade-in-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        "scale-in": { "0%": { opacity: "0", transform: "scale(0.94)" }, "100%": { opacity: "1", transform: "scale(1)" } },
        "slide-in-right": { "0%": { opacity: "0", transform: "translateX(30px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
        "marquee": { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        "shimmer": { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "blob": { "0%, 100%": { transform: "translate(0,0) scale(1)" }, "33%": { transform: "translate(30px,-20px) scale(1.1)" }, "66%": { transform: "translate(-20px,20px) scale(0.95)" } },
        "spin-slow": { "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } },
        "ticker-up": { "0%, 20%": { transform: "translateY(0)" }, "25%, 45%": { transform: "translateY(-100%)" }, "50%, 70%": { transform: "translateY(-200%)" }, "75%, 95%": { transform: "translateY(-300%)" }, "100%": { transform: "translateY(-400%)" } },
        "draw-line": { "0%": { strokeDashoffset: "400" }, "100%": { strokeDashoffset: "0" } },
        "gradient-shift": { "0%, 100%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-slower": "float-slower 9s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 0.6s ease-out both",
        "scale-in": "scale-in 0.5s cubic-bezier(0.16,1,0.3,1) both",
        "slide-in-right": "slide-in-right 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "marquee": "marquee 30s linear infinite",
        "shimmer": "shimmer 3s linear infinite",
        "blob": "blob 12s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        "ticker-up": "ticker-up 8s cubic-bezier(0.16,1,0.3,1) infinite",
        "draw-line": "draw-line 2s ease-out forwards",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
    },
  },
  plugins: [tailwindAnimate],
};
