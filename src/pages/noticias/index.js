import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Layout from 'components/layout';
import { SecondaryHero } from 'sections/secondaryHero';
import bannerImg from 'assets/images/banner1.png';
import { AllNews } from 'sections/allNews';

export default function Noticias() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SecondaryHero title="Notícias" banner={bannerImg} />
        <AllNews />
      </Layout>
    </ThemeProvider>
  );
}