/** Uncomment the below codeblock if you want to add google analytics for more info please visit our docs analytics section */
/** 
import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
*/
import 'assets/css/react-slick.css';
import { InformacoesProvider } from 'hooks/useInformacoes';

export default function CustomApp({ Component, pageProps }) {
  /** 
   useEffect(() => {
     initGA();
     logPageView();
     Router.events.on('routeChangeComplete', logPageView);
   }, []);
   */

  return (
    <InformacoesProvider>
      <Component {...pageProps} />
    </InformacoesProvider>
  );
}
