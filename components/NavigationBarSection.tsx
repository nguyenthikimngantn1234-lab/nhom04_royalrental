"use client";


import React from 'react';
import Link from 'next/link';
import { Header } from './Header';


export const NavigationBarSection = () => {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      overflowX: 'hidden',
      fontFamily: "'Be Vietnam Pro', sans-serif"
    }}>
     
      {/* 1. GỌI HEADER VÀO ĐÂY */}
      <Header />


      {/* 2. HERO SECTION */}
      <section style={{
        width: '100%',
        height: '750px',
        position: 'relative',
        overflow: 'hidden',
        marginTop: '107px'
      }}>
        {/* Ảnh Background tràn viền */}
        <img
          src="/nhom04_royalrental/images/Banner.png"  
          alt="Hero Background"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
       
        {/* Lớp phủ tối nhẹ */}
        <div className="absolute inset-0 bg-black/20" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.2)' }}></div>


        {/* Khung chứa nội dung */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          maxWidth: '1440px',
          width: '100%',
          margin: '0 auto',
          padding: '0 80px',
          display: 'flex',
          alignItems: 'center'
        }}>
         
          <div style={{ maxWidth: '750px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', color: 'white' }}>
            <p style={{ fontSize: '18px', fontWeight: 500, marginBottom: '16px', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.9 }}>
              Dịch vụ cho thuê lễ phục cao cấp
            </p>
            <h1 style={{ fontSize: '80px', fontWeight: 'bold', marginBottom: '24px', lineHeight: '1.1', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
              Tỏa Sáng<br />Từng Khoảnh Khắc
            </h1>
            <p style={{ fontSize: '22px', marginBottom: '44px', lineHeight: '1.6', fontWeight: 300, maxWidth: '550px', opacity: 0.95 }}>
              Khám phá bộ sưu tập váy cưới, vest, đầm dạ hội và áo dài tuyệt đẹp của chúng tôi.
            </p>
           
            <div style={{ display: 'flex', gap: '24px' }}>
              {/* CHỖ THAY ĐỔI: Cô đổi từ /danh-muc sang #best-seller để khớp với ID cô đã thêm cho em lúc nãy */}
              <Link href="#best-seller">
                <button
                  style={{ backgroundColor: '#7a33f2', color: 'white', padding: '18px 45px', borderRadius: '14px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '16px' }}
                  className="hover:bg-[#6625cc] transition-all shadow-lg shadow-[#7a33f2]/30 active:scale-95"
                >
                  KHÁM PHÁ →
                </button>
              </Link>


              <Link href="/danh-muc">
                <button
                  style={{ backgroundColor: 'white', color: '#1e1535', padding: '18px 45px', borderRadius: '14px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '16px' }}
                  className="hover:bg-gray-100 transition-all active:scale-95"
                >
                  XEM THÊM
                </button>
              </Link>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
};

