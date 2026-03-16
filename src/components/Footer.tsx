import logo from "@/assets/logo.png";
import { Phone, Globe, BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground/60">
      <div className="container px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="박기호 논술 로고" className="h-7 w-auto" />
            <span className="text-base sm:text-lg font-bold text-primary-foreground">대치동 논술 혁명 박기호 논술</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a href="tel:02-562-6559" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-point-gold text-point-gold-foreground font-semibold text-sm shadow-lg hover:brightness-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-200">
              <Phone className="w-4 h-4" />
              전화 상담
            </a>
            <a href="https://www.kihoedu.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 hover:-translate-y-0.5 active:scale-95 transition-all duration-200">
              <Globe className="w-4 h-4" />
              홈페이지
            </a>
            <a href="https://blog.naver.com/law7kiho" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 hover:-translate-y-0.5 active:scale-95 transition-all duration-200">
              <BookOpen className="w-4 h-4" />
              블로그
            </a>
          </div>

          <div className="text-xs text-center space-y-1">
            <p>더블첨삭 시스템 · 대치동 25년 전통</p>
            <p>© 2025 박기호 논술. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
