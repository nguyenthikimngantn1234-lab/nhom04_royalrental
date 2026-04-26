"use client";
import React from 'react';
import Link from 'next/link';


export const FooterSimple = () => {
  return (
    <footer style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#F5F3FF',
      fontFamily: "'Be Vietnam Pro', sans-serif",
      marginTop: '120px'
    }}>
     
      {/* 1. NỘI DUNG CHÍNH */}
      <div style={{
        width: '100%',
        maxWidth: '1440px',
        padding: '80px 80px 60px 80px',
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr',
        gap: '60px',
        alignItems: 'start',
        boxSizing: 'border-box'
      }}>
       
        {/* Cột 1: Logo & Slogan */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Velixora Logo"
              style={{
                width: '180px',
                height: 'auto',
                display: 'block'
              }}
            />
          </Link>
          <p style={{ color: '#4B5563', fontSize: '15px', lineHeight: '1.8', margin: 0, maxWidth: '300px' }}>
            Velixora tự hào mang đến dịch vụ cho thuê lễ phục cao cấp, giúp bạn tỏa sáng trong mọi khoảnh khắc quan trọng nhất.
          </p>
         
          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="#" style={{ color: '#7a33f2' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" style={{ color: '#7a33f2' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" style={{ color: '#7a33f2' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
            </a>
          </div>
        </div>


        {/* Cột 2: Hỗ Trợ (Đã thêm nội dung mới) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ color: '#1e1535', fontSize: '18px', fontWeight: 'bold', margin: 0 }}>HỖ TRỢ</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Link href="/lien-he" style={{ color: '#4B5563', fontSize: '15px', textDecoration: 'none' }}>Liên Hệ</Link>
            <Link href="/ve-chung-toi" style={{ color: '#4B5563', fontSize: '15px', textDecoration: 'none' }}>Về Chúng Tôi</Link>
            <Link href="/tai-khoan" style={{ color: '#4B5563', fontSize: '15px', textDecoration: 'none' }}>Tài Khoản</Link>
            <Link href="/huong-dan-size" style={{ color: '#6b7280', fontSize: '15px', textDecoration: 'none' }}>Hướng dẫn chọn size</Link>
          </div>
        </div>


        {/* Cột 3: Chính Sách (Đã thêm nội dung mới) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ color: '#1e1535', fontSize: '18px', fontWeight: 'bold', margin: 0 }}>CHÍNH SÁCH</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Link href="/chinh-sach" style={{ color: '#6b7280', fontSize: '15px', textDecoration: 'none' }} className="hover:text-[#7a33f2] transition-colors">Điều Khoản & Điều Kiện</Link>
            <Link href="/chinh-sach" style={{ color: '#6b7280', fontSize: '15px', textDecoration: 'none' }} className="hover:text-[#7a33f2] transition-colors">Chính Sách Bảo Mật</Link>
            <Link href="/chinh-sach" style={{ color: '#6b7280', fontSize: '15px', textDecoration: 'none' }} className="hover:text-[#7a33f2] transition-colors">Chính Sách Cho Thuê</Link>
          </div>
        </div>


        {/* Cột 4: Liên Hệ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ color: '#1e1535', fontSize: '18px', fontWeight: 'bold', margin: 0 }}>LIÊN HỆ</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: '#4B5563', fontSize: '15px', lineHeight: '1.6' }}>
            <span>Địa chỉ: Số 1 Võ Văn Ngân, Thủ Đức, TP. Hồ Chí Minh</span>
            <span>Hotline: +84 909 909 909</span>
            <span>Email: contact@velixora.com</span>
          </div>
        </div>
      </div>


      {/* 2. BOTTOM BAR */}
      <div style={{ width: '100%', backgroundColor: '#1e1535', padding: '20px 0' }}>
        <div style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 80px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'white',
          fontSize: '14px',
          boxSizing: 'border-box'
        }}>
          <p style={{ margin: 0 }}>© 2026 Velixora. All Rights Reserved</p>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <img src="/images/Logo (1).png" alt="Visa" style={{ height: '24px', backgroundColor: 'white', padding: '2px 8px', borderRadius: '4px' }} />
            <img src="/images/Logo (2).png" alt="Napas" style={{ height: '24px', backgroundColor: 'white', padding: '2px 8px', borderRadius: '4px' }} />
            <img src="/images/Logo (3).png" alt="MoMo" style={{ height: '24px', backgroundColor: 'white', padding: '2px 8px', borderRadius: '4px' }} />
          </div>
        </div>
      </div>


    </footer>
  );
};

