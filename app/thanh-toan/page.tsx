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

  const [couponInput, setCouponInput] = useState("");
  const [isApplied, setIsApplied] = useState(false);

  const [provinces, setProvinces] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [selectedProvince, setSelectedProvince] = useState("");

  useEffect(() => {
    setIsMounted(true);
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const data = JSON.parse(savedCart).map((item: any) => ({
        ...item,
        days: item.days || 1
      }));
      setCartItems(data);
    }
    const savedUser = localStorage.getItem("userProfile");
    if (savedUser) setUserData(JSON.parse(savedUser));

    const savedCoupon = localStorage.getItem("appliedCoupon");
    if (savedCoupon === "WELCOME10") {
      setIsApplied(true);
      setCouponInput("WELCOME10");
    }

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
    localStorage.removeItem("appliedCoupon");
  };

  const subtotal = cartItems.reduce((acc, item) => {
    const price = typeof item.price === 'string' ? Number(item.price.replace(/[^0-9]/g, "")) : item.price || 0;
    return acc + (price * (item.qty || 1) * (item.days || 1));
  }, 0);

  const discount = (isApplied && couponInput.toUpperCase() === "WELCOME10") ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  if (!isMounted) return null;

  return (
    <>
      <Header />
      
      <style jsx global>{`
        /* CHỐNG TRÀN TOÀN TRANG */
        html, body { 
          max-width: 100% !important; 
          overflow-x: hidden !important; 
          margin: 0; 
          padding: 0; 
        }

        .checkout-main-wrapper * { 
          font-family: var(--font-montserrat), sans-serif !important; 
          box-sizing: border-box !important;
        }

        .checkout-container { 
          padding: 0 80px; 
          width: 100%; 
          max-width: 1440px; 
          margin: 0 auto; 
        }

        .checkout-layout { 
          display: flex; 
          flex-direction: row; 
          gap: 40px; 
          align-items: flex-start; 
          width: 100%;
        }

        .checkout-left-col { flex: 1; min-width: 0; }
        .checkout-right-col { width: 450px; flex-shrink: 0; }

        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 25px; }
        .input-style { 
          width: 100%; height: 60px; background: #F9F8FF; border: 1.5px solid #EEEEFF; 
          border-radius: 16px; padding: 0 20px; font-size: 16px; transition: all 0.3s;
        }

        /* TABLET */
        @media (max-width: 1279px) {
          .checkout-container { padding: 0 30px !important; }
          .checkout-layout { flex-direction: column !important; gap: 40px !important; }
          .checkout-right-col { width: 100% !important; position: static !important; }
        }

        /* MOBILE */
        @media (max-width: 767px) {
          .checkout-container { padding: 0 15px !important; }
          .checkout-h1 h1 { font-size: 26px !important; text-align: center; margin-top: 20px; }
          
          .checkout-layout { display: flex !important; flex-direction: column !important; width: 100% !important; }
          .checkout-right-col { order: 1 !important; padding: 20px !important; border-radius: 24px !important; }
          .checkout-left-col { order: 2 !important; }
          
          .form-row { grid-template-columns: 1fr !important; gap: 15px; margin-bottom: 15px; }
          .checkout-card-mobile { padding: 25px 15px !important; border-radius: 24px !important; }
          
          /* Chỉnh ảnh sản phẩm nhỏ lại để fit màn hình mobile */
          .item-thumb-checkout { width: 80px !important; height: 110px !important; border-radius: 12px !important; }
          .item-title-checkout { font-size: 15px !important; }
          .item-price-checkout { font-size: 17px !important; }
          
          .qr-img-box { width: 130px !important; height: 130px !important; }
          .input-style { height: 50px !important; font-size: 14px !important; }
        }
      `}</style>

      <main className="checkout-main-wrapper w-full min-h-screen bg-[#FDFDFF] pt-[130px] md:pt-[150px] pb-24 text-[#1e1535]">
        <div className="checkout-container mx-auto">
          
          <div className="checkout-h1" style={{ marginBottom: "30px" }}>
            <h1 className="text-[40px] font-black uppercase tracking-tighter m-0">THANH TOÁN</h1>
          </div>

          <div className="checkout-layout">
            
            <div className="checkout-left-col">
              {/* THÔNG TIN ĐẶT HÀNG */}
              <div className="checkout-card-mobile" style={{ backgroundColor: "white", borderRadius: "40px", padding: "48px", boxShadow: "0 10px 40px rgba(0,0,0,0.03)", border: "1px solid #E9E4FF" }}>
                <h3 className="text-[22px] font-black uppercase mb-10 border-b border-[#F0EEFF] pb-6 m-0">THÔNG TIN ĐẶT HÀNG</h3>
                
                <div className="form-row">
                  <div>
                    <label className="label-style block font-bold mb-2">Họ và tên *</label>
                    <input type="text" placeholder="Nhập họ và tên" className="input-style" defaultValue={userData.fullName} />
                  </div>
                  <div>
                    <label className="label-style block font-bold mb-2">Số điện thoại *</label>
                    <input type="tel" placeholder="Nhập số điện thoại" className="input-style" defaultValue={userData.phone} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="label-style block font-bold mb-2">Địa chỉ *</label>
                  <div className="form-row" style={{ marginBottom: "15px" }}>
                    <select onChange={handleProvinceChange} className="input-style cursor-pointer">
                      <option value="">Tỉnh / Thành phố</option>
                      {provinces.map((p: any) => <option key={p.code} value={p.code}>{p.name}</option>)}
                    </select>
                    <select disabled={!selectedProvince} className="input-style cursor-pointer">
                      <option value="">Quận / Huyện</option>
                      {districts.map((d: any) => <option key={d.code} value={d.code}>{d.name}</option>)}
                    </select>
                  </div>
                  <input type="text" placeholder="Số nhà / Tên đường" className="input-style" />
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="label-style block font-bold mb-2 text-[16px]">Ghi chú</label>
                  <textarea placeholder="Ghi chú thêm cho đơn hàng..." className="input-style" style={{ height: "120px", paddingTop: "15px", resize: "none" }} />
                </div>
              </div>

              {/* PHƯƠNG THỨC THANH TOÁN */}
              <div className="checkout-card-mobile" style={{ backgroundColor: "white", borderRadius: "40px", padding: "48px", boxShadow: "0 10px 40px rgba(0,0,0,0.03)", border: "1px solid #E9E4FF", marginTop: "40px" }}>
                <h3 className="text-[22px] font-black uppercase mb-10 border-b border-[#F0EEFF] pb-6 m-0">PHƯƠNG THỨC THANH TOÁN</h3>
                <div className="flex flex-col gap-5">
                  {[
                    { id: "cod", label: "Thanh toán khi nhận hàng (COD)" },
                    { id: "bank", label: "Chuyển khoản Ngân hàng" },
                    { id: "momo", label: "Ví điện tử MoMo" }
                  ].map((item) => (
                    <div key={item.id} className="flex flex-col">
                      <div onClick={() => setPaymentMethod(item.id as any)} 
                        style={{ 
                          padding: "20px 25px", borderRadius: "24px", border: "2px solid", 
                          borderColor: paymentMethod === item.id ? "#7a33f2" : "#F0EEFF",
                          backgroundColor: paymentMethod === item.id ? "#F9F8FF" : "white",
                          display: "flex", alignItems: "center", gap: "20px", cursor: "pointer"
                        }}
                      >
                        <div style={{ width: "24px", height: "24px", borderRadius: "50%", border: "2px solid #7a33f2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {paymentMethod === item.id && <div style={{ width: "12px", height: "12px", backgroundColor: "#7a33f2", borderRadius: "50%" }} />}
                        </div>
                        <span className="font-bold text-[17px]">{item.label}</span>
                      </div>
                      
                      <AnimatePresence>
                        {paymentMethod === item.id && (item.id === "bank" || item.id === "momo") && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                            <div className="mt-4 p-6 bg-[#F9F8FF] rounded-[24px] border-2 border-dashed border-[#7a33f2] flex flex-col items-center text-center">
                              <p className="font-bold text-[#7a33f2] mb-4 uppercase text-[12px]">Quét mã thanh toán</p>
                              <div className="bg-white p-2 rounded-2xl border mb-4">
                                <img src={item.id === 'bank' ? "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BANK" : "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=MOMO"} alt="QR" className="qr-img-box w-[150px] h-[150px]" />
                              </div>
                              <p className="font-black text-[18px] m-0">{item.id === 'bank' ? 'STK: 1234 5678' : 'SĐT: 0909 909 909'}</p>
                              <p className="text-gray-500 font-bold text-[12px] mt-1 uppercase">Nội dung: VELIXORA + SĐT</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CỘT PHẢI: CHI TIẾT ĐƠN HÀNG */}
            <div className="checkout-right-col" style={{ backgroundColor: "white", borderRadius: "40px", padding: "40px", border: "1px solid #E9E4FF", position: "sticky", top: "130px" }}>
              <h3 className="text-[20px] font-black uppercase mb-8 m-0">CHI TIẾT ĐƠN HÀNG</h3>
              
              <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-[24px] border-b border-[#FBFBFF] pb-6 last:border-none">
                    <img
                      src={item.image.startsWith('http') || item.image.startsWith('/nhom04_royalrental') ? item.image : `/nhom04_royalrental${item.image}`}
                      className="item-thumb-checkout w-[100px] h-[135px] object-cover rounded-[16px] shadow-sm flex-shrink-0"
                      alt={item.title}
                    />
                    <div className="flex-1 min-w-0 pt-2 flex flex-col gap-1">
                      <h4 className="item-title-checkout font-bold text-[17px] text-[#1e1535] m-0 leading-snug uppercase line-clamp-2">
                        {item.title}
                      </h4>
                      <div className="flex flex-col gap-0.5">
                        <p className="text-[13px] text-gray-500 m-0">
                          Màu sắc: <span className="text-[#1e1535] font-medium">{item.color || 'Theo mẫu'}</span>
                        </p>
                        <p className="text-[13px] text-gray-500 m-0">
                          Size: <span className="text-[#1e1535] font-medium">{item.size}</span> | {item.days} ngày x {item.qty} bộ
                        </p>
                      </div>
                      <p className="item-price-checkout font-black text-[18px] text-[#7a33f2] m-0 mt-1">
                        {((typeof item.price === 'string' ? Number(item.price.replace(/[^0-9]/g, "")) : item.price || 0) * (item.qty || 1) * (item.days || 1)).toLocaleString()}đ
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t-2 border-dashed border-[#F0EEFF] pt-6 space-y-4">
                <div className="flex justify-between text-[15px] text-gray-500 font-medium"><span>Tạm tính</span><span className="text-[#1e1535] font-bold">{subtotal.toLocaleString()}đ</span></div>
                {isApplied && (
                  <div className="flex justify-between text-[15px] text-[#22C55E] font-bold">
                    <span>Giảm giá (10%)</span>
                    <span>- {discount.toLocaleString()}đ</span>
                  </div>
                )}
                <div className="pt-6 border-t border-[#F0EEFF] flex justify-between items-center">
                  <span className="text-[14px] font-black text-gray-400 uppercase">TỔNG CỘNG</span>
                  <span className="text-[30px] font-black text-[#7a33f2] leading-none tracking-tighter">{total.toLocaleString()}đ</span>
                </div>
              </div>

              {!isApplied ? (
                <div className="mt-8 flex gap-2">
                  <input type="text" placeholder="Mã giảm giá" className="input-style" style={{ height: "45px", fontSize: "13px", flex: 1 }} value={couponInput} onChange={(e) => setCouponInput(e.target.value)} />
                  <button onClick={() => { if(couponInput.toUpperCase() === "WELCOME10") { setIsApplied(true); localStorage.setItem("appliedCoupon", "WELCOME10"); } else alert("Mã sai"); }} style={{ width: "90px", height: "45px", background: "#7a33f2", color: "white", borderRadius: "12px", fontWeight: "bold", border: "none", cursor: "pointer", fontSize: "12px" }}>ÁP DỤNG</button>
                </div>
              ) : (
                <div className="mt-6 p-4 bg-[#F0FFF4] border border-[#C6F6D5] rounded-2xl flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#22C55E] text-white rounded-full flex items-center justify-center"><Check size={14} /></div>
                  <span className="text-[#22C55E] font-bold text-[13px]">Đã áp dụng mã giảm giá 10%</span>
                </div>
              )}

              <button onClick={handleOrderComplete} style={{ marginTop: "30px", width: "100%", height: "64px", backgroundColor: "#7a33f2", color: "white", borderRadius: "24px", fontSize: "18px", fontWeight: "bold", textTransform: "uppercase", border: "none", cursor: "pointer" }} className="hover:bg-[#6625cc] transition-all active:scale-95 shadow-lg">Xác nhận đặt hàng</button>
            </div>

          </div>
        </div>
      </main>

      <AnimatePresence>
        {showSuccessModal && (
          <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "15px" }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(30, 21, 53, 0.7)", backdropFilter: "blur(4px)" }} />
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="success-modal-box" style={{ position: "relative", zIndex: 10000, width: "100%", maxWidth: "450px", backgroundColor: "white", borderRadius: "40px", padding: "40px 20px", textAlign: "center" }}>
              <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"><Check size={40} strokeWidth={2.5} /></div>
              <h2 className="text-[24px] font-black text-[#1e1535] mb-2 uppercase leading-tight">Đặt hàng thành công!</h2>
              <p className="text-gray-500 text-[15px] mb-8 font-medium">Cảm ơn bạn đã tin tưởng lựa chọn Velixora.</p>
              <Link href="/" className="no-underline">
                <button className="w-full h-[56px] bg-[#7a33f2] text-white rounded-[16px] font-bold text-[16px] uppercase cursor-pointer border-none shadow-xl transition-all">Quay về trang chủ</button>
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <FooterSimple />
    </>
  );
}