import type { Metadata } from 'next';
import { Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans_KR({
  variable: '--font-noto-sans',
  subsets: ['latin'],
});

const notoSerif = Noto_Serif_KR({
  variable: '--font-noto-serif',
  subsets: ['latin'],
});

const siteUrl = process.env.URL ?? 'https://natural-beauty-care.chomi8090.chatgpt.site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '자연미피부바디 공식 홈페이지 | 산전·산후 약손관리',
  description: '25년의 경험으로 몸의 변화를 세심하게 살피는 산전·산후 약손관리 전문 공간. 프로그램, 이용 안내, 자연미 블로그를 확인하세요.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: '자연미피부바디 | 25년 약손의 깊이',
    description: '몸의 변화를 이해하는 산전·산후 집중관리와 1:1 맞춤 상담',
    url: '/',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/og-image.png',
        width: 1731,
        height: 909,
        alt: '자연미피부바디 산전·산후 집중관리',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '자연미피부바디 | 25년 약손의 깊이',
    description: '몸의 변화를 이해하는 산전·산후 집중관리와 1:1 맞춤 상담',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSans.variable} ${notoSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
