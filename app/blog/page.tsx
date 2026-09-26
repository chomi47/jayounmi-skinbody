import type { Metadata } from 'next';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { blogPosts } from './posts';
import { PageHero } from '../components/PageHero';
import { SiteHeader } from '../components/SiteHeader';
import { breadcrumbJsonLd, createMetadata, JsonLd, pageSeo } from '../seo';

function Footer(){return <><footer><a className="brand" href="/" aria-label="자연미피부바디 홈"><img className="brand-logo" src="/images/natural-beauty-logo.png" alt="자연미피부바디" /></a><div className="footer-info"><p>자연미 피부바디 · 예약 필수 · 1:1 프라이빗 관리</p><p><a href="tel:01051317117">010-5131-7117</a><span>대구 신매로 8길 8-5</span></p><p><span>평일 09:00 - 20:00</span><span>토요일 09:00 - 16:00</span></p></div><p className="disclaimer">본 관리는 의료행위가 아니며, 개인의 상태에 따라 상담 후 진행됩니다.</p></footer><a className="mobile-fixed-cta" href="/contact"><MessageCircle size={19}/> 카카오톡 상담예약</a></>}

export const metadata: Metadata = createMetadata('/blog',pageSeo['/blog'].title,pageSeo['/blog'].description);

export default function Blog(){return <main><JsonLd data={breadcrumbJsonLd([{name:'홈',path:'/'},{name:'블로그',path:'/blog'}])}/><SiteHeader/><PageHero eyebrow="자연미 이야기" titleLines={['몸을 이해하는','차분한 읽을거리']} description="산전·산후의 변화와 약손관리 전후에 알아두면 좋은 내용을 자연미의 시선으로 전합니다." tone="dark"/><section className="blog-list section-shell" aria-label="블로그 글 목록">{blogPosts.map((post,index)=><article className="blog-list-card" key={post.id}><div className="post-number">{String(index+1).padStart(2,'0')}</div><a className="blog-list-image" href={`/blog/${post.id}`}><img src={post.image} alt={post.imageAlt} loading="lazy" decoding="async"/></a><div><p className="post-meta"><span>{post.category}</span>{post.date} · 읽는 시간 {post.readTime}</p><h2><a href={`/blog/${post.id}`}>{post.title}</a></h2><p>{post.summary}</p><a className="post-link" href={`/blog/${post.id}`}>글 읽기 <ArrowRight size={16}/></a></div></article>)}</section><Footer/></main>}
