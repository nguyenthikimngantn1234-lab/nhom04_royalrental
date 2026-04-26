"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Thêm router để chuyển trang


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();


  // --- PHẦN THÊM MỚI: Xử lý Đăng Nhập ---
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    // 1. Lấy dữ liệu từ input
    const formData = new FormData(e.currentTarget);
    const emailInput = formData.get("email") as string;


    // 2. Kiểm tra xem đã có dữ liệu đăng ký trước đó chưa
    const savedData = localStorage.getItem("userProfile");
   
    if (savedData) {
      const existingUser = JSON.parse(savedData);
      // Nếu email khớp với email đã đăng ký, mình giữ nguyên Profile đó
      if (existingUser.email === emailInput) {
        router.push("/tai-khoan");
        return;
      }
    }


    // 3. Nếu chưa có hoặc email mới, tạo một Profile giả lập cho phiên đăng nhập này
    const newUser = {
      fullName: "Thành viên Velixora", // Tên mặc định khi đăng nhập
      email: emailInput,
      phone: "0987 654 321",
      city: "Hồ Chí Minh"
    };
   
    localStorage.setItem("userProfile", JSON.stringify(newUser));
    router.push("/tai-khoan");
  };
  // ------------------------------------


  return (
    <main className="w-full min-h-screen flex bg-white font-['Be_Vietnam_Pro']">
     
      {/* CỘT TRÁI */}
      <div className="w-1/2 flex flex-col justify-center items-center py-12">
        <div className="w-full max-w-[520px] mx-auto flex flex-col gap-[16px]">


          {/* LOGO */}
          <div className="mb-[8px]">
            <Image
              src="/images/logo.png"
              alt="Velixora Logo"
              width={120}
              height={75}
            />
          </div>


          {/* TITLE */}
          <h1 className="text-[32px] font-black text-[#1e1535] uppercase m-0 leading-tight">
            Chào mừng bạn trở lại
          </h1>


          <p className="text-[#6B7280] text-[15px] m-0">
            Đăng nhập vào tài khoản của bạn để tiếp tục
          </p>


          {/* FORM - Thêm onSubmit={handleLogin} */}
          <form onSubmit={handleLogin} className="flex flex-col gap-[16px] w-full">
            <input
              name="email" // Thêm name để lấy dữ liệu
              type="text"
              required
              placeholder="Email/ Username"
              className="h-[56px] bg-[#F9F8FF] border border-[#EEEEFF] rounded-[12px] px-6 outline-none focus:ring-1 focus:ring-[#7a33f2]/20 transition-all"
            />


            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mật khẩu"
                required
                className="h-[56px] w-full bg-[#F9F8FF] border border-[#EEEEFF] rounded-[12px] px-6 outline-none focus:ring-1 focus:ring-[#7a33f2]/20 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer"
              >
                {showPassword ? "👁️" : ""}
              </button>
            </div>


            <div className="flex justify-between text-sm text-gray-500">
              <label className="flex gap-2 items-center cursor-pointer">
                <input type="checkbox" className="accent-[#7a33f2]" />
                Ghi nhớ đăng nhập
              </label>


              <Link href="/quen-mat-khau" className="hover:text-[#7a33f2] transition-colors">
                Quên mật khẩu?
              </Link>
            </div>


            <button
              type="submit"
              className="h-[56px] bg-[#7a33f2] text-white rounded-[12px] font-bold hover:bg-[#6625cc] transition-all cursor-pointer border-none shadow-lg shadow-purple-100 uppercase tracking-widest"
            >
              Đăng nhập
            </button>
          </form>


          {/* DIVIDER */}
          <div className="flex items-center gap-4 my-4">
            <div className="flex-1 h-[1px] bg-gray-100"></div>
            <span className="text-xs text-gray-400 font-bold uppercase">HOẶC</span>
            <div className="flex-1 h-[1px] bg-gray-100"></div>
          </div>


          {/* SOCIAL */}
          <div className="flex gap-[16px]">
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
            Chưa có tài khoản?
            <Link href="/dang-ky" className="ml-2 text-[#7a33f2] font-black uppercase hover:underline">
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>


      {/* CỘT PHẢI (ẢNH) */}
      <div className="w-1/2 relative bg-[#F9F8FF] overflow-hidden">
        <Image
          src="/images/image-4.png"
          alt="Wedding"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#7a33f2]/10 backdrop-blur-[0.5px]"></div>
      </div>


    </main>
  );
}

