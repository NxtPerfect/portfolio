import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  preload: true,
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Hazel's Portfolio",
  description: "Simple, minimalistic, to the point.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
