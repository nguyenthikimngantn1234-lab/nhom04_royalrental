"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { FooterSimple } from "@/components/FooterSimple";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";


export default function CheckoutPage() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);


  const [cartItems, setCartItems] = useState<any[]>([]);
  const [userData, setUserData] = useState({ fullName: "", phone: "" });
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "bank" | "momo">("cod");


  const [provinces, setProvinces] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [selectedProvince, setSelectedProvince] = useState("");


  useEffect(() => {
    setIsMounted(true);
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCartItems(JSON.parse(savedCart));
    const savedUser = localStorage.getItem("userProfile");
    if (savedUser) setUserData(JSON.parse(savedUser));


    fetch("https://provinces.open-api.vn/api/p/")
      .then(res => res.json())
      .then(data => setProvinces(data))
      .catch(err => console.error("Lỗi lấy tỉnh:", err));
  }, []);


  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.value;
    setSelectedProvince(code);
    setDistricts([]);
    if (code) {
      fetch(`https://provinces.open-api.vn/api/p/${code}?depth=2`)
        .then(res => res.json())
        .then(data => setDistricts(data.districts || []));
    }
  };


  const handleOrderComplete = () => {
    setShowSuccessModal(true);
    localStorage.removeItem("cart");
  };


  const subtotal = cartItems.reduce((acc, item) => {
    const price = typeof item.price === 'string'
      ? Number(item.price.replace(/[^0-9]/g, ""))
      : item.price || 0;
    return acc + (price * (item.qty || 1));
  }, 0);


  const discount = subtotal * 0.1;
  const total = subtotal - discount;


  if (!isMounted) return null;


  return (
    <>
      <Header />
      {/* ÉP TOÀN TRANG DÙNG TIMES NEW ROMAN */}
      <main className="w-full min-h-screen bg-[#FDFDFF] pt-[150px] pb-24 text-[#1e1535]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
       
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>
         
          <div style={{ marginBottom: "48px", width: "100%" }}>
            <h1 className="text-[48px] font-black uppercase tracking-tighter m-0 text-[#1e1535]">THANH TOÁN</h1>
          </div>


          <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", width: "100%", gap: "40px" }}>
           
            {/* CỘT TRÁI */}
            <div style={{ flex: "1 1 0%", minWidth: 0, display: "flex", flexDirection: "column", gap: "40px" }}>
             
              {/* THÔNG TIN ĐẶT HÀNG */}
              <div style={{ backgroundColor: "white", borderRadius: "40px", padding: "48px", boxShadow: "0 8px 30px rgba(0,0,0,0.04)", border: "1px solid #E9E4FF" }}>
                <h3 className="text-[26px] font-black uppercase mb-10 border-b border-[#F0EEFF] pb-6 text-[#1e1535] m-0">THÔNG TIN ĐẶT HÀNG</h3>
                <div className="space-y-10">
                  <div className="grid grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="block text-[18px] font-bold text-[#1e1535]">Họ và tên *</label>
                      <input type="text" defaultValue={userData.fullName} className="w-full h-[64px] bg-[#F9F8FF] border border-[#EEEEFF] rounded-2xl px-6 text-[18px] outline-none focus:border-[#7a33f2] transition-all text-[#1e1535]" style={{ fontFamily: "inherit" }} />
                    </div>
                    <div className="space-y-3">
                      <label className="block text-[18px] font-bold text-[#1e1535]">Số điện thoại *</label>
                      <input type="tel" defaultValue={userData.phone} className="w-full h-[64px] bg-[#F9F8FF] border border-[#EEEEFF] rounded-2xl px-6 text-[18px] outline-none focus:border-[#7a33f2] transition-all text-[#1e1535]" style={{ fontFamily: "inherit" }} />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="block text-[18px] font-bold text-[#1e1535]">Địa chỉ *</label>
                    <div className="flex gap-6">
                      <select onChange={handleProvinceChange} className="h-[64px] flex-1 bg-[#F9F8FF] border border-[#EEEEFF] rounded-2xl px-6 text-[18px] outline-none focus:border-[#7a33f2] cursor-pointer text-[#1e1535]" style={{ fontFamily: "inherit" }}>
                        <option value="">Chọn Tỉnh / Thành phố</option>
                        {provinces.map((p: any) => <option key={p.code} value={p.code}>{p.name}</option>)}
                      </select>
                      <select disabled={!selectedProvince} className="h-[64px] flex-1 bg-[#F9F8FF] border border-[#EEEEFF] rounded-2xl px-6 text-[18px] outline-none focus:border-[#7a33f2] cursor-pointer text-[#1e1535]" style={{ fontFamily: "inherit" }}>
                        <option value="">Quận / Huyện</option>
                        {districts.map((d: any) => <option key={d.code} value={d.code}>{d.name}</option>)}
                      </select>
                    </div>
                    <input type="text" placeholder="Số nhà / Tên đường" className="w-full h-[64px] bg-[#F9F8FF] border border-[#EEEEFF] rounded-2xl px-6 text-[18px] outline-none focus:border-[#7a33f2] text-[#1e1535]" style={{ fontFamily: "inherit" }} />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-[18px] font-bold text-[#1e1535]">Ghi chú</label>
                    <textarea placeholder="Ghi chú thêm cho đơn hàng..." className="w-full h-[160px] bg-[#F9F8FF] border border-[#EEEEFF] rounded-2xl px-6 py-5 text-[18px] resize-none outline-none focus:border-[#7a33f2] text-[#1e1535]" style={{ fontFamily: "inherit" }} />
                  </div>
                </div>
              </div>


              {/* PHƯƠNG THỨC THANH TOÁN */}
              <div style={{ backgroundColor: "white", borderRadius: "40px", padding: "48px", boxShadow: "0 8px 30px rgba(0,0,0,0.04)", border: "1px solid #E9E4FF" }}>
                <h3 className="text-[26px] font-black uppercase mb-10 border-b border-[#F0EEFF] pb-6 text-[#1e1535] m-0">PHƯƠNG THỨC THANH TOÁN</h3>
               
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", listStyle: "none", margin: 0, padding: 0 }}>
                 
                  {/* COD */}
                  <div
                    onClick={() => setPaymentMethod("cod")}
                    style={{
                      display: "flex", alignItems: "center", gap: "24px", padding: "20px 32px",
                      borderRadius: "24px", cursor: "pointer",
                      backgroundColor: paymentMethod === "cod" ? "#F9F8FF" : "transparent",
                    }}
                  >
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: "2px solid #7a33f2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {paymentMethod === "cod" && <div style={{ width: "16px", height: "16px", backgroundColor: "#7a33f2", borderRadius: "50%" }} />}
                    </div>
                    <span className="font-bold text-[20px] text-[#1e1535] m-0 leading-none">Thanh toán khi nhận hàng (COD)</span>
                  </div>


                  {/* BANK */}
                  <div
                    style={{
                      display: "flex", flexDirection: "column", borderRadius: "24px",
                      backgroundColor: paymentMethod === "bank" ? "#F9F8FF" : "transparent"
                    }}
                  >
                    <div onClick={() => setPaymentMethod("bank")} style={{ display: "flex", alignItems: "center", gap: "24px", padding: "20px 32px", cursor: "pointer" }}>
                      <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: "2px solid #7a33f2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {paymentMethod === "bank" && <div style={{ width: "16px", height: "16px", backgroundColor: "#7a33f2", borderRadius: "50%" }} />}
                      </div>
                      <span className="font-bold text-[20px] text-[#1e1535] m-0 leading-none">Chuyển khoản Ngân hàng</span>
                    </div>
                    {paymentMethod === "bank" && (
                      <div className="animate-in fade-in slide-in-from-top-2" style={{ display: "flex", alignItems: "center", gap: "32px", paddingBottom: "32px", paddingRight: "32px", paddingLeft: "88px" }}>
                        <div style={{ backgroundColor: "white", padding: "12px", borderRadius: "24px", border: "1px solid #E9E4FF", flexShrink: 0 }}>
                          <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=VELIXORA_BANK" alt="QR" style={{ width: "120px", height: "120px" }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px", whiteSpace: "nowrap" }}>
                          <span className="text-[#7a33f2] font-black text-[24px] leading-none m-0">STK: 1234 5678</span>
                          <span className="text-[#1e1535] font-bold text-[20px] m-0">VELIXORA-NHÓM 4</span>
                          <span className="text-gray-500 text-[15px] font-bold uppercase tracking-wide m-0">Nội dung: <span className="text-[#7a33f2]">VELIXORA + SĐT</span></span>
                        </div>
                      </div>
                    )}
                  </div>


                  {/* MOMO */}
                  <div
                    style={{
                      display: "flex", flexDirection: "column", borderRadius: "24px",
                      backgroundColor: paymentMethod === "momo" ? "#F9F8FF" : "transparent"
                    }}
                  >
                    <div onClick={() => setPaymentMethod("momo")} style={{ display: "flex", alignItems: "center", gap: "24px", padding: "20px 32px", cursor: "pointer" }}>
                      <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: "2px solid #7a33f2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {paymentMethod === "momo" && <div style={{ width: "16px", height: "16px", backgroundColor: "#7a33f2", borderRadius: "50%" }} />}
                      </div>
                      <span className="font-bold text-[20px] text-[#1e1535] m-0 leading-none">Ví điện tử MoMo</span>
                    </div>
                    {paymentMethod === "momo" && (
                      <div className="animate-in fade-in slide-in-from-top-2" style={{ display: "flex", alignItems: "center", gap: "32px", paddingBottom: "32px", paddingRight: "32px", paddingLeft: "88px" }}>
                        <div style={{ backgroundColor: "white", padding: "12px", borderRadius: "24px", border: "1px solid #E9E4FF", flexShrink: 0 }}>
                          <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=MOMO_0909909909" alt="QR" style={{ width: "120px", height: "120px" }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px", whiteSpace: "nowrap" }}>
                          <span className="text-[#7a33f2] font-black text-[24px] leading-none m-0">SĐT: 0909 909 909</span>
                          <span className="text-[#1e1535] font-bold text-[20px] m-0">VELIXORA-NHÓM 4</span>
                          <span className="text-gray-500 text-[15px] font-bold uppercase tracking-wide m-0">Nội dung: <span className="text-[#7a33f2]">VELIXORA + SĐT</span></span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>


                {/* NÚT CHÍNH */}
                <button
                  onClick={handleOrderComplete}
                  style={{
                    marginTop: "48px",
                    width: "100%",
                    height: "76px",
                    backgroundColor: "#7a33f2",
                    color: "white",
                    borderRadius: "24px",
                    fontSize: "22px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 10px 25px rgba(122,51,242,0.3)",
                    fontFamily: "'Times New Roman', Times, serif"
                  }}
                >
                  Hoàn tất thanh toán
                </button>
              </div>
            </div>


            {/* CỘT PHẢI */}
            <div style={{ width: "500px", flexShrink: 0, backgroundColor: "white", borderRadius: "40px", padding: "40px", boxShadow: "0 8px 30px rgba(0,0,0,0.04)", border: "1px solid #E9E4FF", position: "sticky", top: "150px" }}>
              <h3 className="text-[24px] font-black uppercase mb-8 text-[#1e1535] m-0">CHI TIẾT ĐƠN HÀNG</h3>
             
              <div className="space-y-8 mb-10">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="flex gap-[16px] items-start">
                    <img 
                      src={item.image.startsWith('http') || item.image.startsWith('/nhom04_royalrental') 
                        ? item.image 
                        : `/nhom04_royalrental${item.image}`} 
                      style={{ width: '90px', height: '120px' }} 
                      className="object-cover rounded-[8px] border shadow-sm flex-shrink-0" 
                      alt="" 
                    />
                    <div className="flex-1 space-y-2 pt-1">
                      <p className="font-bold text-[17px] text-[#1e1535] leading-tight m-0">{item.title}</p>
                      <p className="text-[14px] text-gray-500 m-0">Size: {item.size} - {item.qty} bộ - {item.days || 3} ngày</p>
                      <p className="font-black text-[20px] text-[#7a33f2] m-0">{((typeof item.price === 'string' ? Number(item.price.replace(/[^0-9]/g, "")) : item.price || 0) * (item.qty || 1)).toLocaleString()}đ</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t-2 border-dashed border-[#F0EEFF] pt-8 space-y-5">
                <div className="flex justify-between text-[18px] text-gray-600 font-medium">
                  <span>Tạm tính</span>
                  <span className="text-[#1e1535] font-bold">{subtotal.toLocaleString()}đ</span>
                </div>
                <div className="flex justify-between text-[18px] text-[#7a33f2] font-medium">
                  <span>Giảm giá (10%)</span>
                  <span className="font-bold">- {discount.toLocaleString()}đ</span>
                </div>
                <div className="flex justify-between items-center pt-8 border-t border-[#F0EEFF]">
                  <span className="text-[20px] font-black uppercase text-gray-400 m-0">TỔNG CỘNG</span>
                  <span className="text-[40px] font-black text-[#7a33f2] tracking-tighter leading-none m-0">{total.toLocaleString()}đ</span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </main>


      {/* MODAL ĐẶT HÀNG THÀNH CÔNG ĐÃ ĐƯỢC ÉP CHÍNH GIỮA 100% */}
      <AnimatePresence>
        {showSuccessModal && (
          <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "auto" }}>
            {/* Lớp nền đen mờ */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(30, 21, 53, 0.6)", backdropFilter: "blur(4px)" }}
            />
           
            {/* Khung nội dung chính giữa */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              style={{ position: "relative", zIndex: 10000, width: "500px", backgroundColor: "#F9F8FF", borderRadius: "40px", padding: "48px", textAlign: "center", boxShadow: "0 50px 100px rgba(0,0,0,0.3)", border: "1px solid white", margin: "auto" , fontFamily: "'Times New Roman', Times, serif"}}
            >
              <div className="flex flex-col items-center gap-8">
                <div className="w-24 h-24 bg-white text-[#4ade80] rounded-full flex items-center justify-center shadow-lg border border-gray-50">
                  <Check size={64} strokeWidth={1.5} />
                </div>
                <div className="space-y-4">
                  <h2 className="text-[32px] font-bold text-[#4a4a4a] m-0">Đặt hàng thành công!</h2>
                  <p className="text-gray-500 text-[18px] m-0">Cảm ơn Bạn đã tin tưởng lựa chọn Velixora Boutique. Đơn hàng của bạn đã sẵn sàng được xử lý.</p>
                </div>
                <div className="flex flex-row gap-4 w-full justify-center">
                  <Link href="/" className="flex-1 no-underline">
                    <button className="w-full h-[64px] bg-[#7a33f2] text-white rounded-[16px] font-bold text-[18px] hover:bg-[#6625cc] transition-all uppercase shadow-lg border-none cursor-pointer" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                      TRANG CHỦ →
                    </button>
                  </Link>
                  <Link href="/san-pham" className="flex-1 no-underline">
                    <button className="w-full h-[64px] bg-white text-[#1e1535] rounded-[16px] font-bold text-[18px] border-none shadow-lg hover:bg-gray-50 transition-all uppercase cursor-pointer" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                      Xem thêm
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <FooterSimple />
    </>
  );
}

