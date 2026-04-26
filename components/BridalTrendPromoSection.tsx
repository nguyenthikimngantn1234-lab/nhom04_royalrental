"use client";
import React from 'react';
import Link from 'next/link'; // Import Link để điều hướng


export const BridalTrendPromoSection = () => {
  return (
    <>
      {/* 1. VÙNG ĐỆM TRÊN */}
      <div className="w-full h-[120px] bg-white"></div>


      <section className="flex items-center justify-center gap-20 py-20 px-10 xl:px-20 bg-white w-full max-w-[1440px] mx-auto font-['Be_Vietnam_Pro']">
       
        {/* 2. KHUNG ẢNH BÊN TRÁI */}
        <div className="w-[680px] h-[680px] flex-shrink-0 rounded-[16px] overflow-hidden shadow-sm transition-transform duration-700 hover:scale-[1.01]">
          <img
            src="/nhom04_royalrental/images/anhsao.png"
            className="w-full h-full object-cover"
            alt="BST Vũ Điệu Ánh Sao"
          />
        </div>


        {/* 3. CỘT NỘI DUNG BÊN PHẢI */}
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="w-[552px] h-[250px] flex flex-col items-center justify-center text-center">
           
            {/* Cụm Tiêu đề */}
            <div className="flex flex-col items-center gap-0 mb-2">
              <span className="text-[#7a33f2] font-semibold tracking-[0.4em] text-[14px] uppercase leading-none">
                BST
              </span>
              <h2 className="text-[68px] font-bold text-[#1e1535] leading-[1] tracking-tight">
                Vũ Điệu <span className="text-[#8b5cf6]">Ánh Sao</span>
              </h2>
            </div>


            {/* Đoạn văn mô tả */}
            <p className="text-[#5d4f7a] text-[18px] leading-[1.5] opacity-80 max-w-[480px] mb-8">
              Thiết kế tinh xảo dành cho những khoảnh khắc đặc biệt mà bạn muốn tỏa sáng rực rỡ.
            </p>


            {/* NÚT THUÊ NGAY: Chỉnh style giống nút Đăng Nhập */}
            <Link href="/danh-muc?cat=Váy Cưới" className="no-underline">
              <button
                style={{
                  backgroundColor: '#7a33f2',
                  color: 'white',
                  padding: '16px 35px',
                  borderRadius: '12px', // Bo góc giống nút Đăng Nhập
                  border: 'none',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  fontFamily: "'Times New Roman', Times, serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 15px rgba(122, 51, 242, 0.2)', // Đổ bóng sang chảnh
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#6625cc')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#7a33f2')}
                className="flex items-center gap-3 active:scale-95"
              >
                THUÊ NGAY
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </button>
            </Link>
          </div>
        </div>


      </section>


      {/* 4. VÙNG ĐỆM DƯỚI */}
      <div className="w-full h-[100px] bg-white"></div>
    </>
  );
};
 
