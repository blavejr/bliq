import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BNavbar from "@/components/BNavbar/BNavbar";
import styles from "./layout.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bliq App",
  description: "Catch a ride with Bliq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BNavbar />
        <div className={styles.mainContainer}>{children}</div>
      </body>
    </html>
  );
}
