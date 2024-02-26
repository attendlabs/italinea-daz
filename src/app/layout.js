import { Footer } from '@/components/Footer';
import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Italínea DAZ',
  description: 'Móveis Planejados em Uberlândia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Script id='google-tag-manager' strategy='afterInteractive'>
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M2P5FRHP');
        `}
      </Script>
      <Script id='facebook-pixel' strategy='afterInteractive'>
        {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', ${763613722284872});
        fbq('track', 'PageView');
        `}
      </Script>
      <body>
        <Script strategy='afterInteractive' src='https://www.googletagmanager.com/ns.html?id=GTM-M2P5FRHP' />
        {children}
        <Footer />
      </body>
    </html>
  )
}
