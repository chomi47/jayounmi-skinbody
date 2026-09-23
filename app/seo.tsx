import type { Metadata } from 'next';

export const SITE_URL = 'https://jayounmi-skinbody.com';
export const SITE_NAME = '자연미피부바디';
export const OG_IMAGE = '/og-image.png';

export const pageSeo = {
  '/': {
    title: '자연미피부바디 공식 홈페이지 | 산전·산후 약손관리',
    description: '25년의 경험으로 몸의 변화를 세심하게 살피는 산전·산후 약손관리 전문 공간입니다. 현재 상태에 맞춘 1:1 상담과 관리 과정을 안내합니다.',
  },
  '/about': {
    title: '자연미 소개 | 자연미피부바디',
    description: '25년 현장 경험을 바탕으로 오늘의 몸 상태를 먼저 듣고, 무리하지 않는 맞춤 관리를 제안하는 자연미피부바디의 철학을 소개합니다.',
  },
  '/prenatal': {
    title: '산전관리 안내 | 자연미피부바디',
    description: '임신 주수와 당일 컨디션을 확인하고 복부에 부담을 주지 않는 편안한 자세로 진행하는 자연미피부바디 산전관리 안내입니다.',
  },
  '/postnatal': {
    title: '산후관리 안내 | 자연미피부바디',
    description: '출산 방법과 회복 시기, 수면과 수유 등 현재 생활을 먼저 듣고 몸에 부담이 되지 않는 범위에서 진행하는 산후관리 안내입니다.',
  },
  '/body-care': {
    title: '체형·약손관리 안내 | 자연미피부바디',
    description: '자세와 생활 습관, 불편한 부위를 상담한 뒤 전신 또는 얼굴을 포함한 관리 방향을 함께 정하는 체형·약손관리 안내입니다.',
  },
  '/programs': {
    title: '프로그램·이용 안내 | 자연미피부바디',
    description: '산전·산후·체형·전신·얼굴 약손관리의 구성과 이용 방법을 확인하세요. 관리 시간과 비용은 현재 상태와 희망 부위 상담 후 안내합니다.',
  },
  '/reviews': {
    title: '후기·자주 묻는 질문 | 자연미피부바디',
    description: '자연미피부바디 예약 전 자주 묻는 질문과 준비사항을 안내합니다. 고객 후기는 동의를 받은 실제 원문만 확인 후 게시합니다.',
  },
  '/contact': {
    title: '상담예약·이용 안내 | 자연미피부바디',
    description: '현재 몸 상태와 희망 일정을 먼저 듣고 관리 가능 여부와 프로그램 구성을 안내하는 자연미피부바디 1:1 상담예약 페이지입니다.',
  },
  '/blog': {
    title: '자연미 블로그 | 산전·산후 관리 안내',
    description: '산전·산후의 몸 변화, 상담 전 확인사항, 관리받는 날의 준비처럼 자연미피부바디 이용에 도움이 되는 정보를 전합니다.',
  },
} as const;

export function absoluteUrl(path: string) {
  return new URL(path, `${SITE_URL}/`).toString();
}

export function createMetadata(
  path: string,
  title: string,
  description: string,
  type: 'website' | 'article' = 'website',
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type,
      locale: 'ko_KR',
      siteName: SITE_NAME,
      images: [{ url: OG_IMAGE, width: 1734, height: 907, alt: '자연미피부바디 산전·산후 집중관리' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: absoluteUrl('/images/natural-beauty-logo.png'),
  image: absoluteUrl(OG_IMAGE),
  description: pageSeo['/'].description,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '자연미피부바디 관리 프로그램',
    itemListElement: [
      ['산전관리', '/prenatal'],
      ['산후관리', '/postnatal'],
      ['체형·약손관리', '/body-care'],
    ].map(([name, path]) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name, url: absoluteUrl(path) },
    })),
  },
};
