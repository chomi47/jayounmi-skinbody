import { ArrowRight, Leaf, Menu, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { blogPosts } from './blog/posts';

const programs = [
  { icon: Leaf, eyebrow: 'PRENATAL', title: '산전관리', text: '임신 중 달라진 몸의 컨디션을 살피며 편안한 자세와 섬세한 손길로 진행합니다.', href: '/prenatal' },
  { icon: Sparkles, eyebrow: 'POSTNATAL', title: '산후관리', text: '출산 후 시기와 현재 상태를 먼저 듣고, 무리 없이 회복의 리듬을 찾아갑니다.', href: '/postnatal' },
  { icon: ShieldCheck, eyebrow: 'BODY BALANCE', title: '체형·약손관리', text: '쌓인 긴장과 일상의 불편을 살피는 전신 및 얼굴 약손관리입니다.', href: '/body-care' },
];

const nav = [
  ['자연미 소개', '/about'], ['산전관리', '/prenatal'], ['산후관리', '/postnatal'],
  ['체형·약손관리', '/body-care'], ['프로그램·가격', '/programs'], ['후기·FAQ', '/reviews'],
  ['블로그', '/blog'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="자연미피부바디 홈">
          <img className="brand-logo" src="/images/natural-beauty-logo.png" alt="자연미피부바디" />
        </a>
        <nav className="desktop-nav" aria-label="주요 메뉴">
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="header-cta" href="/contact"><MessageCircle size={17}/> 상담예약</a>
        <details className="mobile-menu">
          <summary aria-label="메뉴 열기"><Menu/></summary>
          <nav>{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}<a href="/contact">상담예약</a></nav>
        </details>
      </header>

      <section className="hero">
        <img src="/images/hero-care.png" alt="편안히 누운 산모에게 섬세한 손 관리를 진행하는 모습" />
        <div className="hero-wash" />
        <div className="hero-copy">
          <p className="eyebrow">25 YEARS OF CARING HANDS</p>
          <h1>몸의 변화를 이해하는<br/><em>25년 약손의 깊이</em></h1>
          <p className="lead">산전부터 산후 회복까지, 지금의 몸과 마음을 먼저 듣고<br className="desktop-only"/> 한 분 한 분에게 맞는 편안한 관리를 이어갑니다.</p>
          <div className="hero-actions">
            <a className="primary-button" href="/contact">카카오톡 상담예약 <ArrowRight size={18}/></a>
            <a className="text-link" href="/about">자연미 이야기 <ArrowRight size={16}/></a>
          </div>
          <div className="trust-line"><span>25년 경력</span><span>산전·산후 집중관리</span><span>1:1 맞춤 상담</span></div>
        </div>
      </section>

      <section className="intro section-shell">
        <div><p className="eyebrow">CARE FOR EVERY SEASON</p><h2>변화하는 몸의 순간마다<br/>필요한 돌봄을 제안합니다</h2></div>
        <p>정해진 순서를 반복하기보다 오늘의 컨디션, 생활 습관, 불편한 부위를 차분히 듣습니다. 관리 전 상담부터 마무리 안내까지 한 사람의 흐름에 맞춰 세심하게 진행합니다.</p>
      </section>

      <section className="program-grid section-shell">
        {programs.map(({icon: Icon, eyebrow, title, text, href}) => (
          <a className="program-card" href={href} key={href}>
            <div className="icon-wrap"><Icon size={23}/></div><p className="eyebrow">{eyebrow}</p><h3>{title}</h3><p>{text}</p><span>자세히 보기 <ArrowRight size={16}/></span>
          </a>
        ))}
      </section>

      <section className="quote-band">
        <p className="eyebrow">NATURAL BEAUTY PHILOSOPHY</p>
        <blockquote>“강한 자극보다 몸의 이야기를 듣는 손,<br/>그것이 자연미가 오래 지켜온 관리의 시작입니다.”</blockquote>
        <p>자연미피부바디 원장</p>
      </section>

      <section className="steps section-shell">
        <div><p className="eyebrow">HOW WE CARE</p><h2>안심하고 받을 수 있도록<br/>처음부터 천천히</h2></div>
        <ol><li><b>01</b><span><strong>현재 상태 상담</strong>불편한 부위와 컨디션, 임신·출산 시기를 확인합니다.</span></li><li><b>02</b><span><strong>맞춤 관리 안내</strong>오늘 진행할 범위와 자세를 충분히 설명합니다.</span></li><li><b>03</b><span><strong>편안한 약손관리</strong>몸의 반응을 살피며 무리 없는 강도로 진행합니다.</span></li></ol>
      </section>

      <section className="home-blog">
        <div className="section-shell">
          <div className="home-blog-heading"><div><p className="eyebrow">NATURAL BEAUTY JOURNAL</p><h2>몸을 이해하는<br/>자연미의 이야기</h2></div><a className="text-link" href="/blog">블로그 전체보기 <ArrowRight size={16}/></a></div>
          <div className="home-blog-grid">{blogPosts.map((post)=><article key={post.id}><p className="post-meta"><span>{post.category}</span>{post.date}</p><h3><a href={`/blog/${post.id}`}>{post.title}</a></h3><p>{post.summary}</p><a className="post-link" href={`/blog/${post.id}`}>글 읽기 <ArrowRight size={16}/></a></article>)}</div>
        </div>
      </section>

      <section className="final-cta"><p className="eyebrow">A QUIET MOMENT FOR YOU</p><h2>지금의 몸에 맞는 관리가<br/>궁금하신가요?</h2><p>부담 없이 현재 상태를 들려주세요. 자연미가 차분히 안내해 드립니다.</p><a className="primary-button" href="/contact">카카오톡으로 상담하기 <ArrowRight size={18}/></a></section>
      <footer><a className="brand" href="/" aria-label="자연미피부바디 홈"><img className="brand-logo" src="/images/natural-beauty-logo.png" alt="자연미피부바디" /></a><p>자연미피부바디 공식 홈페이지 · 상담은 예약제로 운영됩니다.</p><p className="disclaimer">본 관리는 의료행위가 아니며, 개인의 상태에 따라 상담 후 진행됩니다.</p></footer>
      <a className="mobile-fixed-cta" href="/contact"><MessageCircle size={19}/> 카카오톡 상담예약</a>
    </main>
  );
}
