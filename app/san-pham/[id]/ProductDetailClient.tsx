"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { Star } from "lucide-react";

import { Header } from "@/components/Header";
import { FooterSimple } from "@/components/FooterSimple";
import { getRandomReviews, Review } from "../../../data/reviews";

interface Product {
  id: number;
  title: string;
  price: string;
  oldPrice?: string;
  image: string;
  category: string;
  tag?: string;
  discount?: string;
  description: string;
}

interface Props {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: Props) {
  const router = useRouter();
  
  const [activeTab, setActiveTab] = useState("mota");
  const [randomReviews, setRandomReviews] = useState<Review[]>([]);
  const [selectedColor, setSelectedColor] = useState("Trắng Ivory");
  const [selectedSize, setSelectedSize] = useState("M");
  const [startDate, setStartDate] = useState("2026-05-01");
  const [endDate, setEndDate] = useState("2026-05-03");

  useEffect(() => {
    const reviews = getRandomReviews(); 
    setRandomReviews(reviews);
  }, [product.id]); 

  const handleAddToCart = (redirect = false) => {
    if (!product) return;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffDays = Math.ceil(Math.abs(end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) || 1;

    const cartItem = {
      id: product.id, title: product.title, price: product.price, image: product.image,
      color: selectedColor, size: selectedSize, startDate, endDate, days: diffDays, qty: 1,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    existingCart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    window.dispatchEvent(new Event("storage"));

    if (redirect) {
      router.push("/gio-hang");
    } else {
      Swal.fire({
        title: `<span style="font-family: 'Times New Roman', serif; font-size: 28px;">Đã thêm vào giỏ!</span>`,
        html: `<span style="font-family: 'Times New Roman', serif; font-size: 18px;">${product.title} đã sẵn sàng trong túi đồ của bạn.</span>`,
        icon: "success", confirmButtonColor: "#7a33f2",
        confirmButtonText: `<span style="font-family: 'Times New Roman', serif;">Tiếp tục xem</span>`,
        showCancelButton: true, cancelButtonText: `<span style="font-family: 'Times New Roman', serif;">Đi đến giỏ hàng</span>`,
        cancelButtonColor: "#1e1535",
      }).then((result) => { if (result.dismiss === Swal.DismissReason.cancel) router.push("/gio-hang"); });
    }
  };

  const colors = [
    { name: "Trắng Ivory", hex: "#FFFFF0" }, { name: "Trắng Tinh Khôi", hex: "#FFFFFF" },
    { name: "Hồng Phấn", hex: "#FFD1DC" }, { name: "Đen", hex: "#000000" },
    { name: "Đỏ", hex: "#FF0000" }, { name: "Tím Nhạt", hex: "#E6E6FA" },
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <>
      <Header />
      
      {/* 1. ĐIỀU KHIỂN RESPONSIVE - KHÔNG ĐỘNG VÀO LOGIC CỦA NGÂN */}
      <style jsx global>{`
        .pd-container { padding-left: 80px; padding-right: 80px; padding-top: 150px; }
        .pd-flex-layout { display: flex; gap: 58px; }
        .pd-image-col { width: 450px; height: 600px; flex-shrink: 0; }
        .pd-tabs-wrapper { display: flex; justify-content: space-between; gap: 32px; }
        .pd-related-grid { display: flex; flex-direction: row; gap: 20px; width: 100%; }

        /* Mobile */
        @media (max-width: 767px) {
          .pd-container { padding-left: 20px !important; padding-right: 20px !important; padding-top: 100px !important; }
          .pd-flex-layout { flex-direction: column !important; gap: 30px !important; }
          .pd-image-col { width: 100% !important; height: auto !important; min-height: 400px !important; }
          .pd-title-h1 { font-size: 28px !important; }
          .pd-date-row { flex-direction: column !important; gap: 12px !important; }
          .pd-action-row { flex-direction: column !important; gap: 12px !important; }
          .pd-tabs-wrapper { flex-direction: column !important; gap: 10px !important; }
          .pd-related-grid { flex-direction: column !important; }
          .pd-related-item { width: 100% !important; }
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          .pd-container { padding-left: 40px !important; padding-right: 40px !important; }
          .pd-flex-layout { gap: 30px !important; }
          .pd-image-col { width: 350px !important; height: 500px !important; }
          .pd-related-grid { flex-wrap: wrap !important; }
          .pd-related-item { width: calc(50% - 10px) !important; }
        }
      `}</style>

      <main className="pd-container max-w-[1440px] mx-auto pb-24 font-['Be_Vietnam_Pro'] bg-white text-[#1e1535]">
        
        {/* Breadcrumb */}
        <nav className="text-[24px] text-gray-400 mb-[12px] flex items-center gap-2">
          <Link href="/" className="hover:text-[#7a33f2] no-underline text-gray-400">TRANG CHỦ</Link> / <span>{product.category}</span> / <span className="text-[#7a33f2] font-semibold uppercase">{product.title}</span>
        </nav>

        {/* Thông tin sản phẩm chính */}
        <div className="pd-flex-layout">
          {/* PHẦN HIỂN THỊ ẢNH - ĐÃ SỬA LỖI ĐƯỜNG DẪN */}
          <div className="pd-image-col rounded-[32px] overflow-hidden bg-white shadow-sm border border-gray-100">
            <img 
              src={product.image} 
              className="w-full h-full object-cover" 
              alt={product.title} 
            />
          </div>

          <div className="flex-1 flex flex-col gap-6 pt-1">
            <h1 className="pd-title-h1 text-[42px] font-extrabold uppercase leading-tight tracking-tight">{product.title}</h1>
            <div className="flex items-center gap-5">
              <div className="flex text-[#FFC107] gap-1">{[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" strokeWidth={0} />)}</div>
              <span className="text-gray-400 text-[14px]">4.8/5</span>
            </div>
            <div className="text-[36px] font-bold text-[#7a33f2]">{product.price} <span className="text-[18px] font-normal text-gray-400">/ngày</span></div>

            {/* Màu sắc */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[18px] font-bold uppercase tracking-wide">Màu sắc: <span className="font-medium text-[#7a33f2] ml-2 normal-case">{selectedColor}</span></h3>
              <div className="flex flex-wrap gap-[10px]">
                {colors.map((color) => (
                  <button key={color.name} onClick={() => setSelectedColor(color.name)} style={{ backgroundColor: color.hex, width: "65px", height: "35px" }}
                    className={`rounded-[6px] border transition-all ${selectedColor === color.name ? "border-[#7a33f2] ring-2 ring-[#7a33f2] ring-offset-2" : "border-gray-200"}`} />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[18px] font-bold uppercase tracking-wide">Kích thước (Size):</h3>
              <div className="flex flex-wrap gap-[10px]">
                {sizes.map((size) => (
                  <button key={size} onClick={() => setSelectedSize(size)} className={`min-w-[60px] h-12 flex items-center justify-center rounded-[6px] border font-bold text-[16px] uppercase transition-all ${selectedSize === size ? "bg-[#7a33f2] border-[#7a33f2] text-white shadow-md" : "bg-white border-gray-100 text-gray-500 hover:border-[#7a33f2]"}`}>{size}</button>
                ))}
              </div>
            </div>

            {/* Lịch thuê */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "12px" }}>
              <h3 className="text-[18px] font-bold uppercase tracking-wide text-[#1e1535] m-0">CHỌN LỊCH THUÊ</h3>
              <div className="pd-date-row" style={{ display: "flex", flexDirection: "row", gap: "16px", width: "100%" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <label className="text-[18px] text-[#1e1535] font-semibold m-0">Ngày thuê</label>
                  <input type="date" className="w-full h-[55px] bg-white border border-[#1e1535] rounded-[8px] px-4 text-[16px] font-bold outline-none focus:border-[#7a33f2] cursor-pointer" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <label className="text-[18px] text-[#1e1535] font-semibold m-0">Ngày trả</label>
                  <input type="date" className="w-full h-[55px] bg-white border border-[#1e1535] rounded-[8px] px-4 text-[16px] font-bold outline-none focus:border-[#7a33f2] cursor-pointer" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </div>
              </div>
              <div className="pd-action-row" style={{ display: "flex", flexDirection: "row", gap: "16px", width: "100%", marginTop: "10px" }}>
                <button onClick={() => handleAddToCart(false)} className="flex-1 bg-white border-2 border-[#7a33f2] text-[#7a33f2] h-[55px] rounded-[10px] font-bold hover:bg-[#f9f8ff] transition-all uppercase text-[16px] cursor-pointer">THÊM VÀO GIỎ HÀNG</button>
                <button onClick={() => handleAddToCart(true)} className="flex-1 bg-[#7a33f2] border-2 border-[#7a33f2] text-white h-[55px] rounded-[10px] font-bold hover:bg-[#6625cc] transition-all uppercase text-[16px] cursor-pointer shadow-lg">THUÊ NGAY</button>
              </div>
            </div>
          </div>
        </div>

        {/* Các mục mô tả chi tiết */}
        <div className="mt-[80px]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
          <div className="pd-tabs-wrapper max-w-[1100px] mx-auto mb-20">
            {[
              { id: "mota", label: "MÔ TẢ CHI TIẾT" },
              { id: "chinhsach", label: "QUY ĐỊNH THUÊ" },
              { id: "danhgia", label: "PHẢN HỒI KHÁCH HÀNG" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 h-[60px] rounded-[12px] font-bold text-[20px] tracking-widest transition-all cursor-pointer border-none shadow-sm ${
                  activeTab === tab.id ? "bg-[#f3f0ff] text-[#7a33f2]" : "bg-[#f9f9fb] text-gray-400 hover:bg-[#f0eff5]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="min-h-[350px] px-10 pt-16">
            {activeTab === "mota" && (
              <div className="max-w-[1100px] mx-auto">
                <h3 className="text-[28px] font-bold mb-10 text-[#1e1535] uppercase text-center">Thông tin mô tả sản phẩm</h3>
                <div className="text-[24px] leading-relaxed text-gray-800 text-center">
                  {product.description}
                </div>
              </div>
            )}
            
            {activeTab === "chinhsach" && (
              <div className="text-[21px] text-gray-700 leading-loose max-w-[950px] mx-auto">
                <div className="mb-10"><h4 className="text-[24px] font-bold text-[#1e1535] mb-4 uppercase">Lưu ý về bảo quản</h4><p className="m-0">Velixora sẽ trực tiếp xử lý giặt khô chuyên dụng. Quý khách vui lòng không tự ý giặt/tẩy tại nhà.</p></div>
                <div className="mb-10"><h4 className="text-[24px] font-bold text-[#1e1535] mb-4 uppercase">Chính sách đặt cọc</h4><p className="m-0">Vui lòng thanh toán 50% giá trị đồ thuê hoặc để lại CCCD bản gốc khi nhận trang phục.</p></div>
                <div><h4 className="text-[24px] font-bold text-[#1e1535] mb-4 uppercase">Quy định hủy lịch</h4><p className="m-0">Hoàn lại 100% tiền cọc nếu báo hủy trước 07 ngày so với ngày nhận đồ dự kiến.</p></div>
              </div>
            )}
            
            {activeTab === "danhgia" && (
              <div className="flex flex-col gap-12 max-w-[1000px] mx-auto pt-12">
                {randomReviews.map((rev) => (
                  <div key={rev.id} className="pb-8 border-b border-gray-100 flex flex-col gap-5">
                    <div className="flex items-center gap-20">
                      <img src={rev.avatar} className="w-[40px] h-[40px] rounded-full object-cover" alt="Avatar" />
                      <div className="flex flex-col gap-1">
                        <div className="font-bold text-[22px] text-[#1e1535]">{rev.userName}</div>
                        <div className="flex text-[#FFC107] gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} fill={i < rev.rating ? "currentColor" : "none"} stroke={i < rev.rating ? "none" : "currentColor"} strokeWidth={2} />
                          ))}
                        </div>
                      </div>
                      <span className="text-gray-400 text-[17px] ml-auto font-medium">{rev.date}</span>
                    </div>
                    <p className="text-[22px] text-gray-700 m-0 pl-[80px]">{rev.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sản phẩm tương tự */}
        <div className="mt-[100px]">
          <h2 className="text-[34px] font-black uppercase tracking-tighter mb-12">SẢN PHẨM TƯƠNG TỰ</h2>
          <div className="pd-related-grid">
            {relatedProducts.map((p) => (
              <Link key={p.id} href={`/san-pham/${p.id}`} className="pd-related-item w-1/4 group no-underline">
                <div className="relative aspect-[3/4] rounded-[28px] overflow-hidden bg-gray-100 mb-6 shadow-sm transition-all group-hover:shadow-xl group-hover:-translate-y-2">
                  <img src={p.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={p.title} />
                </div>
                <h4 className="text-[19px] font-bold text-[#1e1535] group-hover:text-[#7a33f2] transition-colors">{p.title}</h4>
                <p className="text-[#7a33f2] font-black text-[22px] mt-1">{p.price}</p>
              </Link>
            ))}
          </div>
        </div>

      </main>
      <FooterSimple />
    </>
  );
}