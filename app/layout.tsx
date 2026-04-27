import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Chỉ giữ lại Montserrat
import "./globals.css";

// Cấu hình Montserrat cho toàn trang
const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"], // Ngân nhớ thêm vietnamese để không bị lỗi dấu nhé
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat"
});

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
    <html lang="vi" className={`h-full ${montserrat.variable}`}>
      <body 
        className={`${montserrat.className} min-h-full flex flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}