import { Geist, Geist_Mono, Comfortaa } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./ReduxProvider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Ak | Web Developer",
  description:
    "Personal expertise website of Asma Khokhar, showcasing skills, services, and portfolio with a smooth, animated, and responsive design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Ak | Web Developer</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${comfortaa.variable} antialiased relative min-h-screen text-white`}
      >
        {/* Fixed gradient background (prevents flicker) */}
        <div aria-hidden className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#071020] via-[#0b1220] to-[#03040a]" />
          <div className="pointer-events-none absolute inset-x-0 -top-32 h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent opacity-30" />
        </div>

        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
