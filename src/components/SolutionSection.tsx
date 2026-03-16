import { motion } from "framer-motion";
import { Cpu, ScanSearch, ShieldCheck, Heart, MessageCircle, Pen } from "lucide-react";

const aiFeatures = [
  { icon: ScanSearch, label: "97% 이상 정확도 OCR 기술로 손글씨 디지털 변환" },
  { icon: Cpu, label: "대치동 25년 데이터가 학습된 폐쇄형 AI 분석" },
  { icon: ShieldCheck, label: "강사 주관적 편차 없는 객관적 평가" },
];

const humanFeatures = [
  { icon: Pen, label: "전문 강사의 1:1 빨간펜 맞춤형 첨삭" },
  { icon: Heart, label: "글에 담긴 학생의 생각과 의도를 읽어냄" },
  { icon: MessageCircle, label: "미묘한 뉘앙스와 글쓰기 습관 교정" },
];

const SolutionSection = () => {
  return (
    <section className="py-24">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-medium text-accent mb-3">Double Correction System</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground text-balance">
            이제 첨삭도 <span className="text-accent">과학</span>입니다.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            서면 첨삭의 객관적 분석과 대면 첨삭의 심층 지도를 결합한 하이브리드 첨삭 시스템입니다.
          </p>
        </motion.div>

        {/* Double Correction Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-elevated max-w-5xl mx-auto"
        >
          {/* AI Section */}
          <div className="bg-primary p-8 md:p-12 text-primary-foreground">
            <span className="text-accent font-mono text-xs tracking-widest uppercase">Precision AI</span>
            <h3 className="text-2xl md:text-3xl font-bold mt-3 mb-2">기호봇 정밀 분석</h3>
            <p className="text-primary-foreground/60 text-sm mb-8 leading-relaxed">
              서면 첨삭 — 객관적이고 명확한 진단
            </p>

            {/* Accuracy indicator */}
            <div className="mb-8 rounded-xl bg-accent/10 p-5">
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-bold tabular-nums text-accent">97%</span>
                <span className="text-sm text-primary-foreground/50 pb-1">정확도</span>
              </div>
              <div className="h-2 rounded-full bg-primary-foreground/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "97%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="h-full rounded-full bg-accent"
                />
              </div>
            </div>

            <ul className="space-y-4">
              {aiFeatures.map((f) => (
                <li key={f.label} className="flex items-start gap-3">
                  <f.icon className="h-5 w-5 mt-0.5 text-accent shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-primary-foreground/80 leading-relaxed">{f.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Human Section */}
          <div className="bg-card p-8 md:p-12 text-card-foreground relative">
            <span className="text-point-gold font-mono text-xs tracking-widest uppercase">Human Touch</span>
            <h3 className="text-2xl md:text-3xl font-bold mt-3 mb-2">대치동 1:1 맞춤 대면</h3>
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
              대면 첨삭 — 깊이 있는 이해와 소통
            </p>

            {/* Handwritten annotation style */}
            <div className="mb-8 rounded-xl border border-point-gold/20 bg-point-gold/5 p-5">
              <p className="text-base italic text-foreground/70 leading-relaxed" style={{ fontFamily: "serif" }}>
                "이 문장의 논리 구조를 바꿔보면 훨씬 설득력이 높아질 거예요. 여기에 너의 경험을 한 줄 넣어볼까?"
              </p>
              <span className="block mt-2 text-xs text-point-gold font-medium">— 담임 강사 코멘트</span>
            </div>

            <ul className="space-y-4">
              {humanFeatures.map((f) => (
                <li key={f.label} className="flex items-start gap-3">
                  <f.icon className="h-5 w-5 mt-0.5 text-point-gold shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-muted-foreground leading-relaxed">{f.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Badge */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-point-gold text-point-gold-foreground font-bold text-lg shadow-lg ring-4 ring-card">
              +
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
