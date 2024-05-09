import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const cubano = localFont({
  src: [
    {
      path: "../public/fonts/Cubano.ttf",
    },
  ],
  variable: "--cubano",
  display: "swap",
});
const mona = localFont({
  src: [
    {
      path: "../public/fonts/Mona-Sans-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/fonts/Mona-Sans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--mona",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dusan Vukovic Front End Dev",
  description: "Dusan's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mona.variable} ${cubano.variable}`}>{children}</body>
    </html>
  );
}
