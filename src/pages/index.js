import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import { SEO } from 'components/seo';
import Layout from 'components/layout';
import { Lgpd } from 'components/lgpd';

import { Hero } from 'sections/hero';
import { WhoIs } from 'sections/who-is';
import { Services } from 'sections/services';
import { OnlineInformation } from 'sections/online-information';
import { EconomicIndicators } from 'sections/economic-indicators';
import { News } from 'sections/news';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO />

        <Hero />
        <WhoIs />
        <Services />
        <OnlineInformation />
        <EconomicIndicators />
        <News />

        <Lgpd />
      </Layout>
    </ThemeProvider>
  );
}
