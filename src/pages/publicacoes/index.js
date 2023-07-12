import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import Layout from 'components/layout';
import { AllPublications } from 'sections/allPublications';
import bannerImg from 'assets/images/banner1.png';
import { SecondaryHero } from 'sections/secondaryHero';


export default function Publicacoes() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SecondaryHero title="Conhecimentos Gerais" banner={bannerImg} />

        <AllPublications />
      </Layout>
    </ThemeProvider>
  );
}