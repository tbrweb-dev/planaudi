import { ThemeProvider, Box, Container } from 'theme-ui';
import theme from 'theme';
import Layout from 'components/layout';
import { SecondaryHero } from 'sections/secondaryHero';
import bannerImg from 'assets/images/banner1.png';
import { useInformacoes } from 'hooks/useInformacoes';
import { slugify } from 'services/slugify';

export default function Noticia({ noticia }) {
  const { noticias } = useInformacoes()
  const noticiaAtual = noticias.find(n => slugify(n.mn_titulo) === noticia.slug)

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SecondaryHero title={noticiaAtual?.mn_titulo} banner={bannerImg} />
        <Box as="section" id="services" sx={styles.section}>
          <Container>
            <Box as="div" dangerouslySetInnerHTML={{ __html: noticiaAtual?.mn_texto }} />
          </Container>
        </Box>
      </Layout>
    </ThemeProvider>
  );
}

const styles = {
  section: {
    pt: [8, null, null, null, 10, 12],
    pb: [12, null, null, null, null, 15],
  },
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  return {
    props: {
      noticia: { slug }
    }
  }
}