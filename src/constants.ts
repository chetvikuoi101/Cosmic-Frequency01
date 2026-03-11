export interface Card {
  id: number;
  name: string;
  enName: string;
  meaning: string;
  enMeaning: string;
  imageSeed: string;
  customUrl?: string;
  lore?: string;
}

export const CARD_BACK_URL = "https://drive.google.com/thumbnail?id=14XAjv22aE6yZJy6s3DX2jhUwCsHcP7dI&sz=w1000";

export const ORACLE_CARDS: Card[] = [
  { 
    id: 1, 
    name: "Điểm Kỳ Dị", 
    enName: "Singularity", 
    meaning: "(0) (A) Nguồn gốc sâu xa. Tiềm năng nén chặt. Logic: Áp lực càng lớn, sự bùng nổ sau này càng vĩ đại.", 
    enMeaning: "(0) (A) Deep origin. Compressed potential. Logic: The greater the pressure, the greater the explosion.", 
    imageSeed: "eye", 
    customUrl: "https://drive.google.com/uc?export=download&id=1nUO_7ixD2CNdrciNlkVh6un2o8fGa_A-",
    lore: `Lá bài số 01: Điểm Kỳ Dị (Singularity) là "vạch xuất phát" của toàn bộ vũ trụ. Nó đại diện cho nguồn cơn, hạt nhân của mọi sự kiện sắp hình thành. 
    Câu chuyện: Trạng thái trước Big Bang, nơi mọi quy luật vật lý sụp đổ, chứa đựng Tiềm Năng Thuần Khiết (Pure Potential). 
    Tham số: [0, (A)] - Trung tính và Cổ đại.
    Công việc: Giai đoạn thai nghén, cần tập trung vào hạt nhân cốt lõi, mật độ nén càng cao sức bật càng lớn.
    Tình cảm: Kết nối ngầm mãnh liệt nhưng chưa hiển lộ, cần kiên nhẫn xây dựng nền móng.
    Tâm lý: Giai đoạn hướng nội sâu sắc, đối diện với hạt nhân bên trong để reset về con số 0 trước khi sang trang mới.`
  },
  { 
    id: 2, 
    name: "Big Bang", 
    enName: "Big Bang", 
    meaning: "(+) (L) Sự giãn nở quy mô lớn. Sự khởi đầu bùng nổ. Logic: Một sự kiện làm thay đổi hoàn toàn cuộc đời.", 
    enMeaning: "(+) (L) Large-scale expansion. Explosive beginning. Logic: An event that completely changes life.", 
    imageSeed: "soul", 
    customUrl: "https://drive.google.com/uc?export=download&id=1xH-Xny8G-yORQ9G0rDpJF57mlGU9-B0k",
    lore: `Lá bài số 02: Big Bang (Vụ Nổ Lớn). Nếu "Điểm Kỳ Dị" là sự nén lại, thì Big Bang chính là khoảnh khắc giải phóng. 
    Tham số: [(+), (L)] - Dương tính (Chủ động) và Ánh sáng (Ngay lập tức).
    Câu chuyện: Sự khai sinh từ hư vô, tạo ra không gian và thời gian. Khoảnh khắc quyết định không thể đảo ngược.
    Công việc: Cơ hội ồ ạt, cần hành động ngay lập tức (tốc độ L), trật tự sẽ hình thành sau hỗn loạn.
    Tình cảm: Tình yêu sét đánh hoặc biến cố làm thay đổi hoàn toàn trạng thái quan hệ.
    Tâm lý: Sự thức tỉnh (Awakening) đột ngột, phá vỡ cấu trúc cũ để nhận thức rộng lớn hơn.`
  },
  { 
    id: 3, 
    name: "Vật Chất Tối", 
    enName: "Dark Matter", 
    meaning: "(-) (A) Vùng ảnh hưởng ngầm. Sự hỗ trợ vô hình. Logic: Có những thế lực hoặc người âm thầm giúp đỡ bạn.", 
    enMeaning: "(-) (A) Hidden influence. Invisible support. Logic: There are forces or people quietly helping you.", 
    imageSeed: "moon", 
    customUrl: "https://drive.google.com/uc?export=download&id=15Ih8tCepsCqqNO2tK4grF1VLz1uNH53r",
    lore: `Lá bài số 03: Vật Chất Tối (Dark Matter). Điều quan trọng nhất thường vô hình trước mắt trần. Đóng vai trò là "keo dính" giữ vững cấu trúc vũ trụ.
    Tham số: [(-), (A)] - Âm tính (Bên trong) và Cổ đại (Bền bỉ/Lâu dài).
    Câu chuyện: Lực hấp dẫn vô hình giữ các ngôi sao không bị văng khỏi thiên hà. Sự hỗ trợ thầm lặng.
    Công việc: Giai đoạn xây móng, củng cố nội bộ, chưa cần phô trương nhưng kết cấu đang rất vững.
    Tình cảm: Sự cam kết, trách nhiệm và tình nghĩa sâu sắc. Trân trọng những hy sinh thầm lặng.
    Tâm lý: Nội lực tiềm ẩn mạnh mẽ, là điểm tựa cho người khác ngay cả khi không tỏa sáng.`
  },
  { 
    id: 4, 
    name: "Năng Lượng Tối", 
    enName: "Dark Energy", 
    meaning: "(-) (A) Sự xa cách dần dần. Áp lực đẩy ra ngoài. Logic: Một mối quan hệ hoặc dự án đang nhạt dần mà không có xung đột.", 
    enMeaning: "(-) (A) Gradual distancing. Outward pressure. Logic: A relationship or project is fading without conflict.", 
    imageSeed: "sun", 
    customUrl: "https://drive.google.com/uc?export=download&id=1-oW6gVG3JEX-HSl7iZi2Rf9AgEBWfS4-",
    lore: `Lá bài số 04: Năng Lượng Tối (Dark Energy). Sự chia ly không cần lý do ồn ào. Phản lực đẩy mọi thứ ra xa nhau.
    Tham số: [(-), (A)] - Âm tính (Chia tách) và Cổ đại (Chậm rãi/Kéo dài).
    Câu chuyện: Các thiên hà ngày càng rời xa nhau do khoảng không phình ra. Sự tan rã tự nhiên.
    Công việc: Sự rời rạc trong tổ chức, suy thoái từ từ. Đừng cưỡng cầu, hãy chuẩn bị kế hoạch tách riêng.
    Tình cảm: "Silent Quitting" - sự buông bỏ thầm lặng. Hai người trôi về hai thiên hà khác nhau mà không có xung đột.
    Tâm lý: Cảm giác cô độc và lạc lõng giữa đám đông, cần sự tách biệt để tìm lại chính mình.`
  },
  { 
    id: 5, 
    name: "Hố Đen", 
    enName: "Black Hole", 
    meaning: "(-) (L) Điểm không thể quay đầu. Sự tiêu tốn, nợ nần. Logic: Cảnh báo về một 'vũng lầy' tài chính hoặc cảm giác bế tắc.", 
    enMeaning: "(-) (L) Point of no return. Consumption, debt. Logic: Warning of a financial 'swamp' or feeling of deadlock.", 
    imageSeed: "blackhole", 
    customUrl: "https://drive.google.com/uc?export=download&id=1VDTI1nW-Amwd3NjRUVLfcV1iI53sJ4Fp",
    lore: `Lá bài số 05: Hố Đen (Black Hole). Vùng không-thời gian có lực hấp dẫn cực mạnh, không gì thoát ra được. Sự tiêu tốn và mất mát.
    Tham số: [(-), (L)] - Âm tính và Ánh sáng (Tác động mạnh/Nhanh).
    Câu chuyện: Sự Sụp Đổ Trọng Trường. Cảnh báo về việc bị cuốn vào những thói quen xấu, nợ nần hoặc những mối quan hệ độc hại hút cạn năng lượng.
    Công việc: Thất thoát tài chính, dự án thua lỗ không đáy. Cần cắt lỗ ngay lập tức trước khi bị nuốt chửng hoàn toàn.
    Tình cảm: Mối quan hệ "hút máu" (Energy Vampire). Cảm giác kiệt sức và không tìm thấy lối thoát.
    Tâm lý: Trầm cảm hoặc ám ảnh cưỡng chế. Cần sự giúp đỡ từ bên ngoài để thoát khỏi lực hút tiêu cực.`
  },
  { 
    id: 6, 
    name: "Chân Trời Sự Kiện", 
    enName: "Event Horizon", 
    meaning: "(-) (A) Điểm không thể quay lại. Lựa chọn không thể đảo ngược. Logic: Bạn đang đứng trước một quyết định mang tính định mệnh.", 
    enMeaning: "(-) (A) Point of no return. Irreversible choice. Logic: You are facing a fateful decision.", 
    imageSeed: "void", 
    customUrl: "https://drive.google.com/uc?export=download&id=1HYt9r1sZDaE7LYIye6UdZzhNNi4gdqUR",
    lore: `Lá bài số 06: Chân Trời Sự Kiện (Event Horizon). Ranh giới tuyệt đối bao quanh một lỗ đen. Điểm không thể quay lại.
    Tham số: [(-), (A)] - Âm tính và Cổ đại (Trường tồn/Định mệnh).
    Câu chuyện: Trọng lực là người phán xét cuối cùng. Một khi bạn vượt qua ranh giới đó, ngay cả ánh sáng cũng không thể cứu bạn.
    Công việc: Quyết định trọng đại không thể đảo ngược. Nếu đang ở trong môi trường độc hại, hãy rời đi ngay trước khi bị nuốt chửng hoàn toàn.
    Tình cảm: Một sự chia cắt vĩnh viễn hoặc một cam kết không thể rút lại. Lựa chọn này sẽ thay đổi dòng thời gian của bạn mãi mãi.
    Tâm lý: Cái bẫy tâm lý sâu sắc. Bạn đang ám ảnh về điều không thể thay đổi, cần nhận diện ranh giới để bảo vệ năng lượng cốt lõi.`
  },
  { 
    id: 7, 
    name: "Lỗ Sâu (Wormhole)", 
    enName: "Wormhole", 
    meaning: "(+) (L) Kết nối liên vùng. Lối đi tắt, giải pháp. Logic: Xuất hiện một 'quý nhân' hoặc một cơ hội giúp bạn nhảy vọt.", 
    enMeaning: "(+) (L) Inter-regional connection. Shortcut, solution. Logic: A 'benefactor' or opportunity appears to help you leap.", 
    imageSeed: "anchor", 
    customUrl: "https://drive.google.com/uc?export=download&id=1A0oMeqcuAcSl2SGSW_2HYS6qyXMeyM-0",
    lore: `Lá bài số 07: Lỗ Sâu (Wormhole). Sự di chuyển nhanh hơn ánh sáng nhờ bẻ cong không gian. Đường tắt và giải pháp đột phá.
    Tham số: [(+), (L)] - Dương tính và Ánh sáng (Siêu tốc).
    Câu chuyện: Cơ Hội "Hack" Game. Kết nối hai điểm cách xa nhau, bỏ qua các trình tự thông thường.
    Công việc: Nhảy cóc sự nghiệp (Quantum Leap), gặp quý nhân hoặc giải pháp thiên tài giải quyết bế tắc lâu năm.
    Tình cảm: Kết nối định mệnh bất chấp khoảng cách địa lý hay địa vị xã hội.
    Tâm lý: Khoảnh khắc "Aha!", giải pháp xuất hiện rõ ràng trong đầu, tháo gỡ mọi nút thắt tức thì.`
  },
  { 
    id: 8, 
    name: "Hố Trắng", 
    enName: "White Hole", 
    meaning: "(+) (L) Sự phun trào năng lượng. Sự hào phóng, cho đi. Logic: Thời điểm bạn nên chia sẻ tài năng hoặc tiền bạc.", 
    enMeaning: "(+) (L) Energy eruption. Generosity, giving. Logic: Time to share your talent or money.", 
    imageSeed: "bridge", 
    customUrl: "https://drive.google.com/uc?export=download&id=1uhHBPXFAZHIsrEUivNnmpFpwG9RJ6uoY",
    lore: `Lá bài số 08: Hố Trắng (White Hole). Ngược lại với Hố Đen, đây là nơi chỉ phun trào năng lượng ra ngoài. Sự cho đi và giải phóng.
    Tham số: [(+), (L)] - Dương tính và Ánh sáng (Tức thì).
    Câu chuyện: Sự Tuôn Trảy Không Ngừng. Cảm giác nhẹ nhõm khi giải phóng năng lượng dư thừa hoặc bí mật.
    Công việc: Thời điểm "xả kho", chia sẻ bí quyết hoặc làm từ thiện để lưu thông dòng chảy vũ trụ.
    Tình cảm: Tình yêu không đòi hỏi nhận lại, yêu vì mình quá đầy nên phải tràn ra.
    Tâm lý: Sự thanh lọc (Catharsis), xả hết ẩn ức ra ngoài để dọn đường cho điều tốt đẹp mới.`
  },
  { 
    id: 9, 
    name: "Tinh Vân Lửa", 
    enName: "Emission Nebula", 
    meaning: "(+) (P) Sự sinh sôi, nuôi dưỡng. Nghệ thuật, sáng tạo. Logic: Trong đám bụi hỗn độn, những vì sao rực rỡ nhất đang được thai nghén.", 
    enMeaning: "(+) (P) Proliferation, nurturing. Art, creativity. Logic: In the chaos, the brightest stars are being born.", 
    imageSeed: "nursery", 
    customUrl: "https://drive.google.com/uc?export=download&id=1QQr1Ydfae3h9nIyYeOY8zAUiaHzujW5e",
    lore: `Lá bài số 09: Tinh Vân Lửa (Emission Nebula). "Nhà trẻ của vũ trụ", nơi các ngôi sao mới hình thành từ bụi khí.
    Tham số: [(+), (P)] - Dương tính và Hành tinh (Trung hạn).
    Câu chuyện: Quá Trình Thai Nghén Sáng Tạo. Mọi thứ còn sơ khai, hỗn độn nhưng tràn đầy hy vọng và tiềm năng.
    Công việc: Môi trường lý tưởng để thử nghiệm, nhào nặn ý tưởng. Cần kiên nhẫn, đừng ép dự án "chín" sớm.
    Tình cảm: Giai đoạn lãng mạn, tìm hiểu và vun đắp (Honeymoon phase). Tình cảm lớn dần ấm áp.
    Tâm lý: Cảm hứng nghệ thuật dồi dào, khao khát được chăm sóc và tạo ra cái đẹp.`
  },
  { 
    id: 10, 
    name: "Hành Tinh Băng", 
    enName: "Ice Planet", 
    meaning: "(-) (P) Sự cô lập, lạnh lẽo. Sự trì trệ, bảo thủ. Logic: Cảm xúc của bạn đang bị đóng băng hoặc bị từ chối.", 
    enMeaning: "(-) (P) Isolation, coldness. Stagnation, conservatism. Logic: Your emotions are frozen or rejected.", 
    imageSeed: "comet", 
    customUrl: "https://drive.google.com/uc?export=download&id=1vuTJ1tJ5vakwwDb-MUuOVn5LUxpIkp4q",
    lore: `Lá bài số 10: Hành Tinh Băng (Ice Planet). Sự cô lập và trạng thái ngưng đọng để bảo quản. 
    Tham số: [(-), (P)] - Âm tính và Hành tinh (Chu kỳ).
    Câu chuyện: Hành tinh lang thang mất ngôi sao mẹ, đóng băng để chờ đợi thời cơ mới. Cơ chế phòng vệ khỏi tổn thương.
    Công việc: Sự đóng băng tài sản hoặc bế tắc đàm phán. Cần chế độ "ngủ đông", bảo toàn vốn và chờ đợi.
    Tình cảm: Sự xa cách lạnh lùng (Emotional Unavailability). Cần hơi ấm liên tục và nhẹ nhàng để rã đông.
    Tâm lý: Tê liệt cảm xúc (Numbness), đóng cửa trái tim vì áp lực quá lớn.`
  },
  { 
    id: 11, 
    name: "Từ Trường", 
    enName: "Magnetic Field", 
    meaning: "(0) (P) Vùng bảo vệ/thu hút. Mối quan hệ tương tác. Logic: Bạn đang thu hút những người có cùng tần số.", 
    enMeaning: "(0) (P) Protection/attraction zone. Interactive relationship. Logic: You are attracting people with the same frequency.", 
    imageSeed: "echo", 
    customUrl: "https://drive.google.com/uc?export=download&id=1M41Nbk1Oq8UowVxGF3xr2jZ84zeTu51V",
    lore: `Lá bài số 11: Từ Trường (Magnetic Field). Trường năng lượng vô hình bảo vệ và thu hút. Luật hấp dẫn cá nhân.
    Tham số: [0, (P)] - Trung tính và Hành tinh (Ổn định).
    Câu chuyện: Tần Số Rung Động. Bạn không thu hút những gì bạn muốn, bạn thu hút những gì bạn LÀ.
    Công việc: Xây dựng thương hiệu cá nhân và uy tín. Tập trung giá trị nội tại để cơ hội tự tìm đến.
    Tình cảm: Sự hòa hợp tâm hồn, "nồi nào úp vung nấy". Đối phương là tấm gương phản chiếu nội tâm bạn.
    Tâm lý: Trực giác nhạy bén, la bàn nội tâm dẫn lối. Tin vào linh cảm khi gặp người hoặc nơi mới.`
  },
  { 
    id: 12, 
    name: "Bão Mặt Trời", 
    enName: "Solar Flare", 
    meaning: "(-) (L) Sự nhiễu loạn diện rộng. Cơn giận, xung đột. Logic: Một cuộc tranh cãi hoặc tin đồn làm hỏng kế hoạch.", 
    enMeaning: "(-) (L) Wide-scale disturbance. Anger, conflict. Logic: An argument or rumor ruins plans.", 
    imageSeed: "gravity", 
    customUrl: "https://drive.google.com/uc?export=download&id=1HlLG-bSHagVm0BHUF56UeINvUb6AU3gZ",
    lore: `Lá bài số 12: Bão Mặt Trời (Solar Flare). Sự nhiễu loạn và mất kiểm soát tạm thời do năng lượng dư thừa giải phóng sai cách.
    Tham số: [(-), (L)] - Âm tính và Ánh sáng (Cực nhanh/Bất ngờ).
    Câu chuyện: Luồng hạt điện tích làm tê liệt mạng lưới thông tin. Cơn giận thiêu rụi thành quả dày công xây dựng.
    Công việc: Khủng hoảng truyền thông, sự cố hệ thống. Cần ngắt kết nối, im lặng chờ bão tan thay vì cố sửa chữa.
    Tình cảm: Cãi vã nóng nảy, nhiễu khả năng lắng nghe. Đừng đổ thêm dầu vào lửa, hãy lánh đi để làm mát.
    Tâm lý: Sự quá tải (Burnout), dễ kích động. Cần "ngắt cầu dao" tinh thần, tránh xa drama.`
  },
  { 
    id: 13, 
    name: "Trọng Lực", 
    enName: "Gravity", 
    meaning: "(+) (P) Sự ràng buộc pháp lý. Trách nhiệm nặng nề. Logic: Bạn bị kéo về phía trách nhiệm và thực tế.", 
    enMeaning: "(+) (P) Legal binding. Heavy responsibility. Logic: You are pulled toward responsibility and reality.", 
    imageSeed: "supernova", 
    customUrl: "https://drive.google.com/uc?export=download&id=1tzYmxd732gpiuJ7qVVtf9jo97phanttk",
    lore: `Lá bài số 13: Trọng Lực (Gravity). Lực cơ bản giữ mọi thứ không tan biến nhưng cũng là gánh nặng thực tế.
    Tham số: [(+), (P)] - Dương tính và Hành tinh (Ổn định/Liên tục).
    Câu chuyện: "Cơm Áo Gạo Tiền". Trách nhiệm, hóa đơn, deadline và luật pháp. Bộ khung xương sống giữ cuộc đời đứng vững.
    Công việc: Áp lực từ quy trình, KPI hoặc nợ nần. Cần tuân thủ kỷ luật, đừng chống lại trọng lực.
    Tình cảm: Sự cam kết (Commitment) và trách nhiệm gia đình. Phép thử của sự trưởng thành trong tình yêu.
    Tâm lý: Sống thực tế (Grounding), quay về mặt đất. Ngưng ảo tưởng, đối diện với các con số thực tế.`
  },
  { 
    id: 14, 
    name: "Sao Xung (Pulsar)", 
    enName: "Pulsar", 
    meaning: "(+) (P) Tín hiệu lặp đi lặp lại. Thói quen, nhịp điệu. Logic: Sự việc sẽ lặp đi lặp lại. Hãy thiết lập thói quen tốt.", 
    enMeaning: "(+) (P) Repetitive signal. Habit, rhythm. Logic: Events will repeat. Establish good habits.", 
    imageSeed: "tide", 
    customUrl: "https://drive.google.com/uc?export=download&id=1wYhAxccEq47ZCnB0Rlpl72yRROVpP3g2",
    lore: `Lá bài số 14: Sao Xung (Pulsar). Sự ổn định động, chuyển động có nhịp điệu và chu kỳ chính xác.
    Tham số: [(+), (P)] - Dương tính và Hành tinh (Chu kỳ/Lặp lại).
    Câu chuyện: Nhịp Tim Của Cuộc Sống. Ngọn hải đăng vũ trụ phóng bức xạ đều đặn. Sức mạnh của sự nhất quán.
    Công việc: Kỷ luật là chìa khóa. Cần thiết lập quy trình chuẩn (SOP), làm việc chuyên nghiệp thay vì theo cảm hứng.
    Tình cảm: Sự an tâm và tin cậy từ những hành động nhỏ lặp đi lặp lại. Tình yêu bền vững không cần drama.
    Tâm lý: Điều chỉnh đồng hồ sinh học, đưa cơ thể vào khuôn khổ để giải phóng tâm trí.`
  },
  { 
    id: 15, 
    name: "Siêu Tân Tinh", 
    enName: "Supernova", 
    meaning: "(+/-) (L) Sự tỏa sáng cực độ. Thành công rực rỡ. Logic: Thành công đỉnh cao nhưng ngắn ngủi.", 
    enMeaning: "(+/-) (L) Extreme brightness. Brilliant success. Logic: Peak success but short-lived.", 
    imageSeed: "gate", 
    customUrl: "https://drive.google.com/uc?export=download&id=1ODOCkzdadxUKy3FdBh4AWXmrHD5g7Dpf",
    lore: `Lá bài số 15: Siêu Tân Tinh (Supernova). Đỉnh cao danh vọng và sự kết thúc để tái sinh. Cái chết huy hoàng tạo ra di sản.
    Tham số: [(+/-), (L)] - Lưỡng tính và Ánh sáng (Chói lòa/Nhanh).
    Câu chuyện: Ngôi sao nổ tung tỏa sáng hơn cả thiên hà, giải phóng các nguyên tố nặng kiến tạo vũ trụ mới.
    Công việc: Thành công vang dội (Big Win) nhưng là dấu chấm hết cho chu kỳ cũ. Hãy cháy hết mình (All-in).
    Tình cảm: Kỷ niệm khắc cốt ghi tâm nhưng ngắn ngủi. Đừng buồn vì kết thúc, hãy vui vì đã thăng hoa.
    Tâm lý: Sự giác ngộ đột ngột hoặc sẵn sàng xả thân vì mục đích lớn lao hơn.`
  },
  { 
    id: 16, 
    name: "Sao Lùn Trắng", 
    enName: "White Dwarf", 
    meaning: "(0) (A) Vùng an toàn, cũ kỹ. Kinh nghiệm lâu năm. Logic: Lời khuyên từ những người có kinh nghiệm lâu năm.", 
    enMeaning: "(0) (A) Safe zone, old. Long-term experience. Logic: Advice from those with long-term experience.", 
    imageSeed: "mirror", 
    customUrl: "https://drive.google.com/uc?export=download&id=1ox4ZMfsN_-7wrPrrZ8NB8schORCgsr3B",
    lore: `Lá bài số 16: Sao Lùn Trắng (White Dwarf). Sự thông thái, kinh nghiệm lâu năm và ổn định vĩnh cửu.
    Tham số: [0, (A)] - Trung tính và Cổ đại (Bền bỉ/Lâu dài).
    Câu chuyện: Tàn tích lõi sao đặc chắc, phát sáng bền bỉ nhờ nhiệt lượng tích lũy. Hình ảnh người cố vấn (Mentor).
    Công việc: Sử dụng kinh nghiệm cũ (Old School), tìm về cội nguồn. Uy tín lâu năm là tấm khiên an toàn nhất.
    Tình cảm: Tình nghĩa vợ chồng, tri kỷ "đầu bạc răng long". Thấu hiểu sâu sắc không cần lời nói.
    Tâm lý: Sự trưởng thành và điềm tĩnh. Không còn bị kích động bởi khen chê, biết rõ giá trị bản thân.`
  },
  { 
    id: 17, 
    name: "Thiên Thạch Lang Thang", 
    enName: "Wandering Meteor", 
    meaning: "(-) (L) Sự xâm nhập bất ngờ. Tai nạn, biến cố lẻ. Logic: Một rắc rối nhỏ từ trên trời rơi xuống.", 
    enMeaning: "(-) (L) Sudden intrusion. Accident, isolated event. Logic: A small trouble falls from the sky.", 
    imageSeed: "pulsar", 
    customUrl: "https://drive.google.com/uc?export=download&id=10TNgUPAFSxz6SAoyzxvKbjXaOvmflizR",
    lore: `Lá bài số 17: Thiên Thạch Lang Thang (Rogue Asteroid). Rủi ro bất ngờ và những yếu tố chen ngang ngoài kế hoạch.
    Tham số: [(-), (L)] - Âm tính và Ánh sáng (Bất ngờ/Nhanh).
    Câu chuyện: Luật Murphy: "Cái gì có thể sai, nó sẽ sai". Va chạm ngẫu nhiên gây thiệt hại nhỏ nhưng ức chế lớn.
    Công việc: Phát sinh ngoài dự kiến, cần phương án dự phòng (Backup Plan). Xử lý nhanh rồi quên đi.
    Tình cảm: Hiểu lầm vụn vặt hoặc sự quấy rối từ hoàn cảnh bên ngoài. Đừng nghiêm trọng hóa vấn đề.
    Tâm lý: Cảm giác xui xẻo "sao quả tạ". Cần bình tĩnh ứng biến, coi đó là xác suất ngẫu nhiên.`
  },
  { 
    id: 18, 
    name: "Vành Đai Tiểu Hành Tinh", 
    enName: "Asteroid Belt", 
    meaning: "(0) (P) Rào cản, giới hạn. Sự kiên trì, phòng thủ. Logic: Bạn cần thiết lập ranh giới cá nhân.", 
    enMeaning: "(0) (P) Barrier, limit. Persistence, defense. Logic: You need to set personal boundaries.", 
    imageSeed: "darkmatter", 
    customUrl: "https://drive.google.com/uc?export=download&id=1s6KmoiJziraHTX79a7jUR_HYwSCXAn5I",
    lore: `Lá bài số 18: Vành Đai Tiểu Hành Tinh (Asteroid Belt). Ranh giới, sự phòng thủ và khoảng cách an toàn.
    Tham số: [0, (P)] - Trung tính và Hành tinh (Ổn định).
    Câu chuyện: Vùng đệm phân chia các khu vực trong hệ mặt trời. Lằn ranh đỏ bảo vệ sự bình yên của chính mình.
    Công việc: Thiết lập rào cản pháp lý, bảo mật ý tưởng. Đừng quá cởi mở, cần rạch ròi quyền lợi.
    Tình cảm: Cần không gian riêng (Personal Space). Tôn trọng ranh giới là chìa khóa cho mối quan hệ bền vững.
    Tâm lý: Cơ chế tự vệ lành mạnh. Học cách nói "Không" để bảo toàn năng lượng cho việc quan trọng.`
  },
  { 
    id: 19, 
    name: "Ánh Sáng Cực Quang", 
    enName: "Aurora", 
    meaning: "(+) (L) Vẻ đẹp phù du. Sự truyền cảm hứng. Logic: Một ý tưởng nghệ thuật hoặc niềm vui ngắn.", 
    enMeaning: "(+) (L) Ephemeral beauty. Inspiration. Logic: An artistic idea or short joy.", 
    imageSeed: "lightspeed", 
    customUrl: "https://drive.google.com/uc?export=download&id=1pcUCcnSck_XhyTuyuyXgPZKBcx88S83_",
    lore: `Lá bài số 19: Ánh Sáng Cực Quang (Aurora). Cảm hứng, nghệ thuật và những khoảnh khắc phù du rực rỡ.
    Tham số: [(+), (L)] - Dương tính và Ánh sáng (Ngắn ngủi/Thời điểm).
    Câu chuyện: "Vết sẹo ánh sáng" của một cuộc va chạm bão từ. Đẹp đến nín thở nhưng tan biến rất nhanh.
    Công việc: Ý tưởng sáng tạo đột phá, cơ hội tỏa sáng ngắn hạn. Hãy nắm bắt ngay tức thì (Carpe Diem).
    Tình cảm: Sự lãng mạn bất ngờ, những cuộc tình thoáng qua đẹp như phim. Hãy tận hưởng như một món quà.
    Tâm lý: Chữa lành bằng cái đẹp. Cần nuông chiều cảm xúc, tái tạo năng lượng sáng tạo qua nghệ thuật.`
  },
  { 
    id: 20, 
    name: "Rối Lượng Tử", 
    enName: "Quantum Entanglement", 
    meaning: "(0) (L) Sự kết nối xa xôi. Thần giao cách cảm. Logic: Bạn và một người khác đang có cùng suy nghĩ.", 
    enMeaning: "(0) (L) Distant connection. Telepathy. Logic: You and another person share the same thoughts.", 
    imageSeed: "constellation", 
    customUrl: "https://drive.google.com/uc?export=download&id=1heGwEHOA7xjn8Cln74Tyavyjf1C7SP8f",
    lore: `Lá bài số 20: Rối Lượng Tử (Quantum Entanglement). Kết nối tâm linh, thần giao cách cảm và đồng bộ tức thời.
    Tham số: [0, (L)] - Trung tính và Ánh sáng (Tức thời/Phi thời gian).
    Câu chuyện: "Tác động ma quái từ xa". Hai hạt kết nối dù cách xa hàng tỷ năm ánh sáng. Chia cách chỉ là ảo giác.
    Công việc: Tìm được cộng sự ăn ý tuyệt đối. Tư duy khớp nhau như mảnh ghép hoàn hảo, hiệu suất cực cao.
    Tình cảm: Tri kỷ (Twin Flame), cảm nhận được nỗi đau/niềm vui của nhau bất chấp khoảng cách địa lý.
    Tâm lý: Sự đồng thanh tương ứng (Synchronicity). Thay đổi nội tâm để thay đổi thế giới bên ngoài tức thì.`
  },
  { 
    id: 21, 
    name: "Đa Vũ Trụ", 
    enName: "Multiverse", 
    meaning: "(+) (A) Sự lựa chọn vô hạn. Sự phân vân, tiềm năng. Logic: Có rất nhiều hướng đi tốt. Đừng hối tiếc về con đường đã chọn.", 
    enMeaning: "(+) (A) Infinite choices. Hesitation, potential. Logic: Many good paths exist. Don't regret the chosen path.", 
    imageSeed: "blackhole", 
    customUrl: "https://drive.google.com/uc?export=download&id=1VDTI1nW-Amwd3NjRUVLfcV1iI53sJ4Fp",
    lore: `Lá bài số 21: Đa Vũ Trụ (Multiverse). Sự lựa chọn vô hạn và Ma Trận Lựa Chọn. Mỗi quyết định tạo ra một vũ trụ mới.
    Tham số: [(+), (A)] - Dương tính và Cổ đại (Dòng thời gian dài).
    Câu chuyện: Sự phân nhánh thực tại. Không có con đường nào là đường cụt, tất cả đều mở ra những chân trời mới.
    Công việc: Quá nhiều cơ hội tốt dẫn đến sự tê liệt vì phân tích. Đừng tìm kiếm lựa chọn hoàn hảo, hãy chọn con đường hứng thú nhất.
    Tình cảm: Hội chứng FOMO trong tình yêu. Cần dũng cảm đóng lại các "vũ trụ khả năng" khác để sống trọn vẹn trong thực tại.
    Tâm lý: Sự hối tiếc quá khứ ("Giá như..."). Hãy tin rằng phiên bản hiện tại là tối ưu nhất với những dữ kiện đang có.`
  },
  { 
    id: 22, 
    name: "Entropy (Sự Hỗn Loạn)", 
    enName: "Entropy", 
    meaning: "(-) (A) Sự xuống cấp môi trường. Sự phai nhạt cảm xúc. Logic: Sự hỗn loạn là tiền đề để thiết lập một trật tự mới tốt hơn.", 
    enMeaning: "(-) (A) Environmental degradation. Fading emotions. Logic: Chaos is the prerequisite for a better order.", 
    imageSeed: "zenith", 
    customUrl: "https://drive.google.com/uc?export=download&id=1WQrXnPSBUT4_mSvyjOpoCpwQ63eYG6mj",
    lore: `Lá bài số 22: Entropy (Sự Hỗn Loạn). Quy luật của sự suy tàn và mất trật tự tự nhiên. Mọi cấu trúc trật tự đều là tạm thời.
    Tham số: [(-), (A)] - Âm tính và Cổ đại (Chậm rãi/Kéo dài).
    Câu chuyện: Sự xuống cấp tự nhiên. Nếu không nạp năng lượng mới, mọi hệ thống sẽ tự động tan rã.
    Công việc: Sự thoái trào và lỗi thời. Cần tái cấu trúc, nạp năng lượng mới thay vì duy trì trạng thái cũ.
    Tình cảm: Sự phai nhạt cảm xúc và chán nản. Tình yêu cần được "tưới nước" thường xuyên để chống lại sự Entropy hóa.
    Tâm lý: Sự buông xuôi và lười biếng. Hãy bắt đầu từ những việc nhỏ nhất để tạo ra trật tự và đẩy lùi sự hỗn loạn.`
  },
  { 
    id: 23, 
    name: "Lăng Kính Phổ Quang", 
    enName: "Spectral Prism", 
    meaning: "(+) (L) Sự phân tích đa chiều. Sự đa dạng, tài năng. Logic: Bạn cần nhìn vấn đề ở nhiều khía cạnh.", 
    enMeaning: "(+) (L) Multi-dimensional analysis. Diversity, talent. Logic: You need to look at issues from many angles.", 
    imageSeed: "nadir", 
    customUrl: "https://drive.google.com/uc?export=download&id=15HQ1zGLBGfDgXgcQsUkQAUuy5rGTHaGg",
    lore: `Lá bài số 23: Lăng Kính Phổ Quang (Spectral Prism). Sự thấu hiểu bản chất và góc nhìn đa chiều. Nhìn thấu cầu vồng ẩn giấu.
    Tham số: [(+), (L)] - Dương tính và Ánh sáng (Sắc bén/Tức thì).
    Câu chuyện: Nhìn Thấu Bản Chất. Khả năng phân tích sâu vào cấu trúc bên trong để thấy sự phong phú của vấn đề.
    Công việc: Đa dạng hóa và phân tích chuyên sâu. Hãy nhìn vấn đề ở nhiều góc độ, hỏi ý kiến đa chiều trước khi quyết định.
    Tình cảm: Thấu hiểu những góc khuất. Chấp nhận mọi sắc thái của đối phương, thấu hiểu "Tại sao họ làm vậy?".
    Tâm lý: Người đa tiềm năng. Đừng ép mình thành tia laser đơn sắc, hãy tự hào về sự đa dạng và tài năng của bản thân.`
  },
  { 
    id: 24, 
    name: "Hành Tinh Sắt", 
    enName: "Iron Planet", 
    meaning: "(+) (P) Môi trường khắc nghiệt. Sự quyết tâm, cứng rắn. Logic: Ý chí của bạn đang được tôi luyện.", 
    enMeaning: "(+) (P) Harsh environment. Determination, toughness. Logic: Your will is being tempered.", 
    imageSeed: "aurora", 
    customUrl: "https://drive.google.com/uc?export=download&id=1uL8rHGhf1JoRKugEFacvqORaS_WKIHVr",
    lore: `Lá bài số 24: Hành Tinh Sắt (Iron Planet). Sự kiên cường, kỷ luật thép và bản lĩnh không khoan nhượng.
    Tham số: [(+), (P)] - Dương tính và Hành tinh (Bền bỉ/Ổn định).
    Câu chuyện: Lò Luyện Ý Chí. Khối kim loại đặc trơ trọi giữa không gian, chịu đựng nhiệt độ và áp suất cực lớn.
    Công việc: Môi trường khắc nghiệt và cạnh tranh khốc liệt. Hãy trở nên sắt đá, tập trung vào kết quả và tôi luyện bản lĩnh.
    Tình cảm: Tình yêu thử lửa. Sự lãng mạn của hành tinh sắt là sự bảo vệ và tin cậy tuyệt đối giữa giông bão.
    Tâm lý: Sự kiên cường (Resilience). Những gì không giết chết bạn sẽ làm bạn mạnh mẽ hơn. Giữ đầu lạnh và trái tim nóng.`
  },
  { 
    id: 25, 
    name: "Khí Quyển", 
    enName: "Atmosphere", 
    meaning: "(+) (P) Sự bao bọc, lọc lựa. Sự bảo vệ tinh thần. Logic: Bạn cần chọn lọc thông tin nạp vào đầu.", 
    enMeaning: "(+) (P) Enclosure, filtering. Spiritual protection. Logic: You need to filter information entering your mind.", 
    imageSeed: "dust", 
    customUrl: "https://drive.google.com/uc?export=download&id=18GLvClrcvmDoSoixL1NRE97rJbWpjS4P",
    lore: `Lá bài số 25: Khí Quyển (Atmosphere). Sự bảo vệ tinh thần, chọn lọc thông tin và bầu không khí nuôi dưỡng.
    Tham số: [(+), (P)] - Dương tính và Hành tinh (Bao bọc liên tục).
    Câu chuyện: Hệ Miễn Dịch Của Tâm Hồn. Lớp màng lọc đốt cháy những thứ độc hại trước khi chúng chạm vào mặt đất.
    Công việc: Bộ lọc thông tin. Đừng nạp vào quá nhiều, hãy chọn lọc cái gì là "ánh sáng" và chặn đứng những "bức xạ" rác.
    Tình cảm: Sự bao dung và vùng an toàn. Hãy là bầu trời của nhau, giúp đối phương "đốt cháy" những bực dọc bên ngoài.
    Tâm lý: Sự chọn lọc và bảo vệ đứa trẻ bên trong. "Nghe tai này, qua tai kia" với những lời độc hại để giữ tâm hồn trong lành.`
  },
  { 
    id: 26, 
    name: "Bức Xạ Nền", 
    enName: "Cosmic Microwave Background", 
    meaning: "(0) (A) Di chứng từ quá khứ. Sự thật nền tảng. Logic: Một sự việc cũ bỗng nhiên có ý nghĩa mới.", 
    enMeaning: "(0) (A) Aftereffects from the past. Fundamental truth. Logic: An old event suddenly has new meaning.", 
    imageSeed: "orbit", 
    customUrl: "https://drive.google.com/uc?export=download&id=1KOOoMoS1g4azhBt6a15BYsv-9KaIWR7E",
    lore: `Lá bài số 26: Bức Xạ Nền (Cosmic Microwave Background). Cội nguồn, sự thật cốt lõi và tiếng vọng từ quá khứ xa xăm.
    Tham số: [0, (A)] - Trung tính và Cổ đại (Vĩnh viễn).
    Câu chuyện: Dấu Ấn Thời Gian. Ánh sáng tàn dư từ vụ nổ Big Bang, tràn ngập khắp vũ trụ như một sự thật nền tảng.
    Công việc: Quay về nền tảng (Back to Basics). Tìm lại sứ mệnh ban đầu và giá trị cốt lõi để giải quyết rắc rối hiện tại.
    Tình cảm: Bóng ma quá khứ. Đối diện với những vết thương cũ hoặc khuôn mẫu cũ để chữa lành và thoát khỏi sự chi phối.
    Tâm lý: Chấp nhận bản thân (Radical Acceptance). Nhận ra "tần số nền" của mình và sống thuận theo cấu trúc tự nhiên đó.`
  },
  { 
    id: 27, 
    name: "Nhật Thực", 
    enName: "Solar Eclipse", 
    meaning: "(-) (L) Sự che khuất tạm thời. Bí mật, âm mưu. Logic: Bạn đang bị che mắt bởi một bí mật.", 
    enMeaning: "(-) (L) Temporary obscuration. Secrets, conspiracies. Logic: You are blinded by a secret.", 
    imageSeed: "solarwind", 
    customUrl: "https://drive.google.com/uc?export=download&id=1kRO6K76r5whrWzNjjfVPTo8JG8JQD2K5",
    lore: `Lá bài số 27: Nhật Thực (Solar Eclipse). Bí mật, sự che giấu và những góc khuất tạm thời khi cảm xúc lấn át lý trí.
    Tham số: [(-), (L)] - Âm tính và Ánh sáng (Ngắn ngủi).
    Câu chuyện: Cái Bóng Che Khuất Sự Thật. Đừng sợ hãi bóng tối giữa ban ngày, nó chỉ là kẻ lữ hành đi ngang qua.
    Công việc: Sự thiếu minh bạch và âm mưu ngầm. Hãy án binh bất động, chờ đợi bóng tối đi qua trước khi quyết định.
    Tình cảm: Sự che giấu hoặc hiểu lầm lớn. Đừng tin vào những gì thấy trong bóng tối, hãy lùi lại quan sát kỹ hơn.
    Tâm lý: Sự hoang mang tột độ. Ngồi yên trong tĩnh lặng, tin rằng mặt trời vẫn ở đó và ánh sáng sẽ sớm trở lại.`
  },
  { 
    id: 28, 
    name: "Sao Chổi", 
    enName: "Comet", 
    meaning: "(+) (P) Điềm báo thay đổi. Hy vọng, tin tức từ xa. Logic: Có tin tức từ phương xa mang đến hy vọng.", 
    enMeaning: "(+) (P) Omen of change. Hope, news from afar. Logic: News from afar brings hope.", 
    imageSeed: "eclipse", 
    customUrl: "https://drive.google.com/uc?export=download&id=1ycFuSiWRR8IbgqzAYkI7Z8xbhTc48ag_",
    lore: `Lá bài số 28: Sao Chổi (Comet). Sứ giả của hy vọng, sự thay đổi từ xa và gieo mầm cho tương lai mới.
    Tham số: [(+), (P)] - Dương tính và Hành tinh (Tác động lâu dài).
    Câu chuyện: Món Quà Từ Phương Xa. Mang nước và mầm sống đến những hành tinh khô cằn, thay đổi cục diện hiện tại.
    Công việc: Tin tốt từ xa và cơ hội đổi mới. Đón nhận những ý tưởng lạ lẫm và sẵn sàng di chuyển để nắm bắt cơ hội.
    Tình cảm: Gặp gỡ người phương xa hoặc yêu xa. Trân trọng những giá trị và luồng gió mới mà họ mang đến cho cuộc đời bạn.
    Tâm lý: Cảm hứng đổi mới bản thân. Gột rửa những bụi bặm cũ kỹ để tái sinh và tỏa sáng rực rỡ.`
  },
  { 
    id: 29, 
    name: "Chân Không", 
    enName: "Vacuum", 
    meaning: "(-) (A) Sự trống rỗng, cô đơn. Thiếu hụt nguồn lực. Logic: Cảm giác cô độc hoặc thiếu thốn tiền bạc.", 
    enMeaning: "(-) (A) Emptiness, loneliness. Lack of resources. Logic: Feeling of solitude or lack of money.", 
    imageSeed: "nursery", 
    customUrl: "https://drive.google.com/uc?export=download&id=1QQr1Ydfae3h9nIyYeOY8zAUiaHzujW5e",
    lore: `Lá bài số 29: Chân Không (Vacuum). Sự thiếu thốn, khoảng lặng và tiềm năng đón nhận những điều mới mẻ.
    Tham số: [(-), (A)] - Âm tính và Cổ đại (Dai dẳng).
    Câu chuyện: Tính Không và Quy Luật Bù Trừ. Sự trống rỗng không phải vô nghĩa, nó là không gian chờ đợi sự lấp đầy.
    Công việc: Khan hiếm nguồn lực. Sự thiếu thốn là động lực sáng tạo, hãy chuẩn bị "cái cốc rỗng" để hút cơ hội vào.
    Tình cảm: Sự cô đơn tột cùng. Đừng vì trống rỗng mà yêu đại, hãy làm bạn với tĩnh lặng để chờ đón năng lượng chất lượng.
    Tâm lý: Cảm giác vô nghĩa. Đây là khởi đầu của sự giác ngộ, giai đoạn "xả" để tâm hồn trở nên nhẹ nhõm hơn.`
  },
  { 
    id: 30, 
    name: "Quỹ Đạo", 
    enName: "Orbit", 
    meaning: "(0) (P) Sự lặp lại có trật tự. Sự kỷ luật, cam kết. Logic: Bạn cần tuân thủ kế hoạch đã đề ra.", 
    enMeaning: "(0) (P) Orderly repetition. Discipline, commitment. Logic: You need to follow the set plan.", 
    imageSeed: "horizon", 
    customUrl: "https://drive.google.com/uc?export=download&id=1mFq70Zg2QAqJxUBbdmu-Nr6HsozxTLlF",
    lore: `Lá bài số 30: Quỹ Đạo (Orbit). Sự ổn định, kỷ luật và quy luật của sự lặp lại. Tự do là tìm ra con đường riêng và kiên định đi trên đó.
    Tham số: [0, (P)] - Trung tính và Hành tinh (Ổn định/Chu kỳ).
    Câu chuyện: Vòng Tròn An Toàn. Sự cân bằng giữa trọng lực và quán tính tạo nên quỹ đạo bền vững hàng tỷ năm.
    Công việc: Tuân thủ kế hoạch và quy trình. Đây là giai đoạn cần giữ vững vị trí, đúng giờ và đúng quy định thay vì phá cách.
    Tình cảm: Sự gắn kết bền vững và thói quen. Đừng chán nản vì sự bình yên, đó là biểu hiện cao nhất của sự cam kết.
    Tâm lý: Kỷ luật bản thân. Duy trì những thói quen tốt và đừng để bị văng ra khỏi quỹ đạo đã thiết lập.`
  },
  { 
    id: 31, 
    name: "Ngôi Sao Kép", 
    enName: "Binary Star", 
    meaning: "(+) (P) Sự hợp tác song phương. Đối tác, hôn nhân. Logic: Hai sức mạnh cùng kết hợp sẽ tạo ra kết quả lớn.", 
    enMeaning: "(+) (P) Bilateral cooperation. Partner, marriage. Logic: Two powers combined create great results.", 
    imageSeed: "ray", 
    customUrl: "https://drive.google.com/uc?export=download&id=1GJWfk6HbkhyJeeBUgaaxtUH6CpPoT_x6",
    lore: `Lá bài số 31: Ngôi Sao Kép (Binary Star). Đối tác chiến lược, hôn nhân bình đẳng và sức mạnh cộng hưởng.
    Tham số: [(+), (P)] - Dương tính và Hành tinh (Bền vững).
    Câu chuyện: Vũ Điệu Cân Bằng. Hai ngôi sao cùng quay quanh một tâm điểm chung, không ai lấn át ai, cùng nhau tỏa sáng.
    Công việc: Hợp tác song phương (Win-Win). Tìm người bổ khuyết năng lực, tôn trọng vị thế ngang hàng để cùng khởi nghiệp hoặc phát triển.
    Tình cảm: Mối quan hệ Power Couple. Hai cá thể độc lập, tự phát sáng nhưng cùng nhìn về một hướng chung.
    Tâm lý: Sự hòa hợp nội tâm. Đừng triệt tiêu các đam mê đối lập, hãy học cách để chúng cùng tồn tại và hỗ trợ nhau.`
  },
  { 
    id: 32, 
    name: "Thiên Hà Xoắn Ốc", 
    enName: "Spiral Galaxy", 
    meaning: "(+) (A) Hệ thống lớn, tổ chức. Sự phát triển hài hòa. Logic: Bạn đang tham gia vào một tổ chức lớn.", 
    enMeaning: "(+) (A) Large system, organization. Harmonious development. Logic: You are participating in a large organization.", 
    imageSeed: "wormhole", 
    customUrl: "https://drive.google.com/uc?export=download&id=1302MxzTg-CjOlT7ehA8L0cktGhZCMzwH",
    lore: `Lá bài số 32: Thiên Hà Xoắn Ốc (Spiral Galaxy). Tầm nhìn vĩ mô, hệ thống tổ chức và sự hài hòa trong tập thể lớn.
    Tham số: [(+), (A)] - Dương tính và Cổ đại (Bền vững/Vĩ mô).
    Câu chuyện: Muốn Đi Xa Hãy Đi Cùng Nhau. Tập hợp hàng trăm tỷ ngôi sao chuyển động theo một trật tự uy nghi và chậm rãi.
    Công việc: Gia nhập tổ chức lớn hoặc xây dựng hệ thống. Tư duy bức tranh lớn, đóng góp cá nhân góp phần tạo nên thành công chung.
    Tình cảm: Sự hòa hợp gia đình và cộng đồng. Hạnh phúc cá nhân được nhân lên nhờ sự ủng hộ của vòng tròn xã hội rộng lớn.
    Tâm lý: Cảm giác thuộc về. Nhận ra sứ mệnh cá nhân gắn liền với lợi ích tập thể, hòa nhập nhưng không hòa tan.`
  },
  { 
    id: 33, 
    name: "Đám Mây Oort", 
    enName: "Oort Cloud", 
    meaning: "(-) (A) Vùng biên giới xa xôi. Sự mơ hồ, chưa rõ ràng. Logic: Mục tiêu của bạn còn quá xa vời và thiếu thực tế.", 
    enMeaning: "(-) (A) Distant boundary. Ambiguity, unclear. Logic: Your goal is too far and unrealistic.", 
    imageSeed: "satellite", 
    customUrl: "https://drive.google.com/uc?export=download&id=1YH7QMOl1iTZEc98xxlUYYAHO7stSZcre",
    lore: `Lá bài số 33: Đám Mây Oort (Oort Cloud). Sự mơ hồ, tầm nhìn xa vời và những tiềm năng chưa được đánh thức.
    Tham số: [(-), (A)] - Âm tính và Cổ đại (Chờ đợi mòn mỏi).
    Câu chuyện: Vùng Chưa Biết. Nơi tận cùng của hệ mặt trời, ranh giới giữa thực tại và giấc mơ trở nên nhạt nhòa.
    Công việc: Mục tiêu quá xa vời. Cần thu hẹp tầm nhìn, chia nhỏ mục tiêu để thực hiện thay vì chỉ mơ mộng vĩ mô.
    Tình cảm: Sự ảo tưởng hoặc mối quan hệ không rõ ràng. Đừng phí tuổi xuân chờ đợi một điều mờ mịt, cần một định nghĩa rõ ràng.
    Tâm lý: Sự lạc lõng và mất kết nối. Tìm một điểm neo thực tế để kéo tâm trí trở về từ vùng biên giới xa xôi.`
  },
  { 
    id: 34, 
    name: "Phản Vật Chất", 
    enName: "Antimatter", 
    meaning: "(-) (L) Sự đối đầu trực tiếp. Sự tự hủy, mâu thuẫn. Logic: Một mâu thuẫn gay gắt có thể phá hủy tất cả.", 
    enMeaning: "(-) (L) Direct confrontation. Self-destruction, conflict. Logic: A sharp conflict can destroy everything.", 
    imageSeed: "zodiac", 
    customUrl: "https://drive.google.com/uc?export=download&id=1zigLi7R1QxuGWqvmNUHuar-r3HxKZ13r",
    lore: `Lá bài số 34: Phản Vật Chất (Antimatter). Sự thật bị ẩn giấu, xung đột trực diện và rủi ro triệt tiêu lẫn nhau.
    Tham số: [(-), (L)] - Âm tính và Ánh sáng (Tức thì/Dữ dội).
    Câu chuyện: Khắc Tinh Tuyệt Đối. Khi vật chất chạm vào phản vật chất, cả hai cùng tan biến và giải phóng năng lượng khổng lồ.
    Công việc: Đối đầu trực tiếp và rủi ro "lưỡng bại câu thương". Tránh va chạm trực diện, dùng mưu trí để cách ly xung đột.
    Tình cảm: Mối quan hệ "Oan gia". Có sức hút mãnh liệt nhưng dễ làm tổn thương nhau, cần vùng đệm an toàn để duy trì.
    Tâm lý: Xung đột nội tâm. Đừng chối bỏ "cái bóng" của mình, hãy học cách hòa giải thay vì tự hủy hoại bản thân.`
  },
  { 
    id: 35, 
    name: "Sóng Hấp Dẫn", 
    enName: "Gravitational Waves", 
    meaning: "(0) (L) Dư chấn của sự kiện lớn. Cảm xúc còn sót lại. Logic: Bạn vẫn đang bị ảnh hưởng bởi một cú sốc cũ.", 
    enMeaning: "(0) (L) Aftershocks of a major event. Lingering emotions. Logic: You are still affected by an old shock.", 
    imageSeed: "wind", 
    customUrl: "https://drive.google.com/uc?export=download&id=1jytX0crmlVGjcFOSEUNQujhyDbtmuPPi",
    lore: `Lá bài số 35: Sóng Hấp Dẫn (Gravitational Waves). Dư chấn của quá khứ, hiệu ứng dây chuyền và sự thấu cảm.
    Tham số: [0, (L)] - Trung tính và Ánh sáng (Lan truyền nhanh).
    Câu chuyện: Tiếng Vọng Của Những Người Khổng Lồ. Khi các hố đen va chạm, không gian rung chuyển và gửi đi những gợn sóng đến hiện tại.
    Công việc: Hiệu ứng dây chuyền từ các biến cố vĩ mô. Nương theo làn sóng thị trường và hiểu rằng khó khăn chỉ là dư chấn tạm thời.
    Tình cảm: Tiếng vọng cảm xúc. Phản ứng hiện tại có thể là dư chấn của một tổn thương cũ chưa lành, cần để sóng tan tự nhiên.
    Tâm lý: Cảm xúc tồn dư. Quan sát và ghi nhận những nỗi buồn man mác dội về từ quá khứ mà không cần dằn vặt bản thân.`
  },
  { 
    id: 36, 
    name: "Mặt Trăng Cô Độc", 
    enName: "Lone Moon", 
    meaning: "(-) (P) Sự phản chiếu, phụ thuộc. Sự quan sát âm thầm. Logic: Bạn đang sống dựa trên kỳ vọng của người khác.", 
    enMeaning: "(-) (P) Reflection, dependence. Silent observation. Logic: You are living based on others' expectations.", 
    imageSeed: "binary", 
    customUrl: "https://drive.google.com/uc?export=download&id=1e-4JY4lYUt76ugN5TdGGCDPEebm7aITR",
    lore: `Lá bài số 36: Mặt Trăng Cô Độc (Lone Moon). Sự phụ thuộc, phản chiếu và vị thế của kẻ đứng sau thầm lặng.
    Tham số: [(-), (P)] - Âm tính và Hành tinh (Chu kỳ/Thụ động).
    Câu chuyện: Ánh Sáng Vay Mượn. Mặt trăng không tự phát sáng mà chỉ phản chiếu hào quang từ mặt trời, âm thầm điều khiển thủy triều.
    Công việc: Cái bóng của người khác. Đừng mãi làm vệ tinh hỗ trợ, hãy tích lũy năng lượng để tự thắp sáng và hoạt động độc lập.
    Tình cảm: Tình đơn phương hoặc lệ thuộc cảm xúc. Cần tìm lại quỹ đạo riêng thay vì xoay quanh vui buồn của người khác.
    Tâm lý: Sống bằng kỳ vọng của xã hội. Khám phá "mặt tối" và những mong muốn thực sự của bản thân để thoát khỏi sự mờ nhạt.`
  },
  { 
    id: 37, 
    name: "Thuyết Dây", 
    enName: "String Theory", 
    meaning: "(+) (A) Sự kết nối siêu vi. Cấu trúc ngầm của việc. Logic: Mọi thứ xảy ra đều có lý do của nó.", 
    enMeaning: "(+) (A) Microscopic connection. Underlying structure. Logic: Everything happens for a reason.", 
    imageSeed: "compass", 
    customUrl: "https://drive.google.com/uc?export=download&id=1wGTGBt7-E4SkPy-VGZ1IeMIuAmi7UB0n",
    lore: `Lá bài số 37: Thuyết Dây (String Theory). Sự kết nối siêu vi, cấu trúc ngầm và bản giao hưởng của năng lượng.
    Tham số: [(+), (A)] - Dương tính và Cổ đại (Bền vững/Thấu đáo).
    Câu chuyện: Vũ Trụ Là Âm Nhạc. Ở tầng sâu nhất, vạn vật là những sợi dây rung động tạo nên nốt nhạc của sự sống.
    Công việc: Chú ý tiểu tiết và cấu trúc ngầm. Thành công đến từ việc tinh chỉnh những mắt xích nhỏ nhất trong quy trình.
    Tình cảm: Sự cộng hưởng tần số. Mối quan hệ bền vững nhờ sự thấu hiểu không lời và sự đồng điệu ở cấp độ vi mô.
    Tâm lý: Mọi sự kiện đều liên kết với nhau. Thay đổi tần số tư duy để thay đổi thực tại theo luật hấp dẫn.`
  },
  { 
    id: 38, 
    name: "Nghịch Lý Thời Gian", 
    enName: "Time Paradox", 
    meaning: "(-) (A) Sự mâu thuẫn logic. Sai lầm lặp lại. Logic: Bạn đang làm đi làm lại một việc mà mong kết quả khác.", 
    enMeaning: "(-) (A) Logical contradiction. Repeated mistakes. Logic: Doing the same thing expecting different results.", 
    imageSeed: "singularity", 
    customUrl: "https://drive.google.com/uc?export=download&id=1YuB1wFytVaEqQpe0PsEO90KipS1J8If-",
    lore: `Lá bài số 38: Nghịch Lý Thời Gian (Time Paradox). Sự mâu thuẫn logic, vòng lặp sai lầm và cái bẫy trí tuệ.
    Tham số: [(-), (A)] - Âm tính và Cổ đại (Dai dẳng/Luẩn quẩn).
    Câu chuyện: Con Rắn Tự Cắn Đuôi. Cố gắng sửa chữa quá khứ nhưng lại tạo ra một lỗi sai mới y hệt cái cũ.
    Công việc: Sự luẩn quẩn trong phương pháp. Cần tư duy đột phá (Out of the box) thay vì giải quyết vấn đề bằng luật chơi cũ.
    Tình cảm: Lặp lại kịch bản cũ. Nhận ra lỗi sai trong tư duy để phá vỡ vòng lặp "yêu lại người cũ/sai lầm cũ".
    Tâm lý: Dằn vặt quá khứ. Chấp nhận sai lầm là nền tảng tạo nên hiện tại thay vì mãi ước muốn xóa bỏ chúng.`
  },
  { 
    id: 39, 
    name: "Chân Không Giả", 
    enName: "False Vacuum", 
    meaning: "(-) (L) Thiết lập lại đột ngột. Xóa bỏ hoàn toàn. Logic: Một sự thức tỉnh tàn khốc sắp xảy ra.", 
    enMeaning: "(-) (L) Sudden reset. Total erasure. Logic: A brutal awakening is about to happen.", 
    imageSeed: "zodiac", 
    customUrl: "https://drive.google.com/uc?export=download&id=1zigLi7R1QxuGWqvmNUHuar-r3HxKZ13r",
    lore: `Lá bài số 39: Chân Không Giả (False Vacuum). Sự sụp đổ đột ngột của thực tại tạm thời. Thiết lập lại tức thì.
    Tham số: [(-), (L)] - Âm tính và Ánh sáng (Chí mạng/Tức thời).
    Câu chuyện: Hiện thực rất mong manh. Khi vũ trụ sụp đổ thành trạng thái ổn định hơn, mọi thứ sẽ bị viết lại với tốc độ ánh sáng.
    Công việc: Sự sụp đổ hệ thống bất ngờ. Một hợp đồng bị chấm dứt hoặc một dự án tan rã chỉ trong một ngày. Đừng cố xây lại cấu trúc cũ.
    Tình cảm: Sự thức tỉnh tàn khốc. Một bí mật bị phơi bày xóa sạch niềm tin cũ, buộc bạn phải đối diện với thực tại trần trụi.
    Tâm lý: Sự sụp đổ của bản ngã giả tạo. Để thực tại cũ bị xóa bỏ để nền tảng chân chính có thể nổi lên từ đống đổ nát.`
  },
  { 
    id: 40, 
    name: "Sự Giãn Nở", 
    enName: "Expansion", 
    meaning: "(+) (A) Sự mở rộng quy mô. Sự tự do, phóng khoáng. Logic: Bạn có cơ hội để mở rộng tầm ảnh hưởng hoặc kinh doanh.", 
    enMeaning: "(+) (A) Scale expansion. Freedom, openness. Logic: Opportunity to expand influence or business.", 
    imageSeed: "explorer", 
    customUrl: "https://drive.google.com/uc?export=download&id=1enntwN4QerrZCmc8Mb9hQCxuMqy84J4J",
    lore: `Lá bài số 40: Sự Giãn Nở (Expansion). Tự do, phá vỡ khuôn khổ và tiềm năng phát triển không giới hạn.
    Tham số: [(+), (A)] - Dương tính và Cổ đại (Liên tục/Bền bỉ).
    Câu chuyện: Vũ Trụ Không Biên Giới. Không gian không ngừng rộng mở, nhắc nhở tâm trí đừng tự đóng khung trong chiếc hộp chật hẹp.
    Công việc: Mở rộng quy mô (Scaling up). Nghĩ lớn, tiếp cận những thị trường xa hơn và thử những phương án táo bạo.
    Tình cảm: Sự phóng khoáng và tự do. Nới lỏng sự kiểm soát, cho đối phương không gian để thở và cùng nhau trải nghiệm điều mới.
    Tâm lý: Phá vỡ vùng an toàn. Đập tan những bức tường định kiến để đón nhận luồng sinh khí và kiến thức mới.`
  },
  { 
    id: 41, 
    name: "Tro Bụi Vũ Trụ", 
    enName: "Cosmic Dust", 
    meaning: "(-) (P) Tàn tích sau thất bại. Sự vụn vặt, chi tiết nhỏ. Logic: Bạn bị cuốn vào những chi tiết nhỏ nhặt mà quên mục tiêu lớn.", 
    enMeaning: "(-) (P) Remnants after failure. Trivialities, small details. Logic: Caught in small details, forgetting the big goal.", 
    imageSeed: "harmony", 
    customUrl: "https://drive.google.com/uc?export=download&id=1t1-jKPm8NWBw0CvnsBZFsSLLR_U2KZ0-",
    lore: `Lá bài số 41: Tro Bụi Vũ Trụ (Cosmic Dust). Tàn tích sau thất bại, sự tích tụ âm thầm và giá trị của những điều nhỏ bé.
    Tham số: [(-), (P)] - Âm tính và Hành tinh (Phân tán/Cần thời gian).
    Câu chuyện: Hạt Giống Của Kiệt Tác. Bụi sao là xác của những ngôi sao đã chết, nhưng cũng là nguyên liệu cho những hành tinh sắp sinh ra.
    Công việc: Sự vụn vặt và dọn dẹp hậu chiến. Hoàn thành tốt những việc lặt vặt, tích tiểu thành đại để chuẩn bị cho chu kỳ mới.
    Tình cảm: Những mảnh vỡ cảm xúc. Dành thời gian dọn dẹp "bụi" kỷ niệm cũ và ghép lại chính mình trước khi bắt đầu tình yêu mới.
    Tâm lý: Nhận diện giá trị bản thân. Bạn không vô dụng, bạn đang ở giai đoạn tích lũy để chờ thời điểm tỏa sáng rực rỡ.`
  },
  { 
    id: 42, 
    name: "Tín Hiệu Wow!", 
    enName: "Wow! Signal", 
    meaning: "(+) (L) Sự kiện hi hữu. Cơ hội vàng độc nhất. Logic: Một lời đề nghị chỉ đến một lần trong đời.", 
    enMeaning: "(+) (L) Rare event. Unique golden opportunity. Logic: An offer that comes once in a lifetime.", 
    imageSeed: "meteor", 
    customUrl: "https://drive.google.com/uc?export=download&id=1w4yCWWz4yC-i0xqxEcLYuoVyz6qj3k-m",
    lore: `Lá bài số 42: Tín Hiệu Wow! (Wow! Signal). Sự kiện độc nhất, cơ hội vàng không lặp lại và phút giây giác ngộ.
    Tham số: [(+), (L)] - Dương tính và Ánh sáng (Cực nhanh/Khoảnh khắc).
    Câu chuyện: Tiếng Thì Thầm Duy Nhất. Tín hiệu vô tuyến bí ẩn 72 giây từ vũ trụ, một bằng chứng hiếm hoi không bao giờ xuất hiện lại.
    Công việc: Cơ hội vàng độc nhất. Chụp lấy ngay những lời mời hoặc ý tưởng lóe lên, đừng chần chừ vì nó sẽ không đến lần hai.
    Tình cảm: Cuộc gặp gỡ định mệnh. Hành động tức thì khi gặp được sự kết nối kỳ lạ, đừng để món quà vũ trụ rơi xuống đất.
    Tâm lý: Phút giây giác ngộ. Ghi lại ngay những ý tưởng thông tuệ vừa "tải xuống" trước khi cảm hứng bay hơi mất.`
  },
  { 
    id: 43, 
    name: "Vành Đai Van Allen", 
    enName: "Van Allen Belt", 
    meaning: "(+) (P) Lá chắn rủi ro. Sự kiên định, bảo mật. Logic: Hãy giữ kín kế hoạch của bạn.", 
    enMeaning: "(+) (P) Risk shield. Steadfastness, security. Logic: Keep your plans secret.", 
    imageSeed: "walker", 
    customUrl: "https://drive.google.com/uc?export=download&id=1Bq25YDDPe9DmlUV30Pyo-Kf6LSOnUomn",
    lore: `Lá bài số 43: Vành Đai Van Allen (Van Allen Belt). Hệ thống phòng thủ, sự bảo mật và lớp giáp vô hình bảo vệ sự sống.
    Tham số: [(+), (P)] - Dương tính và Hành tinh (Ổn định/24/7).
    Câu chuyện: Tấm Khiên Năng Lượng. Vành đai phóng xạ chặn đứng các hạt tích điện chết người, bảo vệ bầu khí quyển và sự sống.
    Công việc: Sự bảo mật và phòng vệ. Giữ kín kế hoạch kinh doanh, gia cố các điều khoản bảo mật để tránh "bức xạ" đối thủ soi mói.
    Tình cảm: Ranh giới cá nhân. Thiết lập vùng cấm và học cách nói "Không" để bảo vệ trái tim khỏi những tác động độc hại.
    Tâm lý: Sự kiên định. Củng cố nội lực để tâm bất biến giữa dòng đời vạn biến, đánh bật mọi áp lực ngoại lai.`
  },
  { 
    id: 44, 
    name: "Va Chạm Thiên Hà", 
    enName: "Galactic Collision", 
    meaning: "(+/-) (A) Sự tái cấu trúc lớn. Xung đột quyền lực. Logic: Một cuộc sáp nhập công ty hoặc thay đổi gia đình lớn.", 
    enMeaning: "(+/-) (A) Major restructuring. Power conflict. Logic: A company merger or major family change.", 
    imageSeed: "attractor", 
    customUrl: "https://drive.google.com/uc?export=download&id=17h94nqMnNNwsqCpOoJOo19Ck_P56dQWA",
    lore: `Lá bài số 44: Va Chạm Thiên Hà (Galactic Collision). Sự sáp nhập, tái cấu trúc và xây dựng trật tự vĩ đại hơn từ hỗn loạn.
    Tham số: [(+/-), (A)] - Hỗn hợp và Cổ đại (Thay đổi cục diện).
    Câu chuyện: Khiêu Vũ Giữa Giông Bão. Hai thiên hà xuyên qua nhau, phá hủy cấu trúc cũ để hợp nhất thành một đế chế mạnh mẽ hơn.
    Công việc: Sáp nhập và cải tổ. Thích nghi với luật chơi mới, tìm vị trí trong trật tự mới thay vì bám víu vào cách làm cũ.
    Tình cảm: Hợp nhất lối sống. Chấp nhận xáo trộn ban đầu khi dọn về sống chung để tạo ra một gia đình vững mạnh hơn.
    Tâm lý: Mâu thuẫn hệ giá trị. Để những niềm tin lỗi thời ra đi để trưởng thành với một nhân sinh quan rộng lớn hơn.`
  },
  { 
    id: 45, 
    name: "Photon Bullet", 
    enName: "Photon Bullet", 
    meaning: "(+) (L) Sự xuyên thấu thông tin. Lời nói sắc bén, sự thật. Logic: Một lời nói thật lòng có thể gây tổn thương nhưng cần thiết.", 
    enMeaning: "(+) (L) Information penetration. Sharp words, truth. Logic: A truthful word may hurt but is necessary.", 
    imageSeed: "web", 
    customUrl: "https://drive.google.com/uc?export=download&id=1isP7HSy4G_N_Hc3krZEecWoLOuvGBTBT",
    lore: `Lá bài số 45: Viên Đạn Photon (Photon Bullet). Sự thẳng thắn, tốc độ và sức mạnh soi rọi của lời nói thật.
    Tham số: [(+), (L)] - Dương tính và Ánh sáng (Ngay lập tức/Không độ trễ).
    Câu chuyện: Xuyên Thấu Bóng Tối. Hạt ánh sáng lao đi với vận tốc tối đa, phơi bày mọi thứ lẩn khuất dưới tia laser sắc bén.
    Công việc: Phản hồi sắc bén (Brutal Honesty). Đối diện với những thông tin quan trọng được công bố bất ngờ để tỉnh ngộ và hành động.
    Tình cảm: Sự thật trần trụi. Kết thúc sự mập mờ bằng những cuộc đối thoại thẳng thắn, thà đau một lần rồi xong còn hơn dối trá.
    Tâm lý: Sự giác ngộ đột ngột. Nắm bắt khoảnh khắc tỉnh thức khi một ý tưởng vụt sáng làm thay đổi hoàn toàn nhận thức.`
  },
  { 
    id: 46, 
    name: "Sao Lùn Nâu", 
    enName: "Brown Dwarf", 
    meaning: "(-) (P) Dự án thiếu tiềm lực. Sự nỗ lực nửa vời. Logic: Một dự án thiếu nhiệt huyết và tiềm lực.", 
    enMeaning: "(-) (P) Project lacking potential. Half-hearted effort. Logic: A project lacking enthusiasm and potential.", 
    imageSeed: "time", 
    customUrl: "https://drive.google.com/uc?export=download&id=1f1JSi1UsGHtjHSDqorAyhGEkR1Y0voux",
    lore: `Lá bài số 46: Sao Lùn Nâu (Brown Dwarf). Sự nỗ lực nửa vời, tiềm năng không đủ lớn và hiện thân của sự mờ nhạt.
    Tham số: [(-), (P)] - Âm tính và Hành tinh (Trì trệ/Failed Star).
    Câu chuyện: Ngôi Sao Hụt. Thiên thể mang tham số tỏa sáng nhưng thiếu đi ngọn lửa cuối cùng để bùng cháy nhiệt hạch.
    Công việc: Dự án thiếu tiềm lực. Đừng tiếp tục đổ nguồn lực vào cái hố không đáy nếu không có cú hích cực lớn để biến nó thành "sao".
    Tình cảm: Mối quan hệ mập mờ. Đừng ảo tưởng người ấy sẽ thay đổi khi bản chất cấu trúc tình cảm vốn không đủ nóng để cháy.
    Tâm lý: Sự thành thật với chính mình. Chấp nhận vị thế mờ nhạt để tìm hướng đi mới thay vì nuôi hy vọng hão huyền.`
  },
  { 
    id: 47, 
    name: "Heliosphere", 
    enName: "Heliosphere", 
    meaning: "(0) (A) Phạm vi ảnh hưởng cá nhân. Bản sắc, cái tôi. Logic: Bạn đang quá chú trọng vào danh tiếng cá nhân.", 
    enMeaning: "(0) (A) Personal scope of influence. Identity, ego. Logic: You are too focused on personal reputation.", 
    imageSeed: "forge", 
    customUrl: "https://drive.google.com/uc?export=download&id=1N67uAWtWyd4ddkIJnVFXX-jNm-acR7E-",
    lore: `Lá bài số 47: Heliosphere (Nhật Quyển). Phạm vi quyền lực, bản sắc cá nhân và sự giới hạn của cái tôi.
    Tham số: [0, (A)] - Trung tính và Cổ đại (Ranh giới tự nhiên).
    Câu chuyện: Bong Bóng Quyền Lực. Nhật quyển bảo vệ hệ mặt trời nhưng cũng đánh dấu nơi quyền lực của mặt trời chấm dứt.
    Công việc: Vùng an toàn và tầm ảnh hưởng. Đừng ngủ quên trên chiến thắng "vua xứ mù", hãy nâng cao năng lực để nới rộng biên giới.
    Tình cảm: Cái tôi quá lớn. Tình yêu không phải là sự cai trị, hãy hạ cái tôi xuống để người ấy không cảm thấy bị áp bức.
    Tâm lý: Bản sắc cá nhân. Củng cố "khí chất" riêng để bảo vệ bản thân khỏi sự xâm lấn và làm loãng từ môi trường xã hội.`
  },
  { 
    id: 48, 
    name: "Điểm Lagrange", 
    enName: "Lagrange Point", 
    meaning: "(0) (P) Sự trung lập, hòa hoãn. Sự nghỉ ngơi, chờ đợi. Logic: Thời điểm hoàn hảo để nghỉ ngơi và quan sát.", 
    enMeaning: "(0) (P) Neutrality, truce. Rest, waiting. Logic: Perfect time to rest and observe.", 
    imageSeed: "oraclestar", 
    customUrl: "https://drive.google.com/uc?export=download&id=1oA8zxIJkYItasI5jvek23p6xbA4FTe1k",
    lore: `Lá bài số 48: Điểm Lagrange (Lagrange Point). Điểm cân bằng, sự trung lập và nghệ thuật của sự không hành động (Wu Wei).
    Tham số: [0, (P)] - Trung tính và Hành tinh (Hòa hoãn/Neo đậu).
    Câu chuyện: Mắt Bão Vũ Trụ. Nơi lực hấp dẫn của các thiên thể triệt tiêu nhau, tạo ra một điểm tĩnh lặng hoàn hảo.
    Công việc: Thời gian chết và quan sát. Đây là lúc để neo đậu, nạp năng lượng và quan sát động tĩnh thay vì tốn sức tiến công.
    Tình cảm: Giai đoạn bình ổn. Tận hưởng sự bình yên không drama để xây dựng nền tảng lòng tin lâu dài cho mối quan hệ.
    Tâm lý: Sự tĩnh tại. Đạt được trạng thái thiền định giữa đời thường, giữ thăng bằng cảm xúc trước những xáo trộn ngoại cảnh.`
  },
  { 
    id: 49, 
    name: "Giao Thoa Sóng", 
    enName: "Wave Interference", 
    meaning: "(+) (L) Sự cộng hưởng ý tưởng. Sự đồng thuận cao. Logic: Mọi người đang ủng hộ ý tưởng của bạn.", 
    enMeaning: "(+) (L) Idea resonance. High consensus. Logic: People are supporting your idea.", 
    imageSeed: "rain", 
    customUrl: "https://drive.google.com/uc?export=download&id=1xMfzY_5loZKrkx0BUOn2tkSFDr-yQjXp",
    lore: `Lá bài số 49: Giao Thoa Sóng (Wave Interference). Sự đồng lòng, hiệu ứng đám đông và khuếch đại năng lượng cộng hưởng.
    Tham số: [(+), (L)] - Dương tính và Ánh sáng (Mạnh mẽ/Tức thì).
    Câu chuyện: Sức Mạnh Hợp Nhất. Khi các đỉnh sóng gặp nhau cùng pha, chúng tạo ra một con sóng thần có cường độ gấp bội.
    Công việc: Sự đồng thuận và Teamwork. Tận dụng đà tiến khi mọi người đang "cùng pha" để đẩy dự án đi nhanh và xa hơn.
    Tình cảm: Tâm đầu ý hợp. Sự kết nối thần giao cách cảm và cộng hưởng năng lượng giúp hai bạn cùng nhau tỏa sáng rực rỡ.
    Tâm lý: Sự hòa hợp nội tâm. Khi lý trí và cảm xúc bắt tay nhau, bạn sẽ thông suốt và tràn đầy năng lượng để hành động.`
  },
  { 
    id: 50, 
    name: "Hành Tinh Kim Cương", 
    enName: "Diamond Planet", 
    meaning: "(+) (P) Giá trị cực cao. Sự bền bỉ, quý giá. Logic: Kết quả của sự chịu đựng gian khổ.", 
    enMeaning: "(+) (P) Extremely high value. Persistence, preciousness. Logic: Result of enduring hardship.", 
    imageSeed: "phoenix", 
    customUrl: "https://drive.google.com/uc?export=download&id=1oX6wuu9XWGYwR12UGbBD6wB0Mrbaz9A_",
    lore: `Lá bài số 50: Hành Tinh Kim Cương (Diamond Planet). Sự chuyển hóa dưới áp lực cực đại và phần thưởng xứng đáng.
    Tham số: [(+), (P)] - Dương tính và Hành tinh (Bền bỉ/Thành tựu).
    Câu chuyện: Lột Xác Từ Than Chì. Áp lực hàng tỷ năm biến Carbon thành kim cương nguyên khối, thứ cứng rắn và quý giá nhất.
    Công việc: Giá trị cao và thành công vật chất. Chịu đựng giai đoạn "nén" căng thẳng để nhận về khối tài sản hoặc vị thế danh giá.
    Tình cảm: Tình yêu thử lửa. Mối quan hệ đi qua sóng gió hóa thành kim cương bền chắc, không cần tưới tắm vẫn tự tỏa sáng.
    Tâm lý: Sự lột xác. Tự hào về những vết sẹo đã trở thành huy chương, tự tin khẳng định giá trị đẳng cấp của bản thân.`
  },
  { 
    id: 51, 
    name: "Sự Tự Quay (Spin)", 
    enName: "Spin", 
    meaning: "(0) (P) Sự tự vận động nội tại. Tính cách, bản chất. Logic: Bạn cần quay về tìm hiểu chính mình.", 
    enMeaning: "(0) (P) Internal self-movement. Character, nature. Logic: You need to return to find yourself.", 
    imageSeed: "shield", 
    customUrl: "https://drive.google.com/uc?export=download&id=1tLXVXUNLhUNtkqAi-jCRnvX7gdEZZ6m9",
    lore: `Lá bài số 51: Sự Tự Quay (Spin). Sự độc lập, nhịp điệu riêng và giữ vững bản sắc cá nhân.
    Tham số: [0, (P)] - Trung tính và Hành tinh (Ổn định/Tuần hoàn).
    Câu chuyện: Định Nghĩa Sự Tồn Tại Độc Lập. Mọi thiên thể đều tự quay để duy trì trạng thái, nếu dừng lại sẽ bị lực hấp dẫn kẻ khác đồng hóa.
    Công việc: Phát triển kỹ năng cốt lõi. Đừng chạy theo xu hướng, hãy tập trung làm tốt nhất những gì thuộc về bản chất của bạn.
    Tình cảm: Sự độc lập trong tình yêu. Đừng đánh mất mình để làm hài lòng người khác, hãy giữ lấy nhịp điệu sống riêng để trở nên hấp dẫn.
    Tâm lý: Khám phá bản chất. Dành thời gian tự vấn để ổn định lại trục quay tâm thức và hiểu rõ mình là ai.`
  },
  { 
    id: 52, 
    name: "Bức Xạ Gamma", 
    enName: "Gamma Radiation", 
    meaning: "(-) (L) Nguy hiểm cực độ. Sự công kích độc hại. Logic: Cảnh báo về một mối nguy hiểm ác ý.", 
    enMeaning: "(-) (L) Extreme danger. Toxic attack. Logic: Warning of a malicious danger.", 
    imageSeed: "key", 
    customUrl: "https://drive.google.com/uc?export=download&id=106i3VzH_8_gRxCIVCbgqqZHytFsxnafA",
    lore: `Lá bài số 52: Bức Xạ Gamma (Gamma Ray Burst). Mối nguy hiểm vô hình, sự công kích độc hại và thảm họa bất ngờ.
    Tham số: [(-), (L)] - Âm tính và Ánh sáng (Chí mạng/Bất ngờ).
    Câu chuyện: Kẻ Hủy Diệt Thầm Lặng. Luồng năng lượng mạnh nhất vũ trụ có thể xóa sổ sự sống mà không có bất kỳ cảnh báo trước nào.
    Công việc: Sự phá hoại ác ý. Cảnh giác với những chiêu trò chơi xấu sau lưng hoặc môi trường làm việc nhiễm độc nặng nề.
    Tình cảm: Mối quan hệ độc hại. Bảo vệ tâm hồn khỏi những kẻ ái kỷ hoặc kiểm soát đang âm thầm hủy hoại lòng tự trọng của bạn.
    Tâm lý: Sự tự hủy hoại. Dừng ngay những suy nghĩ tiêu cực hoặc thói quen xấu đang giết chết tương lai của chính mình.`
  },
  { 
    id: 53, 
    name: "Vệ Tinh Viễn Thám", 
    enName: "Remote Sensing Satellite", 
    meaning: "(+) (P) Sự thu thập dữ liệu. Sự tò mò, nghiên cứu. Logic: Đừng vội kết luận, hãy tìm thêm thông tin.", 
    enMeaning: "(+) (P) Data collection. Curiosity, research. Logic: Don't rush to conclusions, find more information.", 
    imageSeed: "heart", 
    customUrl: "https://drive.google.com/uc?export=download&id=1WNeyHkacOCUy6Z-qIGk7KLqyzPbYAJVr",
    lore: `Lá bài số 53: Vệ Tinh Viễn Thám (Remote Sensing Satellite). Tầm nhìn chiến lược, quan sát khách quan và thu thập dữ liệu.
    Tham số: [(+), (P)] - Dương tính và Hành tinh (Ổn định/Phân tích).
    Câu chuyện: Nhìn Thấy Toàn Cảnh. Đứng cao hơn vấn đề để quan sát những thứ mắt thường không thấy, làm sự thật hiện nguyên hình.
    Công việc: Nghiên cứu thị trường. Đừng hành động theo cảm tính, hãy thu thập số liệu và phân tích đối thủ kỹ càng trước khi lao vào.
    Tình cảm: Tìm hiểu kỹ càng. Lùi lại một bước để đánh giá mối quan hệ khách quan hơn, chú ý đến những "tín hiệu ngầm" bị bỏ qua.
    Tâm lý: Trở thành nhà quan sát. Tách mình khỏi cảm xúc hỗn loạn để quan sát chính mình như một đối tượng nghiên cứu khoa học.`
  },
  { 
    id: 54, 
    name: "Kẻ Quan Sát", 
    enName: "The Observer", 
    meaning: "(0) (L) Ý thức làm thay đổi việc. Góc nhìn chủ quan. Logic: Sự việc tốt hay xấu tùy vào cách bạn nghĩ.", 
    enMeaning: "(0) (L) Consciousness changes things. Subjective perspective. Logic: Things are good or bad depending on how you think.", 
    imageSeed: "spiral", 
    customUrl: "https://drive.google.com/uc?export=download&id=1xd9fcRBTDKA6iDCH2MhR63ifEGRtW3s1",
    lore: `Lá bài số 54: Kẻ Quan Sát (The Observer). Ý thức kiến tạo thực tại, quyền tự do ý chí và sự đồng sáng tạo.
    Tham số: [0, (L)] - Trung tính và Ánh sáng (Tức thì).
    Câu chuyện: Hiệu Ứng Người Quan Sát. Vũ trụ chỉ hiện hữu khi có ai đó nhìn vào, ý thức của chúng ta có khả năng thay đổi cấu trúc thực tại.
    Công việc: Tư duy kiến tạo. Thái độ của bạn đối với thử thách sẽ quyết định kết quả, hãy đổi góc nhìn để thấy bài học thay vì hình phạt.
    Tình cảm: Sự phóng chiếu. Lau sạch ống kính tâm hồn để nhìn nhận đối phương như chính họ đang là, thay vì qua nỗi sợ của bản thân.
    Tâm lý: Quyền tự do ý chí. Bạn không bị giam cầm bởi số phận, bạn là người cầm lái chọn lựa kịch bản cho cuộc đời mình.`
  },
  { 
    id: 55, 
    name: "Dấu Chân Trên Bụi", 
    enName: "Footprints in the Dust", 
    meaning: "(+) (A) Di sản để lại. Chứng cứ, dấu vết. Logic: Những gì bạn làm hôm nay sẽ được nhớ mãi.", 
    enMeaning: "(+) (A) Legacy left behind. Evidence, traces. Logic: What you do today will be remembered forever.", 
    imageSeed: "silence", 
    customUrl: "https://drive.google.com/uc?export=download&id=1mcXUNwvOhJlWxq7jrrKOppNpqC8pSqme",
    lore: `Lá bài số 55: Dấu Chân Trên Bụi (Footprint on the Moon). Di sản, dấu ấn cá nhân và trách nhiệm với tương lai.
    Tham số: [(+), (A)] - Dương tính và Cổ đại (Trường tồn).
    Câu chuyện: Khắc Tên Vào Vĩnh Cửu. Một bước chân nhỏ bé đặt xuống nơi không có gió sẽ nằm yên ở đó hàng triệu năm như một minh chứng.
    Công việc: Di sản nghề nghiệp. Xây dựng những giá trị tồn tại lâu hơn cả sự nghiệp của bạn, chú trọng chất lượng để đời.
    Tình cảm: Ký ức không phai. Những gì bạn đối xử với người khác hôm nay sẽ lưu lại dấu ấn sâu đậm trong lòng họ mãi mãi.
    Tâm lý: Ý nghĩa cuộc sống. Đừng sợ mình nhỏ bé, hãy bắt đầu "in dấu" bằng những hành động tử tế để cuộc đời thêm ý nghĩa.`
  },
  { 
    id: 56, 
    name: "Thành Phố Ánh Sáng", 
    enName: "City of Light", 
    meaning: "(+) (P) Sự sống, cộng đồng. Hy vọng, sự náo nhiệt. Logic: Bạn tìm thấy cộng đồng hoặc gia đình thực sự.", 
    enMeaning: "(+) (P) Life, community. Hope, bustle. Logic: You find a real community or family.", 
    imageSeed: "dance", 
    customUrl: "https://drive.google.com/uc?export=download&id=1nTMFnOtN-tbcCAlKP9gnnuachR2MaTi1",
    lore: `Lá bài số 56: Thành Phố Ánh Sáng (City of Lights). Sự thuộc về, cộng đồng và hạnh phúc giản đơn giữa vũ trụ lạnh lẽo.
    Tham số: [(+), (P)] - Dương tính và Hành tinh (Ấm áp/Bền vững).
    Câu chuyện: Ốc Đảo Tình Người. Những mạng lưới ánh sáng rực rỡ trên hành tinh là bằng chứng của sự sống và sự nương tựa lẫn nhau.
    Công việc: Mạng lưới kết nối. Thành công đến từ sức mạnh tập thể và văn hóa hỗ trợ, hãy hòa nhập để cùng phát triển.
    Tình cảm: Gia đình và sum vầy. Tìm thấy bến đỗ bình yên, nơi những bữa cơm và sự quan tâm sưởi ấm tâm hồn bạn mỗi ngày.
    Tâm lý: Sự an yên. Tìm thấy niềm vui trong những điều nhỏ bé đời thường và kết nối lại với xã hội để thấy mình không cô đơn.`
  },
  { 
    id: 57, 
    name: "Tàu Voyager", 
    enName: "Voyager Spacecraft", 
    meaning: "(+) (A) Sự ra đi mãi mãi. Sứ mệnh cao cả. Logic: Một chuyến đi xa hoặc thay đổi môi trường sống.", 
    enMeaning: "(+) (A) Leaving forever. Noble mission. Logic: A long trip or change of environment.", 
    imageSeed: "navigator", 
    customUrl: "https://drive.google.com/uc?export=download&id=1EoUHbD0ifRilrSQpcpjAYI9dj5wctrNg",
    lore: `Lá bài số 57: Tàu Voyager (The Voyager). Sự viễn chinh, sứ mệnh xuyên thế hệ và sự cô đơn vĩ đại của kẻ tiên phong.
    Tham số: [(+), (A)] - Dương tính và Cổ đại (Hành trình vô tận).
    Câu chuyện: Thông Điệp Vào Hư Vô. Con tàu mang theo tinh hoa nhân loại lao vào bóng tối không quay đầu để tìm kiếm sự kết nối.
    Công việc: Sự nghiệp quốc tế. Bước ngoặt đưa bạn rời khỏi vùng an toàn để đến với những chân trời mới lạ lẫm và vĩ đại.
    Tình cảm: Chia ly êm đẹp. Buông tay để cả hai theo đuổi sứ mệnh riêng, mang theo ký ức đẹp như hành trang trên con đường độc hành.
    Tâm lý: Sự trưởng thành và tách rời. Chấp nhận sự cô đơn của kẻ đi đầu, giữ ấm trái tim bằng lý tưởng và sứ mệnh cao cả.`
  },
  { 
    id: 58, 
    name: "Bản Đồ Sao Cổ", 
    enName: "Ancient Star Map", 
    meaning: "(0) (A) Kế hoạch định mệnh. Chỉ dẫn từ người xưa. Logic: Hãy tìm kiếm lời khuyên từ những giá trị truyền thống.", 
    enMeaning: "(0) (A) Fateful plan. Guidance from the ancients. Logic: Seek advice from traditional values.", 
    imageSeed: "seed", 
    customUrl: "https://drive.google.com/uc?export=download&id=16jkBzDGpBe48-_6zbnfm1WEPZEOYn5EV",
    lore: `Lá bài số 58: Bản Đồ Sao Cổ (Ancient Star Map). Trí tuệ cổ xưa, giá trị cốt lõi và sự dẫn đường của định mệnh.
    Tham số: [0, (A)] - Trung tính và Cổ đại (Kế thừa).
    Câu chuyện: Kim Nam Châm Vũ Trụ. Những vì sao cố định dẫn đường cho tổ tiên hàng ngàn năm, nhắc nhở ta quay về với nguyên lý cơ bản.
    Công việc: Quay về cái gốc. Đừng chạy theo trào lưu nhất thời, hãy tìm cố vấn hoặc áp dụng những giá trị kinh doanh bền vững.
    Tình cảm: Giá trị truyền thống. Xác định những nguyên tắc bất di bất dịch trong tình yêu để làm kim chỉ nam giải quyết mâu thuẫn.
    Tâm lý: Định mệnh và sứ mệnh. Kết nối với cội nguồn và năng khiếu bẩm sinh để tìm thấy bản đồ cuộc đời đã vẽ sẵn bên trong bạn.`
  },
  { 
    id: 59, 
    name: "Mật Mã Nguyên Tử", 
    enName: "Atomic Code", 
    meaning: "(+) (L) Cấu trúc chi tiết nhất. Logic toán học, chính xác. Logic: Bạn cần làm việc một cách khoa học và chi tiết.", 
    enMeaning: "(+) (L) Most detailed structure. Mathematical logic, precision. Logic: You need to work scientifically and in detail.", 
    imageSeed: "breath", 
    customUrl: "https://drive.google.com/uc?export=download&id=13p0csFmw39p9KZs74qm_cfBeY7VzxEId",
    lore: `Lá bài số 59: Mật Mã Nguyên Tử (Atomic Code). Sự chính xác, logic hoàn hảo và cấu trúc nền tảng của vạn vật.
    Tham số: [(+), (L)] - Dương tính và Ánh sáng (Rõ ràng/Tức thì).
    Câu chuyện: Ngôn Ngữ Của Vũ Trụ. Đằng sau sự hỗn độn là một trật tự toán học chặt chẽ, nơi các con số không bao giờ biết nói dối.
    Công việc: Làm việc khoa học. Tỉ mỉ trong từng chi tiết nhỏ, tin vào số liệu thực tế thay vì cảm tính để tối ưu hóa hiệu quả.
    Tình cảm: Sự rạch ròi. Cần những tiêu chuẩn và cam kết rõ ràng, thẳng thắn đối diện với khúc mắc như giải một phương trình.
    Tâm lý: Tư duy logic. Dùng cái đầu lạnh để phân tích cơ chế của nỗi sợ, giải mã chính mình để tìm thấy sự bình yên trong chân lý.`
  },
  { 
    id: 60, 
    name: "Sự Phân Rã", 
    enName: "Decay", 
    meaning: "(-) (A) Sự mất dần vị thế. Sự buông bỏ, giải thoát. Logic: Đã đến lúc từ bỏ những gánh nặng không cần thiết.", 
    enMeaning: "(-) (A) Gradual loss of position. Letting go, release. Logic: Time to give up unnecessary burdens.", 
    imageSeed: "throne", 
    customUrl: "https://drive.google.com/uc?export=download&id=1Apf2EKH_9vck8blXAfwU89R6HQhEtkYT",
    lore: `Lá bài số 60: Sự Phân Rã (Radioactive Decay). Sự buông bỏ, giải thoát gánh nặng và quy luật của sự bình yên.
    Tham số: [(-), (A)] - Âm tính và Cổ đại (Từ từ/Tất yếu).
    Câu chuyện: Tự Nguyện Trút Bỏ. Hạt nhân không ổn định phải phóng thích năng lượng để bền vững hơn, cũng như ta cần buông bỏ để tồn tại.
    Công việc: Tinh giản và thu gọn. Chấp nhận mất dần vị thế cũ để loại bỏ những thứ rườm rà, giữ lại cốt lõi vững chắc nhất.
    Tình cảm: Giải thoát gánh nặng. Đừng ôm đồm quá nhiều trách nhiệm hay kỳ vọng, buông tay để cả hai tìm thấy sự tự do cho tâm hồn.
    Tâm lý: Sự buông bỏ (Letting Go). Thanh lọc tâm trí khỏi lo âu và hối tiếc, coi sự mất mát là một quá trình chữa lành cần thiết.`
  },
  { 
    id: 61, 
    name: "Cân Bằng Thủy Tĩnh", 
    enName: "Hydrostatic Equilibrium", 
    meaning: "(0) (P) Trạng thái ổn định nhất. Sự điềm tĩnh, vững vàng. Logic: Bạn đang ở trạng thái tâm lý tốt nhất.", 
    enMeaning: "(0) (P) Most stable state. Calmness, steadiness. Logic: You are in the best psychological state.", 
    imageSeed: "memory", 
    customUrl: "https://drive.google.com/uc?export=download&id=1VPEgVf0Adv7HgaYEKCFzLFzlumQO1tPn",
    lore: `Lá bài số 61: Cân Bằng Thủy Tĩnh (Hydrostatic Equilibrium). Sự điềm tĩnh dưới áp lực, sự vững chãi và thế đứng cân bằng.
    Tham số: [0, (P)] - Trung tính và Hành tinh (Bền vững/Trường tồn).
    Câu chuyện: Cuộc Chiến Sinh Tử Thầm Lặng. Sự bình yên của ngôi sao là kết quả của hai nguồn lực khổng lồ (nén và đẩy) triệt tiêu nhau.
    Công việc: Vững vàng trước sóng gió. Duy trì phong độ và bản lĩnh để kiểm soát cuộc chơi dù áp lực bên ngoài có lớn đến đâu.
    Tình cảm: Mối quan hệ lành mạnh. Sự cân bằng hoàn hảo giữa cho và nhận, giữa không gian riêng và thời gian chung của hai người.
    Tâm lý: Tâm bất biến. Đạt được trạng thái tĩnh lặng giữa xô bồ, biết mình là ai và kiên định với những gì mình cần.`
  },
  { 
    id: 62, 
    name: "Chân Trời Mới", 
    enName: "New Horizon", 
    meaning: "(+) (L) Cơ hội vừa hé lộ. Sự lạc quan, khởi sắc. Logic: Những khó khăn nhất đã qua đi.", 
    enMeaning: "(+) (L) Opportunity just revealed. Optimism, improvement. Logic: The worst difficulties have passed.", 
    imageSeed: "flame", 
    customUrl: "https://drive.google.com/uc?export=download&id=1JjSXuCzpc2iKYaJJyUFStzy7FLPrDihI",
    lore: `Lá bài số 62: Chân Trời Mới (New Horizons). Sự phục hồi, hy vọng sau khủng hoảng và cơ hội vừa hé lộ.
    Tham số: [(+), (L)] - Dương tính và Ánh sáng (Nhanh/Khởi sắc).
    Câu chuyện: Bình Minh Vũ Trụ. Khoảnh khắc kỳ diệu khi ánh sáng xuyên qua bóng tối của hành tinh, báo hiệu một ngày mới bừng tỉnh.
    Công việc: Sự khởi sắc. Đón đầu ánh sáng bằng cách nắm bắt những cơ hội triển vọng vừa chớm nở sau giai đoạn trì trệ.
    Tình cảm: Sự hàn gắn. Nỗi đau dần tan biến để nhường chỗ cho những khởi đầu mới rực rỡ và niềm tin được khôi phục.
    Tâm lý: Sự phục hồi năng lượng. Gạt bỏ nỗi sợ bóng đêm để yêu đời trở lại, bắt đầu những thói quen tốt cho một lối sống tươi sáng.`
  },
  { 
    id: 63, 
    name: "Big Crunch (Co Rút)", 
    enName: "Big Crunch", 
    meaning: "(-) (A) Sự thu hẹp quy mô. Sự hội tụ về gốc. Logic: Đã đến lúc thu gọn quy mô để tập trung vào cốt lõi.", 
    enMeaning: "(-) (A) Scale contraction. Convergence to the root. Logic: Time to shrink scale to focus on the core.", 
    imageSeed: "truth", 
    customUrl: "https://drive.google.com/uc?export=download&id=1Y7JYJ-JQI9522vEXTb5Ef3mTKo_2f68-",
    lore: `Lá bài số 63: Big Crunch (Co Rút). Kết thúc chu kỳ, sự tinh giản và trở về nguồn cội để tái sinh.
    Tham số: [(-), (A)] - Âm tính và Cổ đại (Định mệnh/Lâu dài).
    Câu chuyện: Cái Ôm Siết Chặt. Vũ trụ ngừng giãn nở và co lại về một điểm duy nhất, nén lại thành hạt giống cho một khởi đầu mới.
    Công việc: Thu hẹp quy mô. Tinh giản bộ máy, tập trung vào những gì tinh túy và chất lượng nhất thay vì phát triển lan man.
    Tình cảm: Lọc lại vòng tròn quan hệ. Co lại sự quan tâm vào những người thực sự quan trọng ở "lõi" thay vì phân tán cho xã giao.
    Tâm lý: Tìm về bản ngã. Sống tối giản, gạt bỏ các danh xưng để trả lời câu hỏi cốt lõi về bản thân và chuẩn bị cho chu kỳ mới.`
  },
];
