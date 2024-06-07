import type { Metadata } from "next";
import { Noto_Sans, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";

// Fonts
const inter = Inter({ subsets: ["latin"], variable: '--font-inter', });
const notoSans = Noto_Sans({ subsets: ["latin"], variable: '--font-noto-sans'});
const montserrat = Montserrat({ subsets: ["latin"], variable: '--font-montserrat' });

// Metadata
export const metadata: Metadata = {
  title: "Pascual Flores",
  description: "Pascual Flores's web dev portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}  ${montserrat.variable} ${notoSans.variable} `}>{children}</body>
    </html>
  );
}
