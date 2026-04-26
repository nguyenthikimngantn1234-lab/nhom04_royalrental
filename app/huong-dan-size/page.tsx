"use client";
import React, { useState } from "react";
import { Header } from "@/components/Header";
import { FooterSimple } from "@/components/FooterSimple";
import { Shirt, Footprints, Ruler, Info, MoveRight, Mars, Venus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


export default function SizeGuidePage() {
  const [activeTab, setActiveTab] = useState("clothing");


  const maleData = [
    { height: "1m60 - 1m65", weight: "55 - 60kg", size: "S" },
    { height: "1m64 - 1m69", weight: "60 - 65kg", size: "M" },
    { height: "1m70 - 1m74", weight: "66 - 70kg", size: "L" },
    { height: "1m74 - 1m76", weight: "70 - 76kg", size: "XL" },
    { height: "1m65 - 1m77", weight: "76 - 80kg", size: "XXL" },
  ];


  const femaleData = [
    { height: "1m48 - 1m53", weight: "38 - 43kg", size: "S" },
    { height: "1m53 - 1m55", weight: "43 - 46kg", size: "M" },
    { height: "1m53 - 1m58", weight: "46 - 53kg", size: "L" },
    { height: "1m55 - 1m62", weight: "53 - 57kg", size: "XL" },
    { height: "1m55 - 1m66", weight: "57 - 66kg", size: "XXL" },
  ];


  return (
    <>
      <Header />
      <main className="w-full min-h-screen bg-[#FDFDFF] pt-[180px] pb-32 font-['Be_Vietnam_Pro'] text-[#1e1535]">
        <div className="max-w-[1300px] mx-auto px-6">
         
          {/* HEADER SECTION */}
          <div className="flex flex-col items-center text-center mb-20">
            <div className="flex items-center gap-3 text-[#7a33f2] mb-6">
               <span className="w-10 h-[1px] bg-[#7a33f2]"></span>


               <span className="w-10 h-[1px] bg-[#7a33f2]"></span>
            </div>
            <h1 className="text-[64px] font-black uppercase tracking-tighter leading-none mb-6">Tìm Kích Cỡ Của Bạn</h1>
            <p className="text-[#5d4f7a] opacity-50 max-w-[600px] text-[18px] leading-relaxed">
              Bảng thông số được thiết kế riêng biệt để đảm bảo sự chuẩn xác tuyệt đối cho trang phục của bạn.
            </p>
          </div>


          {/* TABS BUTTONS - Đã fix khoảng cách gap-10 */}
          <div className="flex justify-center gap-10 mb-20">
            <button
              onClick={() => setActiveTab("clothing")}
              style={{
                backgroundColor: activeTab === "clothing" ? '#7a33f2' : 'white',
                color: activeTab === "clothing" ? 'white' : '#1e1535',
                padding: '20px 50px',
                borderRadius: '16px',
                boxShadow: activeTab === "clothing" ? '0 15px 35px rgba(122, 51, 242, 0.3)' : '0 4px 20px rgba(0,0,0,0.05)'
              }}
              className="font-bold flex items-center gap-4 border-none cursor-pointer transition-all active:scale-95 text-[16px] uppercase tracking-widest"
            >
              <Shirt size={20} /> Quần áo & Váy {activeTab === "clothing" && <MoveRight size={20} />}
            </button>
           
            <button
              onClick={() => setActiveTab("shoes")}
              style={{
                backgroundColor: activeTab === "shoes" ? '#7a33f2' : 'white',
                color: activeTab === "shoes" ? 'white' : '#1e1535',
                padding: '20px 50px',
                borderRadius: '16px',
                boxShadow: activeTab === "shoes" ? '0 15px 35px rgba(122, 51, 242, 0.3)' : '0 4px 20px rgba(0,0,0,0.05)'
              }}
              className="font-bold flex items-center gap-4 border-none cursor-pointer transition-all active:scale-95 text-[16px] uppercase tracking-widest border border-[#f0f0f0]"
            >
              <Footprints size={20} /> Giày cao gót {activeTab === "shoes" && <MoveRight size={20} />}
            </button>
          </div>


          {/* CONTENT SECTION */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="w-full"
            >
              {activeTab === "clothing" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 
                  {/* NAM - BÊN TRÁI */}
                  <div className="bg-white rounded-[48px] p-12 shadow-[0_40px_100px_rgba(122,51,242,0.04)] border border-[#F5F3FF]">
                    <div className="flex items-center gap-4 text-blue-500 mb-10">
                      <Mars size={32} strokeWidth={3} />
                      <h2 className="text-[28px] font-black uppercase tracking-tight text-[#1e1535]">Size Nam Giới</h2>
                    </div>
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-50">
                          <th className="py-6 px-2 text-left font-black uppercase text-[11px] tracking-[2px] text-gray-400">Chiều cao</th>
                          <th className="py-6 px-2 text-left font-black uppercase text-[11px] tracking-[2px] text-gray-400">Cân nặng</th>
                          <th className="py-6 px-2 text-right font-black uppercase text-[11px] tracking-[2px] text-blue-500">Size</th>
                        </tr>
                      </thead>
                      <tbody>
                        {maleData.map((row, idx) => (
                          <tr key={idx} className="group border-b border-gray-50/50 hover:bg-blue-50/30 transition-all duration-300">
                            <td className="py-6 px-2 font-bold text-[16px] text-gray-500">{row.height}</td>
                            <td className="py-6 px-2 font-bold text-[16px] text-gray-500">{row.weight}</td>
                            <td className="py-6 px-2 text-right font-black text-[22px] text-[#1e1535] group-hover:text-blue-500">{row.size}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>


                  {/* NỮ - BÊN PHẢI */}
                  <div className="bg-white rounded-[48px] p-12 shadow-[0_40px_100px_rgba(122,51,242,0.04)] border border-[#F5F3FF]">
                    <div className="flex items-center gap-4 text-pink-500 mb-10">
                      <Venus size={32} strokeWidth={3} />
                      <h2 className="text-[28px] font-black uppercase tracking-tight text-[#1e1535]">Size Nữ Giới</h2>
                    </div>
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-50">
                          <th className="py-6 px-2 text-left font-black uppercase text-[11px] tracking-[2px] text-gray-400">Chiều cao</th>
                          <th className="py-6 px-2 text-left font-black uppercase text-[11px] tracking-[2px] text-gray-400">Cân nặng</th>
                          <th className="py-6 px-2 text-right font-black uppercase text-[11px] tracking-[2px] text-pink-500">Size</th>
                        </tr>
                      </thead>
                      <tbody>
                        {femaleData.map((row, idx) => (
                          <tr key={idx} className="group border-b border-gray-50/50 hover:bg-pink-50/30 transition-all duration-300">
                            <td className="py-6 px-2 font-bold text-[16px] text-gray-500">{row.height}</td>
                            <td className="py-6 px-2 font-bold text-[16px] text-gray-500">{row.weight}</td>
                            <td className="py-6 px-2 text-right font-black text-[22px] text-[#1e1535] group-hover:text-pink-500">{row.size}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-[60px] p-16 shadow-[0_40px_100px_rgba(122,51,242,0.04)] border border-[#F5F3FF] grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                  <div className="space-y-12">
                    <div className="flex items-center gap-4 text-[#7a33f2]">
                      <Footprints size={32} />
                      <h2 className="text-[32px] font-black uppercase tracking-tight">Kỹ thuật lấy số đo</h2>
                    </div>
                    <div className="space-y-10">
                      {[
                        { step: "01", text: " Đặt bàn chân phẳng lên tờ giấy trắng khổ A4 đặt sát cạnh tường." },
                        { step: "02", text: " Dùng bút chì vạch đường dài nhất từ điểm ngón chân đến điểm gót chân." },
                        { step: "03", text: " Dùng thước đo khoảng cách và đối chiếu bảng size chuyên dụng bên cạnh." }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-6 items-start">
                          <span className="w-12 h-12 rounded-2xl bg-[#F5F3FF] text-[#7a33f2] flex items-center justify-center font-black text-[18px] flex-shrink-0 shadow-sm">{item.step}</span>
                          <p className="text-[20px] font-medium text-[#5d4f7a] leading-snug">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>


                  {/* BẢNG GIÀY - Đã kéo sát lại bằng justify-end và max-w */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="bg-[#FDFDFF] rounded-[48px] p-12 border border-[#f0f0f0] w-full max-w-[420px]">
                      <h3 className="text-[12px] font-black text-gray-400 uppercase tracking-[4px] mb-10 text-center">Bảng quy đổi Size EU</h3>
                      <table className="w-full">
                         <tbody>
                            {[
                              { cm: "22.0 - 22.5", size: "35" }, { cm: "22.6 - 23.0", size: "36" },
                              { cm: "23.1 - 23.5", size: "37" }, { cm: "23.6 - 24.0", size: "38" },
                              { cm: "24.1 - 24.5", size: "39" }, { cm: "24.6 - 25.0", size: "40" }
                            ].map((s, i) => (
                              <tr key={i} className="group border-b border-gray-50 last:border-0 hover:bg-white transition-all">
                                 <td className="py-6 font-bold text-[18px] text-gray-400 group-hover:text-[#7a33f2]">{s.cm} cm</td>
                                 <td className="py-6 text-right font-black text-[28px] text-[#1e1535]">{s.size}</td>
                              </tr>
                            ))}
                         </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      <FooterSimple />
    </>
  );
}

