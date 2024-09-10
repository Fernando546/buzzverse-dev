"use client"; 
import React from "react";
import localFont from "next/font/local";
import "./globals.css";
import { SidebarDemo } from "./components/sidebar"; // Import the SidebarDemo component

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-screen`}>
        {/* Pass children as the main content of the SidebarDemo */}
        <SidebarDemo>{children}</SidebarDemo>
      </body>
    </html>
  );
}
