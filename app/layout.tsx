import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Dùng font Inter cho hiện đại
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Velixora - Cho thuê lễ phục cao cấp",
  description: "Tỏa sáng từng khoảnh khắc cùng Velixora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}