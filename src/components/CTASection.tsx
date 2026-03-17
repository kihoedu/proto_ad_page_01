import { motion } from "framer-motion";

const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true";

const GOOGLE_FORM_PUBLIC_URL =
  "https://docs.google.com/forms/d/e/FORM_ID/viewform";

const CTASection = () => {
  return (
    <section id="cta" className="py-24 bg-surface-subtle">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto">
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
            className="rounded-2xl bg-card shadow-elevated p-4 md:p-6 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="px-2 pt-2 text-center">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                더블첨삭 시스템 상담 신청
              </h3>
              <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                아래 양식을 작성해 주시면 확인 후 순차적으로 연락드립니다.
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                입력하신 정보는 상담 진행 및 안내를 위한 용도로만 사용됩니다.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-input bg-background">
              <iframe
                src={https://docs.google.com/forms/d/e/1FAIpQLSdmBpaY2zbruVGfuT58hul9PmhCcfa7jyVc4VqWD5THCQpMCA/viewform?embedded=true}
                title="더블첨삭 시스템 상담 신청 폼"
                className="block w-full h-[1350px] md:h-[1200px]"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
              >
                로딩 중...
              </iframe>
            </div>

            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                화면에서 양식이 보이지 않거나 제출이 원활하지 않은 경우 아래 링크를 이용해 주십시오.
              </p>
              <a
                href={https://docs.google.com/forms/d/e/1FAIpQLSdmBpaY2zbruVGfuT58hul9PmhCcfa7jyVc4VqWD5THCQpMCA/viewform}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center rounded-lg bg-point-gold px-4 py-2 text-sm font-semibold text-point-gold-foreground transition-all duration-200 hover:brightness-110 active:scale-95"
              >
                새 창에서 상담 신청하기
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;