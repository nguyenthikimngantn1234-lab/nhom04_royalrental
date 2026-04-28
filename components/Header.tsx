"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, ShoppingBag, X, Home, Menu } from "lucide-react";
import { FooterSimple } from "@/components/FooterSimple";


// --- DỮ LIỆU TÌM KIẾM ĐÃ ĐƯỢC GẮN ID ĐỂ TRUY CẬP THẲNG TRANG SẢN PHẨM ---
const searchProducts = [
  { id: 1, name: "Váy Cưới Xòe Cúp Ngực" },
  { id: 2, name: "Váy Cưới Đuôi Cá" },
  { id: 3, name: "Váy Cưới Phom Ngắn" },
  { id: 4, name: "Váy Cưới Cổ Yếm" },
  { id: 5, name: "Váy Cưới Công Chúa" },
  { id: 10, name: "Áo Dài Tơ Tằm Be" },
  { id: 11, name: "Áo Dài Tơ Tằm Tím" },
  { id: 12, name: "Áo Tú Xuân Tím" },
  { id: 16, name: "Tuxedo Đen" },
  { id: 17, name: "Vest Nâu Cafe Kẻ Sọc" },
  { id: 18, name: "Creamy White Suit" },
  { id: 19, name: "Navy Business Suit" },
  { id: 22, name: "Cà vạt Silk Cao Cấp" },
  { id: 28, name: "Bộ Trang Sức Eternal" },
];


// Hàm bôi vàng từ khóa trùng khớp
const highlightText = (text: string, highlight: string) => {
  if (!highlight.trim())
    return <span style={{ color: "#1e1535" }}>{text}</span>;
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <span
            key={i}
            style={{
              backgroundColor: "#fef08a",
              color: "#1e1535",
              fontWeight: "bold",
              padding: "2px 4px",
              borderRadius: "4px",
            }}
          >
            {part}
          </span>
        ) : (
          <span key={i} style={{ color: "#1e1535" }}>
            {part}
          </span>
        ),
      )}
    </span>
  );
};


export const Header = () => {
  const router = useRouter();
  const [cartCount, setCartCount] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");


  const [isTablet, setIsTablet] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };


    handleResize();
    window.addEventListener("resize", handleResize);


    const updateCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cart.length);
    };
    updateCount();
    window.addEventListener("storage", updateCount);


    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("storage", updateCount);
    };
  }, []);


  const handleProductClick = (productId: number) => {
    router.push(`/san-pham/${productId}`);
    setIsSearchOpen(false);
    setIsMenuOpen(false);
    setSearchQuery("");
  };


  const handleSearch = (query: string) => {
    const finalQuery = query || searchQuery;
    if (finalQuery.trim()) {
      router.push(`/danh-muc?search=${encodeURIComponent(finalQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };


  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSearchQuery("");
    }
  }, [isSearchOpen]);


  const filteredProducts = searchQuery.trim()
    ? searchProducts.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : [];


  return (
    <>
      <style jsx>{`
        @media (max-width: 1023px) {
          .velixora-desktop {
            display: none !important;
          }
          .velixora-mobile {
            display: flex !important;
          }
        }
        @media (min-width: 1024px) {
          .velixora-desktop {
            display: block !important;
          }
          .velixora-mobile {
            display: none !important;
          }
        }
      `}</style>


      {/* HEADER MOBILE & TABLET */}
      <header
        className="velixora-mobile"
        style={{
          display: "none",
          width: "100%",
          maxWidth: "100vw",
          height: "65px",
          backgroundColor: "white",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
          borderBottom: "1px solid #f0f0f0",
          alignItems: "center",
          padding: "0 15px",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <div style={{ zIndex: 10 }}>
          <button
            onClick={() => setIsMenuOpen(true)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "5px",
            }}
          >
            <Menu size={26} color="#1e1535" />
          </button>
        </div>


        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "auto",
          }}
        >
          <Link href="/">
            <img
              style={{
                height: "auto",
                maxHeight: isTablet ? "42px" : "34px",
                maxWidth: "130px",
                objectFit: "contain",
                display: "block",
              }}
              alt="Logo"
              src="/nhom04_royalrental/images/Logo.png"
            />
          </Link>
        </div>


        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            gap: "12px",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <button
            onClick={() => setIsSearchOpen(true)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "2px",
            }}
          >
            <Search size={22} color="#7a33f2" />
          </button>


          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "2px",
            }}
          >
            <Heart size={22} color="#1e1535" />
          </button>


          <Link
            href="/gio-hang"
            style={{ position: "relative", display: "flex", padding: "2px" }}
          >
            <ShoppingBag size={22} color="#1e1535" />
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-3px",
                  right: "-3px",
                  backgroundColor: "#7a33f2",
                  color: "white",
                  borderRadius: "50%",
                  width: "16px",
                  height: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "9px",
                  fontWeight: "bold",
                  border: "1px solid white",
                }}
              >
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </header>


      {/* HEADER DESKTOP */}
      <header
        className="velixora-desktop"
        style={{
          width: "100%",
          height: "107px",
          backgroundColor: "white",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
          borderBottom: "1px solid #f0f0f0",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1440px",
            height: "100%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 80px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <Link href="/">
              <img
                style={{
                  height: "75px",
                  width: "auto",
                  objectFit: "contain",
                  cursor: "pointer",
                  display: "block",
                }}
                alt="Velixora Logo"
                src="/nhom04_royalrental/images/Logo.png"
              />
            </Link>
          </div>


          <nav>
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "40px",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              <li><Link href="/danh-muc?cat=Váy Cưới" style={{ color: "black", textDecoration: "none", fontWeight: 500, fontSize: "17px" }}>Váy Cưới</Link></li>
              <li><Link href="/danh-muc?cat=Lễ Phục Nữ" style={{ color: "black", textDecoration: "none", fontWeight: 500, fontSize: "17px" }}>Lễ Phục Nữ</Link></li>
              <li><Link href="/danh-muc?cat=Lễ Phục Nam" style={{ color: "black", textDecoration: "none", fontWeight: 500, fontSize: "17px" }}>Lễ Phục Nam</Link></li>
              <li><Link href="/danh-muc?cat=Phụ Kiện" style={{ color: "black", textDecoration: "none", fontWeight: 500, fontSize: "17px" }}>Phụ Kiện</Link></li>
              <li><Link href="/lien-he" style={{ color: "black", textDecoration: "none", fontWeight: 500, fontSize: "17px" }}>Liên Hệ</Link></li>
            </ul>
          </nav>


          <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", color: "#1e1535" }}>
              <button
                onClick={() => setIsSearchOpen(true)}
                style={{ color: "#7a33f2" }}
                className="hover:scale-110 transition-all cursor-pointer bg-transparent border-none p-0"
              >
                <Search size={24} strokeWidth={2.5} />
              </button>


              <button className="hover:text-[#7a33f2] transition-all cursor-pointer bg-transparent border-none p-0">
                <Heart size={24} />
              </button>


              <Link href="/gio-hang" className="relative hover:text-[#7a33f2] transition-all cursor-pointer text-inherit no-underline">
                <ShoppingBag size={24} />
                {cartCount > 0 && (
                  <span style={{ position: "absolute", top: "-8px", right: "-8px", backgroundColor: "#7a33f2", color: "white", fontSize: "10px", fontWeight: "bold", width: "18px", height: "18px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>


            <Link href="/dang-nhap" style={{ textDecoration: "none" }}>
              <button style={{ backgroundColor: "#7a33f2", color: "white", padding: "16px 35px", borderRadius: "12px", border: "none", fontWeight: "bold", fontSize: "16px", textTransform: "uppercase", cursor: "pointer", transition: "all 0.3s", boxShadow: "0 4px 15px rgba(122, 51, 242, 0.2)" }}>
                Đăng Nhập
              </button>
            </Link>
          </div>
        </div>
      </header>


      {/* SIDEBAR MENU MOBILE */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMenuOpen(false)} style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.5)", zIndex: 2001 }} />
            <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} style={{ position: "fixed", top: 0, left: 0, width: "280px", height: "100%", backgroundColor: "white", zIndex: 2002, padding: "24px", boxShadow: "2px 0 10px rgba(0,0,0,0.1)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
                <span style={{ fontWeight: "bold", fontSize: "20px", color: "#7a33f2" }}>VELIXORA</span>
                <X size={28} onClick={() => setIsMenuOpen(false)} style={{ cursor: "pointer" }} />
              </div>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
                <li><Link href="/danh-muc?cat=Váy Cưới" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: "none", color: "#1e1535", fontWeight: "bold" }}>Váy Cưới</Link></li>
                <li><Link href="/danh-muc?cat=Lễ Phục Nữ" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: "none", color: "#1e1535", fontWeight: "bold" }}>Lễ Phục Nữ</Link></li>
                <li><Link href="/danh-muc?cat=Lễ Phục Nam" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: "none", color: "#1e1535", fontWeight: "bold" }}>Lễ Phục Nam</Link></li>
                <li><Link href="/danh-muc?cat=Phụ Kiện" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: "none", color: "#1e1535", fontWeight: "bold" }}>Phụ Kiện</Link></li>
                <li><Link href="/lien-he" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: "none", color: "#1e1535", fontWeight: "bold" }}>Liên Hệ</Link></li>
                <li style={{ marginTop: "10px" }}><Link href="/dang-nhap"><button style={{ width: "100%", backgroundColor: "#7a33f2", color: "white", padding: "15px", border: "none", borderRadius: "10px", fontWeight: "bold", textTransform: "uppercase" }}>Đăng Nhập</button></Link></li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>


      {/* GIAO DIỆN TÌM KIẾM OVERLAY - ĐÃ CẬP NHẬT THEO MẪU CHUẨN */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "#ffffff",
              zIndex: 2000,
              display: "flex",
              flexDirection: "column",
              fontFamily: "'Inter', sans-serif",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                flex: "1 0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "40px 20px",
                position: "relative",
              }}
            >
              {/* Breadcrumb tìm kiếm */}
              <div
                style={{
                  width: "100%",
                  maxWidth: "1440px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#1e1535",
                  fontSize: "14px",
                  fontFamily: "'Inter', sans-serif",
                  textTransform: "uppercase",
                }}
              >
                <Home size={18} strokeWidth={2} />{" "}
                <span style={{ fontSize: "12px" }}>&gt;</span>{" "}
                <span style={{ fontWeight: "500" }}>TÌM KIẾM</span>
              </div>


              {/* Nút đóng Overlay */}
              <button
                onClick={() => setIsSearchOpen(false)}
                style={{
                  position: "absolute",
                  top: "40px",
                  right: "20px",
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                }}
                className="hover:scale-110 transition-transform"
              >
                <X size={40} color="#9ca3af" />
              </button>


              {/* Nội dung chính của giao diện tìm kiếm */}
              <div
                style={{
                  width: "100%",
                  maxWidth: "850px",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                <h2
                  style={{
                    fontSize: "32px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    color: "#7a33f2",
                    margin: "0 0 8px 0",
                  }}
                >
                  TÌM KIẾM BỘ SƯU TẬP
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#6b7280",
                    marginBottom: "40px",
                  }}
                >
                  Tìm trang phục hoàn hảo cho dịp đặc biệt của bạn
                </p>


                {/* Thanh Input tìm kiếm */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "750px",
                    margin: "0 auto",
                    marginBottom: "40px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#FBFBFF",
                      border: "1px solid #EEEEFF",
                      borderRadius: "12px",
                      padding: "16px 24px",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                    }}
                  >
                    <Search
                      size={24}
                      color="#7a33f2"
                      style={{ flexShrink: 0, cursor: "pointer" }}
                      onClick={() => handleSearch(searchQuery)}
                    />
                    <input
                      autoFocus
                      type="text"
                      placeholder="Tìm kiếm váy cưới, áo dài..."
                      style={{
                        width: "100%",
                        fontSize: "18px",
                        border: "none",
                        outline: "none",
                        background: "transparent",
                        color: "#1e1535",
                        marginLeft: "16px",
                        fontFamily: "'Inter', sans-serif",
                      }}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleSearch(searchQuery);
                      }}
                    />
                  </div>


                  {/* Kết quả gợi ý nhanh (Dropdown) */}
                  {searchQuery && filteredProducts.length > 0 && (
                    <div
                      style={{
                        position: "absolute",
                        top: "110%",
                        left: 0,
                        width: "100%",
                        backgroundColor: "#ffffff",
                        borderRadius: "12px",
                        border: "1px solid #EEEEFF",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                        padding: "8px 0",
                        zIndex: 9999,
                        textAlign: "left",
                        overflow: "hidden",
                      }}
                    >
                      {filteredProducts.map((p, idx) => (
                        <div
                          key={idx}
                          onClick={() => handleProductClick(p.id)}
                          style={{
                            padding: "16px 24px",
                            cursor: "pointer",
                            borderBottom: "1px solid #f9fafb",
                            fontSize: "18px",
                          }}
                          className="hover:bg-[#F9F8FF] transition-colors"
                        >
                          {highlightText(p.name, searchQuery)}
                        </div>
                      ))}
                    </div>
                  )}
                </div>


                {/* Phần: Tìm kiếm nhiều nhất */}
                <div style={{ marginTop: "60px" }}>
                  <p style={{ fontSize: "18px", fontWeight: "bold", color: "#1e1535", marginBottom: "16px" }}>Tìm kiếm nhiều nhất:</p>
                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", marginBottom: "40px" }}>
                    {[
                      { id: 2, name: "Váy Cưới Đuôi Cá" },
                      { id: 11, name: "Áo Dài Tơ Tằm Tím" },
                      { id: 16, name: "Tuxedo Đen" },
                      { id: 22, name: "Cà vạt Silk Cao Cấp" },
                      { id: 28, name: "Bộ Trang Sức Eternal" }
                    ].map((tag) => (
                      <button
                        key={tag.id}
                        onClick={() => handleProductClick(tag.id)}
                        style={{
                          padding: "10px 20px",
                          backgroundColor: "white",
                          border: "1px solid #1e1535",
                          color: "#1e1535",
                          borderRadius: "8px",
                          fontWeight: "bold",
                          fontSize: "15px",
                          cursor: "pointer",
                          transition: "all 0.2s",
                        }}
                        className="hover:border-[#7a33f2] hover:text-[#7a33f2] shadow-sm"
                      >
                        {tag.name}
                      </button>
                    ))}
                  </div>
                </div>


                {/* Phần: Duyệt theo danh mục */}
                <p style={{ fontSize: "18px", fontWeight: "bold", color: "#1e1535", marginBottom: "20px" }}>Hoặc duyệt theo danh mục</p>
                <div style={{ display: "flex", gap: "12px", width: "100%", justifyContent: "center", flexWrap: "wrap" }}>
                  {["Lễ Phục Nam", "Lễ Phục Nữ", "Váy Cưới", "Phụ Kiện"].map((cat) => (
                    <div
                      key={cat}
                      onClick={() => {
                        router.push(`/danh-muc?cat=${encodeURIComponent(cat)}`);
                        setIsSearchOpen(false);
                      }}
                      style={{
                        minWidth: "150px",
                        padding: "15px 10px",
                        backgroundColor: "white",
                        border: "1px solid #1e1535",
                        color: "#1e1535",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        fontSize: "16px",
                        cursor: "pointer",
                        textAlign: "center",
                        transition: "all 0.2s",
                      }}
                      className="hover:border-[#7a33f2] hover:text-[#7a33f2] hover:-translate-y-1 shadow-sm"
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              </div>
            </div>


            {/* Footer ở cuối Overlay */}
            <div style={{ width: "100%", flexShrink: 0 }}>
              <FooterSimple />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
