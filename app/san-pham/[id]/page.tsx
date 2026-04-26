import ProductDetailClient from "./ProductDetailClient";

// 1. Định nghĩa kiểu dữ liệu để máy không báo lỗi gạch đỏ ở phần Props
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

// 2. Mảng dữ liệu sản phẩm của Kim Ngân
const allProducts: Product[] = [
  // Váy Cưới (1-9)
  { id: 1, title: "Váy Cưới Xòe Cúp Ngực", price: "1.600.000 đ", oldPrice: "2.000.000 đ", image: "/nhom04_royalrental/images/ProductImages-8.png", category: "Váy Cưới", tag: "NEW", discount: "-20%" },
  { id: 2, title: "Váy Cưới Đuôi Cá", price: "2.400.000 đ", image: "/nhom04_royalrental/images/ProductImages-9.png", category: "Váy Cưới", tag: "NEW" },
  { id: 3, title: "Váy Cưới Phom Ngắn", price: "1.200.000 đ", image: "/nhom04_royalrental/images/ProductImages-10.png", category: "Váy Cưới", tag: "NEW" },
  { id: 4, title: "Váy Cưới Cổ Yếm", price: "2.100.000 đ", oldPrice: "2.415.000 đ", image: "/nhom04_royalrental/images/ProductImages-11.png", category: "Váy Cưới", discount: "-15%" },
  { id: 5, title: "Váy Cưới Công Chúa", price: "2.500.000 đ", image: "/nhom04_royalrental/images/ProductImages-12.png", category: "Váy Cưới", tag: "HOT" },
  { id: 6, title: "Váy Cưới Lụa Satin", price: "2.700.000 đ", oldPrice: "3.240.000 đ", image: "/nhom04_royalrental/images/ProductImages-13.png", category: "Váy Cưới", discount: "-20%" },
  { id: 7, title: "Váy Cưới Cup Ngực", price: "1.600.000 đ", oldPrice: "2.000.000 đ", image: "/nhom04_royalrental/images/ProductImages-14.png", category: "Váy Cưới", tag: "NEW", discount: "-20%" },
  { id: 8, title: "Váy Cưới Cổ Tim", price: "2.000.000 đ", image: "/nhom04_royalrental/images/ProductImages-15.png", category: "Váy Cưới" },
  { id: 9, title: "Váy Cưới Trễ Vai", price: "1.800.000 đ", oldPrice: "2.200.000 đ", image: "/nhom04_royalrental/images/ProductImages-16.png", category: "Váy Cưới", discount: "-20%" },

  // Lễ Phục Nữ (10-15)
  { id: 10, title: "Áo Dài Tơ Tằm Be", price: "250.000 đ", image: "/nhom04_royalrental/images/ProductImages-4.png", category: "Lễ Phục Nữ", tag: "NEW" },
  { id: 11, title: "Áo Dài Tơ Tằm Tím", price: "250.000 đ", image: "/nhom04_royalrental/images/ProductImages-5.png", category: "Lễ Phục Nữ", discount: "-10%" },
  { id: 12, title: "Áo Tú Xuân Tím", price: "850.000 đ", image: "/nhom04_royalrental/images/ProductImages-6.png", category: "Lễ Phục Nữ" },
  { id: 13, title: "Đầm Cocktail", price: "850.000 đ", image: "/nhom04_royalrental/images/Nu-3.png", category: "Lễ Phục Nữ", tag: "HOT" },
  { id: 14, title: "Đầm Đuôi Cá", price: "1.550.000 đ", image: "/nhom04_royalrental/images/Nu-5.png", category: "Lễ Phục Nữ" },
  { id: 15, title: "Đầm Xẻ Tà", price: "1.300.000 đ", image: "/nhom04_royalrental/images/Nu-6.png", category: "Lễ Phục Nữ" },

  // Lễ Phục Nam (16-21)
  { id: 16, title: "Tuxedo Midnight Classic", price: "1.300.000 đ", image: "/nhom04_royalrental/images/ProductImages-7.png", category: "Lễ Phục Nam", tag: "NEW" },
  { id: 17, title: "Vest Nâu Cafe Kẻ Sọc", price: "1.800.000 đ", image: "/nhom04_royalrental/images/ProductImages-2.png", category: "Lễ Phục Nam", tag: "HOT" },
  { id: 18, title: "Creamy White Suit", price: "1.150.000 đ", image: "/nhom04_royalrental/images/ProductImages-3.png", category: "Lễ Phục Nam" },
  { id: 19, title: "Navy Business Suit", price: "750.000 đ", image: "/nhom04_royalrental/images/Nam-1.png", category: "Lễ Phục Nam" },
  { id: 20, title: "Royal Blue Checked Suit", price: "1.550.000 đ", image: "/nhom04_royalrental/images/Nam-2.png", category: "Lễ Phục Nam" },
  { id: 21, title: "Tuxedo Black Velvet Edition", price: "1.700.000 đ", image: "/nhom04_royalrental/images/Nam-3.png", category: "Lễ Phục Nam" },

  // Phụ Kiện (22-27)
  { id: 22, title: "Cà vạt Silk Cao Cấp", price: "80.000 đ", image: "/nhom04_royalrental/images/pk1.png", category: "Phụ Kiện", tag: "NEW" },
  { id: 23, title: "Giày Bridal Satin Đính Đá", price: "180.000 đ", image: "/nhom04_royalrental/images/pk2.png", category: "Phụ Kiện" },
  { id: 24, title: "Giày Cao Gót Velvet Black", price: "150.000 đ", image: "/nhom04_royalrental/images/pk3.png", category: "Phụ Kiện", tag: "HOT" },
  { id: 25, title: "Giày Oxford Brogues Classic", price: "200.000 đ", image: "/nhom04_royalrental/images/pk4.png", category: "Phụ Kiện" },
  { id: 26, title: "Clutch Dạ Hội Sparkle Black", price: "180.000 đ", image: "/nhom04_royalrental/images/pk5.png", category: "Phụ Kiện" },
  { id: 27, title: "Khăn Voan Thêu Hoa Lux", price: "200.000 đ", image: "/nhom04_royalrental/images/pk6.png", category: "Phụ Kiện" },

  // Trang Sức (28-33)
  { id: 28, title: "Bộ Trang Sức Eternal", price: "2.800.000 đ", image: "/nhom04_royalrental/images/TS1.png", category: "Trang Sức", tag: "HOT" },
  { id: 29, title: "Dây Chuyền Đá Ánh Trăng", price: "1.400.000 đ", image: "/nhom04_royalrental/images/TS2.png", category: "Trang Sức" },
  { id: 30, title: "Bông Tai Ruby Đỏ", price: "950.000 đ", image: "/nhom04_royalrental/images/TS3.png", category: "Trang Sức", tag: "NEW" },
  { id: 31, title: "Vòng Tay Kim Tiền", price: "1.600.000 đ", image: "/nhom04_royalrental/images/TS4.png", category: "Trang Sức" },
  { id: 32, title: "Lắc Tay Ngọc Cẩm Thạch", price: "1.200.000 đ", image: "/nhom04_royalrental/images/TS5.png", category: "Trang Sức" },
  { id: 33, title: "Trâm Cài Tóc Phượng", price: "600.000 đ", image: "/nhom04_royalrental/images/TS6.png", category: "Trang Sức" },
];

// 3. Hàm build tĩnh cho GitHub Pages (Chạy ở Server)
export async function generateStaticParams() {
  return allProducts.map((p) => ({
    id: p.id.toString(),
  }));
}

// 4. Component chính của trang (Server Component)
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Tìm sản phẩm và ép kiểu để không bị báo lỗi "possibly undefined"
  const product = allProducts.find((p) => p.id === Number(id)) as Product;
  
  const relatedProducts = allProducts
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  return (
    <ProductDetailClient 
      id={id} 
      product={product} 
      relatedProducts={relatedProducts} 
    />
  );
}