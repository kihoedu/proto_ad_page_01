import { motion } from "framer-motion";
import { Layers, Database, Crosshair, RefreshCw, UserCheck } from "lucide-react";

const benefits = [
  {
    icon: Layers,
    title: "빈틈없는 지도",
    description: "서면 첨삭의 '정확성'과 대면 첨삭의 '상세함'을 모두 경험하여 학습 효과가 배가됩니다.",
  },
  {
    icon: Database,
    title: "나만의 DB 구축",
    description: "1주차부터 8주차까지 아이가 쓴 모든 글이 디지털로 저장되어, 실력 향상 과정을 한눈에 볼 수 있습니다.",
  },
  {
    icon: Crosshair,
    title: "맞춤형 약점 진단",
    description: "데이터 분석을 통해 아이가 가장 자주 범하는 약점 유형 5가지를 정확히 찾아냅니다.",
  },
  {
    icon: RefreshCw,
    title: "반복 보완 학습",
    description: "과정이 끝날 때마다 발견된 약점을 집중적으로 점검하여, 같은 실수를 반복하지 않도록 만듭니다.",
  },
  {
    icon: UserCheck,
    title: "체계적인 이력 관리",
    description: "첨삭 담임제를 통해 아이의 성향과 발전 과정을 꾸준히 추적하고 관리합니다.",
  },
];

const BenefitSection = () => {
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
          <span className="inline-block text-sm font-medium text-point-gold mb-3">5 Promises</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground text-balance">
            더블첨삭이 약속하는 <span className="text-point-gold">5가지 변화</span>
          </h2>
        </motion.div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-5 md:overflow-visible max-w-6xl mx-auto scrollbar-hide">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.25, 0.1, 0.25, 1] }}
              className="min-w-[220px] md:min-w-0 flex-shrink-0 rounded-2xl bg-card p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4">
                <b.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed text-pretty">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
