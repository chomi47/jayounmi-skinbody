import { ArrowRight, MessageCircle } from 'lucide-react';
import { blogPosts } from './blog/posts';
import { SiteHeader } from './components/SiteHeader';
import { businessJsonLd, JsonLd } from './seo';

const programs = [
  { image: '/images/prenatal-care-identity.png', alt: '옆으로 편안하게 누운 고객의 양쪽 다리를 관리하는 산전관리 장면', eyebrow: '산전관리', title: '산전관리', text: '임신 중 달라진 몸을 편안하게 살핍니다.', href: '/prenatal' },
  { image: '/images/postnatal-care-identity.png', alt: '옆으로 편안히 누운 고객이 왼팔을 이불 아래에 두고 어깨와 등을 관리받는 산후관리 장면', eyebrow: '산후관리', title: '산후관리', text: '회복 시기와 생활 리듬에 맞춰 안내합니다.', href: '/postnatal' },
  { image: '/images/body-care-clothed-final.jpg', alt: '관리복을 입고 엎드린 고객의 어깨와 등을 손으로 관리하는 장면', eyebrow: '체형·약손관리', title: '체형·약손관리', text: '일상에 쌓인 긴장과 균형을 살핍니다.', href: '/body-care' },
];

export default function Home() {
  return (
    <main>
      <JsonLd data={businessJsonLd} />
      <SiteHeader />

      <section className="hero">
        <picture className="hero-media">
          <source media="(max-width: 640px)" srcSet="/images/hero-decollete-care-mobile-identity.png" />
          <img src="/images/hero-decollete-care-desktop-identity.png" alt="25년 경력의 대표 원장이 바로 누운 고객의 목과 쇄골, 어깨를 직접 관리하는 모습" />
        </picture>
        <div className="hero-wash" />
        <div className="hero-copy">
          <p className="eyebrow">몸의 회복이 삶의 회복입니다.</p>
          <h1>몸의 변화를 이해하는<br/><em>25년 약손의 깊이</em></h1>
          <p className="lead">산전부터 산후 회복까지,<br className="desktop-only"/> 지금의 몸에 맞춰 편안하게 관리합니다.</p>
          <div className="hero-actions">
            <a className="primary-button" href="/contact">카카오톡 상담예약 <ArrowRight size={18}/></a>
            <a className="text-link" href="/about">자연미 이야기 <ArrowRight size={16}/></a>
          </div>
          <div className="trust-line"><span>25년 경력</span><span>산전·산후 집중관리</span><span>1:1 맞춤 상담</span></div>
        </div>
      </section>

      <section className="intro section-shell">
        <div><p className="eyebrow">몸의 모든 순간을 위한 관리</p><h2><span className="title-line">변화하는 몸의 순간마다</span><span className="title-line">필요한 돌봄을 제안합니다</span></h2></div>
        <p>오늘의 컨디션을 먼저 듣고, 한 분씩 맞춰 관리합니다.</p>
      </section>

      <section className="program-grid section-shell">
        {programs.map(({image, alt, eyebrow, title, text, href}) => (
          <a className="program-card" href={href} key={href}>
            <div className="program-photo"><img src={image} alt={alt} loading="lazy" decoding="async"/></div>
            <div className="program-content"><p className="eyebrow">{eyebrow}</p><h3>{title}</h3><p>{text}</p><span>자세히 보기 <ArrowRight size={16}/></span></div>
          </a>
        ))}
      </section>

      <section className="quote-band">
        <p className="eyebrow">자연미의 관리 철학</p>
        <blockquote>“몸의 이야기를 먼저 듣는 손”</blockquote>
        <p>자연미피부바디 원장</p>
      </section>

      <section className="steps section-shell">
        <div><p className="eyebrow">자연미의 관리 과정</p><h2>안심하고 받을 수 있도록<br/>처음부터 천천히</h2></div>
        <ol><li><b>01</b><span><strong>현재 상태 상담</strong>오늘의 컨디션을 확인합니다.</span></li><li><b>02</b><span><strong>맞춤 관리 안내</strong>범위와 자세를 안내합니다.</span></li><li><b>03</b><span><strong>편안한 약손관리</strong>몸의 반응에 맞춰 진행합니다.</span></li></ol>
      </section>

      <section className="home-blog">
        <div className="section-shell">
          <div className="home-blog-heading"><div><p className="eyebrow">자연미 이야기</p><h2>몸을 이해하는<br/>자연미의 이야기</h2></div><a className="text-link" href="/blog">블로그 전체보기 <ArrowRight size={16}/></a></div>
          <div className="home-blog-grid">{blogPosts.map((post)=><article key={post.id}><p className="post-meta"><span>{post.category}</span>{post.date}</p><h3><a href={`/blog/${post.id}`}>{post.title}</a></h3><a className="post-link" href={`/blog/${post.id}`}>글 읽기 <ArrowRight size={16}/></a></article>)}</div>
        </div>
      </section>

      <section className="final-cta"><p className="eyebrow">나를 위한 편안한 시간</p><h2>지금의 몸에 맞는 관리가<br/>궁금하신가요?</h2><p>현재 상태부터 편안히 들려주세요.</p><a className="primary-button" href="/contact">카카오톡으로 상담하기 <ArrowRight size={18}/></a></section>
      <footer><a className="brand" href="/" aria-label="자연미피부바디 홈"><img className="brand-logo" src="/images/natural-beauty-logo.png" alt="자연미피부바디" /></a><div className="footer-info"><p>자연미 피부바디 · 예약 필수 · 1:1 프라이빗 관리</p><p><a href="tel:01051317117">010-5131-7117</a><span>대구 신매로 8길 8-5</span></p><p><span>평일 09:00 - 20:00</span><span>토요일 09:00 - 16:00</span></p></div><p className="disclaimer">본 관리는 의료행위가 아니며, 개인의 상태에 따라 상담 후 진행됩니다.</p></footer>
      <a className="mobile-fixed-cta" href="/contact"><MessageCircle size={19}/> 카카오톡 상담예약</a>
    </main>
  );
}
