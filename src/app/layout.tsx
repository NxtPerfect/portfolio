import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aurora Portfolio",
  description: "Portfolio of frontend web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-p-[45%]">
      <body className={inter.className + ""}>
        <Navbar />
        <div className="absolute w-full h-full bg-[url('/nnnoise.svg')] bg-neutral-900 opacity-15 contrast-150 brightness-[3]"></div>
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-neutral-900">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
