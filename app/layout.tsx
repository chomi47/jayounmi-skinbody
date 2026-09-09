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

export const metadata: Metadata = {
  title: '자연미피부바디 공식 홈페이지 | 산전·산후 약손관리',
  description: '25년의 경험으로 몸의 변화를 세심하게 살피는 산전·산후 약손관리 전문 공간. 프로그램, 이용 안내, 자연미 블로그를 확인하세요.',
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
