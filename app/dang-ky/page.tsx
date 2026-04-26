"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Thêm dòng này để chuyển trang mượt mà

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter(); // Khởi tạo router

  // --- PHẦN THÊM MỚI: Logic lưu dữ liệu ---
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Thu thập dữ liệu từ các ô input
    const formData = new FormData(e.currentTarget);
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;

    if (fullName && email) {
      const userData = {
        fullName: fullName,
        email: email,
        phone: "0987 654 321", // Số mặc định
        city: "Hồ Chí Minh"
      };

      // Lưu vào "ngăn kéo" trình duyệt
      localStorage.setItem("userProfile", JSON.stringify(userData));
      
      // Chuyển hướng sang trang tài khoản ngay lập tức
      router.push("/tai-khoan");
    }
  };
  // ----------------------------------------

  return (
    <main className="w-full min-h-screen flex bg-white font-['Be_Vietnam_Pro']">
      
      {/* CỘT TRÁI: FORM ĐĂNG KÝ */}
      <div className="w-1/2 flex flex-col justify-center items-center py-12">
        <div className="w-full px-[120px] lg:px-[160px] flex flex-col gap-[16px] box-border">

          <div className="mb-[8px]">
            <Image src="/images/logo.png" alt="Velixora Logo" width={120} height={75} className="object-contain" />
          </div>

          <h1 className="text-[32px] font-black text-[#1e1535] uppercase m-0 leading-tight">
            ĐĂNG KÝ
          </h1>

          {/* FORM ĐĂNG KÝ - Đã gắn hàm handleRegister */}
          <form onSubmit={handleRegister} className="flex flex-col gap-[16px] w-full">
            {/* Họ và tên - Thêm name="fullName" */}
            <input
              name="fullName"
              type="text"
              required
              placeholder="Họ và tên"
              className="h-[56px] w-full bg-[#F9F8FF] border border-[#EEEEFF] rounded-[12px] px-6 text-[15px] outline-none focus:ring-1 focus:ring-[#7a33f2]/20 transition-all"
            />

            {/* Email/ Username - Thêm name="email" */}
            <input
              name="email"
              type="text"
              required
              placeholder="Email/ Username"
              className="h-[56px] w-full bg-[#F9F8FF] border border-[#EEEEFF] rounded-[12px] px-6 text-[15px] outline-none focus:ring-1 focus:ring-[#7a33f2]/20 transition-all"
            />

            {/* Mật khẩu */}
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mật khẩu"
                className="h-[56px] w-full bg-[#F9F8FF] border border-[#EEEEFF] rounded-[12px] px-6 text-[15px] outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#7a33f2] bg-transparent border-none cursor-pointer"
              >
                {showPassword ? "👁️" : " "}
              </button>
            </div>

            {/* Nhập lại mật khẩu */}
            <div className="relative w-full">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Nhập lại mật khẩu"
                className="h-[56px] w-full bg-[#F9F8FF] border border-[#EEEEFF] rounded-[12px] px-6 text-[15px] outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#7a33f2] bg-transparent border-none cursor-pointer"
              >
                {showConfirmPassword ? "👁️" : "  "}
              </button>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <label className="flex gap-2 items-center text-[13px] text-[#6B7280] cursor-pointer">
                <input type="checkbox" required className="w-4 h-4 accent-[#7a33f2]" />
                <span>
                  Tôi đồng ý với <Link href="/terms" className="text-[#7a33f2] underline">Điều khoản</Link> và <Link href="/privacy" className="text-[#7a33f2] underline">Chính sách bảo mật</Link> <span className="text-red-500">*</span>
                </span>
              </label>

              <label className="flex gap-2 items-center text-[13px] text-[#6B7280] cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-[#7a33f2]" />
                <span>Đăng ký nhận bản tin và ưu đãi độc quyền</span>
              </label>
            </div>

            <button 
              type="submit"
              className="h-[56px] w-full bg-[#7a33f2] text-white rounded-[12px] font-bold text-[16px] uppercase tracking-widest hover:bg-[#6625cc] transition-all shadow-lg shadow-purple-100 border-none cursor-pointer active:scale-[0.98]"
            >
              Đăng Ký
            </button>
          </form>

          {/* ... Phần Hoặc đăng ký với (Giữ nguyên) ... */}
          <div className="flex items-center gap-4 my-4">
            <div className="flex-1 h-[1px] bg-gray-100"></div>
            <span className="text-[12px] text-gray-400 font-bold uppercase">Hoặc đăng ký với</span>
            <div className="flex-1 h-[1px] bg-gray-100"></div>
          </div>

          <div className="flex gap-[8px]">
            <button className="flex-1 h-[52px] border border-gray-100 bg-white rounded-[12px] flex items-center justify-center gap-2 hover:bg-gray-50 transition-all cursor-pointer">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" width={20} alt="google" />
              <span className="font-semibold text-[#1e1535]">Google</span>
            </button>

            <button className="flex-1 h-[52px] border border-gray-100 bg-white rounded-[12px] flex items-center justify-center gap-2 hover:bg-gray-50 transition-all cursor-pointer">
              <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" width={20} alt="facebook" />
              <span className="font-semibold text-[#1e1535]">Facebook</span>
            </button>
          </div>

          <p className="text-center mt-4 text-[14px] text-[#6B7280]">
            Bạn đã có tài khoản?
            <Link href="/dang-nhap" className="ml-2 text-[#7a33f2] font-black uppercase hover:underline">
              ĐĂNG NHẬP
            </Link>
          </p>
        </div>
      </div>

      <div className="w-1/2 relative bg-[#F9F8FF]">
        <Image src="/images/image-4.png" alt="Velixora Wedding Decor" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#7a33f2]/10 backdrop-blur-[0.5px]"></div>
      </div>

    </main>
  );
}