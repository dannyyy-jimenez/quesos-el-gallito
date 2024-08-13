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
        url: "https://res.cloudinary.com/labodegaltd/image/upload/f_auto,q_auto/quesosgallito/quesos-el-gallito-cover.png",
        width: 800,
        height: 600,
        alt: "Quesos El Gallito",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quesos El Gallito - Auténticos Quesos Mexicanos de Calidad",
    description:
      "Descubre la auténtica tradición mexicana con Quesos El Gallito. Ofrecemos quesos frescos y deliciosos, ideales para cualquier platillo. Calidad y sabor en cada bocado.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "https://res.cloudinary.com/labodegaltd/image/upload/q_auto,w_64,h_64/quesosgallito/logotipomenu_333x227.ico",
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
