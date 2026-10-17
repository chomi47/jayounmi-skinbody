import type { Metadata } from 'next';
import { Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google';
import './globals.css';
import { createMetadata, HOME_OG_IMAGE, pageSeo, SITE_URL } from './seo';

const notoSans = Noto_Sans_KR({
  variable: '--font-noto-sans',
  subsets: ['latin'],
});

const notoSerif = Noto_Serif_KR({
  variable: '--font-noto-serif',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...createMetadata('/', pageSeo['/'].title, pageSeo['/'].description),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: '대구 신매동 얼굴윤곽 관리 | 자연미 피부바디',
    description: '피부·바디 관리 경력 25년 원장이 직접 관리하는 대구 신매동 1인 관리샵. 얼굴윤곽을 중심으로 산전·산후관리와 바디 밸런스를 함께 제공합니다.',
    url: '/',
    type: 'website',
    locale: 'ko_KR',
    siteName: '자연미피부바디',
    images: [{ url: HOME_OG_IMAGE, width: 1200, height: 630, alt: '자연미 피부바디 얼굴윤곽 관리' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '대구 신매동 얼굴윤곽 관리 | 자연미 피부바디',
    description: '피부·바디 관리 경력 25년 원장이 직접 관리하는 대구 신매동 1인 관리샵. 얼굴윤곽을 중심으로 산전·산후관리와 바디 밸런스를 함께 제공합니다.',
    images: [HOME_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = 'G-EXSR2Z16Z6';
  const validGaMeasurementId = gaMeasurementId && /^G-[A-Z0-9]+$/.test(gaMeasurementId)
    ? gaMeasurementId
    : undefined;

  return (
    <html lang="ko">
      {validGaMeasurementId && (
        <head>
          <meta name="naver-site-verification" content="ab5e290b9829c682205ed20ce1a74d58590ee135" />
          <meta name="facebook-domain-verification" content="6u92aye1yd8pn4xzb4przmizsf4e1n" />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${validGaMeasurementId}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${validGaMeasurementId}');`,
            }}
          />
        </head>
      )}
      <body
        className={`${notoSans.variable} ${notoSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
