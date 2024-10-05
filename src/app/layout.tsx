import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { AppNavbar } from "@/layouts";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agencify",
  description: "Agencify Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} !overflow-x-hidden`}>
        <AppNavbar />
        {children}
      </body>
    </html>
  );
}
