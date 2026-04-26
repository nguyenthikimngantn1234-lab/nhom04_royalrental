"use client";


import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { Star, Flame } from "lucide-react";


import { Header } from "@/components/Header";
import { FooterSimple } from "@/components/FooterSimple";


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


const allProducts: Product[] = [
  // Váy Cưới (1-9)
  { id: 1, title: "Váy Cưới Xòe Cúp Ngực", price: "1.600.000 đ", oldPrice: "2.000.000 đ", image: "/images/ProductImages-8.png", category: "Váy Cưới", tag: "NEW", discount: "-20%" },
  { id: 2, title: "Váy Cưới Đuôi Cá", price: "2.400.000 đ", image: "/images/ProductImages-9.png", category: "Váy Cưới", tag: "NEW" },
  { id: 3, title: "Váy Cưới Phom Ngắn", price: "1.200.000 đ", image: "/images/ProductImages-10.png", category: "Váy Cưới", tag: "NEW" },
  { id: 4, title: "Váy Cưới Cổ Yếm", price: "2.100.000 đ", oldPrice: "2.415.000 đ", image: "/images/ProductImages-11.png", category: "Váy Cưới", discount: "-15%" },
  { id: 5, title: "Váy Cưới Công Chúa", price: "2.500.000 đ", image: "/images/ProductImages-12.png", category: "Váy Cưới", tag: "HOT" },
  { id: 6, title: "Váy Cưới Lụa Satin", price: "2.700.000 đ", oldPrice: "3.240.000 đ", image: "/images/ProductImages-13.png", category: "Váy Cưới", discount: "-20%" },
  { id: 7, title: "Váy Cưới Cup Ngực", price: "1.600.000 đ", oldPrice: "2.000.000 đ", image: "/images/ProductImages-14.png", category: "Váy Cưới", tag: "NEW", discount: "-20%" },
  { id: 8, title: "Váy Cưới Cổ Tim", price: "2.000.000 đ", image: "/images/ProductImages-15.png", category: "Váy Cưới" },
  { id: 9, title: "Váy Cưới Trễ Vai", price: "1.800.000 đ", oldPrice: "2.200.000 đ", image: "/images/ProductImages-16.png", category: "Váy Cưới", discount: "-20%" },


  // Lễ Phục Nữ (10-15)
  { id: 10, title: "Áo Dài Tơ Tằm Be", price: "250.000 đ", image: "/images/ProductImages-4.png", category: "Lễ Phục Nữ", tag: "NEW" },
  { id: 11, title: "Áo Dài Tơ Tằm Tím", price: "250.000 đ", image: "/images/ProductImages-5.png", category: "Lễ Phục Nữ", discount: "-10%" },
  { id: 12, title: "Áo Tú Xuân Tím", price: "850.000 đ", image: "/images/ProductImages-6.png", category: "Lễ Phục Nữ" },
  { id: 13, title: "Đầm Cocktail", price: "850.000 đ", image: "/images/Nu-3.png", category: "Lễ Phục Nữ", tag: "HOT" },
  { id: 14, title: "Đầm Đuôi Cá", price: "1.550.000 đ", image: "/images/Nu-5.png", category: "Lễ Phục Nữ" },
  { id: 15, title: "Đầm Xẻ Tà", price: "1.300.000 đ", image: "/images/Nu-6.png", category: "Lễ Phục Nữ" },


  // Lễ Phục Nam (16-21)
  { id: 16, title: "Tuxedo Midnight Classic", price: "1.300.000 đ", image: "/images/ProductImages-7.png", category: "Lễ Phục Nam", tag: "NEW" },
  { id: 17, title: "Vest Nâu Cafe Kẻ Sọc", price: "1.800.000 đ", image: "/images/ProductImages-2.png", category: "Lễ Phục Nam", tag: "HOT" },
  { id: 18, title: "Creamy White Suit", price: "1.150.000 đ", image: "/images/ProductImages-3.png", category: "Lễ Phục Nam" },
  { id: 19, title: "Navy Business Suit", price: "750.000 đ", image: "/images/Nam-1.png", category: "Lễ Phục Nam" },
  { id: 20, title: "Royal Blue Checked Suit", price: "1.550.000 đ", image: "/images/Nam-2.png", category: "Lễ Phục Nam" },
  { id: 21, title: "Tuxedo Black Velvet Edition", price: "1.700.000 đ", image: "/images/Nam-3.png", category: "Lễ Phục Nam" },


  // Phụ Kiện (22-27)
  { id: 22, title: "Cà vạt Silk Cao Cấp", price: "80.000 đ", image: "/images/pk1.png", category: "Phụ Kiện", tag: "NEW" },
  { id: 23, title: "Giày Bridal Satin Đính Đá", price: "180.000 đ", image: "/images/pk2.png", category: "Phụ Kiện" },
  { id: 24, title: "Giày Cao Gót Velvet Black", price: "150.000 đ", image: "/images/pk3.png", category: "Phụ Kiện", tag: "HOT" },
  { id: 25, title: "Giày Oxford Brogues Classic", price: "200.000 đ", image: "/images/pk4.png", category: "Phụ Kiện" },
  { id: 26, title: "Clutch Dạ Hội Sparkle Black", price: "180.000 đ", image: "/images/pk5.png", category: "Phụ Kiện" },
  { id: 27, title: "Khăn Voan Thêu Hoa Lux", price: "200.000 đ", image: "/images/pk6.png", category: "Phụ Kiện" },


  // Trang Sức (28-33)
  { id: 28, title: "Bộ Trang Sức Eternal", price: "2.800.000 đ", image: "/images/TS1.png", category: "Trang Sức", tag: "HOT" },
  { id: 29, title: "Dây Chuyền Đá Ánh Trăng", price: "1.400.000 đ", image: "/images/TS2.png", category: "Trang Sức" },
  { id: 30, title: "Bông Tai Ruby Đỏ", price: "950.000 đ", image: "/images/TS3.png", category: "Trang Sức", tag: "NEW" },
  { id: 31, title: "Vòng Tay Kim Tiền", price: "1.600.000 đ", image: "/images/TS4.png", category: "Trang Sức" },
  { id: 32, title: "Lắc Tay Ngọc Cẩm Thạch", price: "1.200.000 đ", image: "/images/TS5.png", category: "Trang Sức" },
  { id: 33, title: "Trâm Cài Tóc Phượng", price: "600.000 đ", image: "/images/TS6.png", category: "Trang Sức" },
];


export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = React.use(params);
  const product = allProducts.find((p) => p.id === Number(id));


  const relatedProducts = allProducts
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);


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


  if (!product) {
    return (
      <div className="p-20 text-center font-['Be_Vietnam_Pro'] text-[#1e1535]">
        Sản phẩm không tồn tại!
      </div>
    );
  }


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
          {/* Ảnh Sản Phẩm */}
          <div className="rounded-[32px] overflow-hidden bg-white shadow-sm flex-shrink-0" style={{ width: "450px", height: "600px" }}>
            <img src={product.image} className="w-full h-full object-cover" alt={product.title} />
          </div>


          {/* Thông Tin Sản Phẩm */}
          <div className="flex-1 flex flex-col gap-6 pt-1">
            <h1 className="text-[40px] font-extrabold uppercase leading-tight tracking-tight">
              {product.title}
            </h1>


            {/* Đánh Giá */}
            <div className="flex items-center gap-5">
              <div className="flex text-[#FFC107] gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="text-gray-400 text-[14px]">4.8/5</span>
            </div>


            {/* Giá Tiền */}
            <div className="flex items-center gap-6 py-2">
              <span className="text-[34px] font-bold text-[#7a33f2]">
                {product.price}{" "}
                <span className="text-[16px] font-normal text-gray-400">/ngày</span>
              </span>
            </div>


            <p className="text-[#6b7280] text-[16px] leading-relaxed">
              Sản phẩm cao cấp tại Velixora mang lại vẻ đẹp hoàn hảo cho bạn trong ngày trọng đại.
            </p>


            {/* Chọn Màu Sắc */}
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


            {/* Chọn Size */}
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
              <h3 className="text-[16px] font-bold uppercase text-[#1e1535] m-0">
                CHỌN LỊCH THUÊ
              </h3>


              <div style={{ display: "flex", flexDirection: "row", gap: "16px", width: "100%" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <label className="text-[18px] text-[#1e1535] font-semibold tracking-wide m-0">
                    Ngày thuê
                  </label>
                  <input
                    type="date"
                    className="w-full h-[50px] bg-white border border-[#1e1535] rounded-[8px] px-4 text-[15px] font-bold outline-none focus:border-[#7a33f2] transition-all cursor-pointer m-0"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <label className="text-[18px] text-[#1e1535] font-semibold tracking-wide m-0">
                    Ngày trả
                  </label>
                  <input
                    type="date"
                    className="w-full h-[50px] bg-white border border-[#1e1535] rounded-[8px] px-4 text-[15px] font-bold outline-none focus:border-[#7a33f2] transition-all cursor-pointer m-0"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>


              {/* Nút Action */}
              <div style={{ display: "flex", flexDirection: "row", gap: "16px", width: "100%" }}>
                <button
                  onClick={() => handleAddToCart(false)}
                  className="flex-1 bg-white border border-[#7a33f2] text-[#7a33f2] h-[50px] rounded-[8px] font-bold hover:bg-[#f9f8ff] transition-all uppercase text-[15px] cursor-pointer outline-none m-0"
                >
                  Thêm Vào Giỏ Hàng
                </button>


                <button
                  onClick={() => handleAddToCart(true)}
                  className="flex-1 bg-[#7a33f2] border border-[#7a33f2] text-white h-[50px] rounded-[8px] font-bold hover:bg-[#6625cc] transition-all uppercase text-[15px] cursor-pointer outline-none shadow-sm m-0"
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
              <h2 className="text-[32px] font-black uppercase tracking-tight">
                SẢN PHẨM TƯƠNG TỰ
              </h2>
              <p className="text-gray-400 mt-2">
                Gợi ý những mẫu lễ phục cùng phong cách dành cho bạn
              </p>
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
                  transition: "all 0.3s",
                  boxShadow: "0 4px 15px rgba(122, 51, 242, 0.2)",
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
                <h4 className="text-[17px] font-bold text-[#1e1535] group-hover:text-[#7a33f2] transition-colors">
                  {p.title}
                </h4>
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

