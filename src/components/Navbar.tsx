import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="박기호 논술 로고" className="h-7 sm:h-8 w-auto" />
          <span className="text-xs sm:text-sm font-bold text-primary-foreground leading-tight">대치동 논술 혁명<br className="sm:hidden" /><span className="hidden sm:inline"> </span>박기호 논술</span>
        </a>
        <a
          href="#cta"
          className="inline-flex items-center rounded-lg bg-point-gold px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-point-gold-foreground transition-all duration-200 hover:brightness-110 active:scale-95"
        >
          무료 상담 신청
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
