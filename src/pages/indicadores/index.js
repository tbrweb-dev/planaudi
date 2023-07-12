import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Layout from 'components/layout';
import { AllIndicators } from 'sections/allIndicators';
import { SecondaryHero } from 'sections/secondaryHero';
import bannerImg from 'assets/images/banner1.png';

export default function Indicadores() {
  return (
    <ThemeProvider theme={theme}>
      <Layout backToMenu={true}>
        <SecondaryHero title="Indicadores econômicos" banner={bannerImg} />
        <AllIndicators />
      </Layout>
    </ThemeProvider>
  );
}