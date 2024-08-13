import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

// app/page.tsx or app/page.js

export const metadata: Metadata = {
  title: "Quesos El Gallito - Auténticos Quesos Mexicanos de Calidad",
  description:
    "Descubre la auténtica tradición mexicana con Quesos El Gallito. Ofrecemos quesos frescos y deliciosos, ideales para cualquier platillo. Calidad y sabor en cada bocado.",
  keywords:
    "quesos el gallito, quesos mexicanos, queso fresco, queso panela, queso oaxaca, quesillo, queso auténtico, queso de calidad, tradición mexicana",
  openGraph: {
    type: "website",
    url: "https://www.quesoselgallito.com/",
    title: "Quesos El Gallito - Auténticos Quesos Mexicanos de Calidad",
    description:
      "Descubre la auténtica tradición mexicana con Quesos El Gallito. Ofrecemos quesos frescos y deliciosos, ideales para cualquier platillo. Calidad y sabor en cada bocado.",
    images: [
      {
        url: "https://www.quesoselgallito.com/images/quesos-el-gallito-cover.jpg",
        width: 800,
        height: 600,
        alt: "Quesos El Gallito",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://www.quesoselgallito.com/",
    title: "Quesos El Gallito - Auténticos Quesos Mexicanos de Calidad",
    description:
      "Descubre la auténtica tradición mexicana con Quesos El Gallito. Ofrecemos quesos frescos y deliciosos, ideales para cualquier platillo. Calidad y sabor en cada bocado.",
    image: "https://www.quesoselgallito.com/images/quesos-el-gallito-cover.jpg",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
