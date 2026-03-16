import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const radarData = [
  { label: "논리 구조", value: 85 },
  { label: "어휘력", value: 70 },
  { label: "문장력", value: 78 },
  { label: "창의성", value: 90 },
  { label: "근거 활용", value: 65 },
];

const growthData = [
  { week: "1주", score: 52 },
  { week: "2주", score: 58 },
  { week: "3주", score: 61 },
  { week: "4주", score: 68 },
  { week: "5주", score: 72 },
  { week: "6주", score: 79 },
  { week: "7주", score: 84 },
  { week: "8주", score: 91 },
];

const GrowthChart = () => {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const w = 500, h = 200, px = 40, py = 20;
  const chartW = w - px * 2, chartH = h - py * 2;
  const maxScore = 100, minScore = 40;

  const points = growthData.map((d, i) => ({
    x: px + (i / (growthData.length - 1)) * chartW,
    y: py + chartH - ((d.score - minScore) / (maxScore - minScore)) * chartH,
  }));

  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

  return (
    <svg ref={ref} viewBox={`0 0 ${w} ${h}`} className="w-full h-auto">
      {/* Grid lines */}
      {[40, 60, 80, 100].map((v) => {
        const y = py + chartH - ((v - minScore) / (maxScore - minScore)) * chartH;
        return (
          <g key={v}>
            <line x1={px} y1={y} x2={w - px} y2={y} stroke="hsl(var(--border))" strokeWidth={1} />
            <text x={px - 8} y={y + 4} textAnchor="end" fill="hsl(var(--muted-foreground))" fontSize={10} fontFamily="Pretendard Variable">
              {v}
            </text>
          </g>
        );
      })}

      {/* X labels */}
      {growthData.map((d, i) => (
        <text key={d.week} x={points[i].x} y={h - 2} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize={10} fontFamily="Pretendard Variable">
          {d.week}
        </text>
      ))}

      {/* Line */}
      <motion.path
        d={pathD}
        fill="none"
        stroke="hsl(var(--accent))"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={1000}
        initial={{ strokeDashoffset: 1000 }}
        animate={isInView ? { strokeDashoffset: 0 } : {}}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* Dots */}
      {points.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={4}
          fill="hsl(var(--accent))"
          stroke="hsl(var(--card))"
          strokeWidth={2}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
        />
      ))}
    </svg>
  );
};

const RadarChart = () => {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cx = 150, cy = 130, r = 90;
  const n = radarData.length;

  const getPoint = (i: number, val: number) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const dist = (val / 100) * r;
    return { x: cx + dist * Math.cos(angle), y: cy + dist * Math.sin(angle) };
  };

  const gridLevels = [0.25, 0.5, 0.75, 1];

  return (
    <svg ref={ref} viewBox="0 0 300 280" className="w-full h-auto max-w-[280px] mx-auto">
      {/* Grid */}
      {gridLevels.map((level) => {
        const pts = Array.from({ length: n }, (_, i) => {
          const p = getPoint(i, level * 100);
          return `${p.x},${p.y}`;
        }).join(" ");
        return <polygon key={level} points={pts} fill="none" stroke="hsl(var(--border))" strokeWidth={1} />;
      })}

      {/* Axes */}
      {radarData.map((_, i) => {
        const p = getPoint(i, 100);
        return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="hsl(var(--border))" strokeWidth={1} />;
      })}

      {/* Data polygon */}
      <motion.polygon
        points={radarData.map((d, i) => {
          const p = getPoint(i, d.value);
          return `${p.x},${p.y}`;
        }).join(" ")}
        fill="hsl(var(--accent) / 0.15)"
        stroke="hsl(var(--accent))"
        strokeWidth={2}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />

      {/* Labels */}
      {radarData.map((d, i) => {
        const p = getPoint(i, 115);
        return (
          <text key={d.label} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fill="hsl(var(--foreground))" fontSize={11} fontWeight={500} fontFamily="Pretendard Variable">
            {d.label}
          </text>
        );
      })}
    </svg>
  );
};

const ReportSection = () => {
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
          <span className="inline-block text-sm font-medium text-accent mb-3">Report & Analytics</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground text-balance">
            한눈에 보이는 우리 아이의 <span className="text-accent">성장 그래프</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
            1주차부터 8주차까지 모든 글이 디지털로 저장되어, 실력 향상 과정을 시각적으로 확인할 수 있습니다.
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-5xl mx-auto rounded-2xl bg-card shadow-elevated p-6 md:p-10"
        >
          {/* Dashboard header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
            <div>
              <h3 className="text-lg font-semibold text-foreground">학습 리포트</h3>
              <p className="text-sm text-muted-foreground">김○○ 학생 · 고2 · 8주차</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent">총점 91점</div>
              <div className="rounded-lg bg-point-gold/10 px-3 py-1.5 text-xs font-medium text-point-gold">상위 12%</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Growth Chart */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">성장 곡선</h4>
              <GrowthChart />
            </div>

            {/* Radar Chart */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">약점 유형 분석</h4>
              <RadarChart />
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-border">
            {[
              { label: "평균 점수", value: "74.3", unit: "점" },
              { label: "성장률", value: "+75", unit: "%" },
              { label: "첨삭 횟수", value: "16", unit: "회" },
              { label: "개선 항목", value: "23", unit: "건" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold tabular-nums text-foreground">
                  {stat.value}
                  <span className="text-sm font-normal text-muted-foreground ml-0.5">{stat.unit}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReportSection;
