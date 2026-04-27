// data/reviews.ts
export interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}


const userNames = [
  "Nguyễn Minh Anh", "Trần Hoài Nam", "Lê Ngọc Anh", "Phạm Quỳnh Như", "Đỗ Thanh Tùng",
  "Võ Khánh Linh", "Nguyễn Hải Đăng", "Trần Thu Trang", "Phạm Gia Huy", "Lý Bảo Ngọc",
  "Đặng Minh Khang", "Nguyễn Thảo Vy", "Phan Đức Anh", "Hoàng Gia Linh", "Bùi Quốc Bảo",
  "Nguyễn Phương Nhi", "Trịnh Minh Quân", "Lê Tuấn Kiệt", "Phạm Hồng Nhung", "Nguyễn Quốc Bảo"
];


const feedbackPool = [
  "Sản phẩm nhận được giống hình gần như 100 phần trăm chất vải đẹp và mặc lên rất tôn dáng mình khá bất ngờ so với mức giá này",
  "Giao hàng nhanh đóng gói kỹ càng khi mở ra không bị nhăn nhiều mặc thử thấy form chuẩn và thoải mái",
  "Mình đặt hơi lo về size nhưng shop tư vấn rất chuẩn mặc lên vừa vặn không cần chỉnh sửa thêm",
  "Chất liệu mềm không gây khó chịu khi mặc lâu rất phù hợp cho những buổi tiệc kéo dài",
  "Màu sắc ngoài thực tế rất đẹp không bị lệch so với hình ảnh đăng trên shop",
  "Đường may chắc chắn chi tiết hoàn thiện tốt nhìn tổng thể khá cao cấp",
  "Nhân viên hỗ trợ nhanh và nhiệt tình giúp mình chọn được sản phẩm phù hợp",
  "Mặc lên nhìn sang hơn hẳn ai cũng khen nên mình rất hài lòng",
  "Giá cả hợp lý so với chất lượng nhận được đáng để mua",
  "Sản phẩm mặc lên lên hình rất đẹp phù hợp chụp ảnh hoặc dự tiệc",
  "Ban đầu mình không kỳ vọng nhiều nhưng khi nhận hàng thì thấy vượt mong đợi",
  "Vải ít nhăn giữ form tốt kể cả khi di chuyển nhiều",
  "Thiết kế nhìn rất tinh tế không bị lỗi thời hay đại trà",
  "Sản phẩm giao đúng mẫu đúng mô tả không có lỗi đáng kể",
  "Dễ phối với phụ kiện khác giúp tổng thể trang phục nổi bật hơn",
  "Đây là lần thứ hai mình mua và chất lượng vẫn rất ổn định",
  "Shop hỗ trợ đổi size nhanh chóng khi mình cần rất chuyên nghiệp",
  "Mặc lên giúp che khuyết điểm tốt và tôn dáng rõ rệt",
  "Sản phẩm thực tế nhìn đẹp hơn trong ảnh nên khá ưng ý",
  "Rất hài lòng với trải nghiệm mua hàng sẽ tiếp tục ủng hộ shop trong tương lai"
];


export const getRandomReviews = (): Review[] => {
  const shuffledNames = [...userNames].sort(() => 0.5 - Math.random());
  const shuffledFeedback = [...feedbackPool].sort(() => 0.5 - Math.random());
  const count = Math.floor(Math.random() * 2) + 3;


  return shuffledNames.slice(0, count).map((name, index) => ({
    id: index + 1,
    userName: name,
    rating: Math.floor(Math.random() * 3) + 3, // Random 3, 4, hoặc 5 sao
    comment: shuffledFeedback[index],
    date: `${Math.floor(Math.random() * 20) + 1}/04/2026`,
    avatar: `https://i.pravatar.cc/150?u=${name}`
  }));
};

