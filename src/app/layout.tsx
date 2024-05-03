import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Organize My Work",
  description: "Helping you organize your workload since 2024",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="google-adsense-account"
        content="ca-pub-7368532165347168"
      ></meta>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7368532165347168"
        crossOrigin="anonymous"
      ></script>
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
