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
    "Váy Cưới": "/images/Bannervaycuoi.png",
    "Lễ Phục Nữ": "/images/Bannerdanhmuc.png",
    "Lễ Phục Nam": "/images/Bannerdanhmuc.png",
    "Phụ Kiện": "/images/Bannerdanhmuc.png",
    "Trang Sức": "/images/Bannerdanhmuc.png",
  };


  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat) {
      setActiveCategory(cat);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [searchParams]);


  const allProducts: Product[] = [
    { id: 1, title: "Váy Cưới Xòe Cúp Ngực", price: "1.600.000 đ", oldPrice: "2.000.000 đ", image: "/images/ProductImages-8.png", category: "Váy Cưới", tag: "NEW", discount: "-20%" },
    { id: 2, title: "Váy Cưới Đuôi Cá", price: "2.400.000 đ", image: "/images/ProductImages-9.png", category: "Váy Cưới", tag: "NEW" },
    { id: 3, title: "Váy Cưới Phom Ngắn", price: "1.200.000 đ", image: "/images/ProductImages-10.png", category: "Váy Cưới", tag: "NEW" },
    { id: 4, title: "Váy Cưới Cổ Yếm", price: "2.100.000 đ", oldPrice: "2.415.000 đ", image: "/images/ProductImages-11.png", category: "Váy Cưới", discount: "-15%" },
    { id: 5, title: "Váy Cưới Công Chúa", price: "2.500.000 đ", image: "/images/ProductImages-12.png", category: "Váy Cưới", tag: "HOT" },
    { id: 6, title: "Váy Cưới Lụa Satin", price: "2.700.000 đ", oldPrice: "3.240.000 đ", image: "/images/ProductImages-13.png", category: "Váy Cưới", discount: "-20%" },
    { id: 7, title: "Váy Cưới Cúp Ngực", price: "1.600.000 đ", oldPrice: "2.000.000 đ", image: "/images/ProductImages-14.png", category: "Váy Cưới", tag: "NEW", discount: "-20%" },
    { id: 8, title: "Váy Cưới Cổ Tim", price: "2.000.000 đ", image: "/images/ProductImages-15.png", category: "Váy Cưới" },
    { id: 9, title: "Váy Cưới Trễ Vai", price: "1.800.000 đ", oldPrice: "2.200.000 đ", image: "/images/ProductImages-16.png", category: "Váy Cưới", discount: "-20%" },
    { id: 10, title: "Áo Dài Tơ Tằm Be", price: "250.000 đ", image: "/images/ProductImages-4.png", category: "Lễ Phục Nữ", tag: "NEW" },
    { id: 11, title: "Áo Dài Tơ Tằm Tím", price: "250.000 đ", image: "/images/ProductImages-5.png", category: "Lễ Phục Nữ", discount: "-10%" },
    { id: 12, title: "Áo Tú Xuân Tím", price: "850.000 đ", image: "/images/ProductImages-6.png", category: "Lễ Phục Nữ" },
    { id: 13, title: "Đầm Cocktail", price: "850.000 đ", image: "/images/Nu-3.png", category: "Lễ Phục Nữ", tag: "HOT" },
    { id: 14, title: "Đầm Đuôi Cá", price: "1.550.000 đ", image: "/images/Nu-5.png", category: "Lễ Phục Nữ" },
    { id: 15, title: "Đầm Xẻ Tà", price: "1.300.000 đ", image: "/images/Nu-6.png", category: "Lễ Phục Nữ" },
    { id: 16, title: "Tuxedo Midnight Classic", price: "1.300.000 đ", image: "/images/ProductImages-7.png", category: "Lễ Phục Nam", tag: "NEW" },
    { id: 17, title: "Vest Nâu Cafe Kẻ Sọc", price: "1.800.000 đ", image: "/images/ProductImages-2.png", category: "Lễ Phục Nam", tag: "HOT" },
    { id: 18, title: "Creamy White Suit", price: "1.150.000 đ", image: "/images/ProductImages-3.png", category: "Lễ Phục Nam" },
    { id: 19, title: "Navy Business Suit", price: "750.000 đ", image: "/images/Nam-1.png", category: "Lễ Phục Nam" },
    { id: 20, title: "Royal Blue Checked Suit", price: "1.550.000 đ", image: "/images/Nam-2.png", category: "Lễ Phục Nam" },
    { id: 21, title: "Tuxedo Black Velvet Edition", price: "1.700.000 đ", image: "/images/Nam-3.png", category: "Lễ Phục Nam" },
    { id: 22, title: "Cà vạt Silk Cao Cấp", price: "80.000 đ", image: "/images/pk1.png", category: "Phụ Kiện", tag: "NEW" },
    { id: 23, title: "Giày Bridal Satin Đính Đá", price: "180.000 đ", image: "/images/pk2.png", category: "Phụ Kiện" },
    { id: 24, title: "Giày Cao Gót Velvet Black", price: "150.000 đ", image: "/images/pk3.png", category: "Phụ Kiện", tag: "HOT" },
    { id: 25, title: "Giày Oxford Brogues Classic", price: "200.000 đ", image: "/images/pk4.png", category: "Phụ Kiện" },
    { id: 26, title: "Clutch Dạ Hội Sparkle Black", price: "180.000 đ", image: "/images/pk5.png", category: "Phụ Kiện" },
    { id: 27, title: "Khăn Voan Thêu Hoa Lux", price: "200.000 đ", image: "/images/pk6.png", category: "Phụ Kiện" },
    { id: 28, title: "Bộ Trang Sức Eternal", price: "2.800.000 đ", image: "/images/TS1.png", category: "Trang Sức", tag: "HOT" },
    { id: 29, title: "Dây Chuyền Đá Ánh Trăng", price: "1.400.000 đ", image: "/images/TS2.png", category: "Trang Sức" },
    { id: 30, title: "Bông Tai Ruby Đỏ", price: "950.000 đ", image: "/images/TS3.png", category: "Trang Sức", tag: "NEW" },
    { id: 31, title: "Vòng Tay Kim Tiền", price: "1.600.000 đ", image: "/images/TS4.png", category: "Trang Sức" },
    { id: 32, title: "Lắc Tay Ngọc Cẩm Thạch", price: "1.200.000 đ", image: "/images/TS5.png", category: "Trang Sức" },
    { id: 33, title: "Trâm Cài Tóc Phượng", price: "600.000 đ", image: "/images/TS6.png", category: "Trang Sức" },
  ];


  const filteredProducts = allProducts.filter(p => p.category === activeCategory);
  const categories = ["Váy Cưới", "Lễ Phục Nữ", "Lễ Phục Nam", "Phụ Kiện", "Trang Sức"];


  const handleAddToCart = (product: Product, redirect = false) => {
    const cartItem = {
      id: product.id, title: product.title, price: product.price,
      image: product.image, color: selectedColor, size: selectedSize, qty: 1
    };
   
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItemIndex = existingCart.findIndex(
      (item: any) => item.id === cartItem.id && item.color === cartItem.color && item.size === cartItem.size
    );
   
    if (existingItemIndex > -1) {
      existingCart[existingItemIndex].qty += 1;
    } else {
      existingCart.push(cartItem);
    }
   
    localStorage.setItem("cart", JSON.stringify(existingCart));
    window.dispatchEvent(new Event("storage"));


    if (redirect) {
      router.push("/gio-hang");
    } else {
      Swal.fire({
        title: "Đã thêm vào giỏ!",
        text: `${product.title} đã sẵn sàng trong túi đồ của bạn.`,
        icon: "success",
        confirmButtonColor: "#7a33f2",
        confirmButtonText: "Tiếp tục xem",
        showCancelButton: true,
        cancelButtonText: "Đi đến giỏ hàng",
        cancelButtonColor: "#1e1535",
        customClass: { popup: 'rounded-[8px]', confirmButton: 'rounded-[8px]', cancelButton: 'rounded-[8px]' }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.cancel) router.push("/gio-hang");
      });
    }
  };


  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center bg-white font-['Be_Vietnam_Pro'] overflow-x-hidden">
       
        <div className="relative w-full h-[450px] flex items-center overflow-hidden pt-[107px]">
          <img src={categoryBanners[activeCategory] || "/images/ShopBanner.png"} className="absolute inset-0 w-full h-full object-cover" alt="Banner" />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 max-w-[1440px] w-full mx-auto px-[80px]">
            <nav className="text-[13px] mb-4 flex items-center gap-4 text-white uppercase tracking-widest font-semibold drop-shadow-sm">
              <Link href="/" className="hover:opacity-70 transition-all text-white no-underline" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                TRANG CHỦ
              </Link>
              <span className="opacity-60 text-white" style={{ fontSize: '24px' }}> / </span>
              <span className="text-white" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                BỘ SƯU TẬP
              </span>
            </nav>
            <h1 className="text-[84px] font-extrabold text-white leading-none drop-shadow-lg uppercase">
              {activeCategory}
            </h1>
          </div>
        </div>


        <div className="max-w-[1440px] w-full px-[80px] pb-24 flex gap-0" style={{ marginTop: '80px' }}>
         
          <aside className="w-[300px] flex-shrink-0">
            <div className="p-8 border border-[#F3F4F6] rounded-[32px] bg-white shadow-sm">
              <h2 className="text-[22px] font-bold text-[#1e1535] mb-8 pb-4 border-b">Bộ Lọc</h2>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <button key={cat} onClick={() => setActiveCategory(cat)}
                    className={`flex justify-between items-center py-3.5 px-4 rounded-2xl transition-all duration-300 cursor-pointer border-none ${activeCategory === cat ? "text-[#7a33f2] font-bold bg-[#F5F3FF]" : "text-[#6B7280] hover:bg-gray-50 bg-transparent"}`}>
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
                      style={{ width: '36px', height: '24px' }}
                      className={`text-[12px] font-bold text-center rounded-[4px] border cursor-pointer transition-all flex items-center justify-center ${selectedSize === size ? "bg-[#F5F3FF] border-[#7a33f2] text-[#7a33f2]" : "bg-white border-gray-100 text-[#6B7280]"}`}>{size}</button>
                  ))}
                </div>
              </div>
            </div>
          </aside>


          <main className="flex-1 pl-[60px]">
            <div className="grid grid-cols-3" style={{ rowGap: '40px', columnGap: '24px' }}>
             
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative flex flex-col w-full"
                  style={{ paddingBottom: '54px' }}
                >


                  <Link href={`/san-pham/${product.id}`} className="no-underline block">
                    <div style={{ height: '400px' }} className="relative w-full rounded-[24px] overflow-hidden bg-[#f9fafb] border border-gray-50 shadow-sm mb-[10px]">
                      <img
                        src={product.image}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        alt={product.title}
                      />
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {product.tag && (
                          <span className="bg-[#7a33f2] text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md w-fit">
                            {product.tag}
                          </span>
                        )}
                        {product.discount && (
                          <span className="bg-[#fff8dc] text-[#D97706] text-[11px] font-bold px-3 py-1.5 rounded-full border border-[#F5A623] shadow-sm flex items-center gap-1 w-fit">
                            🔥 {product.discount}
                          </span>
                        )}
                      </div>
                    </div>


                    <div className="px-1 flex flex-col">
                      <h3 className="text-[17px] font-bold text-[#1e1535] group-hover:text-[#7a33f2] transition-colors duration-300 mb-[2px] whitespace-nowrap overflow-hidden text-ellipsis">
                        {product.title}
                      </h3>
                     
                      <div className="flex flex-col">
                        <span className="text-[#1e1535] font-black text-[18px]">
                          {product.price} <span className="text-[14px] font-normal text-[#6b7280]">/ngày</span>
                        </span>
                        {product.oldPrice && (
                          <span className="text-[#9ca3af] line-through text-[13px] font-medium mt-[2px]">
                            {product.oldPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>


                  <div
                    className="flex gap-[8px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20"
                    style={{ position: 'absolute', bottom: '6px', left: '0px', width: '100%', padding: '0 4px' }}
                  >
                    <button
                      onClick={(e) => { e.preventDefault(); handleAddToCart(product, false); }}
                      style={{ borderRadius: '8px', flex: 1, height: '42px', fontFamily: "'Times New Roman', Times, serif" }}
                      className="border border-[#7a33f2] bg-white text-[#7a33f2] text-[12px] font-bold uppercase hover:bg-[#f9f8ff] transition-colors cursor-pointer m-0"
                    >
                      GIỎ HÀNG
                    </button>
                   
                    <button
                      onClick={(e) => { e.preventDefault(); handleAddToCart(product, true); }}
                      style={{ borderRadius: '8px', flex: 1, height: '42px' , fontFamily: "'Times New Roman', Times, serif"}}
                      className="border-none bg-[#7a33f2] text-white text-[12px] font-bold uppercase hover:bg-[#6625cc] transition-colors cursor-pointer m-0"
                    >
                      THUÊ NGAY
                    </button>
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
    <Suspense fallback={<div className="p-20 text-center text-[#7a33f2]">Đang tải Velixora...</div>}>
      <CatalogContent />
    </Suspense>
  );
}

