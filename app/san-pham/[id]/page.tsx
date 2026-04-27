import ProductDetailClient from "./ProductDetailClient";

interface Product {
  id: number;
  title: string;
  price: string;
  oldPrice?: string;
  image: string;
  category: string;
  tag?: string;
  discount?: string;
  description: string;
}

const allProducts: Product[] = [
  // Váy Cưới (1–9)
  { 
    id: 1, 
    title: "Váy Cưới Xòe Cúp Ngực", 
    price: "1.600.000 đ", 
    oldPrice: "2.000.000 đ", 
    image: "/nhom04_royalrental/images/ProductImages-8.png", 
    category: "Váy Cưới", 
    tag: "NEW", 
    discount: "-20%", 
    description: "Thiết kế váy cưới xòe cúp ngực mang đến vẻ đẹp lộng lẫy và kiêu sa cho cô dâu trong ngày trọng đại phần thân trên được thiết kế ôm sát giúp tôn lên vòng một quyến rũ trong khi phần chân váy xòe bồng bềnh tạo hiệu ứng chuyển động mềm mại và thanh thoát chất liệu cao cấp kết hợp cùng đường may tinh xảo giúp tổng thể trang phục vừa sang trọng vừa thoải mái khi di chuyển phù hợp cho những buổi tiệc cưới quy mô lớn hoặc không gian sang trọng" 
  },
  { 
    id: 2, 
    title: "Váy Cưới Đuôi Cá", 
    price: "2.400.000 đ", 
    image: "/nhom04_royalrental/images/ProductImages-9.png", 
    category: "Váy Cưới", 
    tag: "NEW", 
    description: "Váy cưới đuôi cá là lựa chọn hoàn hảo cho những cô dâu yêu thích phong cách quyến rũ và hiện đại thiết kế ôm sát từ thân trên đến đầu gối giúp tôn lên đường cong cơ thể một cách tinh tế phần đuôi váy xòe nhẹ tạo điểm nhấn mềm mại khi di chuyển chất liệu vải cao cấp mang lại cảm giác thoải mái đồng thời giữ form dáng chuẩn giúp cô dâu tự tin tỏa sáng trong mọi khoảnh khắc" 
  },
  { 
    id: 3, 
    title: "Váy Cưới Phom Ngắn", 
    price: "1.200.000 đ", 
    image: "/nhom04_royalrental/images/ProductImages-10.png", 
    category: "Váy Cưới", 
    tag: "NEW", 
    description: "Thiết kế váy cưới phom ngắn mang phong cách trẻ trung và năng động phù hợp với những buổi tiệc cưới ngoài trời hoặc không gian thân mật phần váy được xử lý gọn gàng giúp cô dâu dễ dàng di chuyển trong khi chất liệu nhẹ nhàng tạo cảm giác thoải mái suốt quá trình sử dụng tổng thể thiết kế tuy đơn giản nhưng vẫn giữ được nét thanh lịch và tinh tế" 
  },
  { 
    id: 4, 
    title: "Váy Cưới Cổ Yếm", 
    price: "2.100.000 đ", 
    oldPrice: "2.415.000 đ", 
    image: "/nhom04_royalrental/images/ProductImages-11.png", 
    category: "Váy Cưới", 
    discount: "-15%", 
    description: "Váy cưới cổ yếm mang đến vẻ đẹp thanh lịch và kín đáo với phần cổ được thiết kế cao giúp tôn lên bờ vai và cổ thon gọn thân váy ôm nhẹ tạo sự cân đối hài hòa tổng thể chất liệu mềm mại kết hợp cùng đường may tinh xảo giúp sản phẩm vừa đảm bảo tính thẩm mỹ vừa mang lại cảm giác dễ chịu khi mặc" 
  },
  { 
    id: 5, 
    title: "Váy Cưới Công Chúa", 
    price: "2.500.000 đ", 
    image: "/nhom04_royalrental/images/ProductImages-12.png", 
    category: "Váy Cưới", 
    tag: "HOT", 
    description: "Lấy cảm hứng từ phong cách hoàng gia mẫu váy cưới công chúa sở hữu thiết kế bồng xòe nhiều lớp giúp tạo hiệu ứng lộng lẫy và nổi bật phần thân trên ôm gọn trong khi chân váy xòe rộng mang lại vẻ đẹp kiêu sa chất liệu cao cấp cùng chi tiết trang trí tinh tế giúp cô dâu trở thành tâm điểm trong ngày cưới" 
  },
  { 
    id: 6, 
    title: "Váy Cưới Lụa Satin", 
    price: "2.700.000 đ", 
    oldPrice: "3.240.000 đ", 
    image: "/nhom04_royalrental/images/ProductImages-13.png", 
    category: "Váy Cưới", 
    discount: "-20%", 
    description: "Váy cưới được làm từ chất liệu satin cao cấp mang lại độ bóng nhẹ tự nhiên và cảm giác mềm mịn thiết kế tối giản nhưng tinh tế giúp tôn lên vẻ đẹp thanh lịch của cô dâu đồng thời mang lại sự thoải mái khi mặc trong thời gian dài phù hợp với những buổi tiệc cưới sang trọng hiện đại" 
  },
  { 
    id: 7, 
    title: "Váy Cưới Cup Ngực", 
    price: "1.600.000 đ", 
    oldPrice: "2.000.000 đ", 
    image: "/nhom04_royalrental/images/ProductImages-14.png", 
    category: "Váy Cưới", 
    tag: "NEW", 
    discount: "-20%", 
    description: "Thiết kế cup ngực đơn giản nhưng tinh tế giúp tôn lên vòng một và tạo cảm giác thanh thoát phần thân váy được xử lý gọn gàng kết hợp với chất liệu cao cấp giúp giữ form tốt và mang lại vẻ đẹp nhẹ nhàng nhưng vẫn cuốn hút trong ngày trọng đại" 
  },
  { 
    id: 8, 
    title: "Váy Cưới Cổ Tim", 
    price: "2.000.000 đ", 
    image: "/nhom04_royalrental/images/ProductImages-15.png", 
    category: "Váy Cưới", 
    description: "Với thiết kế cổ tim mềm mại mẫu váy mang đến vẻ đẹp nữ tính và dễ ứng dụng phần thân váy được thiết kế cân đối giúp tôn dáng hiệu quả trong khi chất liệu nhẹ nhàng giúp cô dâu di chuyển thoải mái và tự tin trong suốt buổi lễ" 
  },
  { 
    id: 9, 
    title: "Váy Cưới Trễ Vai", 
    price: "1.800.000 đ", 
    oldPrice: "2.200.000 đ", 
    image: "/nhom04_royalrental/images/ProductImages-16.png", 
    category: "Váy Cưới", 
    discount: "-20%", 
    description: "Thiết kế trễ vai quyến rũ giúp khoe trọn bờ vai và xương quai xanh tạo nên vẻ đẹp tinh tế và cuốn hút phần thân váy ôm nhẹ kết hợp với chất liệu mềm mại mang lại cảm giác dễ chịu đồng thời giúp cô dâu nổi bật trong mọi góc nhìn" 
  },

  // Lễ Phục Nữ (10–15)
  { 
    id: 10, 
    title: "Áo Dài Tơ Tằm Be", 
    price: "250.000 đ", 
    image: "/nhom04_royalrental/images/ProductImages-4.png", 
    category: "Lễ Phục Nữ", 
    tag: "NEW", 
    description: "Áo dài được làm từ chất liệu tơ tằm cao cấp mang lại cảm giác mềm mại và thoáng mát khi mặc thiết kế truyền thống kết hợp với gam màu be nhẹ nhàng giúp tôn lên vẻ đẹp dịu dàng và thanh lịch của người phụ nữ phù hợp cho các dịp lễ quan trọng hoặc sự kiện mang tính trang trọng" 
  },
  { 
    id: 11, 
    title: "Áo Dài Tơ Tằm Tím", 
    price: "250.000 đ", 
    image: "/nhom04_royalrental/images/ProductImages-5.png", 
    category: "Lễ Phục Nữ", 
    discount: "-10%", 
    description: "Sản phẩm sử dụng chất liệu tơ tằm mịn kết hợp gam màu tím sang trọng tạo nên tổng thể quý phái và nổi bật thiết kế ôm nhẹ cơ thể giúp tôn dáng đồng thời mang lại sự thoải mái khi di chuyển phù hợp với nhiều dịp như lễ cưới sự kiện hoặc chụp ảnh" 
  },
  { 
    id: 12, 
    title: "Áo Tú Xuân Tím", 
    price: "850.000 đ", 
    image: "/nhom04_royalrental/images/ProductImages-6.png", 
    category: "Lễ Phục Nữ", 
    description: "Áo tú xuân mang phong cách truyền thống kết hợp các chi tiết hiện đại tạo nên vẻ đẹp hài hòa và tinh tế thiết kế được chăm chút kỹ lưỡng giúp giữ form dáng đẹp chất liệu cao cấp mang lại cảm giác dễ chịu khi mặc phù hợp cho các dịp lễ hội hoặc sự kiện văn hóa" 
  },
  { 
    id: 13, 
    title: "Đầm Cocktail", 
    price: "850.000 đ", 
    image: "/nhom04_royalrental/images/Nu-3.png", 
    category: "Lễ Phục Nữ", 
    tag: "HOT", 
    description: "Đầm cocktail sở hữu thiết kế hiện đại và trẻ trung với form dáng ôm nhẹ giúp tôn lên đường nét cơ thể chất liệu cao cấp kết hợp cùng đường may tinh tế mang lại vẻ ngoài sang trọng phù hợp cho các buổi tiệc tối hoặc sự kiện quan trọng" 
  },
  { 
    id: 14, 
    title: "Đầm Đuôi Cá", 
    price: "1.550.000 đ", 
    image: "/nhom04_royalrental/images/Nu-5.png", 
    category: "Lễ Phục Nữ", 
    description: "Thiết kế đầm đuôi cá ôm sát cơ thể giúp tôn lên đường cong quyến rũ phần chân váy xòe nhẹ tạo điểm nhấn mềm mại khi di chuyển chất liệu vải được chọn lọc kỹ càng giúp giữ form tốt và mang lại cảm giác thoải mái khi mặc" 
  },
  { 
    id: 15, 
    title: "Đầm Xẻ Tà", 
    price: "1.300.000 đ", 
    image: "/nhom04_royalrental/images/Nu-6.png", 
    category: "Lễ Phục Nữ", 
    description: "Đầm xẻ tà mang phong cách hiện đại với đường cắt tinh tế giúp tạo điểm nhấn gợi cảm nhưng vẫn giữ được sự thanh lịch thiết kế ôm nhẹ kết hợp chất liệu mềm mại giúp người mặc tự tin và nổi bật trong các buổi tiệc" 
  },

  // Lễ Phục Nam (16–21)
  { 
    id: 16, 
    title: "Tuxedo Midnight Classic", 
    price: "1.300.000 đ", 
    image: "/nhom04_royalrental/images/ProductImages-7.png", 
    category: "Lễ Phục Nam", 
    tag: "NEW", 
    description: "Tuxedo được thiết kế theo phong cách cổ điển với form dáng chuẩn giúp tôn lên vẻ lịch lãm và nam tính chất liệu cao cấp mang lại sự thoải mái khi mặc trong thời gian dài phù hợp cho các buổi tiệc cưới hoặc sự kiện trang trọng" 
  },
  { 
    id: 17, 
    title: "Vest Nâu Cafe Kẻ Sọc", 
    price: "1.800.000 đ", 
    image: "/nhom04_royalrental/images/ProductImages-2.png", 
    category: "Lễ Phục Nam", 
    tag: "HOT", 
    description: "Bộ vest với họa tiết kẻ sọc nhẹ tạo điểm nhấn hiện đại kết hợp gam màu nâu cafe mang lại cảm giác ấm áp và sang trọng thiết kế ôm dáng giúp tôn lên vóc dáng người mặc phù hợp cho cả công việc và sự kiện" 
  },
  { 
    id: 18, 
    title: "Creamy White Suit", 
    price: "1.150.000 đ", 
    image: "/nhom04_royalrental/images/ProductImages-3.png", 
    category: "Lễ Phục Nam", 
    description: "Bộ suit màu trắng kem mang lại vẻ ngoài thanh lịch và trẻ trung thiết kế tối giản nhưng tinh tế giúp dễ dàng phối hợp với nhiều phụ kiện khác nhau chất liệu cao cấp giúp giữ form và tạo cảm giác thoải mái khi mặc" 
  },
  { 
    id: 19, 
    title: "Navy Business Suit", 
    price: "750.000 đ", 
    image: "/nhom04_royalrental/images/Nam-1.png", 
    category: "Lễ Phục Nam", 
    description: "Suit xanh navy được thiết kế theo phong cách tối giản phù hợp môi trường công sở form dáng chuẩn giúp tạo vẻ chuyên nghiệp và lịch sự chất liệu bền đẹp giúp người mặc tự tin trong các buổi làm việc hoặc gặp gỡ đối tác" 
  },
  { 
    id: 20, 
    title: "Royal Blue Checked Suit", 
    price: "1.550.000 đ", 
    image: "/nhom04_royalrental/images/Nam-2.png", 
    category: "Lễ Phục Nam", 
    description: "Bộ suit với họa tiết kẻ nổi bật kết hợp màu xanh royal tạo nên phong cách trẻ trung và cá tính thiết kế hiện đại giúp người mặc trở nên thu hút và nổi bật trong các sự kiện hoặc buổi tiệc" 
  },
  { 
    id: 21, 
    title: "Tuxedo Black Velvet Edition", 
    price: "1.700.000 đ", 
    image: "/nhom04_royalrental/images/Nam-3.png", 
    category: "Lễ Phục Nam", 
    description: "Tuxedo sử dụng chất liệu velvet cao cấp mang lại vẻ ngoài sang trọng và đẳng cấp thiết kế chuẩn form giúp tôn dáng người mặc phù hợp cho các sự kiện buổi tối hoặc tiệc cao cấp" 
  },

  // Phụ Kiện (22–27)
  { 
    id: 22, 
    title: "Cà vạt Silk Cao Cấp", 
    price: "80.000 đ", 
    image: "/nhom04_royalrental/images/pk1.png", 
    category: "Phụ Kiện", 
    tag: "NEW", 
    description: "Cà vạt được làm từ chất liệu silk mềm mại tạo độ bóng nhẹ tự nhiên giúp tăng vẻ lịch lãm cho trang phục thiết kế tinh tế dễ dàng kết hợp với nhiều loại vest khác nhau" 
  },
  { 
    id: 23, 
    title: "Giày Bridal Satin Đính Đá", 
    price: "180.000 đ", 
    image: "/nhom04_royalrental/images/pk2.png", 
    category: "Phụ Kiện", 
    description: "Đôi giày được thiết kế with chất liệu satin cao cấp kết hợp chi tiết đính đá tinh xảo tạo điểm nhấn nổi bật giúp cô dâu thêm phần lộng lẫy trong ngày cưới" 
  },
  { 
    id: 24, 
    title: "Giày Cao Gót Velvet Black", 
    price: "150.000 đ", 
    image: "/nhom04_royalrental/images/pk3.png", 
    category: "Phụ Kiện", 
    tag: "HOT", 
    description: "Giày cao gót sử dụng chất liệu velvet sang trọng kết hợp form dáng thanh thoát giúp tôn dáng hiệu quả thiết kế phù hợp với nhiều phong cách từ tiệc tối đến sự kiện trang trọng" 
  },
  { 
    id: 25, 
    title: "Giày Oxford Brogues Classic", 
    price: "200.000 đ", 
    image: "/nhom04_royalrental/images/pk4.png", 
    category: "Phụ Kiện", 
    description: "Giày oxford mang phong cách cổ điển với các chi tiết brogues tinh tế giúp tạo điểm nhấn lịch lãm chất liệu bền bỉ và form dáng chuẩn phù hợp cho nhiều hoàn cảnh khác nhau" 
  },
  { 
    id: 26, 
    title: "Clutch Dạ Hội Sparkle Black", 
    price: "180.000 đ", 
    image: "/nhom04_royalrental/images/pk5.png", 
    category: "Phụ Kiện", 
    description: "Clutch thiết kế nhỏ gọn với bề mặt lấp lánh tạo hiệu ứng nổi bật giúp tăng sự sang trọng khi tham dự tiệc kiểu dáng tiện lợi dễ cầm nắm và phối hợp" 
  },
  { 
    id: 27, 
    title: "Khăn Voan Thêu Hoa Lux", 
    price: "200.000 đ", 
    image: "/nhom04_royalrental/images/pk6.png", 
    category: "Phụ Kiện", 
    description: "Khăn voan được làm từ chất liệu nhẹ nhàng kết hợp họa tiết thêu tinh xảo mang lại vẻ mềm mại và nữ tính giúp hoàn thiện tổng thể trang phục một cách tinh tế" 
  },

  // Trang Sức (28–33)
  { 
    id: 28, 
    title: "Bộ Trang Sức Eternal", 
    price: "2.800.000 đ", 
    image: "/nhom04_royalrental/images/TS1.png", 
    category: "Trang Sức", 
    tag: "HOT", 
    description: "Bộ trang sức được thiết kế đồng bộ với phong cách sang trọng giúp tôn lên vẻ quý phái cho người đeo chất liệu cao cấp kết hợp chi tiết tinh xảo phù hợp cho các dịp đặc biệt" 
  },
  { 
    id: 29, 
    title: "Dây Chuyền Đá Ánh Trăng", 
    price: "1.400.000 đ", 
    image: "/nhom04_royalrental/images/TS2.png", 
    category: "Trang Sức", 
    description: "Dây chuyền với viên đá sáng tinh tế tạo hiệu ứng ánh sáng nhẹ nhàng giúp làm nổi bật vùng cổ thiết kế đơn giản nhưng vẫn cuốn hút" 
  },
  { 
    id: 30, 
    title: "Bông Tai Ruby Đỏ", 
    price: "950.000 đ", 
    image: "/nhom04_royalrental/images/TS3.png", 
    category: "Trang Sức", 
    tag: "NEW", 
    description: "Bông tai sử dụng đá ruby đỏ nổi bật kết hợp thiết kế tinh xảo mang lại vẻ đẹp sang trọng và quyến rũ phù hợp cho các sự kiện quan trọng" 
  },
  { 
    id: 31, 
    title: "Vòng Tay Kim Tiền", 
    price: "1.600.000 đ", 
    image: "/nhom04_royalrental/images/TS4.png", 
    category: "Trang Sức", 
    description: "Vòng tay mang ý nghĩa may mắn và tài lộc với thiết kế tinh tế dễ dàng phối hợp with nhiều trang phục khác nhau phù hợp sử dụng hàng ngày hoặc làm quà tặng" 
  },
  { 
    id: 32, 
    title: "Lắc Tay Ngọc Cẩm Thạch", 
    price: "1.200.000 đ", 
    image: "/nhom04_royalrental/images/TS5.png", 
    category: "Trang Sức", 
    description: "Lắc tay được chế tác từ ngọc cẩm thạch mang lại vẻ đẹp thanh lịch và tinh tế chất liệu cao cấp giúp tăng giá trị thẩm mỹ và phong cách cho người đeo" 
  },
  { 
    id: 33, 
    title: "Trâm Cài Tóc Phượng", 
    price: "600.000 đ", 
    image: "/nhom04_royalrental/images/TS6.png", 
    category: "Trang Sức", 
    description: "Trâm cài tóc với thiết kế hình phượng hoàng mang phong cách truyền thống kết hợp chi tiết tinh xảo giúp tạo điểm nhấn nổi bật cho mái tóc phù hợp with trang phục lễ hoặc cưới hỏi" 
  },
];

export async function generateStaticParams() {
  return allProducts.map((p) => ({
    id: p.id.toString(),
  }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = allProducts.find((p) => p.id === Number(id)) as Product;

  const relatedProducts = allProducts
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  return (
    <div style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
      <ProductDetailClient 
        product={product} 
        relatedProducts={relatedProducts} 
      />
    </div>
  );
}