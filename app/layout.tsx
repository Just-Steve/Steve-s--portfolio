import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarMain from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from 'next/script';


const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Steve Dev - Portfolio",
  description: "Best portfolio website",
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PRGX860XTT" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PRGX860XTT');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased bg-black-100`}>
        <NavbarMain/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
