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
  description: "Personal expertise website of Asma Khokhar, showcasing skills, services, and portfolio with a smooth, animated, and responsive design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Ak | Web Developer</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${comfortaa.variable} antialiased`}
      >
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}