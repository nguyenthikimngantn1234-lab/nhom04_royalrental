"use client";
import React, { useState } from "react";
import { Header } from "@/components/Header";
import { FooterSimple } from "@/components/FooterSimple";
import { User, Package, Heart, Cog, LogOut, Pencil, ShoppingBag } from "lucide-react";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const [userData] = useState({
    fullName: "Kim Ngân", 
    email: "kimngan@example.com",
    phone: "0987 654 321",
    city: "Hồ Chí Minh",
  });

  const menuItems = [
    { id: "profile", label: "Hồ sơ cá nhân", icon: User },
    { id: "orders", label: "Quản lý đơn hàng", icon: Package },
    { id: "wishlist", label: "Yêu thích", icon: Heart },
    { id: "settings", label: "Cài đặt", icon: Cog },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-6 acc-content-header">
              <h2 className="text-[32px] font-bold text-[#1e1535] m-0">Hồ Sơ Cá Nhân</h2>
              <button 
                style={{ fontFamily: 'inherit' }}
                className="flex items-center gap-2 px-6 py-2 bg-[#F9F8FF] text-[#7a33f2] hover:bg-[#7a33f2] hover:text-white rounded-[10px] font-semibold text-[18px] border border-[#7a33f2] transition-all cursor-pointer outline-none"
              >
                <Pencil className="w-4 h-4" />
                Chỉnh sửa
              </button>
            </div>

            <div className="flex items-center gap-12 mb-10 acc-avatar-row">
              <div className="w-[90px] h-[90px] rounded-full overflow-hidden border-[4px] border-[#F9F8FF] shadow-sm shrink-0">
                <img 
                  src="https://ui-avatars.com/api/?name=Kim+Ngan&background=7a33f2&color=fff" 
                  alt="Avatar" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <h3 className="text-[34px] font-bold text-[#1e1535] m-0 acc-user-name">{userData.fullName}</h3>
                <p className="text-[#6B7280] text-[20px] mt-1.5">Thành viên từ tháng 4/2026</p>
              </div>
            </div>

            <h4 className="text-[24px] font-bold text-[#1e1535] mb-6 uppercase tracking-wider">Thông Tin Tài Khoản</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mb-10">
              <div className="flex flex-col gap-2.5">
                <label className="text-[22px] font-bold text-black">Họ và tên</label>
                <input type="text" defaultValue={userData.fullName} style={{ fontFamily: 'inherit' }} className="w-full h-[54px] bg-[#F9F8FF] text-[#4B5563] rounded-[14px] px-5 outline-none border border-transparent focus:border-[#7a33f2] transition-all text-[20px]" />
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="text-[22px] font-bold text-black">Email</label>
                <input type="email" defaultValue={userData.email} style={{ fontFamily: 'inherit' }} className="w-full h-[54px] bg-[#F9F8FF] text-[#4B5563] rounded-[14px] px-5 outline-none border border-transparent focus:border-[#7a33f2] transition-all text-[21px]" />
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="text-[22px] font-bold text-black">Số điện thoại</label>
                <input type="text" defaultValue={userData.phone} style={{ fontFamily: 'inherit' }} className="w-full h-[54px] bg-[#F9F8FF] text-[#4B5563] rounded-[14px] px-5 outline-none border border-transparent focus:border-[#7a33f2] transition-all text-[20px]" />
              </div>
            </div>

            <h4 className="text-[22px] font-bold text-[#1e1535] mb-6 uppercase tracking-wider">Địa Chỉ</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mb-8">
              <div className="flex flex-col gap-2.5">
                <label className="text-[22px] font-bold text-black">Tỉnh/ Thành phố</label>
                <input type="text" defaultValue={userData.city} style={{ fontFamily: 'inherit' }} className="w-full h-[54px] bg-[#F9F8FF] text-[#4B5563] rounded-[14px] px-5 outline-none border border-transparent focus:border-[#7a33f2] transition-all text-[20px]" />
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="text-[22px] font-bold text-black">Quận/ Huyện</label>
                <input type="text" defaultValue="Thủ Đức" style={{ fontFamily: 'inherit' }} className="w-full h-[54px] bg-[#F9F8FF] text-[#4B5563] rounded-[14px] px-5 outline-none border border-transparent focus:border-[#7a33f2] transition-all text-[20px]" />
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <label className="text-[22px] font-bold text-black">Địa chỉ cụ thể</label>
              <input type="text" defaultValue="Số 1 Võ Văn Ngân" style={{ fontFamily: 'inherit' }} className="w-full h-[54px] bg-[#F9F8FF] text-[#4B5563] rounded-[14px] px-5 outline-none border border-transparent focus:border-[#7a33f2] transition-all text-[20px]" />
            </div>
          </div>
        );
      case "orders":
        return (
          <div className="flex flex-col items-center justify-center py-20 animate-in fade-in zoom-in-95 duration-500">
            <ShoppingBag className="w-16 h-16 text-[#7a33f2] mb-4 opacity-20" />
            <h2 className="text-[30px] font-bold text-[#1e1535] text-center">Bạn chưa có đơn hàng nào</h2>
            <p className="text-[#6B7280] mt-2 text-[20px] text-center">Hãy tiếp tục khám phá các sản phẩm tại Velixora nhé!</p>
          </div>
        );
      case "wishlist":
        return (
          <div className="flex flex-col items-center justify-center py-20 animate-in fade-in zoom-in-95 duration-500">
            <Heart className="w-16 h-16 text-pink-400 mb-4 opacity-20" />
            <h2 className="text-[30px] font-bold text-[#1e1535] text-center">Danh sách yêu thích trống</h2>
            <p className="text-[#6B7280] mt-2 text-[20px] text-center">Lưu lại những món đồ bạn ưng ý để mua sau.</p>
          </div>
        );
      default:
        return <div className="p-20 text-center text-gray-400 text-[30px] font-black">Đang cập nhật tính năng...</div>;
    }
  };

  return (
    <>
      <Header />
      
      {/* 1. KHỐI ĐIỀU KHIỂN RESPONSIVE - FIXED SIDEBAR HEIGHT */}
      <style jsx global>{`
        .acc-main-flex { display: flex; flex-direction: row; items-start: start; width: 100%; }
        
        /* FIXED: Chỉnh chiều cao Sidebar trên Desktop */
        .acc-sidebar { 
          width: 340px; 
          margin-right: 60px; 
          height: fit-content !important; /* Quan trọng nhất: cao theo nội dung */
          flex-shrink: 0;
        }
        
        .acc-content-panel { flex: 1; min-width: 0; padding: 50px 60px; }

        /* Mobile */
        @media (max-width: 767px) {
          .acc-main-wrapper { pt: 100px !important; padding-top: 100px !important; }
          .acc-header-section { mb: 40px !important; margin-bottom: 40px !important; text-align: center; }
          .acc-header-h1 { font-size: 32px !important; }
          .acc-header-p { font-size: 18px !important; }
          
          .acc-main-flex { flex-direction: column !important; }
          .acc-sidebar { width: 100% !important; margin-right: 0 !important; margin-bottom: 40px !important; padding: 20px !important; height: auto !important; }
          .acc-sidebar button { font-size: 18px !important; padding: 12px 16px !important; margin-bottom: 15px !important; }
          .acc-sidebar button svg { width: 20px !important; height: 20px !important; }
          
          .acc-content-panel { width: 100% !important; padding: 30px 20px !important; border-radius: 20px !important; }
          .acc-content-header { flex-direction: column !important; gap: 20px !important; align-items: start !important; }
          .acc-content-header h2 { font-size: 24px !important; }
          
          .acc-avatar-row { gap: 20px !important; }
          .acc-avatar-row div:first-child { width: 70px !important; height: 70px !important; }
          .acc-user-name { font-size: 24px !important; }
          .acc-avatar-row p { font-size: 16px !important; }
        }

        /* Tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          .acc-main-flex { flex-direction: column !important; }
          .acc-sidebar { width: 100% !important; margin-right: 0 !important; margin-bottom: 50px !important; }
          .acc-content-panel { padding: 40px !important; }
        }
      `}</style>

      <main className="acc-main-wrapper w-full min-h-screen bg-[#FDFDFF] pt-[130px] pb-24" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        <div className="max-w-[1280px] mx-auto px-8 lg:px-[80px]">
          
          <div className="acc-header-section mb-[80px]">
            <h1 className="acc-header-h1 text-[40px] font-black text-[#1e1535] uppercase m-0 tracking-tighter">Tài khoản của tôi</h1>
            <p className="acc-header-p text-[#6B7280] text-[24px] mt-2 font-medium opacity-80">Quản lý thông tin cá nhân và hành trình mua sắm của bạn</p>
          </div>

          <div className="acc-main-flex">
            {/* SIDEBAR MENU */}
            <div
              className="acc-sidebar bg-white rounded-[26px] p-8 shadow-[0_12px_40px_rgba(122,51,242,0.15)] border border-[#7a33f2]/30"
            >
              <div className="flex flex-col">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    style={{ marginBottom: "32px", fontFamily: 'inherit' }}
                    className={`flex items-center w-full px-6 py-4 rounded-[16px] text-[24px] font-bold transition-all duration-300 border-none cursor-pointer outline-none ${
                      activeTab === item.id
                      ? "bg-[#7a33f2] text-white shadow-[0_8px_20px_rgba(122,51,242,0.3)]"
                      : "bg-transparent text-[#1e1535] hover:bg-[#F9F8FF] hover:text-[#7a33f2]"
                    }`}
                  >
                    <item.icon
                      className="w-[24px] h-[24px]"
                      style={{ marginRight: "16px" }}
                    />
                    <span>{item.label}</span>
                  </button>
                ))}
                
                <div className="h-[1px] bg-[#F4F3FB] mb-8"></div>
                
                <button 
                  style={{ fontFamily: 'inherit' }}
                  className="flex items-center w-full px-6 py-4 text-[#EF4444] font-bold bg-transparent border-none cursor-pointer hover:bg-red-50 rounded-[16px] text-[24px] outline-none transition-all duration-300"
                >
                  <LogOut className="w-[24px] h-[24px]" style={{ marginRight: "16px" }} />
                  <span>Đăng xuất</span>
                </button>
              </div>
            </div>

            {/* CONTENT AREA */}
            <div className="acc-content-panel bg-white rounded-[26px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-200">
              {renderContent()}
            </div>
          </div>
        </div>
      </main>
      <FooterSimple />
    </>
  );
}