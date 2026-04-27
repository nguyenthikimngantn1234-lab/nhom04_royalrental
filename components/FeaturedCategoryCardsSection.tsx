"use client";
import React from 'react';
import Link from 'next/link';

const categories = [
  { title: "Váy Cưới", img: "/nhom04_royalrental/images/Rectangle 1.png", link: "/danh-muc?cat=Váy%20Cưới" },
  { title: "Lễ Phục Nữ", img: "/nhom04_royalrental/images/Rectangle 2.png", link: "/danh-muc?cat=Lễ%20Phục%20Nữ" },
  { title: "Lễ Phục Nam", img: "/nhom04_royalrental/images/Rectangle 3.png", link: "/danh-muc?cat=Lễ%20Phục%20Nam" },
];

export const FeaturedCategoryCardsSection = () => {
  return (
    <>
      {/* 1. KHỐI ĐIỀU KHIỂN - ĐÃ ĐỒNG NHẤT FONT MONTSERRAT */}
      <style jsx>{`
        .category-container {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          background-color: white;
          /* SỬA TẠI ĐÂY: Sử dụng biến font global thay cho Be Vietnam Pro */
          font-family: var(--font-montserrat), sans-serif;
        }

        /* Mobile */
        @media (max-width: 767px) {
          .category-container { flex-direction: column; padding: 0 20px; }
          .category-text-col { width: 100% !important; padding-left: 0 !important; text-align: center; margin-bottom: 40px; }
          .category-cards-col { width: 100% !important; display: flex; flex-direction: column; align-items: center !important; }
          .cards-wrapper { 
            display: flex; 
            flex-direction: column; 
            width: 100%; 
            align-items: center; 
            gap: 24px; 
          }
          .category-card-item { 
            width: 320px !important; 
            height: 450px !important;
          }
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1279px) {
          .category-container { flex-direction: column; padding: 0 40px; }
          .category-text-col { width: 100% !important; padding-left: 0 !important; margin-bottom: 50px; }
          .category-cards-col { width: 100% !important; }
          .cards-wrapper { justify-content: center; flex-wrap: wrap; gap: 24px; }
          .category-card-item { width: 280px; height: 420px; }
        }

        /* Desktop chuẩn */
        @media (min-width: 1280px) {
          .category-container { flex-direction: row; justify-content: space-between; padding: 0 80px; }
          .category-text-col { width: 350px; flex-shrink: 0; padding-left: 24px; }
          .category-cards-col { flex-direction: column; items: flex-end; }
          .cards-wrapper { flex-direction: row; gap: 24px; }
          .category-card-item { width: 280px; height: 420px; }
        }
      `}</style>

      {/* VÙNG ĐỆM TRÊN */}
      <div className="w-full h-[60px] lg:h-[120px] bg-white"></div>

      <section className="pb-32 bg-white w-full" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
        <div className="category-container">

          {/* CỘT CHỮ BÊN TRÁI */}
          <div className="category-text-col pt-4 flex-shrink-0">
            <h2 className="text-[32px] lg:text-[42px] font-bold text-[#1e1535] uppercase mb-8 leading-[1.1] tracking-tight">
              DANH MỤC <br className="hidden lg:block" /> SẢN PHẨM
            </h2>
            <p className="text-[#5d4f7a] text-[18px] leading-relaxed opacity-80">
              Duyệt qua các danh mục được tuyển chọn kỹ lưỡng để tìm trang phục
              hoàn hảo cho dịp của bạn.
            </p>
          </div>

          {/* CỘT DÀN ẢNH BÊN PHẢI */}
          <div className="category-cards-col flex">
            <div className="cards-wrapper flex">
              {categories.map((cat, i) => (
                <Link href={cat.link} key={i} className="no-underline">
                  <div className="category-card-item rounded-[24px] overflow-hidden flex flex-col group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-white">
                    <div className="h-[350px] lg:h-[350px] overflow-hidden flex-shrink-0">
                      <img
                        src={cat.img}
                        alt={cat.title}
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="bg-[#E9E4FF] flex-grow px-6 flex items-center justify-between rounded-b-[24px] transition-colors group-hover:bg-[#dfd7ff]">
                      <h3 className="text-[17px] font-bold text-[#1e1535] leading-none">
                        {cat.title}
                      </h3>
                      <div className="text-[#1e1535] text-xl font-bold leading-none transform group-hover:translate-x-1 transition-transform">
                        →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Indicator */}
            <div className="hidden lg:flex gap-3 mt-12 pr-4">
              <div className="w-12 h-[5px] bg-[#7a33f2] rounded-full"></div>
              <div className="w-3 h-[5px] bg-gray-200 rounded-full"></div>
              <div className="w-3 h-[5px] bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* VÙNG ĐỆM DƯỚI */}
      <div className="w-full h-[40px] lg:h-[80px] bg-white"></div>
    </>
  );
};