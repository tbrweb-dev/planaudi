import React from 'react';
import Head from 'next/head';

export function SEO() {
  return (
    <Head>
      <title>Planaudi | Consultoria e Assessoria Contábil</title>
      <meta name="description" content="Nossa empresa atual no segmento de prestação de serviços contábeis e de assessoria empresarial há mais de 25 anos." />
      <meta name="author" content="TBrWeb - Criação e Desenvolvimento de Sites" />

      <meta property="og:title" content="Planaudi | Consultoria e Assessoria Contábil" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://planaudi.srv.br" />
      <meta property="og:image" content="https://planaudi.srv.br/assets/images/modelo200x200.png" />
      <meta property="og:description" content="Consultoria e Assessoria Contábil" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="Planaudi | Consultoria e Assessoria Contábil" />
      <meta name="twitter:site" content="https://planaudi.srv.br" />
      <meta name="twitter:image" content="https://planaudi.srv.br/assets/images/modelo200x200.png" />
      <meta name="twitter:domain" content="planaudi.srv.br"/>
      <meta name="twitter:title" content="Planaudi | Consultoria e Assessoria Contábil" />
      <meta name="twitter:description" content="Consultoria e Assessoria Contábil" />
    </Head>
  );
}
