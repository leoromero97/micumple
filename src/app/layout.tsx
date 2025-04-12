import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  weight: ['300', '500', '600', '700', '900'],
  subsets: ['latin']
});


export const metadata: Metadata = {
  title: "Cumple de Leo Romero | 27",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
      
        {children}
      </body>
    </html>
  );
}
