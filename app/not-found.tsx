"use client";
import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FooterSimple } from "@/components/FooterSimple";

export default function NotFound() {
  return (
    <>
      <Header />
      
      <main className="w-full min-h-screen bg-white font-['Be_Vietnam_Pro'] relative overflow-hidden pt-[107px]">
        
        {/* BACKGROUND DECOR */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#7a33f2]/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#7a33f2]/5 rounded-full blur-[100px]"></div>

        <div className="max-w-[1440px] mx-auto h-[calc(100vh-107px)] flex items-center justify-between px-[120px] lg:px-[160px] gap-20 relative z-10">
          
          {/* CỘT TRÁI: THÔNG ĐIỆP */}
          <div className="flex-1 flex flex-col items-start">
            <span className="text-[#7a33f2] font-black text-[96px] leading-none mb-4">
              OOP..
            </span>
            
            <div className="relative mb-8">

              <h2 className="text-[48px] font-black text-[#1e1535] leading-tight uppercase m-0 tracking-tighter relative">
                TRANG KHÔNG TÌM THẤY
              </h2>
            </div>

            <p className="text-[#1e1535] text-[16px] leading-[1.8] max-w-[500px] mb-12 font-medium">
              Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển. 
              Hãy để chúng tôi đưa bạn quay lại đúng hướng.
            </p>
            
            <div className="flex items-center gap-[16px]">
              <Link href="/danh-muc?cat=Váy Cưới">
                <button 
                  style={{ width: '200px', height: '48px' }}
                  className="bg-[#7a33f2] text-white rounded-full font-bold uppercase tracking-widest text-[12px] transition-all hover:bg-[#6625cc] active:scale-95 cursor-pointer border-none shadow-lg shadow-purple-200"
                >
                  Xem bộ sưu tập
                </button>
              </Link>
              
              <Link href="/">
                <button 
                  style={{ width: '200px', height: '48px' }}
                  className="bg-white text-[#1e1535] border border-[#1e1535] rounded-full font-bold uppercase tracking-widest text-[12px] hover:bg-gray-50 transition-all cursor-pointer active:scale-95"
                >
                  Về trang chủ
                </button>
              </Link>
            </div>
          </div>

          {/* CỘT PHẢI: CHỈ CÓ ẢNH (BỎ KHUNG) */}
          <div className="flex-1 h-full flex items-center justify-end">
            <div className="relative w-[580px] h-[488px] flex items-center justify-center">
              {/* Ảnh lỗi404.png hiện trực tiếp không cần khung viền */}
              <img 
                src="/images/404.png" 
                alt="Velixora 404" 
                className="w-full h-auto object-contain relative z-20"
              />

              {/* Hiệu ứng tỏa sáng phía sau ảnh cho đẹp mắt */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#7a33f2]/10 rounded-full blur-[100px]"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#7a33f2]/5 rounded-full blur-xl"></div>
            </div>
          </div>

        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] text-gray-300 tracking-[1em] uppercase font-light">
          Luxurious Experience
        </div>
      </main>

      <FooterSimple />
    </>
  );
}