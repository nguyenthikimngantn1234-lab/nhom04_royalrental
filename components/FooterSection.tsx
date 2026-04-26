"use client";
import React from 'react';
import Link from 'next/link';


export const FooterSection = () => {
  return (
    <footer style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', fontFamily: "'Be Vietnam Pro', sans-serif" }}>
     
      {/* 1. KHỐI NEWSLETTER TÍM NHẠT */}
      <div style={{ width: '100%', maxWidth: '1440px', padding: '80px 80px', boxSizing: 'border-box' }}>
        <div style={{ backgroundColor: '#f3edff', borderRadius: '40px', padding: '80px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h2 style={{ color: '#1e1535', fontSize: '48px', fontWeight: 'bold', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Những xu hướng lễ phục mới
          </h2>
          <p style={{ color: '#5d4f7a', fontSize: '20px', maxWidth: '700px', margin: '0 0 45px 0', lineHeight: '1.6', opacity: 0.8 }}>
            Nhận thông tin về bộ sưu tập độc quyền, ưu đãi đặc biệt <br /> và mẹo phối đồ tinh tế ngay trong hộp thư của bạn.
          </p>
         
          <div style={{
            display: 'flex',
            width: '100%',
            maxWidth: '650px',
            alignItems: 'center',
            gap: '12px',
            margin: '0 auto'
          }}>
            <input
              type="email"
              placeholder="Nhập email của bạn"
              style={{
                flex: 1,
                padding: '16px 25px',
                borderRadius: '12px',
                border: 'none',
                fontSize: '16px',
                outline: 'none',
                backgroundColor: 'white',
                color: '#1e1535',
                boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
              }}
            />
            <Link href="/dang-ky" style={{ textDecoration: 'none' }}>
              <button style={{
                backgroundColor: '#7a33f2',
                color: 'white',
                padding: '16px 35px',
                borderRadius: '12px',
                border: 'none',
                fontWeight: 'bold',
                fontSize: '16px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s'
              }}>
                ĐĂNG KÝ NGAY
              </button>
            </Link>
          </div>
        </div>
      </div>


      {/* 2. NỘI DUNG FOOTER CHÍNH */}
      <div style={{
        width: '100%',
        maxWidth: '1440px',
        padding: '0 80px 80px 80px',
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr',
        gap: '60px',
        alignItems: 'start',
        boxSizing: 'border-box'
      }}>
       
        {/* Cột 1: Logo & Mạng xã hội */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <Link href="/">
            <img src="/nhom04_royalrental/images/Logo.png" alt="Velixora Logo" style={{ width: '180px', height: 'auto', cursor: 'pointer' }} />
          </Link>
          <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
            Velixora tự hào mang đến dịch vụ cho thuê lễ phục cao cấp, giúp bạn tỏa sáng trong mọi khoảnh khắc quan trọng nhất của cuộc đời.
          </p>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="#" style={{ color: '#7a33f2' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" style={{ color: '#7a33f2' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" style={{ color: '#7a33f2' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
            </a>
          </div>
        </div>


        {/* Cột 2: Hỗ Trợ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ color: '#1e1535', fontSize: '18px', fontWeight: 'bold', margin: 0 }}>HỖ TRỢ</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Link href="/lien-he" style={{ color: '#6b7280', fontSize: '15px', textDecoration: 'none' }}>Liên Hệ</Link>
            <Link href="/ve-chung-toi" style={{ color: '#6b7280', fontSize: '15px', textDecoration: 'none' }}>Về Chúng Tôi</Link>
            <Link href="/tai-khoan" style={{ color: '#6b7280', fontSize: '15px', textDecoration: 'none' }}>Tài Khoản</Link>
            <Link href="/huong-dan-size" style={{ color: '#6b7280', fontSize: '15px', textDecoration: 'none' }}>Hướng dẫn chọn size</Link>
          </div>
        </div>


        {/* Cột 3: Chính Sách - ĐÃ CẬP NHẬT LINK DẪN ĐẾN TRANG CHÍNH SÁCH */}
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: '#6b7280', fontSize: '15px' }}>
            <span>Số 1 Võ Văn Ngân, Thủ Đức, TP. HCM</span>
            <span>+84 909 909 909</span>
            <span>support@velixora.com</span>
          </div>
        </div>
      </div>


      {/* 3. BOTTOM BAR TÍM ĐẬM */}
      <div style={{ width: '100%', backgroundColor: '#1e1535', padding: '20px 0' }}>
        <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '0 80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', fontSize: '14px', boxSizing: 'border-box' }}>
          <p style={{ margin: 0 }}>© 2026 Velixora. All Rights Reserved</p>
         
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <img src="/nhom04_royalrental/images/Logo (1).png" alt="Visa" style={{ height: '24px', backgroundColor: 'white', padding: '2px 8px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }} />
            <img src="/nhom04_royalrental/images/Logo (2).png" alt="Napas" style={{ height: '24px', backgroundColor: 'white', padding: '2px 8px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }} />
            <img src="/nhom04_royalrental/images/Logo (3).png" alt="MoMo" style={{ height: '24px', backgroundColor: 'white', padding: '2px 8px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }} />
          </div>
        </div>
      </div>


    </footer>
  );
};

