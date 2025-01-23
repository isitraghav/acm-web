"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageLoading from "../components/PageLoading";
import Navbar from "./navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Next13ProgressBar } from "next13-progressbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>ACM BMU - Student Chapter</title>
        <meta
          name="description"
          content="Official webpage of ACM BMU Student Chapter. A hub for computer science enthusiasts promoting innovation through Hacktoberfest, Game Development, Graphic Designing, Coding challenges, Tech talks, and more. Join us to explore hands-on learning and tech growth."
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Next13ProgressBar
          height="4px"
          color="#7c66b9"
          showOnShallow
          options={{ showSpinner: false }}
        />
        <Navbar />
        <div className="mt-2">
          <PageLoading children={children} />
        </div>
      </body>
    </html>
  );
}
