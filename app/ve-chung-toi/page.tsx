"use client";
import React from 'react';
import { FooterSimple } from "@/components/FooterSimple";
import { Header } from "@/components/Header";

// --- Component Thẻ Thành Viên: Giữ nguyên logic của Ngân ---
const TeamMemberCard = ({ name, mssv, role, image }: { name: string, mssv: string, role: string, image: string }) => (
  <div
    style={{ width: '604px', height: '300px' }}
    className="team-card bg-white rounded-[24px] flex overflow-hidden shadow-[0_20px_50px_rgba(122,51,242,0.05)] border border-[#F5F3FF] hover:shadow-[0_20px_50px_rgba(122,51,242,0.1)] transition-all duration-500"
  >
    <div className="team-img-box w-[200px] h-full bg-[#F9FAFB] flex-shrink-0 relative overflow-hidden">
       <img
         src={`/nhom04_royalrental/images/${image}`}
         alt={name}
         className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
       />
    </div>

    <div className="team-info flex flex-col justify-center ml-[48px] pr-8 gap-3 text-left">
      <div className="flex flex-col gap-1">
        <h3 className="team-name text-[24px] font-bold text-[#1e1535] leading-tight whitespace-nowrap">{name}</h3>
        <p className="text-[15px] text-gray-500 font-medium mt-2">MSSV: {mssv}</p>
        <p className="text-[15px] text-gray-400">{role}</p>
      </div>
      
      <div className="mt-3 text-gray-400 hover:text-[#7a33f2] cursor-pointer transition-colors w-fit">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </div>
    </div>
  </div>
);


export default function AboutPage() {
  return (
    <>
      <Header />
      
      {/* 1. KHỐI ĐIỀU KHIỂN RESPONSIVE - FIXED THEO MỆNH LỆNH */}
      <style jsx global>{`
        .about-section { padding-top: 220px; }
        .hero-title { font-size: 96px; }
        .team-grid { grid-template-columns: repeat(2, 1fr); gap: 48px 60px; }

        /* Mobile */
        @media (max-width: 767px) {
          .about-section { padding-top: 120px !important; padding-left: 20px !important; padding-right: 20px !important; padding-bottom: 60px !important; }
          .hero-title { font-size: 48px !important; margin-bottom: 20px !important; }
          .image-stack-flex { gap: 15px !important; margin-bottom: 100px !important; transform: scale(0.85); }
          .team-h2 { font-size: 28px !important; margin-bottom: 50px !important; }
          
          .team-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
          .team-card { width: 100% !important; height: auto !important; flex-direction: column !important; }
          .team-img-box { width: 100% !important; height: 250px !important; }
          .team-info { ml: 0 !important; margin-left: 0 !important; padding: 25px !important; align-items: center !important; text-align: center !important; }
          .team-name { white-space: normal !important; }
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1279px) {
          .about-section { padding-left: 40px !important; padding-right: 40px !important; }
          .hero-title { font-size: 72px !important; }
          .team-grid { grid-template-columns: 1fr !important; justify-items: center; }
          .team-card { width: 100% !important; max-width: 604px; }
        }
      `}</style>

      <main className="w-full bg-white font-['Be_Vietnam_Pro'] overflow-x-hidden">
        
        <section className="about-section max-w-[1440px] mx-auto px-[80px] pb-40 text-center">
          
          <div className="mb-20">
            <span className="text-[#7a33f2] font-bold tracking-[0.2em] uppercase text-[15px]">Về chúng tôi</span>
            <h1 className="hero-title font-extrabold text-[#1e1535] leading-none mt-4 mb-8 tracking-tighter uppercase">VELIXORA</h1>
            <p className="max-w-[750px] mx-auto text-[20px] text-gray-500 leading-relaxed">
              Velixora là nền tảng cho thuê trang phục, giúp bạn dễ dàng lựa chọn và sở hữu diện mạo hoàn hảo cho mọi sự kiện.
            </p>
          </div>


          <div className="image-stack-flex flex justify-center items-center gap-[48px] mb-[200px]">
             <div style={{ width: '160px', height: '214px' }} className="rounded-[24px] overflow-hidden translate-y-8 shadow-lg">
                <img src="/nhom04_royalrental/images/image-3.png" className="w-full h-full object-cover" alt="Fashion 3" />
             </div>
             <div style={{ width: '240px', height: '321px' }} className="rounded-[32px] overflow-hidden z-10 shadow-2xl">
                <img src="/nhom04_royalrental/images/image-1.png" className="w-full h-full object-cover" alt="Fashion 1" />
             </div>
             <div style={{ width: '160px', height: '214px' }} className="rounded-[24px] overflow-hidden translate-y-8 shadow-lg">
                <img src="/nhom04_royalrental/images/image-2.png" className="w-full h-full object-cover" alt="Fashion 2" />
             </div>
          </div>


          <div className="w-full flex flex-col items-center">
            <h2 className="team-h2 text-[42px] font-bold text-[#1e1535] mb-24 uppercase tracking-widest">Thành viên nhóm</h2>
            
            <div className="w-full flex justify-center">
              <div className="team-grid grid">
                <TeamMemberCard name="Nguyễn Thị Kim Ngân" mssv="24126146" role="Frontend Developer" image="tv.png" />
                <TeamMemberCard name="Lê Yến Ngân" mssv="24126144" role="Frontend Developer" image="tv.png" />
                <TeamMemberCard name="Nguyễn Thị Thanh Giang" mssv="24126049" role="Frontend Developer" image="tv.png" />
                <TeamMemberCard name="Hà Kiều Khanh" mssv="24126095" role="Frontend Developer" image="tv.png" />
              </div>
            </div>
          </div>


        </section>


      </main>
      
      <FooterSimple />
    </>
  );
}