"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FooterSimple } from "@/components/FooterSimple";
import Swal from 'sweetalert2';

interface Product {
  id: number;
  title: string;
  price: string;
  oldPrice?: string;
  image: string;
  category: string;
  tag?: string;
  discount?: string;
}

const CatalogContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("Váy Cưới");
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");

  const categoryBanners: Record<string, string> = {
    "Váy Cưới": "/nhom04_royalrental/images/Bannervaycuoi.png",
    "Lễ Phục Nữ": "/nhom04_royalrental/images/Bannerdanhmuc.png",
    "Lễ Phục Nam": "/nhom04_royalrental/images/Bannerdanhmuc.png",
    "Phụ Kiện": "/nhom04_royalrental/images/Bannerdanhmuc.png",
    "Trang Sức": "/nhom04_royalrental/images/Bannerdanhmuc.png",
  };

  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat) {
      setActiveCategory(cat);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [searchParams]);

  // GIỮ NGUYÊN ĐỦ 33 SẢN PHẨM CỦA KIM NGÂN
  const allProducts: Product[] = [
    { id: 1, title: "Váy Cưới Xòe Cúp Ngực", price: "1.600.000 đ", oldPrice: "2.000.000 đ", image: "/nhom04_royalrental/images/ProductImages-8.png", category: "Váy Cưới", tag: "NEW", discount: "-20%" },
    { id: 2, title: "Váy Cưới Đuôi Cá", price: "2.400.000 đ", image: "/nhom04_royalrental/images/ProductImages-9.png", category: "Váy Cưới", tag: "NEW" },
    { id: 3, title: "Váy Cưới Phom Ngắn", price: "1.200.000 đ", image: "/nhom04_royalrental/images/ProductImages-10.png", category: "Váy Cưới", tag: "NEW" },
    { id: 4, title: "Váy Cưới Cổ Yếm", price: "2.100.000 đ", oldPrice: "2.415.000 đ", image: "/nhom04_royalrental/images/ProductImages-11.png", category: "Váy Cưới", discount: "-15%" },
    { id: 5, title: "Váy Cưới Công Chúa", price: "2.500.000 đ", image: "/nhom04_royalrental/images/ProductImages-12.png", category: "Váy Cưới", tag: "HOT" },
    { id: 6, title: "Váy Cưới Lụa Satin", price: "2.700.000 đ", oldPrice: "3.240.000 đ", image: "/nhom04_royalrental/images/ProductImages-13.png", category: "Váy Cưới", discount: "-20%" },
    { id: 7, title: "Váy Cưới Cúp Ngực", price: "1.600.000 đ", oldPrice: "2.000.000 đ", image: "/nhom04_royalrental/images/ProductImages-14.png", category: "Váy Cưới", tag: "NEW", discount: "-20%" },
    { id: 8, title: "Váy Cưới Cổ Tim", price: "2.000.000 đ", image: "/nhom04_royalrental/images/ProductImages-15.png", category: "Váy Cưới" },
    { id: 9, title: "Váy Cưới Trễ Vai", price: "1.800.000 đ", oldPrice: "2.200.000 đ", image: "/nhom04_royalrental/images/ProductImages-16.png", category: "Váy Cưới", discount: "-20%" },
    { id: 10, title: "Áo Dài Tơ Tằm Be", price: "250.000 đ", image: "/nhom04_royalrental/images/ProductImages-4.png", category: "Lễ Phục Nữ", tag: "NEW" },
    { id: 11, title: "Áo Dài Tơ Tằm Tím", price: "190.000 đ", image: "/nhom04_royalrental/images/ProductImages-5.png", category: "Lễ Phục Nữ", discount: "-10%" },
    { id: 12, title: "Áo Tú Xuân Tím", price: "200.000 đ", image: "/nhom04_royalrental/images/ProductImages-6.png", category: "Lễ Phục Nữ" },
    { id: 13, title: "Đầm Cocktail", price: "850.000 đ", image: "/nhom04_royalrental/images/Nu-3.png", category: "Lễ Phục Nữ", tag: "HOT" },
    { id: 14, title: "Đầm Đuôi Cá", price: "1.550.000 đ", image: "/nhom04_royalrental/images/Nu-5.png", category: "Lễ Phục Nữ" },
    { id: 15, title: "Đầm Xẻ Tà", price: "1.300.000 đ", image: "/nhom04_royalrental/images/Nu-6.png", category: "Lễ Phục Nữ" },
    { id: 16, title: "Tuxedo Midnight Classic", price: "1.300.000 đ", image: "/nhom04_royalrental/images/ProductImages-7.png", category: "Lễ Phục Nam", tag: "NEW" },
    { id: 17, title: "Vest Nâu Cafe Kẻ Sọc", price: "1.800.000 đ", image: "/nhom04_royalrental/images/ProductImages-2.png", category: "Lễ Phục Nam", tag: "HOT" },
    { id: 18, title: "Creamy White Suit", price: "1.150.000 đ", image: "/nhom04_royalrental/images/ProductImages-3.png", category: "Lễ Phục Nam" },
    { id: 19, title: "Navy Business Suit", price: "750.000 đ", image: "/nhom04_royalrental/images/Nam-1.png", category: "Lễ Phục Nam" },
    { id: 20, title: "Royal Blue Checked Suit", price: "1.550.000 đ", image: "/nhom04_royalrental/images/Nam-2.png", category: "Lễ Phục Nam" },
    { id: 21, title: "Tuxedo Black Velvet Edition", price: "1.700.000 đ", image: "/nhom04_royalrental/images/Nam-3.png", category: "Lễ Phục Nam" },
    { id: 22, title: "Cà vạt Silk Cao Cấp", price: "80.000 đ", image: "/nhom04_royalrental/images/pk1.png", category: "Phụ Kiện", tag: "NEW" },
    { id: 23, title: "Giày Bridal Satin Đính Đá", price: "180.000 đ", image: "/nhom04_royalrental/images/pk2.png", category: "Phụ Kiện" },
    { id: 24, title: "Giày Cao Gót Velvet Black", price: "150.000 đ", image: "/nhom04_royalrental/images/pk3.png", category: "Phụ Kiện", tag: "HOT" },
    { id: 25, title: "Giày Oxford Brogues Classic", price: "200.000 đ", image: "/nhom04_royalrental/images/pk4.png", category: "Phụ Kiện" },
    { id: 26, title: "Clutch Dạ Hội Sparkle Black", price: "180.000 đ", image: "/nhom04_royalrental/images/pk5.png", category: "Phụ Kiện" },
    { id: 27, title: "Khăn Voan Thêu Hoa Lux", price: "200.000 đ", image: "/nhom04_royalrental/images/pk6.png", category: "Phụ Kiện" },
    { id: 28, title: "Bộ Trang Sức Eternal", price: "2.800.000 đ", image: "/nhom04_royalrental/images/TS1.png", category: "Trang Sức", tag: "HOT" },
    { id: 29, title: "Dây Chuyền Đá Ánh Trăng", price: "1.400.000 đ", image: "/nhom04_royalrental/images/TS2.png", category: "Trang Sức" },
    { id: 30, title: "Bông Tai Ruby Đỏ", price: "950.000 đ", image: "/nhom04_royalrental/images/TS3.png", category: "Trang Sức", tag: "NEW" },
    { id: 31, title: "Vòng Tay Kim Tiền", price: "1.600.000 đ", image: "/nhom04_royalrental/images/TS4.png", category: "Trang Sức" },
    { id: 32, title: "Lắc Tay Ngọc Cẩm Thạch", price: "1.200.000 đ", image: "/nhom04_royalrental/images/TS5.png", category: "Trang Sức" },
    { id: 33, title: "Trâm Cài Tóc Phượng", price: "600.000 đ", image: "/nhom04_royalrental/images/TS6.png", category: "Trang Sức" },
  ];

  const filteredProducts = allProducts.filter(p => p.category === activeCategory);
  const categoriesList = ["Váy Cưới", "Lễ Phục Nữ", "Lễ Phục Nam", "Phụ Kiện", "Trang Sức"];

  // PHẦN SỬA CHÍNH: HÀM HIỆN POPUP CHỌN CHI TIẾT (KHÔNG CẦN THƯ VIỆN PHỤ)
  const handleAddToCartWithOptions = (product: Product, redirect = false) => {
    Swal.fire({
      title: `<span style="font-family: 'Montserrat', sans-serif; font-weight: 800;">TÙY CHỌN THUÊ</span>`,
      html: `
        <div style="text-align: left; font-family: 'Montserrat', sans-serif;">
          <div style="display: flex; gap: 15px; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #eee;">
            <img src="${product.image}" style="width: 70px; height: 95px; object-fit: cover; border-radius: 8px;">
            <div>
              <div style="font-weight: bold; color: #1e1535;">${product.title}</div>
              <div style="color: #7a33f2; font-weight: 800; font-size: 18px; margin-top: 5px;">${product.price}</div>
            </div>
          </div>
          
          <div style="margin-bottom: 15px;">
            <label style="font-weight: bold; display: block; margin-bottom: 8px; font-size: 14px;">Màu sắc:</label>
            <select id="swal-color" style="width: 100%; height: 40px; border-radius: 8px; border: 1.5px solid #eee; padding: 0 10px; outline: none;">
              <option value="Trắng tinh khôi">Trắng tinh khôi</option>
              <option value="Kem sữa">Kem sữa</option>
              <option value="Hồng phấn">Hồng phấn</option>
              <option value="Đen sang trọng">Đen sang trọng</option>
            </select>
          </div>

          <div style="margin-bottom: 15px;">
            <label style="font-weight: bold; display: block; margin-bottom: 8px; font-size: 14px;">Kích thước (Size):</label>
            <select id="swal-size" style="width: 100%; height: 40px; border-radius: 8px; border: 1.5px solid #eee; padding: 0 10px; outline: none;">
              <option value="S">Size S</option>
              <option value="M" selected>Size M</option>
              <option value="L">Size L</option>
              <option value="XL">Size XL</option>
            </select>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div>
              <label style="font-weight: bold; display: block; margin-bottom: 8px; font-size: 14px;">Ngày thuê:</label>
              <input type="date" id="swal-start" style="width: 100%; height: 40px; border-radius: 8px; border: 1.5px solid #eee; padding: 0 10px; box-sizing: border-box;" value="${new Date().toISOString().split('T')[0]}">
            </div>
            <div>
              <label style="font-weight: bold; display: block; margin-bottom: 8px; font-size: 14px;">Ngày trả:</label>
              <input type="date" id="swal-end" style="width: 100%; height: 40px; border-radius: 8px; border: 1.5px solid #eee; padding: 0 10px; box-sizing: border-box;" value="${new Date(Date.now() + 172800000).toISOString().split('T')[0]}">
            </div>
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: redirect ? 'THUÊ NGAY' : 'THÊM VÀO GIỎ',
      cancelButtonText: 'HỦY',
      confirmButtonColor: '#7a33f2',
      cancelButtonColor: '#1e1535',
      preConfirm: () => {
        const color = (document.getElementById('swal-color') as HTMLSelectElement).value;
        const size = (document.getElementById('swal-size') as HTMLSelectElement).value;
        const start = (document.getElementById('swal-start') as HTMLInputElement).value;
        const end = (document.getElementById('swal-end') as HTMLInputElement).value;
        
        if (!start || !end) return Swal.showValidationMessage('Vui lòng chọn đầy đủ ngày!');
        const dStart = new Date(start);
        const dEnd = new Date(end);
        if (dEnd <= dStart) return Swal.showValidationMessage('Ngày trả phải sau ngày thuê!');
        
        const diffDays = Math.ceil(Math.abs(dEnd.getTime() - dStart.getTime()) / (1000 * 60 * 60 * 24));
        return { color, size, start, end, diffDays };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const { color, size, start, end, diffDays } = result.value;
        const cartItem = {
          id: product.id, title: product.title, price: product.price,
          image: product.image, color: color, size: size, qty: 1,
          startDate: start, endDate: end, days: diffDays
        };

        const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
        existingCart.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(existingCart));
        window.dispatchEvent(new Event("storage"));

        if (redirect) { 
          router.push("/gio-hang"); 
        } else {
          Swal.fire({ title: "Thành công!", text: `Đã thêm vào giỏ hàng (${diffDays} ngày thuê)`, icon: "success", confirmButtonColor: "#7a33f2" });
        }
      }
    });
  };

  return (
    <>
      <Header />
      <style jsx>{`
        .main-catalog-layout {
          display: flex;
          width: 100%;
          max-width: 1440px;
          margin: 80px auto 0;
          padding-bottom: 96px;
          font-family: var(--font-montserrat), sans-serif;
        }

        @media (max-width: 767px) {
          .banner-container { height: 280px !important; padding-top: 70px !important; }
          .banner-title { font-size: 32px !important; }
          .main-catalog-layout { 
            flex-direction: column !important; 
            padding: 0 15px !important; 
          }
          .sidebar-filter { 
            width: 100% !important; 
            margin-bottom: 30px !important; 
            flex-shrink: 0 !important;
          }
          .product-main-grid { 
            padding-left: 0 !important; 
            width: 100% !important; 
          }
          .grid-display { 
            grid-template-columns: repeat(1, 1fr) !important; 
            width: 100% !important;
          }
          .product-image-box { height: 400px !important; }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .main-catalog-layout { flex-direction: column; padding: 0 40px; }
          .sidebar-filter { width: 100% !important; margin-bottom: 40px; }
          .product-main-grid { padding-left: 0 !important; }
          .grid-display { grid-template-columns: repeat(2, 1fr) !important; }
        }

        @media (min-width: 1024px) {
          .main-catalog-layout { padding: 0 80px; gap: 0; }
          .sidebar-filter { width: 300px; }
          .product-main-grid { padding-left: 60px; flex: 1; }
          .grid-display { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <div className="w-full flex flex-col items-center bg-white overflow-x-hidden" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
        
        <div className="banner-container relative w-full h-[450px] flex items-center overflow-hidden pt-[107px]">
          <img src={categoryBanners[activeCategory] || "/nhom04_royalrental/images/ShopBanner.png"} className="absolute inset-0 w-full h-full object-cover" alt="Banner" />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 lg:px-[80px]">
            <nav className="text-white uppercase tracking-widest font-semibold flex items-center gap-4 mb-4">
              <Link href="/" className="text-white no-underline font-bold text-[24px]">TRANG CHỦ</Link>
              <span className="text-[24px]"> / </span>
              <span className="text-[24px] font-bold">BỘ SƯU TẬP</span>
            </nav>
            <h1 className="banner-title text-[84px] font-extrabold text-white leading-none drop-shadow-lg uppercase">{activeCategory}</h1>
          </div>
        </div>

        <div className="main-catalog-layout">
          
          <aside className="sidebar-filter flex-shrink-0">
            <div className="p-8 border border-[#F3F4F6] rounded-[32px] bg-white shadow-sm">
              <h2 className="text-[22px] font-bold text-[#1e1535] mb-8 pb-4 border-b">Bộ Lọc</h2>
              <div className="flex flex-col gap-2">
                {categoriesList.map((cat) => (
                  <button key={cat} onClick={() => setActiveCategory(cat)}
                    className={`flex justify-between items-center py-3.5 px-4 rounded-2xl transition-all duration-300 cursor-pointer border-none ${activeCategory === cat ? "text-[#7a33f2] font-bold bg-[#F5F3FF]" : "text-[#6B7280] hover:bg-gray-50 bg-transparent"}`}
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
                    <span className="text-[16px]">{cat}</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                  </button>
                ))}
              </div>
              
              <div className="mt-12 px-1">
                <h3 className="text-[18px] font-bold mb-6 text-[#1e1535]">Màu Sắc</h3>
                <div className="flex flex-wrap gap-4">
                  {['#FFFFFF', '#FFF8DC', '#000000', '#FF0000', '#FFD1DC', '#E6E6FA'].map((color, i) => (
                    <button key={i} onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color, width: '36px', height: '24px' }}
                    className={`rounded-[4px] border cursor-pointer transition-all ${selectedColor === color ? "border-[#7a33f2] ring-2 ring-[#7a33f2] ring-offset-2 scale-110" : "border-gray-200"}`}/>
                  ))}
                </div>
              </div>

              <div className="mt-12 px-1">
                <h3 className="text-[18px] font-bold mb-6 text-[#1e1535]">Size</h3>
                <div className="flex flex-wrap gap-3">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <button key={size} onClick={() => setSelectedSize(size)}
                      style={{ width: '36px', height: '24px', fontFamily: 'var(--font-montserrat), sans-serif' }}
                      className={`text-[12px] font-bold text-center rounded-[4px] border cursor-pointer transition-all flex items-center justify-center ${selectedSize === size ? "bg-[#F5F3FF] border-[#7a33f2] text-[#7a33f2]" : "bg-white border-gray-100 text-[#6B7280]"}`}>{size}</button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <main className="product-main-grid">
            <div className="grid-display grid" style={{ rowGap: '40px', columnGap: '24px' }}>
              
              {filteredProducts.map((product) => (
                <div key={product.id} className="group relative flex flex-col w-full" style={{ paddingBottom: '54px' }}>
                  <Link href={`/san-pham/${product.id}`} className="no-underline block">
                    <div className="product-image-box relative w-full h-[400px] rounded-[24px] overflow-hidden bg-[#f9fafb] border border-gray-50 shadow-sm mb-[10px]">
                      <img src={product.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={product.title} />
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {product.tag && <span className="bg-[#7a33f2] text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md w-fit">{product.tag}</span>}
                        {product.discount && <span className="bg-[#fff8dc] text-[#D97706] text-[11px] font-bold px-3 py-1.5 rounded-full border border-[#F5A623] shadow-sm flex items-center gap-1 w-fit">🔥 {product.discount}</span>}
                      </div>
                    </div>
                    <div className="px-1 flex flex-col">
                      <h3 className="text-[17px] font-bold text-[#1e1535] group-hover:text-[#7a33f2] mb-[2px] whitespace-nowrap overflow-hidden text-ellipsis">{product.title}</h3>
                      <div className="flex flex-col">
                        <span className="text-[#1e1535] font-black text-[18px]">{product.price} <span className="text-[14px] font-normal text-[#6b7280]">/ngày</span></span>
                        {product.oldPrice && <span className="text-[#9ca3af] line-through text-[13px] font-medium mt-[2px]">{product.oldPrice}</span>}
                      </div>
                    </div>
                  </Link>
                  <div className="flex gap-[8px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20" style={{ position: 'absolute', bottom: '6px', left: '0px', width: '100%', padding: '0 4px' }}>
                    <button onClick={(e) => { e.preventDefault(); handleAddToCartWithOptions(product, false); }} style={{ borderRadius: '8px', flex: 1, height: '42px', fontFamily: "var(--font-montserrat), sans-serif" }} className="border border-[#7a33f2] bg-white text-[#7a33f2] text-[12px] font-bold uppercase hover:bg-[#f9f8ff] cursor-pointer">GIỎ HÀNG</button>
                    <button onClick={(e) => { e.preventDefault(); handleAddToCartWithOptions(product, true); }} style={{ borderRadius: '8px', flex: 1, height: '42px' , fontFamily: "var(--font-montserrat), sans-serif"}} className="border-none bg-[#7a33f2] text-white text-[12px] font-bold uppercase hover:bg-[#6625cc] cursor-pointer">THUÊ NGAY</button>
                  </div>
                </div>
              ))}

            </div>
          </main>

        </div>
      </div>
      <FooterSimple />
    </>
  );
};

export default function BridalProductCatalogPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center text-[#7a33f2]" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>Đang tải Velixora...</div>}>
      <CatalogContent />
    </Suspense>
  );
}