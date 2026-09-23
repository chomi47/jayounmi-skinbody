import type { Metadata } from 'next';
import { Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google';
import './globals.css';
import { createMetadata, OG_IMAGE, pageSeo, SITE_URL } from './seo';

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
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: '자연미피부바디 | 25년 약손의 깊이',
    description: '몸의 변화를 이해하는 산전·산후 집중관리와 1:1 맞춤 상담',
    url: '/',
    type: 'website',
    locale: 'ko_KR',
    siteName: '자연미피부바디',
    images: [{ url: OG_IMAGE, width: 1734, height: 907, alt: '자연미피부바디 산전·산후 집중관리' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '자연미피부바디 | 25년 약손의 깊이',
    description: '몸의 변화를 이해하는 산전·산후 집중관리와 1:1 맞춤 상담',
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const validGaMeasurementId = gaMeasurementId && /^G-[A-Z0-9]+$/.test(gaMeasurementId)
    ? gaMeasurementId
    : undefined;

  return (
    <html lang="ko">
      {validGaMeasurementId && (
        <head>
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
