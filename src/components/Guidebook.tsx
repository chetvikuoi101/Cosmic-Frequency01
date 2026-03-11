import React from 'react';
import { motion } from 'motion/react';
import { X, BookOpen, Zap, Clock, Layers, Info } from 'lucide-react';

interface GuidebookProps {
  isOpen: boolean;
  onClose: () => void;
  language: string;
}

export const Guidebook: React.FC<GuidebookProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;

  const t = (en: string, vn: string) => {
    return language === 'vi' ? vn : en;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm"
    >
      <div className="w-full max-w-4xl h-full flex flex-col glass rounded-3xl overflow-hidden border border-white/10">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-serif italic text-white tracking-wide">
              {t("Cosmic Mechanics: Guidebook", "CẨM NANG CƠ HỌC VŨ TRỤ: SÁCH HƯỚNG DẪN")}
            </h2>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-12 text-white/80 leading-relaxed">
          
          {/* Introduction */}
          <section className="space-y-4">
            <h3 className="text-xl font-serif italic text-orange-400 border-b border-orange-500/20 pb-2">
              {t("INTRODUCTION: THE OBSERVER'S MANUAL", "GIỚI THIỆU: CẨM NANG NGƯỜI QUAN SÁT")}
            </h3>
            <p className="italic font-serif text-lg text-white/90">
              {t(
                "The universe is not written in prose; it is written in the absolute language of physics. Every collapsing star, every traveling photon, and every light-devouring black hole is a reflection of the human experience.",
                "Vũ trụ không được viết bằng văn xuôi; nó được viết bằng ngôn ngữ tuyệt đối của vật lý. Mỗi ngôi sao sụp đổ, mỗi photon di chuyển và mỗi hố đen nuốt chửng ánh sáng đều là sự phản ánh trải nghiệm của con người."
              )}
            </p>
            <p>
              {t(
                "This oracle deck does not rely on vague magic. It is based on Cosmic Mechanics. By drawing these cards, you are acting as the 'Observer' in quantum mechanics—collapsing infinite possibilities into a single, undeniable reality. Do not fear the dark cards, and do not cling to the light ones. Everything is simply energy in motion.",
                "Bộ bài tiên tri này không dựa vào phép thuật mơ hồ. Nó dựa vào Cơ học Vũ trụ. Bằng cách rút những lá bài này, bạn đang đóng vai trò là \"Người Quan sát\" trong cơ học lượng tử—thu gọn vô số khả năng thành một thực tại duy nhất, không thể phủ nhận. Đừng sợ những lá bài tối màu, và cũng đừng bám víu vào những lá bài sáng màu. Mọi thứ chỉ đơn giản là năng lượng đang chuyển động."
              )}
            </p>
          </section>

          {/* Part 1: Core Mechanics */}
          <section className="space-y-8">
            <h3 className="text-xl font-serif italic text-orange-400 border-b border-orange-500/20 pb-2">
              {t("PART 1: CORE MECHANICS (HOW TO READ THE SYSTEM)", "PHẦN 1: CƠ CHẾ CỐT LÕI (CÁCH ĐỌC HỆ THỐNG)")}
            </h3>
            <p>
              {t(
                "Unlike traditional tarot, this deck does not use 'reversed' cards. The nature and exact timing of your fate are encoded in two symbols at the top of each card: Magnetism and Time Scale.",
                "Khác với bài tarot truyền thống, bộ bài này không sử dụng các lá bài \"ngược\". Bản chất và thời gian chính xác của số phận bạn được mã hóa sẵn trong hai biểu tượng ở đầu mỗi lá bài: Từ tính và Thang thời gian."
              )}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Magnetism */}
              <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-2 text-orange-300">
                  <Zap className="w-5 h-5" />
                  <h4 className="font-bold uppercase tracking-widest text-sm">1. {t("MAGNETISM (Nature of Force)", "TỪ TÍNH (Bản chất của lực)")}</h4>
                </div>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-bold">(+)</span>
                    <div>
                      <p className="font-bold text-white">{t("Positive (Creative / Attractive)", "Tích cực (Sáng tạo / Thu hút)")}</p>
                      <p className="text-white/60">{t("Favorable energy. Growth, accumulation, realization, and forward momentum. The universe is leaning in your direction.", "Năng lượng thuận lợi. Tăng trưởng, tích lũy, hiện thực hóa và đà tiến lên. Vũ trụ đang hướng về phía bạn.")}</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-rose-400 font-bold">(-)</span>
                    <div>
                      <p className="font-bold text-white">{t("Negative (Entropy / Repulsion)", "Âm (Entropy / Đẩy)")}</p>
                      <p className="text-white/60">{t("Energy depletion. Loss, decay, sudden destruction, or necessary sacrifice. You are losing mass. Retreat or prepare for impact.", "Tiêu hao năng lượng. Mất mát, suy thoái, phá hủy đột ngột hoặc sự hy sinh cần thiết. Bạn đang mất khối lượng. Rút lui hoặc chuẩn bị cho va chạm.")}</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 font-bold">[0]</span>
                    <div>
                      <p className="font-bold text-white">{t("Neutral (Equilibrium / Static State)", "Trung tính (Cân bằng / Trạng thái tĩnh)")}</p>
                      <p className="text-white/60">{t("Balanced energy. A state of suspension. No energy is created or lost. You must observe and wait.", "Năng lượng cân bằng. Một trạng thái lơ lửng. Không có năng lượng nào được tạo ra hoặc mất đi. Bạn phải quan sát và chờ đợi.")}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Time Scale */}
              <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-2 text-orange-300">
                  <Clock className="w-5 h-5" />
                  <h4 className="font-bold uppercase tracking-widest text-sm">2. {t("TIME SCALE (Velocity of Fate)", "THANG THỜI GIAN (Vận tốc của số phận)")}</h4>
                </div>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">(L)</span>
                    <div>
                      <p className="font-bold text-white">{t("Light Speed (Instantaneous)", "Tốc độ ánh sáng (Tức thời)")}</p>
                      <p className="text-white/60">{t("Events will happen suddenly, without warning, and unfold quickly. Measured in days or weeks. Immediate action required.", "Sự kiện sẽ xảy ra đột ngột, không báo trước và diễn ra nhanh chóng. Được đo bằng ngày hoặc tuần. Cần hành động ngay lập tức.")}</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400 font-bold">(P)</span>
                    <div>
                      <p className="font-bold text-white">{t("Planetary Cycle", "Chu kỳ hành tinh")}</p>
                      <p className="text-white/60">{t("This event takes place on a stable, predictable orbit. It needs to be maintained to keep moving. Measured in months or seasons.", "Sự kiện này diễn ra trên một quỹ đạo ổn định, có thể dự đoán được. Nó cần được duy trì để tiếp tục chuyển động. Được đo bằng tháng hoặc mùa.")}</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-bold">(A)</span>
                    <div>
                      <p className="font-bold text-white">{t("Ancient (Eternal / Slow)", "Cổ xưa (Vĩnh cửu/Chậm rãi)")}</p>
                      <p className="text-white/60">{t("This event is a massive, slow-moving force of fate. It takes years to form and leaves a permanent legacy. Absolute patience is required.", "Sự kiện này là một sức mạnh to lớn, vận động chậm rãi của số phận. Phải mất nhiều năm để hình thành và để lại một di sản vĩnh viễn. Kiên nhẫn là điều tuyệt đối cần thiết.")}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Part 2: Spread Layout */}
          <section className="space-y-6">
            <h3 className="text-xl font-serif italic text-orange-400 border-b border-orange-500/20 pb-2">
              {t("PART 2: COORDINATED SPREAD (3-CARD SPREAD)", "PHẦN 2: CÁCH TRẢI BÀI PHỐI HỢP (TRẢI BÀI 3 LÁ)")}
            </h3>
            <p>
              {t(
                "To understand any situation, you must represent it on a 3-dimensional axis. Draw 3 cards and place them from left to right.",
                "Để hiểu bất kỳ tình huống nào, bạn phải biểu diễn nó trên trục 3 chiều. Rút 3 lá bài và đặt chúng từ trái sang phải."
              )}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-orange-500/5 border border-orange-500/10 space-y-2">
                <p className="text-orange-400 font-bold uppercase tracking-widest text-xs">{t("Card 1: SCOPE", "Lá bài 1: PHẠM VI")}</p>
                <p className="text-white font-serif italic">{t("(Environment / Y-Axis)", "(Môi trường / Trục Y)")}</p>
                <p className="text-sm text-white/60">{t("What surrounds you? This card represents external influences, the people around you, and the environment you are currently trapped in or supported by.", "Điều gì đang bao quanh bạn? Lá bài này đại diện cho các tác động bên ngoài, những người xung quanh bạn và môi trường mà bạn hiện đang bị mắc kẹt hoặc được hỗ trợ.")}</p>
              </div>
              <div className="p-6 rounded-2xl bg-orange-500/5 border border-orange-500/10 space-y-2">
                <p className="text-orange-400 font-bold uppercase tracking-widest text-xs">{t("Card 2: CORE", "Lá bài số 2: CỐT LÕI")}</p>
                <p className="text-white font-serif italic">{t("(Internal Matter / X-Axis)", "(Vật chất bên trong / Trục X)")}</p>
                <p className="text-sm text-white/60">{t("What are you made of? This card represents your hidden potential, your psychological state, and your current true density of power.", "Bạn được tạo nên từ cái gì? Lá bài này đại diện cho tiềm năng tiềm ẩn của bạn, trạng thái tâm lý và mật độ sức mạnh thực sự hiện tại của bạn.")}</p>
              </div>
              <div className="p-6 rounded-2xl bg-orange-500/5 border border-orange-500/10 space-y-2">
                <p className="text-orange-400 font-bold uppercase tracking-widest text-xs">{t("Card 3: END", "Thẻ 3: KẾT THÚC")}</p>
                <p className="text-white font-serif italic">{t("(Trajectory / Z-Axis)", "(Quỹ đạo / Trục Z)")}</p>
                <p className="text-sm text-white/60">{t("Where will this lead? If Scope and Core collide, this is the inevitable future. This is your destination.", "Điều này sẽ dẫn đến đâu? Nếu Phạm vi và Lõi va chạm, đây là tương lai không thể tránh khỏi. Đây là điểm đến của bạn.")}</p>
              </div>
            </div>
          </section>

          {/* Closing */}
          <div className="text-center pt-12 border-t border-white/10">
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">
              {t("Trust the Mechanics. Observe the Reality.", "Tin vào Cơ học. Quan sát Thực tại.")}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
