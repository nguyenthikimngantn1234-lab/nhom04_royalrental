"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FooterSimple } from "@/components/FooterSimple";

export default function NotFound() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Header />
      
      <style jsx global>{`
        /* RESET VÀ CHỐNG TRÀN */
        html, body { 
          max-width: 100vw !important; 
          overflow-x: hidden !important; 
          margin: 0; 
          padding: 0;
        }

        .notfound-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          min-height: calc(100vh - 107px);
          padding: 60px 120px;
          gap: 40px;
          box-sizing: border-box;
        }

        /* TABLET */
        @media (max-width: 1279px) {
          .notfound-wrapper {
            padding: 40px 60px !important;
            flex-direction: column !important;
            text-align: center !important;
          }
          .notfound-left { 
            align-items: center !important; 
            width: 100% !important;
            order: 2; /* Chữ hiện sau ảnh */
          }
          .notfound-right { 
            width: 100% !important; 
            display: flex; 
            justify-content: center;
            order: 1; /* Ảnh hiện lên đầu */
          }
          .img-box-404 { max-width: 400px !important; }
        }

        /* MOBILE - FIX LỖI MẤT NÚT */
        @media (max-width: 767px) {
          .notfound-wrapper { 
            padding: 20px !important; 
            gap: 20px !important;
            justify-content: flex-start !important; /* Đẩy nội dung lên trên để thấy nút */
            padding-top: 40px !important;
          }
          .notfound-oop { 
            font-size: 60px !important; 
            margin-bottom: 5px !important; 
          }
          .notfound-h2 { 
            font-size: 24px !important; 
            margin-bottom: 15px !important;
          }
          .notfound-p { 
            font-size: 14px !important; 
            margin-bottom: 25px !important;
            line-height: 1.5 !important;
          }
          .btn-group-404 { 
            flex-direction: column !important; 
            width: 100% !important; 
            gap: 12px !important;
          }
          .btn-link-404 { width: 100% !important; }
          .btn-item-404 { 
            width: 100% !important; 
            height: 50px !important;
            font-size: 13px !important;
          }
          .img-box-404 {
            max-width: 240px !important; /* Thu nhỏ ảnh để nhường chỗ cho nút */
            margin-bottom: 10px !important;
          }
        }
      `}</style>

      <main className="w-full min-h-screen bg-white font-['Be_Vietnam_Pro'] relative overflow-hidden pt-[107px]">
        
        {/* BACKGROUND DECOR */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#7a33f2]/5 rounded-full blur-[120px] animate-pulse"></div>
        
        <div className="notfound-wrapper relative z-10">
          
          {/* CỘT PHẢI (ẢNH) - NHẢY LÊN ĐẦU TRÊN MOBILE */}
          <div className="notfound-right flex-1 flex items-center justify-center">
            <div className="img-box-404 relative w-full max-w-[500px] flex items-center justify-center">
              <img 
                src="/nhom04_royalrental/images/404.png" 
                alt="Velixora 404" 
                className="w-full h-auto object-contain relative z-20"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#7a33f2]/10 rounded-full blur-[100px]"></div>
            </div>
          </div>

          {/* CỘT TRÁI (CHỮ VÀ NÚT) */}
          <div className="notfound-left flex-1 flex flex-col items-start">
            <span className="notfound-oop text-[#7a33f2] font-black text-[96px] leading-none mb-4">
              OOP..
            </span>
            
            <h2 className="notfound-h2 text-[40px] font-black text-[#1e1535] leading-tight uppercase m-0 tracking-tighter mb-6">
              TRANG KHÔNG TÌM THẤY
            </h2>

            <p className="notfound-p text-[#1e1535] text-[16px] leading-[1.8] max-w-[500px] mb-10 font-medium">
              Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển. 
              Hãy để chúng tôi đưa bạn quay lại đúng hướng.
            </p>
            
            <div className="btn-group-404 flex items-center gap-[16px] w-full">
              <Link href="/danh-muc?cat=Váy Cưới" className="btn-link-404">
                <button 
                  className="btn-item-404 bg-[#7a33f2] text-white rounded-full font-bold uppercase tracking-widest text-[12px] transition-all hover:bg-[#6625cc] active:scale-95 cursor-pointer border-none shadow-lg shadow-purple-200 w-[200px] h-[48px]"
                >
                  Xem bộ sưu tập
                </button>
              </Link>
              
              <Link href="/" className="btn-link-404">
                <button 
                  className="btn-item-404 bg-white text-[#1e1535] border border-[#1e1535] rounded-full font-bold uppercase tracking-widest text-[12px] hover:bg-gray-50 transition-all cursor-pointer active:scale-95 w-[200px] h-[48px]"
                >
                  Về trang chủ
                </button>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <FooterSimple />
    </>
  );
}