import { Menu, MessageCircle } from 'lucide-react';

const nav = [
  ['자연미 소개', '/about'],
  ['산전관리', '/prenatal'],
  ['산후관리', '/postnatal'],
  ['체형·약손관리', '/body-care'],
  ['프로그램·가격', '/programs'],
  ['후기·FAQ', '/reviews'],
  ['블로그', '/blog'],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a className="brand" href="/" aria-label="자연미피부바디 홈">
          <img className="brand-logo" src="/images/natural-beauty-logo.png" alt="자연미피부바디" />
        </a>
        <a className="mobile-brand" href="/" aria-label="자연미피부바디 홈">
          <img src="/favicon-48x48.png" alt="" />
          <span>자연미 피부바디</span>
        </a>
        <nav className="desktop-nav" aria-label="주요 메뉴">
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="header-cta" href="/contact"><MessageCircle size={17}/> 상담예약</a>
        <details className="mobile-menu">
          <summary aria-label="메뉴 열기"><Menu/></summary>
          <nav>{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}<a href="/contact">상담예약</a></nav>
        </details>
      </div>
    </header>
  );
}
