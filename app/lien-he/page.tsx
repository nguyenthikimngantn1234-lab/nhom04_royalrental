"use client";
import React from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { FooterSimple } from "@/components/FooterSimple";
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

// --- Component phụ cho Ô nhập liệu (Bo góc 8px) ---
const ContactInput = ({ label, placeholder, name, type = "text", required = false }: any) => (
  <div className="flex flex-col w-full" style={{ marginBottom: '32px' }}>
    <label className="text-[22px] font-bold text-[#1e1535]" style={{ marginBottom: "12px", display: "block" }}>
      {label} {required && <span className="text-[#FF4D4D] font-bold">*</span>}
    </label>
    <input 
      name={name}
      type={type} 
      placeholder={placeholder} 
      className="bg-[#FBFBFF] border border-[#EEEEFF] rounded-[8px] px-4 text-[16px] text-[#6B7280] outline-none focus:border-[#7a33f2] focus:ring-1 focus:ring-[#7a33f2]/20 transition-all shadow-sm"
      style={{ width: '100%', height: '56px' , padding: '0 16px'}}
      required={required}
    />
  </div>
);

// --- Component phụ cho Ô nội dung (Cao 120px) ---
const ContactTextarea = ({ label, placeholder, name, required = false }: any) => (
  <div className="flex flex-col w-full" style={{ marginBottom: '12px' }}>
    <label className="text-[22px] font-bold text-[#1e1535]" style={{ marginBottom: "12px", display: "block" }}>
      {label} {required && <span className="text-[#FF4D4D] font-bold">*</span>}
    </label>
    <textarea 
      name={name}
      placeholder={placeholder} 
      className="bg-[#FBFBFF] border border-[#EEEEFF] rounded-[8px] px-4 py-4 text-[16px] text-[#6B7280] placeholder:text-[#6B7280] placeholder:text-[16px] outline-none focus:border-[#7a33f2] focus:ring-1 focus:ring-[#7a33f2]/20 transition-all resize-none shadow-sm"
      style={{ 
        width: '100%', 
        height: '120px',
        padding: '16px',
        fontFamily: "'Be Vietnam Pro', sans-serif"
        }}
        required={required}
    />
  </div>
);

// --- Component phụ cho Thẻ thông tin Địa chỉ ---
const InfoCard = ({ title, detail }: { title: string; detail: React.ReactNode }) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-[24px] font-black text-[#1e1535] uppercase tracking-tight" style={{ fontFamily: "'Times New Roman', Times, serif" }}>{title}</h3>
    <div className="text-[20px] text-[#6B7280] leading-relaxed">
      {detail}
    </div>
  </div>
);

export default function ContactPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Swal.fire({
      title: "Gửi tin nhắn thành công!",
      text: "Velixora sẽ sớm liên hệ với bạn qua email nhé.",
      icon: "success",
      confirmButtonColor: "#7a33f2",
      confirmButtonText: "🏠 QUAY LẠI TRANG CHỦ",
      customClass: { popup: 'rounded-[24px]' }
    }).then((result) => {
      if (result.isConfirmed) {
        router.push('/');
      }
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Header />
      
      <main className="w-full bg-white font-['Be_Vietnam_Pro'] overflow-x-hidden mt-[107px]">
        
        {/* SECTION 1: BREADCRUMB */}
        <div className="w-full bg-[#F5F3FF] h-[56px] flex items-center border-b border-[#E5E0FF]">
          <div className="max-w-[1440px] w-full mx-auto px-[80px]">
            <nav className="text-[18px] flex gap-4 items-center text-[#7a33f2] font-semibold">
              <Link href="/" className="text-[#7a33f2] hover:opacity-80 transition-all flex items-center no-underline">
                <span style={{ fontSize: '18px' }}>TRANG CHỦ</span>
              </Link>
              <span className="opacity-80 text-[#7a33f2] font-semibold">/</span>
              <span className="uppercase text-[#1e1535] tracking-widest"> LIÊN HỆ</span>
            </nav>
          </div>
        </div>

        {/* SECTION 2: TIÊU ĐỀ */}
        <div className="w-full bg-white h-[205px] flex items-center">
          <div className="max-w-[1440px] w-full mx-auto px-[80px]">
            <div className="max-w-[800px]">
              <h1 className="text-[54px] font-black text-[#1e1535] leading-none mb-5 uppercase tracking-tight" style={{ fontFamily: "'Times New Roman', Times, serif" }}>LIÊN HỆ</h1>
              <p className="text-[20px] text-[#6B7280] leading-relaxed">
                Bạn có câu hỏi về dịch vụ cho thuê của chúng tôi? Chúng tôi rất muốn nghe từ bạn. 
                Hãy liên hệ và cùng chúng tôi tạo nên dịp đặc biệt khó quên.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: THÔNG TIN ĐỊA CHỈ */}
        <div className="w-full bg-[#F5F3FF] h-[205px] flex items-center border-y border-[#E5E0FF]">
          <div className="max-w-[1440px] w-full mx-auto px-[80px] grid grid-cols-4 gap-x-12">
            <InfoCard title="Địa Chỉ" detail={<p className="font-bold text-[#1e1535]">Số 1 Võ Văn Ngân,<br/>Thủ Đức, TP. Hồ Chí Minh</p>} />
            <InfoCard title="Điện Thoại" detail={<p className="font-bold text-[#1e1535]">+84 909 909 909</p>} />
            <InfoCard title="Email" detail={<p className="font-bold text-[#1e1535]">support@velixora.com</p>} />
            <InfoCard title="Giờ Làm Việc" detail={
              <p className="text-[#1e1535]">
                Thứ 2 - Thứ 6: <span className="font-bold">8:00 - 17:00</span><br/>
                Thứ 7 - CN: <span className="font-bold">7:00 - 22:00</span>
              </p>
            } />
          </div>
        </div>

        {/* SECTION 4: FORM & ẢNH */}
        <div className="w-full bg-white py-28">
          <div className="max-w-[1440px] mx-auto px-[80px] flex justify-between items-start gap-12">
            
            <div style={{ width: '584px' }} className="flex flex-col">
              <h2 className="text-[48px] font-black text-[#1e1535] mb-12 leading-tight uppercase" 
              style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                Gửi liên hệ
                </h2>
              
              <form onSubmit={handleSubmit} className="flex flex-col w-full">
                <div className="flex flex-col">
                  <ContactInput label="Họ và tên" placeholder="Nhập họ và tên" name="name" required={true} />
                  <ContactInput label="Số điện thoại" placeholder="Nhập số điện thoại" name="phone" required={true} type="tel" />
                  <ContactInput label="Email" placeholder="Địa chỉ email của bạn" name="email" required={true} type="email" />
                  <ContactInput label="Chủ đề" placeholder="Bộ sưu tập bạn đang quan tâm?" name="subject" required={true} />
                  <ContactTextarea label="Nội dung" placeholder="Cho chúng tôi biết thêm về yêu cầu của bạn" name="message" required={true} />
                </div>
                
                <button 
                  type="submit" 
                  style={{ 
                    background: '#7a33f2', 
                    height: '60px',
                    borderRadius: '8px',
                    boxShadow: '0 8px 20px rgba(122, 51, 242, 0.25)',
                    border: 'none',
                    color: '#FFFFFF',
                    marginTop: '28px',
                    fontSize: '24px',
                    fontWeight: '800',
                    fontFamily: "'Times New Roman', Times, serif"
                  }}
                  className="w-full uppercase tracking-widest hover:bg-[#6625cc] hover:-translate-y-0.5 transition-all active:scale-[0.98] shadow-lg flex items-center justify-center cursor-pointer"
                >
                  Gửi Tin Nhắn
                </button>
              </form>
            </div>

            <div 
              style={{ width: '580px', height: '740px' }} 
              className="rounded-[24px] overflow-hidden shadow-2xl border border-[#F5F3FF] mt-[14px]"
            >
              <img 
                src="/nhom04_royalrental/images/lienhe.png" 
                alt="Velixora Contact" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              />
            </div>
          </div>
        </div>

      </main>

      <FooterSimple />
    </>
  );
}