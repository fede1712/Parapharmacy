import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { getCategories } from "@/lib/get-categories";
import { Navbar } from "@/components/navbar";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parafarmacia La Cúpula",
  description:
    "Parafarmacia La Cúpula situada en el centro comercial Plaza Norte 2, en San Sebastián de lo Reyes, Madrid.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getCategories();
  return (
    <html lang="es">
      <body className={urbanist.className}>
        <Navbar categories={categories} />

        {children}
      </body>
    </html>
  );
}
