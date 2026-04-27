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

      {/* --- PHẦN ĐIỀU KHIỂN HIỂN THỊ (QUYẾT ĐỊNH SỐNG CHẾT ĐÂY NGÂN ƠI) --- */}
      <style jsx global>{`
        /* Mobile: dưới 768px */
        @media (max-width: 767px) {
          .section-desktop { display: none !important; }
          .section-tablet { display: none !important; }
          .section-mobile { display: flex !important; }
        }
        /* Tablet: từ 768px đến 1023px */
        @media (min-width: 768px) and (max-width: 1023px) {
          .section-desktop { display: none !important; }
          .section-tablet { display: flex !important; }
          .section-mobile { display: none !important; }
        }
        /* Desktop: từ 1024px trở lên */
        @media (min-width: 1024px) {
          .section-desktop { display: block !important; }
          .section-tablet { display: none !important; }
          .section-mobile { display: none !important; }
        }
      `}</style>

      {/* ------------------------------------------------------------
          BLOCK 1: MOBILE (Dưới 768px) - THÊM MỚI
      ------------------------------------------------------------ */}
      <section className="section-mobile" style={{
        display: 'none', width: '100%', height: '550px', position: 'relative',
        marginTop: '70px', flexDirection: 'column', justifyContent: 'center', padding: '0 20px'
      }}>
        <img src="/nhom04_royalrental/images/Banner.png" alt="Hero Mobile" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)' }}></div>
        <div style={{ position: 'relative', zIndex: 10, color: 'white', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', letterSpacing: '0.1em', marginBottom: '10px', textTransform: 'uppercase' }}>Dịch vụ lễ phục cao cấp</p>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2' }}>Tỏa Sáng<br />Từng Khoảnh Khắc</h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            <Link href="#best-seller" style={{ width: '100%', maxWidth: '200px' }}><button style={{ backgroundColor: '#7a33f2', color: 'white', width: '100%', padding: '12px', borderRadius: '8px', fontWeight: 'bold', border: 'none' }}>KHÁM PHÁ →</button></Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------
          BLOCK 2: TABLET (768px - 1023px) - THÊM MỚI
      ------------------------------------------------------------ */}
      <section className="section-tablet" style={{
        display: 'none', width: '100%', height: '650px', position: 'relative',
        marginTop: '70px', flexDirection: 'column', justifyContent: 'center', padding: '0 50px'
      }}>
        <img src="/nhom04_royalrental/images/Banner.png" alt="Hero Tablet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.25)' }}></div>
        <div style={{ position: 'relative', zIndex: 10, color: 'white', textAlign: 'left', maxWidth: '600px' }}>
          <p style={{ fontSize: '16px', letterSpacing: '0.15em', marginBottom: '14px', textTransform: 'uppercase' }}>Dịch vụ cho thuê lễ phục cao cấp</p>
          <h1 style={{ fontSize: '60px', fontWeight: 'bold', marginBottom: '24px', lineHeight: '1.1' }}>Tỏa Sáng<br />Từng Khoảnh Khắc</h1>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="#best-seller"><button style={{ backgroundColor: '#7a33f2', color: 'white', padding: '15px 35px', borderRadius: '12px', fontWeight: 'bold', border: 'none' }}>KHÁM PHÁ →</button></Link>
          </div>
        </div>
      </section>


      {/* ------------------------------------------------------------
          BLOCK 3: DESKTOP (BÊ NGUYÊN SI CODE CỦA NGÂN - KHÔNG SỬA 1 CHỮ)
      ------------------------------------------------------------ */}
      <section className="section-desktop" style={{
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