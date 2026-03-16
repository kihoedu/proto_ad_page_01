import { motion } from "framer-motion";
import { HelpCircle, BarChart3, Target } from "lucide-react";

const painPoints = [
  {
    icon: HelpCircle,
    title: "막연한 피드백",
    description: "\"잘 썼어요\" \"조금 부족해요\"... 구체적으로 어디가 부족한 건지 알 수 없는 피드백에 답답하셨죠?",
  },
  {
    icon: BarChart3,
    title: "보이지 않는 성장",
    description: "아이의 논술 실력이 정말 늘고 있는지, 한 달 전보다 나아진 건지 가늠하기 어려우셨죠?",
  },
  {
    icon: Target,
    title: "반복되는 실수",
    description: "같은 유형의 실수를 반복하는데, 무엇이 근본 원인인지 정확히 파악이 안 되셨죠?",
  },
];

const PainPointSection = () => {
  return (
    <section className="py-24 bg-surface-subtle">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground text-balance">
            우리 아이의 논술,
            <br />
            <span className="text-accent">'잘 썼다'는 말</span>로 충분할까요?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            단순히 "잘 썼다, 못 썼다"가 아닌, 명확한 진단이 필요합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group rounded-2xl bg-card p-8 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-5">
                <point.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointSection;
