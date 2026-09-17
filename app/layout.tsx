import type { Metadata } from 'next';
import { Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google';
import { headers } from 'next/headers';
import './globals.css';

const notoSans = Noto_Sans_KR({
  variable: '--font-noto-sans',
  subsets: ['latin'],
});

const notoSerif = Noto_Serif_KR({
  variable: '--font-noto-serif',
  subsets: ['latin'],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const forwardedHost = requestHeaders.get('x-forwarded-host')?.split(',')[0].trim();
  const host = forwardedHost ?? requestHeaders.get('host');
  const forwardedProto = requestHeaders.get('x-forwarded-proto')?.split(',')[0].trim();
  const protocol = forwardedProto ?? (host?.startsWith('localhost') ? 'http' : 'https');
  const siteUrl = host ? `${protocol}://${host}` : 'https://jayounmi-skinbody.vercel.app';

  return {
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
          width: 1734,
          height: 907,
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
}

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
