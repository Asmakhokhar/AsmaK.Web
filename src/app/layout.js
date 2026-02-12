import { Geist, Geist_Mono, Comfortaa } from "next/font/google";
import "./globals.css";
// import ReduxProvider from "./ReduxProvider";
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
  title: "Asma_Dev | Full Stack Developer",
  description:
    "Personal expertise website of Asma Khokhar, showcasing skills, services, and portfolio with a smooth, animated, and responsive design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${comfortaa.variable} antialiased relative min-h-screen text-white font-body`}
        suppressHydrationWarning
      >
        {/* Fixed full background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#581789] via-[#3b0f62] to-[#1a021f]" />
        </div>

        {/* <ReduxProvider>/ */}
        {children}
        {/* </ReduxProvider> */}
      </body>
    </html>
  );
}
