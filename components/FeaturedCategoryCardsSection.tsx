"use client";
import React from 'react';
import Link from 'next/link'; // Bước 1: Import Link từ Next.js


const categories = [
  // Bước 2: Thêm đường dẫn (slug) cho từng danh mục
  { title: "Váy Cưới", img: "/images/Rectangle 1.png", link: "/danh-muc?cat=Váy%20Cưới" },
  { title: "Lễ Phục Nữ", img: "/images/Rectangle 2.png", link: "/danh-muc?cat=Lễ%20Phục%20Nữ" },
  { title: "Lễ Phục Nam", img: "/images/Rectangle 3.png", link: "/danh-muc?cat=Lễ%20Phục%20Nam" },
];


export const FeaturedCategoryCardsSection = () => {
  return (
    <>
      {/* VÙNG ĐỆM TRÊN */}
      <div className="w-full h-[120px] bg-white"></div>


      <section className="pb-32 bg-white w-full font-['Be_Vietnam_Pro']">
        {/* Container chính */}
        <div className="max-w-[1440px] mx-auto px-20 flex items-start justify-between">


          {/* CỘT CHỮ BÊN TRÁI */}
 
          <div className="w-[350px] pt-4 flex-shrink-0 pl-[24px]"> {/* Thêm pl-[24px] ở đây */}
            <h2 className="text-[42px] font-bold text-[#1e1535] uppercase mb-8 leading-[1.1] tracking-tight">
              DANH MỤC <br /> SẢN PHẨM
            </h2>
            <p className="text-[#5d4f7a] text-[18px] leading-relaxed opacity-80">
              Duyệt qua các danh mục được tuyển chọn kỹ lưỡng để tìm trang phục
              hoàn hảo cho dịp của bạn.
            </p>
          </div>
         


          {/* CỘT DÀN ẢNH BÊN PHẢI */}
          <div className="flex flex-col items-end">
            <div className="flex gap-[24px]">
              {categories.map((cat, i) => (
                // Bước 3: Dùng Link bọc toàn bộ Card
                <Link href={cat.link} key={i} className="no-underline">
                  <div
                    className="w-[280px] h-[420px] rounded-[24px] overflow-hidden flex flex-col group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-white"
                  >
                    {/* Ảnh phía trên */}
                    <div className="h-[350px] overflow-hidden">
                      <img
                        src={cat.img}
                        alt={cat.title}
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                      />
                    </div>


                    {/* CHÂN TÍM NHẠT */}
                    <div className="bg-[#E9E4FF] h-[70px] px-6 flex items-center justify-between rounded-b-[24px] transition-colors group-hover:bg-[#dfd7ff]">
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
            <div className="flex gap-3 mt-12 pr-4">
              <div className="w-12 h-[5px] bg-[#7a33f2] rounded-full"></div>
              <div className="w-3 h-[5px] bg-gray-200 rounded-full"></div>
              <div className="w-3 h-[5px] bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>


      {/* VÙNG ĐỆM DƯỚI */}
      <div className="w-full h-[80px] bg-white"></div>
    </>
  );
};

 