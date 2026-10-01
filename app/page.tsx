import { ArrowRight, CalendarCheck } from 'lucide-react';
import { blogPosts } from './blog/posts';
import { SiteHeader } from './components/SiteHeader';
import { businessJsonLd, JsonLd } from './seo';

const NAVER_RESERVATION_URL = 'https://booking.naver.com/booking/13/bizes/1741377';

const programs = [
  { image: '/images/face-neck-hands.jpg', alt: '고객의 얼굴과 목 주변을 손으로 세심하게 관리하는 장면', eyebrow: '얼굴관리', title: '약손 얼굴윤곽 관리', text: '25년간 쌓아온 얼굴 관리 경험을 바탕으로, 피부 상태와 얼굴 라인을 세심하게 살핍니다.', href: '/face-care' },
  { image: '/images/prenatal-care-identity.png', alt: '옆으로 편안하게 누운 고객의 양쪽 다리를 관리하는 산전관리 장면', eyebrow: '산전관리 · 산후관리', title: '산전관리와 산후관리', text: '산전관리와 산후관리는 각각 현재 상태와 시기에 맞춰 상담하고 안내합니다.', href: '/programs' },
  { image: '/images/body-care-clothed-final.jpg', alt: '관리복을 입고 엎드린 고객의 어깨와 등을 손으로 관리하는 장면', eyebrow: '전신관리', title: '전신 바디 밸런스', text: '얼굴관리를 포함해 전신의 균형을 한 흐름으로 살핍니다.', href: '/body-care' },
];

export default function Home() {
  return (
    <main>
      <JsonLd data={businessJsonLd} />
      <SiteHeader />

      <section className="hero">
        <picture className="hero-media">
          <source media="(max-width: 640px)" srcSet="/images/hero-decollete-care-mobile-identity.png" />
          <img src="/images/hero-decollete-care-desktop-identity.png" alt="25년 피부·바디 관리 경력의 대표 원장이 바로 누운 고객의 목과 쇄골, 어깨를 직접 관리하는 모습" />
        </picture>
        <div className="hero-wash" />
        <div className="hero-copy">
          <p className="eyebrow hero-location">대구 수성구 신매동</p>
          <h1><span className="title-line"><em>25년 경력 약손의</em></span><span className="title-line"><em>피부·바디 관리</em></span></h1>
          <p className="lead">얼굴과 바디를 세심하게 살피며, 지금 필요한 관리를 함께 찾습니다. 산전·산후관리도 편안하게 상담해 주세요.</p>
          <div className="hero-actions">
            <a className="primary-button" href={NAVER_RESERVATION_URL} target="_blank" rel="noreferrer">네이버 예약 <ArrowRight size={18}/></a>
            <a className="text-link" href="/about">자연미 이야기 <ArrowRight size={16}/></a>
          </div>
          <small className="booking-helper booking-helper--hero">네이버 예약 페이지에서 자연미 피부바디를 눌러 날짜와 시간을 선택해 주세요.</small>
          <div className="trust-line"><span>산전·산후 맞춤관리</span><span>1:1 상담·직접 관리</span></div>
        </div>
      </section>

      <section className="intro section-shell">
        <div><p className="eyebrow">자연미의 관리</p><h2><span className="title-line">얼굴부터 산전·산후,</span><span className="title-line">전신 바디 밸런스까지</span></h2></div>
        <p>25년간 쌓아온 피부 바디 관리 경험을 바탕으로, 그날의 몸 상태에 맞춰 한 분씩 관리합니다.</p>
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
        <div><p className="eyebrow">자연미의 관리 과정</p><h2><span className="steps-title-line">안심하고 받을 수 있도록</span><span className="steps-title-line">처음부터 천천히</span></h2></div>
        <ol><li><b>01</b><span><strong>현재 상태 상담</strong>오늘의 컨디션을 확인합니다.</span></li><li><b>02</b><span><strong>맞춤 관리 안내</strong>범위와 자세를 안내합니다.</span></li><li><b>03</b><span><strong>편안한 약손관리</strong>몸의 반응에 맞춰 진행합니다.</span></li></ol>
      </section>

      <section className="home-blog">
        <div className="section-shell">
          <div className="home-blog-heading"><div><p className="eyebrow">자연미 이야기</p><h2>몸을 이해하는<br/>자연미의 이야기</h2></div><a className="text-link" href="/blog">블로그 전체보기 <ArrowRight size={16}/></a></div>
          <div className="home-blog-grid">{blogPosts.map((post)=><article key={post.id}><p className="post-meta"><span>{post.category}</span>{post.date}</p><h3><a href={`/blog/${post.id}`}>{post.title}</a></h3><a className="post-link" href={`/blog/${post.id}`}>글 읽기 <ArrowRight size={16}/></a></article>)}</div>
        </div>
      </section>

      <section className="final-cta"><p className="eyebrow">나를 위한 편안한 시간</p><h2>지금의 몸에 맞는 관리가<br/>궁금하신가요?</h2><p>현재 상태부터 편안히 들려주세요.</p><a className="primary-button" href={NAVER_RESERVATION_URL} target="_blank" rel="noreferrer">네이버 예약 <ArrowRight size={18}/></a><small className="booking-helper">네이버 예약 페이지에서 자연미 피부바디를 눌러 날짜와 시간을 선택해 주세요.</small></section>
      <footer><a className="brand" href="/" aria-label="자연미피부바디 홈"><img className="brand-logo" src="/images/natural-beauty-logo.png" alt="자연미피부바디" /></a><div className="footer-info"><p>자연미 피부바디 · <span className="footer-reservation-required">예약 필수</span> · 1:1 프라이빗 관리</p><p><a href="tel:01051317117">010-5131-7117</a><span>대구 신매로 8길 8-5</span></p><p><span>평일 09:00 - 20:00</span><span>토요일 09:00 - 16:00</span></p></div></footer>
      <a className="mobile-fixed-cta" href={NAVER_RESERVATION_URL} target="_blank" rel="noreferrer"><CalendarCheck size={19}/> 네이버 예약</a>
    </main>
  );
}
