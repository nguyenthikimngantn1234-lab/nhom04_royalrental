"use client";
import React from "react";
import { Header } from "@/components/Header";
import { FooterSimple } from "@/components/FooterSimple";
import { ShieldCheck, FileText, Truck, RotateCcw } from "lucide-react";


export default function PolicyPage() {
  // Mảng dữ liệu để render đồng nhất
  const policies = [
    {
      id: "dieu-khoan",
      title: "Điều Khoản & Điều Kiện",
      icon: <FileText size={28} />,
      color: "#7a33f2",
      bgColor: "#F5F3FF",
      content: [
        "Khách hàng cần cung cấp **CCCD** hoặc giấy tờ tùy thân tương đương để làm thủ tục xác minh danh tính khi thuê đồ.",
        "Thời gian thuê mặc định là **3 ngày** (Ngày nhận - Ngày sử dụng - Ngày trả). Mọi trường hợp trả muộn sẽ tính phí phát sinh **20% giá trị hợp đồng/ngày**.",
        "Quý khách có trách nhiệm kiểm tra kỹ tình trạng trang phục (vết bẩn, đường may, khóa kéo) cùng nhân viên trước khi nhận đồ."
      ]
    },
    {
      id: "cho-thue",
      title: "Chính Sách Cho Thuê",
      icon: <Truck size={28} />,
      color: "#7a33f2",
      bgColor: "#F5F3FF",
      content: [
        "**Lưu ý về giặt ủi:** Velixora chịu trách nhiệm giặt khô chuyên dụng. Quý khách **tuyệt đối không tự ý giặt/tẩy** trang phục tại nhà để tránh làm hỏng cấu trúc vải cao cấp.",
        "**Đặt cọc:** Quý khách vui lòng đặt cọc 50% giá trị váy hoặc để lại giấy tờ tùy thân bản gốc (Hộ chiếu/CCCD).",
        "**Hủy đơn:** Hoàn lại 100% tiền cọc nếu báo trước 7 ngày. Sau thời gian này, Velixora sẽ thu phí giữ đồ tương đương 50% tiền cọc."
      ]
    },
    {
      id: "bao-mat",
      title: "Chính Sách Bảo Mật",
      icon: <ShieldCheck size={28} />,
      color: "#7a33f2",
      bgColor: "#F5F3FF",
      content: [
        "**Thông tin thu thập:** Chúng tôi cam kết bảo mật tuyệt đối số điện thoại, địa chỉ và hình ảnh phản hồi của bạn.",
        "**Mục đích sử dụng:** Thông tin chỉ dùng để phục vụ giao nhận sản phẩm và gửi các ưu đãi đặc quyền từ Velixora.",
        "Chúng tôi cam kết không chia sẻ thông tin khách hàng cho bên thứ ba vì mục đích thương mại."
      ]
    },
    {
      id: "boi-thuong",
      title: "Chính Sách Bồi Thường",
      icon: <RotateCcw size={28} />,
      color: "#FF4D4D", // Giữ màu đỏ cho phần bồi thường để cảnh báo
      bgColor: "#FFF1F1",
      content: [
        "Các lỗi bẩn nhẹ có thể xử lý chuyên dụng (son môi, vết đồ ăn): **Miễn phí hoàn toàn**.",
        "Các lỗi hư hại nặng (Rách vải, cháy thuốc lá, mất phụ kiện đính kèm): Bồi thường từ **50% đến 100% giá trị trang phục** tùy mức độ.",
        "Trường hợp làm mất sản phẩm: Khách hàng bồi thường 100% giá trị niêm yết của trang phục."
      ]
    }
  ];


  return (
    <>
      <Header />
      <main className="w-full min-h-screen bg-[#FDFDFF] pt-[160px] pb-32 font-['Be_Vietnam_Pro'] text-[#1e1535]">
        <div className="max-w-[1000px] mx-auto px-6">
         
          {/* Header Trang */}
          <div className="text-center mb-20">
            <h1 className="text-[56px] font-black uppercase tracking-tighter mb-6 leading-none">Điều Khoản & Chính Sách</h1>
            <div className="flex items-center justify-center gap-2 text-gray-400">
               <span className="w-8 h-[1px] bg-gray-200"></span>
               
               <span className="w-8 h-[1px] bg-gray-200"></span>
            </div>
          </div>


          <div className="flex flex-col gap-10">
            {policies.map((item) => (
              <section
                key={item.id}
                className="bg-white p-12 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-[#F0EEFF] transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-5 mb-10">
                  <div
                    style={{ backgroundColor: item.bgColor, color: item.color }}
                    className="w-14 h-14 rounded-[20px] flex items-center justify-center shadow-sm"
                  >
                    {item.icon}
                  </div>
                  <h2 className="text-[26px] font-black uppercase tracking-tight" style={{ color: item.id === 'boi-thuong' ? item.color : '#1e1535' }}>
                    {item.title}
                  </h2>
                </div>
               
                <ul className="flex flex-col gap-6 text-[#5d4f7a] text-[17px] leading-[1.8]">
                  {item.content.map((text, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span
                        style={{ backgroundColor: item.color }}
                        className="mt-2.5 w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-60"
                      />
                      <p dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#1e1535]">$1</strong>') }} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>


        </div>
      </main>
      <FooterSimple />
    </>
  );
}

