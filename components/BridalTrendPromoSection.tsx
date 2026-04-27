"use client";
import React from 'react';
import Link from 'next/link'; 

export const BridalTrendPromoSection = () => {
  return (
    <>
      {/* 1. KHỐI ĐIỀU KHIỂN - ĐÃ ĐỒNG NHẤT FONT MONTSERRAT */}
      <style jsx>{`
        .promo-section {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: white;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          /* ĐÃ CẬP NHẬT: Sử dụng Montserrat đồng bộ */
          font-family: var(--font-montserrat), sans-serif;
        }

        /* Mobile */
        @media (max-width: 767px) {
          .promo-section { flex-direction: column; gap: 40px; padding: 40px 20px; }
          .promo-image-box { width: 100% !important; height: 350px !important; }
          .promo-content-box { width: 100% !important; height: auto !important; }
          .promo-title { font-size: 40px !important; }
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1279px) {
          .promo-section { flex-direction: column; gap: 50px; padding: 60px 40px; }
          .promo-image-box { width: 100% !important; max-width: 680px; height: 500px !important; }
          .promo-content-box { width: 100% !important; height: auto !important; }
          .promo-title { font-size: 56px !important; }
        }

        /* Desktop chuẩn */
        @media (min-width: 1280px) {
          .promo-section { flex-direction: row; gap: 80px; padding: 80px; }
          .promo-image-box { width: 680px; height: 680px; }
          .promo-content-box { width: 552px; height: 250px; }
          .promo-title { font-size: 68px; }
        }
      `}</style>

      {/* 1. VÙNG ĐỆM TRÊN */}
      <div className="w-full h-[60px] lg:h-[120px] bg-white"></div>

      <section className="promo-section">
        
        {/* 2. KHUNG ẢNH BÊN TRÁI */}
        <div className="promo-image-box flex-shrink-0 rounded-[16px] overflow-hidden shadow-sm transition-transform duration-700 hover:scale-[1.01]">
          <img
            src="/nhom04_royalrental/images/anhsao.png"
            className="w-full h-full object-cover"
            alt="BST Vũ Điệu Ánh Sao"
          />
        </div>

        {/* 3. CỘT NỘI DUNG BÊN PHẢI */}
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="promo-content-box flex flex-col items-center justify-center text-center">
            
            {/* Cụm Tiêu đề */}
            <div className="flex flex-col items-center gap-0 mb-2">
              <span className="text-[#7a33f2] font-semibold tracking-[0.4em] text-[14px] uppercase leading-none">
                BST
              </span>
              <h2 className="promo-title font-extrabold text-[#1e1535] leading-[1] tracking-tight">
                Vũ Điệu <span className="text-[#8b5cf6]">Ánh Sao</span>
              </h2>
            </div>

            {/* Đoạn văn mô tả */}
            <p className="text-[#5d4f7a] text-[16px] lg:text-[18px] leading-[1.5] opacity-80 max-w-[480px] mb-8 font-medium">
              Thiết kế tinh xảo dành cho những khoảnh khắc đặc biệt mà bạn muốn tỏa sáng rực rỡ.
            </p>

            {/* NÚT THUÊ NGAY - ĐÃ CẬP NHẬT FONT MONTSERRAT */}
            <Link href="/danh-muc?cat=Váy Cưới" className="no-underline">
              <button
                style={{
                  backgroundColor: '#7a33f2',
                  color: 'white',
                  padding: '16px 35px',
                  borderRadius: '12px',
                  border: 'none',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  /* ĐÃ CẬP NHẬT: Đảm bảo nút bấm dùng đúng font của nhóm */
                  fontFamily: "var(--font-montserrat), sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 15px rgba(122, 51, 242, 0.2)',
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
      <div className="w-full h-[60px] lg:h-[100px] bg-white"></div>
    </>
  );
};