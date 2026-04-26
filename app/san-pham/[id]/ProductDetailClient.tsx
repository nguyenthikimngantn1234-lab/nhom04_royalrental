"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { Star, Flame } from "lucide-react";

import { Header } from "@/components/Header";
import { FooterSimple } from "@/components/FooterSimple";

// Định nghĩa kiểu dữ liệu để máy không báo lỗi gạch đỏ
interface Product {
  id: number;
  title: string;
  price: string;
  oldPrice?: string;
  image: string;
  category: string;
  tag?: string;
  discount?: string;
}

interface ProductDetailClientProps {
  id: string;
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ id, product, relatedProducts }: ProductDetailClientProps) {
  const router = useRouter();

  // Khởi tạo các trạng thái lựa chọn
  const [selectedColor, setSelectedColor] = useState("Trắng Ivory");
  const [selectedSize, setSelectedSize] = useState("M");
  const [startDate, setStartDate] = useState("2026-05-01");
  const [endDate, setEndDate] = useState("2026-05-03");

  const handleAddToCart = (redirect = false) => {
    if (!product) return;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;

    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      color: selectedColor,
      size: selectedSize,
      startDate: startDate,
      endDate: endDate,
      days: diffDays,
      qty: 1,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingItemIndex = existingCart.findIndex(
      (item: any) =>
        item.id === cartItem.id &&
        item.color === cartItem.color &&
        item.size === cartItem.size &&
        item.startDate === cartItem.startDate &&
        item.endDate === cartItem.endDate
    );

    if (existingItemIndex > -1) {
      existingCart[existingItemIndex].qty += 1;
    } else {
      existingCart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    window.dispatchEvent(new Event("storage"));

    if (redirect) {
      router.push("/gio-hang");
    } else {
      Swal.fire({
        title: "Đã thêm vào giỏ!",
        text: `${product.title} đã sẵn sàng trong túi đồ của bạn.`,
        icon: "success",
        confirmButtonColor: "#7a33f2",
        confirmButtonText: "Tiếp tục xem",
        showCancelButton: true,
        cancelButtonText: "Đi đến giỏ hàng",
        cancelButtonColor: "#1e1535",
        customClass: {
          popup: "rounded-[8px]",
          confirmButton: "rounded-[8px]",
          cancelButton: "rounded-[8px]",
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.cancel) {
          router.push("/gio-hang");
        }
      });
    }
  };

  const colors = [
    { name: "Trắng Ivory", hex: "#FFFFF0" },
    { name: "Trắng Tinh Khôi", hex: "#FFFFFF" },
    { name: "Hồng Phấn", hex: "#FFD1DC" },
    { name: "Đen", hex: "#000000" },
    { name: "Đỏ", hex: "#FF0000" },
    { name: "Tím Nhạt", hex: "#E6E6FA" },
  ];
  
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <>
      <Header />
      <main className="max-w-[1440px] mx-auto px-[80px] pt-[150px] pb-24 font-['Be_Vietnam_Pro'] bg-white text-[#1e1535]">
        
        {/* BREADCRUMB */}
        <nav className="text-[24px] text-gray-400 mb-[12px] flex items-center gap-2">
          <Link href="/" className="hover:text-[#7a33f2] no-underline text-gray-400">
            TRANG CHỦ
          </Link>{" "}
          / <span>{product.category}</span> /{" "}
          <span className="text-[#7a33f2] font-semibold uppercase">{product.title}</span>
        </nav>

        {/* CHI TIẾT SẢN PHẨM */}
        <div className="flex" style={{ gap: "58px" }}>
          <div className="rounded-[32px] overflow-hidden bg-white shadow-sm flex-shrink-0" style={{ width: "450px", height: "600px" }}>
            <img src={product.image} className="w-full h-full object-cover" alt={product.title} />
          </div>

          <div className="flex-1 flex flex-col gap-6 pt-1">
            <h1 className="text-[40px] font-extrabold uppercase leading-tight tracking-tight">
              {product.title}
            </h1>

            <div className="flex items-center gap-5">
              <div className="flex text-[#FFC107] gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="text-gray-400 text-[14px]">4.8/5</span>
            </div>

            <div className="flex items-center gap-6 py-2">
              <span className="text-[34px] font-bold text-[#7a33f2]">
                {product.price}{" "}
                <span className="text-[16px] font-normal text-gray-400">/ngày</span>
              </span>
            </div>

            <p className="text-[#6b7280] text-[16px] leading-relaxed">
              Sản phẩm cao cấp tại Velixora mang lại vẻ đẹp hoàn hảo cho bạn trong ngày trọng đại.
            </p>

            {/* Màu sắc */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[16px] font-bold">
                Màu sắc: <span className="font-medium text-[#7a33f2] ml-2">{selectedColor}</span>
              </h3>
              <div className="flex flex-wrap gap-[8px]">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    style={{ backgroundColor: color.hex, width: "60px", height: "32px" }}
                    className={`rounded-[4px] border transition-all ${
                      selectedColor === color.name
                        ? "border-[#7a33f2] ring-2 ring-[#7a33f2] ring-offset-2"
                        : "border-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[16px] font-bold">Size:</h3>
              <div className="flex flex-wrap gap-[8px]">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[50px] h-10 flex items-center justify-center rounded-[4px] border font-bold text-[14px] uppercase transition-all ${
                      selectedSize === size
                        ? "bg-[#7a33f2] border-[#7a33f2] text-white shadow-sm"
                        : "bg-white border-gray-200 text-gray-500 hover:border-[#7a33f2]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Chọn Ngày Thuê & Trả */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "24px" }}>
              <h3 className="text-[16px] font-bold uppercase text-[#1e1535] m-0">CHỌN LỊCH THUÊ</h3>
              <div style={{ display: "flex", flexDirection: "row", gap: "16px", width: "100%" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <label className="text-[18px] text-[#1e1535] font-semibold tracking-wide m-0">Ngày thuê</label>
                  <input
                    type="date"
                    className="w-full h-[50px] bg-white border border-[#1e1535] rounded-[8px] px-4 text-[15px] font-bold outline-none cursor-pointer m-0"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <label className="text-[18px] text-[#1e1535] font-semibold tracking-wide m-0">Ngày trả</label>
                  <input
                    type="date"
                    className="w-full h-[50px] bg-white border border-[#1e1535] rounded-[8px] px-4 text-[15px] font-bold outline-none cursor-pointer m-0"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "row", gap: "16px", width: "100%" }}>
                <button
                  onClick={() => handleAddToCart(false)}
                  className="flex-1 bg-white border border-[#7a33f2] text-[#7a33f2] h-[50px] rounded-[8px] font-bold hover:bg-[#f9f8ff] transition-all uppercase text-[15px] cursor-pointer"
                >
                  Thêm Vào Giỏ Hàng
                </button>
                <button
                  onClick={() => handleAddToCart(true)}
                  className="flex-1 bg-[#7a33f2] border border-[#7a33f2] text-white h-[50px] rounded-[8px] font-bold hover:bg-[#6625cc] transition-all uppercase text-[15px] cursor-pointer shadow-sm"
                >
                  Thuê Ngay
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SẢN PHẨM TƯƠNG TỰ */}
        <div className="mt-24">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-[32px] font-black uppercase tracking-tight">SẢN PHẨM TƯƠNG TỰ</h2>
              <p className="text-gray-400 mt-2">Gợi ý những mẫu lễ phục cùng phong cách dành cho bạn</p>
            </div>
            <Link href="/san-pham" className="no-underline">
              <button
                style={{
                  backgroundColor: "#7a33f2",
                  color: "white",
                  padding: "14px 30px",
                  borderRadius: "12px",
                  border: "none",
                  fontWeight: "bold",
                  fontSize: "15px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Xem tất cả →
              </button>
            </Link>
          </div>

          <div className="flex flex-row gap-x-[16px] w-full mt-[16px]">
            {relatedProducts.map((p) => (
              <Link key={p.id} href={`/san-pham/${p.id}`} className="w-1/4 group no-underline">
                <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden bg-gray-100 mb-5 shadow-sm transition-all group-hover:shadow-xl group-hover:-translate-y-2">
                  <img
                    src={p.image}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={p.title}
                  />
                  {p.tag && (
                    <div className="absolute top-4 left-4 bg-[#7a33f2] text-white text-[12px] font-black px-3 py-1 rounded-full uppercase">
                      {p.tag}
                    </div>
                  )}
                  {p.discount && (
                    <div className="absolute top-4 right-4 bg-[#fff8dc] text-[#D97706] text-[12px] font-black px-3 py-1 rounded-full uppercase border border-[#F5A623] shadow-sm flex items-center gap-1">
                      <Flame size={14} fill="currentColor" strokeWidth={0} /> {p.discount}
                    </div>
                  )}
                </div>
                <h4 className="text-[17px] font-bold text-[#1e1535] group-hover:text-[#7a33f2] transition-colors">{p.title}</h4>
                <p className="text-[#7a33f2] font-black text-[20px] mt-1">{p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <FooterSimple />
    </>
  );
}