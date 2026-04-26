"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from "@/components/Header";
import { FooterSimple } from "@/components/FooterSimple";
import { ShoppingCart } from "lucide-react";


interface CartItem {
  id: number;
  title: string;
  price: string | number;
  color: string;
  size: string;
  qty: number;
  image: string;
  rentalPeriod?: string;
  days?: number;
  startDate?: string;
  endDate?: string;  
}


export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);


  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const data = JSON.parse(savedCart).map((item: CartItem) => {
        const startStr = item.startDate ? item.startDate.split('-').reverse().join('/') : "01/05/2026";
        const endStr = item.endDate ? item.endDate.split('-').reverse().join('/') : "03/05/2026";
       
        return {
          ...item,
          rentalPeriod: `${startStr} - ${endStr}`,
          days: item.days || 3
        };
      });
      setCartItems(data);
    }
  }, []);


  const updateCart = (newCart: CartItem[]) => {
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.dispatchEvent(new Event("storage"));
  };


  const handleQuantity = (id: number, color: string, size: string, delta: number) => {
    const newCart = cartItems.map(item =>
      (item.id === id && item.color === color && item.size === size)
        ? { ...item, qty: Math.max(1, item.qty + delta) }
        : item
    ).filter(item => item.qty > 0);
    updateCart(newCart);
  };


  const removeItem = (id: number, color: string, size: string) => {
    const newCart = cartItems.filter(item => !(item.id === id && item.color === color && item.size === size));
    updateCart(newCart);
  };


  const subtotal = cartItems.reduce((acc: number, item: CartItem) => {
    const numericPrice = typeof item.price === 'string'
      ? Number(item.price.replace(/[^0-9]/g, ""))
      : item.price;
    return acc + (numericPrice * item.qty);
  }, 0);


  const discount = subtotal * 0.1;
  const total = subtotal - discount;


  return (
    <>
      <Header />
     
      {/* BREADCRUMB - TIÊU ĐỀ DÙNG BE VIETNAM PRO */}
      <div style={{ width: '100%', height: '56px', backgroundColor: '#F9F8FF', marginTop: '107px' }} className="flex items-center px-[80px]">
        <nav className="text-[14px] text-gray-500 flex items-center gap-2 ">
          <Link href="/" className="no-underline text-gray-500 hover:text-[#7a33f2]">TRANG CHỦ</Link>
          <span className="text-gray-300">|</span>
          <span className="text-[#1e1535] font-semibold uppercase tracking-wider">Giỏ Hàng</span>
        </nav>
      </div>


      {/* MAIN: ÉP TOÀN BỘ BODY DÙNG TIMES NEW ROMAN */}
      <main
        className="w-full flex flex-col bg-[#FBFBFF] pb-32 min-h-screen"
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        <div className="pl-[80px] pr-[80px] w-full max-w-[1440px] flex flex-col pt-12 mx-auto">
         
          <div className="mb-10 text-left w-full">
            {}
            <h1 className="text-[48px] font-black text-[#1e1535] uppercase mb-1 tracking-tight">Giỏ Hàng</h1>
            <p className="text-gray-500 font-medium text-[18px]">Có {cartItems.length} sản phẩm trong giỏ hàng của bạn</p>
          </div>


          {cartItems.length === 0 ? (
             <div className="w-full flex justify-center py-10">
                <div
                  style={{
                    width: '100%',
                    maxWidth: '1240px',
                    backgroundColor: '#F9F8FF',
                    borderRadius: '48px',
                    boxShadow: '0 10px 40px rgba(122, 51, 242, 0.05)',
                    border: '1px solid #E9E4FF'
                  }}
                  className="flex flex-col items-center justify-center py-32"
                >
                    <div style={{ marginBottom: '32px' }}>
                      <ShoppingCart size={120} strokeWidth={1} color="#7a33f2" />
                    </div>
                    {}
                    <h2 className="text-[36px] font-bold text-[#1e1535] mb-4 uppercase " style={{ fontFamily: "'Times New Roman', Times, serif" }}>Giỏ hàng của bạn đang trống</h2>
                    <p className="text-gray-500 mb-12 text-center leading-relaxed max-w-[500px] text-[20px]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                      Hãy lấp đầy giỏ hàng bằng những bộ lễ phục tuyệt vời nhất từ Velixora nhé!
                    </p>
                    <Link href="/danh-muc" style={{ textDecoration: 'none' }}>
                      <button style={{
                        background: '#7a33f2',
                        color: 'white',
                        padding: '20px 60px',
                        borderRadius: '16px',
                        border: 'none',
                        fontWeight: 'bold',
                        fontSize: '18px',
                        cursor: 'pointer',
                        boxShadow: '0 10px 20px rgba(122, 51, 242, 0.3)',
                        fontFamily: 'inherit'
                      }} className="hover:bg-[#6625cc] transition-all uppercase tracking-widest active:scale-95">
                        Khám phá ngay
                      </button>
                    </Link>
                </div>
             </div>
          ) : (
            <div className="flex flex-row items-start justify-center w-full" style={{ gap: '48px' }}>
             
              {/* CỘT TRÁI: DANH SÁCH SẢN PHẨM */}
              <div className="flex flex-col" style={{ gap: '16px' }}>
                {cartItems.map((item, index) => (
                  <div
                    key={`${item.id}-${item.color}-${item.size}`}
                    style={{ width: '807px', minHeight: '199px', border: '1px solid #E9E4FF', backgroundColor: 'white' }}
                    className="flex flex-row rounded-[24px] shadow-sm relative box-border hover:shadow-md transition-all p-4"
                  >
                    <button
                      onClick={() => removeItem(item.id, item.color, item.size)}
                      style={{ position: 'absolute', top: '16px', right: '16px' }}
                      className="text-[#7a33f2] hover:text-red-500 bg-[#F5F3FF] p-2 rounded-lg border-none cursor-pointer transition-colors"
                    >
                       <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>


                    <img
                      src={item.image}
                      style={{ width: '100px', height: '133px', borderRadius: '8px' }}
                      className="object-cover flex-shrink-0"
                      alt={item.title}
                    />


                    <div className="flex-1 pl-[16px] flex flex-col gap-[10px]">
                      <div>
                        {/* TÊN SẢN PHẨM (TIÊU ĐỀ) DÙNG BE VIETNAM PRO */}
                        <h3 className="text-[22px] font-bold text-[#1e1535] leading-none m-0 font-['Be_Vietnam_Pro']">{item.title}</h3>
                        <p className="text-[16px] text-gray-500 mt-2 mb-0">Màu sắc: {item.color} | Size: {item.size}</p>
                      </div>
                     
                      <p className="text-[16px] text-gray-500 m-0 font-medium">Thuê: {item.rentalPeriod}</p>
                     
                      <div className="flex flex-col gap-[16px]">
                        <span className="bg-[#F5F3FF] text-[#7a33f2] text-[13px] font-bold px-3 py-1 rounded-lg w-fit m-0">
                          {item.days} ngày
                        </span>


                        <div className="flex items-center gap-4 bg-[#F9F8FF] w-fit px-2 py-1 rounded-lg border border-[#E9E4FF]">
                          <button onClick={() => handleQuantity(item.id, item.color, item.size, -1)} style={{ fontFamily: 'inherit' }} className="w-8 h-8 flex items-center justify-center bg-white border-none rounded-lg cursor-pointer text-[#7a33f2] font-bold shadow-sm">−</button>
                          <span className="font-bold text-[#1e1535] text-[16px] min-w-[20px] text-center">{item.qty}</span>
                          <button onClick={() => handleQuantity(item.id, item.color, item.size, 1)} style={{ fontFamily: 'inherit' }} className="w-8 h-8 flex items-center justify-center bg-white border-none rounded-lg cursor-pointer text-[#7a33f2] font-bold shadow-sm">+</button>
                        </div>
                      </div>
                    </div>


                    <div className="flex flex-col justify-end text-right pr-[16px] pb-[16px] gap-[10px]">
                      <p className="text-[24px] font-black text-[#1e1535] mb-0 leading-none">
                        {( (typeof item.price === 'string' ? Number(item.price.replace(/[^0-9]/g, "")) : item.price) * item.qty).toLocaleString()} VNĐ
                      </p>
                      <p className="text-[15px] text-gray-400 m-0 font-medium">{item.price} / ngày</p>
                    </div>
                  </div>
                ))}


                <button
                  onClick={() => updateCart([])}
                  style={{ width: '140px', height: '42px', fontFamily: 'inherit' }}
                  className="self-end mt-4 bg-white border border-[#7a33f2] text-[#7a33f2] rounded-[8px] text-[13px] font-bold hover:bg-[#7a33f2] hover:text-white transition-all cursor-pointer uppercase"
                >
                  Xóa Giỏ Hàng
                </button>
              </div>


              {/* CỘT PHẢI: TỔNG TIỀN & THANH TOÁN */}
              <div
                style={{
                  width: '425px',
                  minHeight: '444px',
                  backgroundColor: 'white',
                  borderRadius: '32px',
                  padding: '40px 24px',
                  boxShadow: '0 20px 50px rgba(122, 51, 242, 0.12)',
                  border: '1px solid rgba(122, 51, 242, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  boxSizing: 'border-box'
                }}
                className="sticky top-[180px]"
              >
                {/* TIÊU ĐỀ DÙNG BE VIETNAM PRO */}
                <h2 className="text-[28px] font-bold text-[#1e1535] m-0 mb-6 tracking-tight uppercase font-['Be_Vietnam_Pro']">Tổng Đơn Hàng</h2>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between text-[18px] text-gray-500 font-medium"><span>Tạm tính</span><span className="text-[#1e1535] font-bold">{subtotal.toLocaleString()} VNĐ</span></div>
                  <div className="flex justify-between text-[18px] text-[#22C55E] font-medium"><span>Giảm giá (10%)</span><span className="font-bold">-{discount.toLocaleString()} VNĐ</span></div>
                  <div className="flex justify-between text-[18px] text-gray-500 font-medium"><span>Giao hàng</span><span className="text-[#22C55E] font-bold uppercase text-[14px]">Miễn phí</span></div>
                </div>
                <div style={{ height: '1px', backgroundColor: '#F3F4F6', width: '100%', marginTop: '24px', marginBottom: '24px' }} />
                <div className="flex justify-between items-center mb-8"><span className="text-[20px] font-bold text-[#1e1535]">Tổng cộng</span><span className="text-[34px] font-black text-[#1e1535] tracking-tighter">{total.toLocaleString()} VNĐ</span></div>
               
                <div className="flex flex-col gap-3 mb-[24px]">
                  <p className="text-[17px] font-bold text-[#1e1535] m-0">Mã giảm giá</p>
                  <div className="flex gap-[8px] items-center">
                    <input type="text" placeholder="WELCOME10" style={{ width: '199px', height: '42px', fontFamily: 'inherit' }} className="bg-[#F9F9FB] border-none rounded-[8px] px-4 text-[15px] outline-none focus:ring-1 focus:ring-[#7a33f2] box-border" />
                    <button style={{ width: '140px', height: '42px', fontFamily: 'inherit' }} className="bg-white border border-[#7a33f2] text-[#7a33f2] rounded-[8px] text-[14px] font-bold hover:bg-[#7a33f2] hover:text-white cursor-pointer uppercase transition-all">Áp dụng</button>
                  </div>
                </div>


                <Link href="/thanh-toan" style={{ textDecoration: 'none' }}>
                  <button
                    style={{
                      width: '100%',
                      height: '60px',
                      backgroundColor: '#7a33f2',
                      color: 'white',
                      borderRadius: '16px',
                      fontWeight: 'bold',
                      fontSize: '18px',
                      border: 'none',
                      boxShadow: '0 10px 20px rgba(122, 51, 242, 0.2)',
                      fontFamily: 'inherit'
                    }}
                    className="uppercase tracking-widest hover:bg-[#6625cc] active:scale-95 transition-all cursor-pointer"
                  >
                    Thanh Toán
                  </button>
                </Link>
              </div>


            </div>
          )}
        </div>
      </main>
      <FooterSimple />
    </>
  );
}

