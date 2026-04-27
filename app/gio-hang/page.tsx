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
      
      <style jsx global>{`
        .cart-main-container {
          padding-left: 80px;
          padding-right: 80px;
        }
        .cart-layout-flex {
          display: flex;
          flex-direction: row;
          gap: 48px;
        }
        .cart-item-card {
          width: 807px;
        }

        @media (max-width: 767px) {
          .cart-breadcrumb { padding-left: 20px !important; padding-right: 20px !important; }
          .cart-main-container { padding-left: 15px !important; padding-right: 15px !important; padding-top: 30px !important; }
          
          .cart-layout-flex { 
            flex-direction: column !important; 
            gap: 30px !important; 
            align-items: center !important; 
          }
          
          .cart-item-card { 
            width: 100% !important; 
            max-width: 360px !important; 
            flex-direction: column !important; 
            min-height: auto !important; 
            margin: 0 auto !important;
            overflow: hidden !important;
          }
          
          .cart-item-image { width: 100% !important; height: 380px !important; border-radius: 24px 24px 0 0 !important; }
          .cart-item-info { padding: 20px !important; text-align: center !important; }
          
          /* FIXED: CHỖ THÊM BỚT SẢN PHẨM NGẮN LẠI VÀ NẰM NGANG */
          .qty-container-mobile { 
            display: flex !important;
            flex-direction: row !important; 
            align-items: center !important;
            justify-content: center !important;
            gap: 15px !important;
            width: fit-content !important; 
            margin: 0 auto !important;
          }

          .cart-item-info div, .cart-item-info p { align-items: center !important; display: flex; flex-direction: column; }
          .cart-item-info .w-fit { margin: 0 auto !important; }
          
          .cart-item-price-col { 
            text-align: center !important; 
            padding: 0 20px 20px 20px !important; 
            margin-top: 0 !important; 
          }
          
          .cart-summary-box { width: 100% !important; max-width: 360px !important; margin: 0 auto !important; position: static !important; }
          .cart-h1 { font-size: 32px !important; text-align: center; }
          .cart-summary-box h2 { text-align: center; }
          .promo-input-group { flex-direction: column !important; }
          .promo-input-group input, .promo-input-group button { width: 100% !important; }
        }

        @media (min-width: 768px) and (max-width: 1279px) {
          .cart-main-container { padding-left: 40px !important; padding-right: 40px !important; }
          .cart-layout-flex { flex-direction: column !important; align-items: center !important; }
          .cart-item-card { width: 100% !important; max-width: 700px !important; margin: 0 auto !important; }
          .cart-summary-box { width: 100% !important; max-width: 700px !important; position: static !important; }
        }
      `}</style>


      <div style={{ width: '100%', height: '56px', backgroundColor: '#F9F8FF', marginTop: '107px' }} className="cart-breadcrumb flex items-center px-[80px]">
        <nav className="text-[14px] text-gray-500 flex items-center gap-2 ">
          <Link href="/" className="no-underline text-gray-500 hover:text-[#7a33f2]">TRANG CHỦ</Link>
          <span className="text-gray-300">|</span>
          <span className="text-[#1e1535] font-semibold uppercase tracking-wider">Giỏ Hàng</span>
        </nav>
      </div>


      <main
        className="w-full flex flex-col bg-[#FBFBFF] pb-32 min-h-screen"
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        <div className="cart-main-container w-full max-w-[1440px] flex flex-col pt-12 mx-auto">
          
          <div className="mb-10 text-left w-full">
            <h1 className="cart-h1 text-[48px] font-black text-[#1e1535] uppercase mb-1 tracking-tight">Giỏ Hàng</h1>
            <p className="text-gray-500 font-medium text-[18px] text-center md:text-left">Có {cartItems.length} sản phẩm trong giỏ hàng của bạn</p>
          </div>


          {cartItems.length === 0 ? (
             <div className="w-full flex justify-center py-10 px-4">
                <div
                  style={{
                    width: '100%', maxWidth: '1240px', backgroundColor: '#F9F8FF', borderRadius: '48px',
                    boxShadow: '0 10px 40px rgba(122, 51, 242, 0.05)', border: '1px solid #E9E4FF'
                  }}
                  className="flex flex-col items-center justify-center py-32 px-6 text-center"
                >
                    <div style={{ marginBottom: '32px' }}>
                      <ShoppingCart size={120} strokeWidth={1} color="#7a33f2" />
                    </div>
                    <h2 className="text-[36px] font-bold text-[#1e1535] mb-4 uppercase ">Giỏ hàng đang trống</h2>
                    <Link href="/danh-muc" style={{ textDecoration: 'none' }}>
                      <button style={{
                        background: '#7a33f2', color: 'white', padding: '20px 60px', borderRadius: '16px',
                        border: 'none', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer',
                        boxShadow: '0 10px 20px rgba(122, 51, 242, 0.3)', fontFamily: 'inherit'
                      }} className="hover:bg-[#6625cc] transition-all uppercase tracking-widest active:scale-95">
                        Khám phá ngay
                      </button>
                    </Link>
                </div>
             </div>
          ) : (
            <div className="cart-layout-flex items-start justify-center w-full">
              
              <div className="flex flex-col w-full md:w-auto" style={{ gap: '16px' }}>
                {cartItems.map((item, index) => (
                  <div
                    key={`${item.id}-${item.color}-${item.size}`}
                    style={{ minHeight: '199px', border: '1px solid #E9E4FF', backgroundColor: 'white' }}
                    className="cart-item-card flex flex-row rounded-[24px] shadow-sm relative box-border hover:shadow-md transition-all p-4"
                  >
                    <button
                      onClick={() => removeItem(item.id, item.color, item.size)}
                      style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 10 }}
                      className="text-[#7a33f2] hover:text-red-500 bg-[#F5F3FF] p-2 rounded-lg border-none cursor-pointer transition-colors"
                    >
                       <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>


                    <img
                      src={item.image.startsWith('http') || item.image.startsWith('/nhom04_royalrental') 
                        ? item.image 
                        : `/nhom04_royalrental${item.image}`}
                      style={{ width: '100px', height: '133px', borderRadius: '12px' }}
                      className="cart-item-image object-cover flex-shrink-0"
                      alt={item.title}
                    />
                    <div className="cart-item-info flex-1 pl-[16px] flex flex-col gap-[10px]">
                      <div>
                        <h3 className="text-[22px] font-bold text-[#1e1535] leading-none m-0 font-['Be_Vietnam_Pro']">{item.title}</h3>
                        <p className="text-[16px] text-gray-500 mt-2 mb-0">Màu sắc: {item.color} | Size: {item.size}</p>
                      </div>
                      
                      <p className="text-[16px] text-gray-500 m-0 font-medium">Thuê: {item.rentalPeriod}</p>
                      
                      <div className="flex flex-col gap-[16px]">
                        <span className="bg-[#F5F3FF] text-[#7a33f2] text-[13px] font-bold px-3 py-1 rounded-lg w-fit m-0">
                          {item.days} ngày
                        </span>

                        <div className="qty-container-mobile flex items-center gap-4 bg-[#F9F8FF] w-fit px-2 py-1 rounded-lg border border-[#E9E4FF]">
                          <button onClick={() => handleQuantity(item.id, item.color, item.size, -1)} style={{ fontFamily: 'inherit' }} className="w-8 h-8 flex items-center justify-center bg-white border-none rounded-lg cursor-pointer text-[#7a33f2] font-bold shadow-sm">−</button>
                          <span className="font-bold text-[#1e1535] text-[16px] min-w-[20px] text-center">{item.qty}</span>
                          <button onClick={() => handleQuantity(item.id, item.color, item.size, 1)} style={{ fontFamily: 'inherit' }} className="w-8 h-8 flex items-center justify-center bg-white border-none rounded-lg cursor-pointer text-[#7a33f2] font-bold shadow-sm">+</button>
                        </div>
                      </div>
                    </div>


                    <div className="cart-item-price-col flex flex-col justify-end text-right pr-[16px] pb-[16px] gap-[10px]">
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
                  className="self-center md:self-end mt-4 bg-white border border-[#7a33f2] text-[#7a33f2] rounded-[8px] text-[13px] font-bold hover:bg-[#7a33f2] hover:text-white transition-all cursor-pointer uppercase"
                >
                  Xóa Giỏ Hàng
                </button>
              </div>


              <div
                style={{
                  minHeight: '444px', backgroundColor: 'white', borderRadius: '32px', padding: '40px 24px',
                  boxShadow: '0 20px 50px rgba(122, 51, 242, 0.12)', border: '1px solid rgba(122, 51, 242, 0.05)',
                  display: 'flex', flexDirection: 'column', boxSizing: 'border-box'
                }}
                className="cart-summary-box sticky top-[180px]"
              >
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
                  <div className="promo-input-group flex gap-[8px] items-center">
                    <input type="text" placeholder="WELCOME10" style={{ width: '199px', height: '42px', fontFamily: 'inherit' }} className="bg-[#F9F9FB] border-none rounded-[8px] px-4 text-[15px] outline-none focus:ring-1 focus:ring-[#7a33f2] box-border" />
                    <button style={{ width: '140px', height: '42px', fontFamily: 'inherit' }} className="bg-white border border-[#7a33f2] text-[#7a33f2] rounded-[8px] text-[14px] font-bold hover:bg-[#7a33f2] hover:text-white cursor-pointer uppercase transition-all">Áp dụng</button>
                  </div>
                </div>


                <Link href="/thanh-toan" style={{ textDecoration: 'none' }}>
                  <button
                    style={{
                      width: '100%', height: '60px', backgroundColor: '#7a33f2', color: 'white',
                      borderRadius: '16px', fontWeight: 'bold', fontSize: '18px', border: 'none',
                      boxShadow: '0 10px 20px rgba(122, 51, 242, 0.2)', fontFamily: 'inherit'
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