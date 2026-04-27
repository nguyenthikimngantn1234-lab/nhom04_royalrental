"use client";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Váy Cưới Xòe Cúp Ngực",
    price: "1.600.000 đ",
    oldPrice: "2.000.000 đ",
    discount: "-20%",
    tag: "NEW",
    img: "/nhom04_royalrental/images/ProductImages.png",
  },
  {
    id: 2,
    name: "Váy Cưới Đuôi Cá",
    price: "2.400.000 đ",
    tag: "NEW",
    img: "/nhom04_royalrental/images/ProductImages-1.png",
  },
  {
    id: 17,
    name: "Vest Nâu Cafe Kẻ Sọc",
    price: "1.600.000 đ",
    oldPrice: "2.000.000 đ",
    discount: "-20%",
    tag: "HOT",
    img: "/nhom04_royalrental/images/ProductImages-2.png",
  },
  {
    id: 18,
    name: "Creamy White Suit",
    price: "850.000 đ",
    oldPrice: "1.000.000 đ",
    discount: "-15%",
    img: "/nhom04_royalrental/images/ProductImages-3.png",
  },
  {
    id: 10,
    name: "Áo Dài Tơ Tằm Be",
    price: "250.000 đ",
    img: "/nhom04_royalrental/images/ProductImages-4.png",
  },
  {
    id: 11,
    name: "Áo Dài Tơ Tằm Tím",
    price: "190.000 đ",
    oldPrice: "250.000 đ",
    discount: "-20%",
    tag: "NEW",
    img: "/nhom04_royalrental/images/ProductImages-5.png",
  },
  {
    id: 12,
    name: "Áo Tú Xuân Tím",
    price: "200.000 đ",
    oldPrice: "240.000 đ",
    discount: "-20%",
    img: "/nhom04_royalrental/images/ProductImages-6.png",
  },
  {
    id: 16,
    name: "Tuxedo Đen",
    price: "1.600.000 đ",
    oldPrice: "2.000.000 đ",
    discount: "-20%",
    tag: "HOT",
    img: "/nhom04_royalrental/images/ProductImages-7.png",
  }
];

export const BestSellerGallerySection = () => {
  return (
    <section id="best-seller" className="py-20 bg-white flex flex-col items-center px-4 md:px-0">
      
      {/* 1. KHỐI ĐIỀU KHIỂN RESPONSIVE - ĐÃ CẬP NHẬT FONT MONTSERRAT */}
      <style jsx>{`
        .gallery-container {
          width: 100%;
          max-width: 1272px;
          margin: 0 auto;
          /* SỬA TẠI ĐÂY: Đảm bảo container dùng đúng font của nhóm */
          font-family: var(--font-montserrat), sans-serif;
        }
        .gallery-grid {
          display: grid;
          gap: 24px;
        }

        /* Mobile */
        @media (max-width: 767px) {
          .gallery-grid { grid-template-columns: repeat(1, 1fr); }
          .product-card { width: 100% !important; }
          .product-image-box { width: 100% !important; height: 450px !important; }
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1271px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); padding: 0 40px; }
          .product-card { width: 100% !important; }
          .product-image-box { width: 100% !important; height: 420px !important; }
        }

        /* Desktop chuẩn */
        @media (min-width: 1272px) {
          .gallery-grid { grid-template-columns: repeat(4, 1fr); }
          .product-card { width: 300px; }
          .product-image-box { width: 300px; height: 400px; }
        }
      `}</style>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#1e1535] uppercase tracking-tight" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
          SẢN PHẨM NỔI BẬT
        </h2>
        <p className="text-gray-500 text-sm mt-1" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
          Những mẫu nổi bật nhất mùa này
        </p>
      </div>

      {/* KHU VỰC HIỂN THỊ CHÍNH */}
      <div className="gallery-container">
        <div className="gallery-grid">

          {products.map((p, i) => (
            <div key={i} className="product-card group mx-auto">

              <Link href={`/san-pham/${p.id}`} className="no-underline">
                <div className="product-image-box relative rounded-[18px] overflow-hidden bg-gray-100 cursor-pointer shadow-sm">
                  
                  {/* TAGS SỬ DỤNG MONTSERRAT CHO HIỆN ĐẠI */}
                  <div className="absolute top-[10px] left-[10px] z-10 flex gap-[6px]" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                    {p.tag === 'NEW' && (
                      <span style={{ backgroundColor: "#7a33f2", color: "white", fontSize: "11px", fontWeight: "bold", padding: "4px 8px", borderRadius: "6px", lineHeight: "1" }}>
                        {p.tag}
                      </span>
                    )}
                    
                    {p.tag === 'HOT' && (
                      <span style={{ backgroundColor: "#FF4D4F", color: "white", fontSize: "11px", fontWeight: "bold", padding: "4px 8px", borderRadius: "6px", lineHeight: "1" }}>
                        {p.tag}
                      </span>
                    )}
                    
                    {p.discount && (
                      <span style={{ backgroundColor: "#FFFDF0", color: "#D97706", border: "1px solid #F5A623", fontSize: "11px", fontWeight: "bold", padding: "3px 6px", borderRadius: "6px", display: "flex", alignItems: "center", gap: "3px", lineHeight: "1" }}>
                        🔥 {p.discount}
                      </span>
                    )}
                  </div>
                  
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* THÔNG TIN SẢN PHẨM - ĐÃ CHUYỂN TOÀN BỘ SANG MONTSERRAT */}
              <div className="mt-4 px-1" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                <Link href={`/san-pham/${p.id}`} className="no-underline hover:text-[#7a33f2] transition-colors">
                  <h3 className="text-[17px] font-bold text-[#1e1535] leading-snug">
                    {p.name}
                  </h3>
                </Link>

                <div className="mt-1.5 flex flex-col gap-1">
                  <div className="text-[18px] font-black text-[#1e1535]">
                    {p.price} <span className="text-[#1e1535] font-normal text-[14px]">/ngày</span>
                  </div>

                  {p.oldPrice && (
                    <div className="text-gray-400 opacity-60 text-[14px] line-through">
                      {p.oldPrice}
                    </div>
                  )}
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};