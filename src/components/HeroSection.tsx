import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-14 sm:pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="학생이 집중하여 글을 쓰는 모습과 AI 데이터 분석 그래픽"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50 md:from-primary/90 md:via-primary/70 md:to-primary/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-5 sm:px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-block rounded-full bg-accent/20 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-accent mb-4 sm:mb-6"
          >
            25년 대치동 노하우 × AI 시스템
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-primary-foreground leading-[1.15] text-balance"
          >
            기계의 정밀함과
            <br />
            사람의 따뜻함이 만나
            <br />
            <span className="text-point-gold">완벽한 글쓰기</span>를 완성합니다.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-5 sm:mt-6 max-w-lg"
          >
            <p className="text-base sm:text-lg text-primary-foreground/70 leading-relaxed text-pretty">
              박기호 논술의 25년 대치동 노하우와 2년간의 시스템 개발이 집약된
            </p>
            <p className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-point-gold tracking-tight">
              '더블첨삭 시스템'
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8 sm:mt-10"
          >
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-xl bg-point-gold px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-point-gold-foreground shadow-lg transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 active:scale-95"
            >
              무료 상담 신청하기
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
