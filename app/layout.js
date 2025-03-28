'use client'
import {  Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Toaster } from "@/components/ui/sonner"
import Cartprovider from "@/components/Cartprovider";

const rajdhani = Rajdhani({
  weight:['300', '400','500','600','700'],
  subsets: ["latin"],
  variable:'--font-rajdhani',
});





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={rajdhani.variable }
      >
        <Cartprovider>
        <Header/>
        {children}
        <Toaster />

        <Footer/>
        </Cartprovider>
        
      </body>
    </html>
  );
}
