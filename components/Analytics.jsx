// components/Analytics.jsx
"use client";

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

export default function Analytics() {
  const pathname = usePathname();
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  
  useEffect(() => {
    if (pathname && measurementId) {
      window.gtag('config', measurementId, {
        page_path: pathname,
      });
    }
  }, [pathname, measurementId]);

  return (
    <>
      {measurementId && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${measurementId}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
    </>
  );
}