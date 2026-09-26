import type { Metadata } from 'next';
import { ArrowRight, Check, Clock3, MapPin, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { notFound } from 'next/navigation';
import { PageHero } from '../components/PageHero';
import { SiteHeader } from '../components/SiteHeader';
import { absoluteUrl, breadcrumbJsonLd, createMetadata, JsonLd, pageSeo, programCatalogJsonLd, programOfferJsonLd, SITE_URL } from '../seo';
import { CARE_PROGRAMS, formatProgramSummary } from '../programs';

const services = {
  prenatal: {
    eyebrow:'산전관리', title:'산전관리', headline:'몸이 빠르게 변하는 시기,\n편안함을 먼저 생각합니다',
    intro:'임신 주수와 당일 컨디션을 충분히 확인하고, 옆으로 눕거나 상체를 세운 편안한 자세에서 무리 없이 진행합니다.',
    needs:['임신 후 어깨와 등이 자주 뻐근한 분','오래 서거나 앉은 뒤 다리가 무겁게 느껴지는 분','편안한 자세로 부드러운 관리를 받고 싶은 분'],
    discomfort:'임신 중에는 체형과 생활 리듬이 달라지며 평소와 다른 불편을 느낄 수 있습니다. 자연미는 불편의 정도를 단정하지 않고, 그날의 몸 상태를 세심하게 묻는 것부터 시작합니다.',
    method:'복부를 직접 압박하지 않으며, 안정적인 쿠션과 자세를 준비합니다. 관리 중에도 강도와 불편 여부를 계속 확인해 편안한 범위 안에서 진행합니다.',
    caution:'임신 경과와 개인의 건강 상태에 따라 관리 가능 여부가 달라질 수 있습니다. 특이사항이 있거나 의료진의 안정 권고를 받은 경우에는 반드시 먼저 상담해 주세요.',
    faq:[['언제부터 받을 수 있나요?','임신 주수만으로 일률적으로 정하지 않습니다. 현재 상태와 의료진 안내를 확인한 뒤 상담을 통해 안내합니다.'],['어떤 자세로 진행하나요?','복부 부담을 줄일 수 있도록 옆으로 눕거나 상체를 편안히 세운 자세로 진행합니다.'],['강한 관리를 받을 수 있나요?','산전관리는 강한 자극보다 편안함을 우선합니다. 관리 중 반응을 확인하며 강도를 조절합니다.']]
  },
  postnatal: {
    eyebrow:'산후관리', title:'산후관리', headline:'출산 뒤 달라진 몸이\n천천히 리듬을 찾도록',
    intro:'출산 방법과 경과, 회복 시기, 수면과 수유 등 현재의 생활을 먼저 듣고 몸에 부담이 되지 않는 범위에서 관리합니다.',
    needs:['출산 후 목·어깨·등의 긴장이 신경 쓰이는 분','육아로 몸을 돌볼 시간이 부족했던 분','현재 회복 단계에 맞는 관리를 찾는 분'],
    discomfort:'출산 후의 몸은 사람마다 다른 속도로 변화합니다. 조급하게 이전 상태를 목표로 삼기보다, 지금 가장 불편한 부분과 일상의 움직임을 함께 살핍니다.',
    method:'충분한 상담 뒤 회복 단계에 맞춰 관리 범위와 자세를 정합니다. 민감한 부위와 수술 부위 등 주의가 필요한 사항은 미리 확인하고 직접적인 자극을 피합니다.',
    caution:'출산 직후이거나 통증·출혈·열감 등 우려되는 증상이 있다면 관리를 미루고 먼저 의료진과 상담해 주세요.',
    faq:[['출산 후 언제부터 받을 수 있나요?','출산 방법과 회복 경과가 모두 달라 상담이 먼저 필요합니다. 의료진의 안내가 있다면 함께 알려주세요.'],['수유 중에도 가능한가요?','수유 여부와 컨디션을 확인해 편한 자세와 시간을 안내합니다.'],['몇 회를 받아야 하나요?','정해진 횟수보다 회복 단계와 목표에 따라 제안합니다. 단회 상담 후 결정하셔도 됩니다.']]
  },
  'body-care': {
    eyebrow:'체형·약손관리', title:'체형·약손관리', headline:'일상에 쌓인 긴장을 살피는\n섬세한 손의 균형',
    intro:'자세와 생활 습관, 자주 불편한 부위를 상담한 뒤 전신 또는 얼굴을 포함한 관리 방향을 함께 정합니다.',
    needs:['오래 앉거나 서서 몸이 쉽게 뻐근한 분','전신의 균형을 편안하게 관리하고 싶은 분','얼굴과 바디를 한 흐름으로 받고 싶은 분'],
    discomfort:'반복되는 생활 자세는 특정 부위의 긴장과 피로감으로 이어질 수 있습니다. 자연미는 보이는 부분만이 아니라 몸 전체의 연결과 생활 습관을 함께 살핍니다.',
    method:'정해진 강도를 적용하기보다 손으로 몸의 반응을 확인하며 진행합니다. 전신, 상체 집중, 하체 집중, 얼굴 포함 여부는 상담 후 구성합니다.',
    caution:'본 관리는 진단이나 치료를 대신하지 않습니다. 지속되는 통증이나 급성 증상이 있다면 의료기관의 진료를 먼저 받아 주세요.',
    faq:[['얼굴과 바디를 함께 받을 수 있나요?','가능합니다. 희망 부위와 시간을 상담해 한 흐름으로 구성합니다.'],['관리 강도는 선택할 수 있나요?','관리 전 원하는 강도와 민감한 부위를 확인하고, 진행 중에도 편안함을 계속 묻습니다.'],['산전·산후가 아니어도 예약 가능한가요?','네. 체형·전신·얼굴 약손관리는 일반 고객도 상담 후 예약할 수 있습니다.']]
  }
} as const;

type PageFeatureImage = {
  src: string;
  alt: string;
  portrait?: boolean;
  fullFrame?: boolean;
};

const serviceFeatureImages: Partial<Record<keyof typeof services, PageFeatureImage>> = {
  prenatal: {
    src: '/images/prenatal-care-identity.png',
    alt: '옆으로 편안히 누운 산모의 양쪽 다리를 관리하는 산전관리 장면',
    fullFrame: true,
  },
  postnatal: {
    src: '/images/postnatal-care-identity.png',
    alt: '옆으로 편안히 누운 고객이 왼팔을 이불 아래에 두고 어깨와 등을 관리받는 산후관리 장면',
    fullFrame: true,
  },
  'body-care': {
    src: '/images/body-care-clothed-final.jpg',
    alt: '고객의 어깨와 등을 손으로 세심하게 관리하는 약손관리 장면',
  },
};

const directorFeatureImage: PageFeatureImage = {
  src: '/images/director-portrait-reference-final.png',
  alt: '자연미피부바디 대표 원장',
  portrait: true,
};

const aboutPreparationImage: PageFeatureImage = {
  src: '/images/about-preparation-director-identity.png',
  alt: '대표 원장이 정돈된 관리실에서 수건과 베드를 준비하는 모습',
};

const programsFeatureImage: PageFeatureImage = {
  src: '/images/program-preparation-hands.jpg',
  alt: '관리 전 깨끗한 수건과 오일을 정돈하는 손',
};

const reviewsFeatureImage: PageFeatureImage = {
  src: '/images/care-room.jpg',
  alt: '따뜻한 자연광과 우드 톤으로 정돈된 1인 관리실',
};

const contactFeatureImage: PageFeatureImage = {
  src: '/images/about-consultation-director-identity.png',
  alt: '대표 원장이 고객의 이야기를 편안하게 듣는 상담 장면',
};

const PHONE_DISPLAY = '010-5131-7117';
const PHONE_HREF = 'tel:01051317117';
const ADDRESS = '대구 신매로 8길 8-5';
// 네이버 예약의 실제 공개 URL이 확인되면 이 값만 교체합니다.
const NAVER_RESERVATION_URL = '';

const pageNames = {
  about: '자연미 소개',
  prenatal: '산전관리',
  postnatal: '산후관리',
  'body-care': '체형·약손관리',
  programs: '프로그램·이용 안내',
  reviews: '후기·FAQ',
  contact: '상담예약',
} as const;

function Footer(){return <><footer><a className="brand" href="/" aria-label="자연미피부바디 홈"><img className="brand-logo" src="/images/natural-beauty-logo.png" alt="자연미피부바디" /></a><div className="footer-info"><p>자연미 피부바디 · 예약 필수 · 1:1 프라이빗 관리</p><p><a href={PHONE_HREF}>{PHONE_DISPLAY}</a><span>{ADDRESS}</span></p><p><span>평일 09:00 - 20:00</span><span>토요일 09:00 - 16:00</span></p></div><p className="disclaimer">본 관리는 의료행위가 아니며, 개인의 상태에 따라 상담 후 진행됩니다.</p></footer><a className="mobile-fixed-cta" href="/contact"><MessageCircle size={19}/> 카카오톡 상담예약</a></>}
function Consultation(){return <section className="final-cta"><p className="eyebrow">1:1 상담예약</p><h2>지금의 상태부터<br/>편안히 이야기해 주세요</h2><p>관리 가능 시기와 프로그램은 1:1 상담 후 안내합니다.</p><a className="primary-button" href="/contact">카카오톡 상담예약 <ArrowRight size={18}/></a></section>}

function FeatureImage({image}:{image:PageFeatureImage}){
  return <figure className={`page-feature-image section-shell${image.portrait ? ' page-feature-image--portrait' : ''}${image.fullFrame ? ' page-feature-image--full-frame' : ''}`}><img src={image.src} alt={image.alt}/></figure>;
}

function ServicePage({data,image}:{data:typeof services[keyof typeof services],image?:PageFeatureImage}){
  return <main><SiteHeader/><PageHero eyebrow={data.eyebrow} titleLines={data.headline.split('\n')} description={data.intro}/>
  {image ? <FeatureImage image={image}/> : null}
  <section className="content-block two-column section-shell"><div><p className="eyebrow">이런 분께</p><h2>이런 분께 필요합니다</h2></div><ul className="check-list">{data.needs.map(n=><li key={n}><Check size={18}/>{n}</li>)}</ul></section>
  <section className="soft-block"><div className="two-column section-shell"><div><p className="eyebrow">몸이 보내는 신호</p><h2>고객이 겪는 불편</h2></div><p>{data.discomfort}</p></div></section>
  <section className="content-block two-column section-shell"><div><p className="eyebrow">자연미의 관리 방법</p><h2>자연미의 관리 방법</h2></div><div><p>{data.method}</p><aside className="notice"><strong>관리 전 꼭 알려주세요</strong>{data.caution}</aside></div></section>
  <section className="dark-block"><div className="section-shell"><p className="eyebrow">관리 진행 순서</p><h2>관리 진행 순서</h2><ol className="process"><li><b>01</b><strong>예약 상담</strong><span>시기와 현재 상태를 확인합니다.</span></li><li><b>02</b><strong>당일 컨디션 확인</strong><span>불편한 부위와 주의사항을 듣습니다.</span></li><li><b>03</b><strong>맞춤 약손관리</strong><span>편안함을 확인하며 진행합니다.</span></li><li><b>04</b><strong>마무리 안내</strong><span>관리 후 유의사항을 설명합니다.</span></li></ol></div></section>
  <section className="content-block section-shell"><div className="section-title"><p className="eyebrow">관리 시간과 횟수</p><h2>추천 횟수와 관리 시간</h2><p>개인의 상태와 목적에 따라 달라지므로 단정하지 않고 상담 후 안내합니다.</p></div><div className="info-cards"><article><Clock3/><h3>관리 시간</h3><p>희망 부위와 프로그램 구성에 따라 상담 후 안내</p></article><article><Sparkles/><h3>추천 횟수</h3><p>단회 상담 후 현재 상태와 목표에 맞춰 제안</p></article></div></section>
  <section className="soft-block testimonial-placeholder"><p className="eyebrow">실제 고객 후기</p><h2><span className="title-line">실제 고객의 이야기를</span><span className="title-line">있는 그대로 전하겠습니다</span></h2><p>고객 동의를 받은 후기 원문과 관리 시점이 확인되면 이 영역에 게시합니다.</p></section>
  <section className="content-block section-shell faq"><div className="section-title"><p className="eyebrow">자주 묻는 질문</p><h2>자주 묻는 질문</h2></div>{data.faq.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</section><Consultation/><Footer/></main>
}

function About(){return <main><SiteHeader/><PageHero eyebrow="자연미 소개" titleLines={['손끝의 기술보다 먼저,','한 사람의 몸을 이해합니다']} description="25년 동안 변하지 않은 것은 관리 전 충분히 듣는 태도입니다."/><FeatureImage image={directorFeatureImage}/><section className="content-block two-column section-shell"><div><p className="eyebrow">25년의 경험</p><h2>오랜 경험은<br/>섬세한 판단이 됩니다</h2></div><div><p>몸은 매일 같지 않습니다. 특히 임신과 출산을 지나는 동안에는 작은 변화에도 세심한 배려가 필요합니다. 자연미는 25년의 현장 경험을 바탕으로, 매회 같은 방식보다 오늘의 컨디션에 맞는 관리에 집중합니다.</p><p>강한 자극이나 과장된 변화를 약속하지 않습니다. 편안하게 머물 수 있는 공간, 충분한 설명, 몸의 반응을 살피는 손으로 신뢰를 쌓아갑니다.</p></div></section><FeatureImage image={aboutPreparationImage}/><section className="dark-block values"><div className="section-shell"><p className="eyebrow">자연미의 약속</p><h2>자연미가 지키는 세 가지</h2><div className="info-cards"><article><b>01</b><h3>먼저 듣기</h3><p>몸의 변화와 불편, 걱정을 충분히 듣습니다.</p></article><article><b>02</b><h3>무리하지 않기</h3><p>편안함을 우선하고 몸의 반응에 맞춥니다.</p></article><article><b>03</b><h3>정직하게 안내하기</h3><p>가능한 범위와 주의사항을 분명히 설명합니다.</p></article></div></div></section><Consultation/><Footer/></main>}

function Programs(){return <main><JsonLd data={programCatalogJsonLd}/><SiteHeader/><PageHero eyebrow="프로그램 안내" titleLines={['필요한 관리만,','알기 쉽게 안내합니다']} description="프로그램별 관리 시간과 가격을 확인하실 수 있습니다."/><FeatureImage image={programsFeatureImage}/><section className="content-block section-shell"><div className="section-title"><p className="eyebrow">프로그램 구성</p><h2>프로그램 구성</h2></div><div className="price-table">{CARE_PROGRAMS.map(program=><div key={program.name}><strong>{program.name}</strong><span>{program.description}</span><b>{formatProgramSummary(program)}</b></div>)}</div><aside className="notice wide"><strong>안내</strong>관리 범위와 진행 방법은 현재 상태를 확인한 뒤 안내합니다.</aside></section><Consultation/><Footer/></main>}

function Reviews(){return <main><SiteHeader/><PageHero eyebrow="후기와 자주 묻는 질문" titleLines={['예약 전의 걱정을','차분히 풀어드립니다']} description="후기는 실제 이용 고객의 동의를 받은 원문만 게시합니다."/><FeatureImage image={reviewsFeatureImage}/><section className="soft-block testimonial-placeholder"><p className="eyebrow">실제 관리 고객 후기</p><h2>“어제 어깨를 풀어서 그런지 오늘 한결 가벼워졌어요. 감사해요. ^^~”</h2></section><section className="content-block section-shell faq"><div className="section-title"><p className="eyebrow">자주 묻는 질문</p><h2>예약 전 자주 묻는 질문</h2></div>{[['상담만 먼저 받아도 되나요?','네. 현재 상태와 희망 사항을 먼저 이야기한 뒤 예약 여부를 결정하셔도 됩니다.'],['준비해야 할 것이 있나요?','예약 시 프로그램에 맞는 준비사항을 개별 안내해 드립니다.'],['관리를 미뤄야 하는 경우가 있나요?','발열, 급성 통증, 출혈 등 평소와 다른 증상이 있다면 관리를 미루고 의료진과 먼저 상담해 주세요.'],['예약 변경은 어떻게 하나요?','운영 정책이 확정되면 변경 가능 시간과 방법을 정확히 안내하겠습니다.']].map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</section><Consultation/><Footer/></main>}

function Contact(){return <main><SiteHeader/><PageHero eyebrow="상담예약" titleLines={['몸의 상태를 먼저 듣는','1:1 상담예약']} description="프로그램을 정하지 못했어도 괜찮습니다. 현재의 불편과 원하는 시간을 알려주세요."/><FeatureImage image={contactFeatureImage}/><section className="content-block contact-grid section-shell"><div><p className="eyebrow">예약 안내</p><h2>상담예약 안내</h2><ol className="contact-steps"><li><b>1</b><span><strong>카카오톡 상담</strong>현재 상태와 희망 일정을 남겨주세요.</span></li><li><b>2</b><span><strong>프로그램 안내</strong>관리 가능 여부와 구성을 안내합니다.</span></li><li><b>3</b><span><strong>예약 확정</strong>날짜와 시간을 확인하면 예약이 완료됩니다.</span></li></ol></div><aside className="contact-card"><MessageCircle size={30}/><h3>카카오톡 상담예약</h3><p>공식 카카오톡 채널 주소가 확인되면 바로 연결됩니다.</p><span className="pending-button">채널 주소 연결 필요</span><hr/><p><Clock3 size={17}/> 평일 09:00 - 20:00</p><p><Clock3 size={17}/> 토요일 09:00 - 16:00</p><p><strong>예약 필수 · 1:1 프라이빗 관리</strong></p><p><Phone size={17}/> 전화 · <a href={PHONE_HREF}>{PHONE_DISPLAY}</a></p><p><MapPin size={17}/> 주소 · {ADDRESS}</p>{NAVER_RESERVATION_URL ? <a id="naver-reservation" className="naver-reservation-button" href={NAVER_RESERVATION_URL} target="_blank" rel="noreferrer">네이버 예약 <ArrowRight size={17}/></a> : <span id="naver-reservation" className="pending-button naver-reservation-pending">네이버 예약 링크 연결 위치</span>}</aside></section><Footer/></main>}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const path=`/${slug}` as keyof typeof pageSeo;
  const seo=pageSeo[path];
  return seo ? createMetadata(path,seo.title,seo.description) : {title:'페이지를 찾을 수 없습니다 | 자연미피부바디'};
}

export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  if(!(slug in pageNames))notFound();
  const path=`/${slug}`;
  const breadcrumbs=breadcrumbJsonLd([{name:'홈',path:'/'},{name:pageNames[slug as keyof typeof pageNames],path}]);
  let content;
  if(slug in services){
    const data=services[slug as keyof typeof services];
    const service={
      '@context':'https://schema.org',
      '@type':'Service',
      '@id':`${absoluteUrl(path)}#service`,
      name:data.title,
      serviceType:data.title,
      description:data.intro,
      url:absoluteUrl(path),
      provider:{'@id':`${SITE_URL}/#business`},
      offers:CARE_PROGRAMS.filter(program=>program.path===path).map(program=>programOfferJsonLd(program)),
    };
    content=<><JsonLd data={service}/><ServicePage data={data} image={serviceFeatureImages[slug as keyof typeof services]}/></>;
  }else if(slug==='about')content=<About/>;
  else if(slug==='programs')content=<Programs/>;
  else if(slug==='reviews')content=<Reviews/>;
  else content=<Contact/>;
  return <><JsonLd data={breadcrumbs}/>{content}</>;
}
export function generateStaticParams(){return ['about','prenatal','postnatal','body-care','programs','reviews','contact'].map(slug=>({slug}))}
