import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageLoading from "../components/PageLoading";
import ClickSpark from "@/components/ClickSpark";
import Navbar from "./navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ACM BMU - Student Chapter",
  description:
    "Official webpage of ACM BMU Student Chapter. A hub for computer science enthusiasts promoting innovation through Hacktoberfest, Game Development, Graphic Designing, Coding challenges, Tech talks, and more. Join us to explore hands-on learning and tech growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageLoading />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
