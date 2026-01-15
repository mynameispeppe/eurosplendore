import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sansation = localFont({
  src: [
    {
      path: './fonts/Sansation-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Sansation-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Sansation-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: "--font-sansation",
});

export const metadata: Metadata = {
  title: "Euro Splendore",
  description: "Impresa di pulizia e manutenzione",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sansation.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
