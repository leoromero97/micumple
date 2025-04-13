import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  weight: ['300', '500', '600', '700', '900'],
  subsets: ['latin']
});


export const metadata: Metadata = {
  title: "Cumple de Leo Romero | 28",
  description: "Landing page sobre el cumpleaños de Leo Romero desarrollado por el mismo con Next JS, Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
