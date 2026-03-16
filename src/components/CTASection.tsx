import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const CTASection = () => {
  const [form, setForm] = useState({ name: "", phone: "", grade: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.grade) {
      toast.error("모든 항목을 입력해주세요.");
      return;
    }
    toast.success("상담 신청이 완료되었습니다! 빠른 시일 내 연락드리겠습니다.");
    setForm({ name: "", phone: "", grade: "" });
  };

  return (
    <section id="cta" className="py-24 bg-surface-subtle">
      <div className="container px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground text-balance">
              아이의 글이 달라지면,
              <br />
              생각이 달라지고, <span className="text-point-gold">미래가 달라집니다.</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              체계적인 데이터와 따뜻한 관심으로 자녀의 합격을 돕겠습니다.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            onSubmit={handleSubmit}
            className="rounded-2xl bg-card shadow-elevated p-8 md:p-10 space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">학부모님 성함</label>
              <input
                type="text"
                placeholder="홍길동"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full h-12 rounded-lg border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">연락처</label>
              <input
                type="tel"
                placeholder="010-0000-0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full h-12 rounded-lg border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">자녀 학년</label>
              <select
                value={form.grade}
                onChange={(e) => setForm({ ...form, grade: e.target.value })}
                className="w-full h-12 rounded-lg border border-input bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
              >
                <option value="">학년을 선택해주세요</option>
                <option value="고1">고등학교 1학년</option>
                <option value="고2">고등학교 2학년</option>
                <option value="고3">고등학교 3학년</option>
                <option value="중3">중학교 3학년</option>
                <option value="기타">기타</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full h-14 rounded-xl bg-point-gold text-point-gold-foreground font-semibold text-base shadow-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              더블첨삭 시스템 상담 신청하기
            </button>

            <p className="text-xs text-muted-foreground text-center">
              상담 신청 시 무료 리포트 샘플을 함께 보내드립니다.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
