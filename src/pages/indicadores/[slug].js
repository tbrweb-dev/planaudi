import { ThemeProvider, Box, Container } from 'theme-ui';
import theme from 'theme';
import Layout from 'components/layout';
import banner from 'assets/images/banner1.png';

import { useInformacoes } from 'hooks/useInformacoes';
import { slugify } from 'services/slugify';
import { SecondaryHero } from 'sections/secondaryHero';

export default function Indicador({ indicador }) {
  const { indicadores } = useInformacoes()
  const { indicadoresSelic } = useInformacoes()

  const indicadorAtual = indicadores.find(n => slugify(n.mn_titulo) === indicador.slug)
  const indicadorSelic = indicadoresSelic.find(n => slugify(n.mn_titulo) === indicador.slug)


  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {indicadorAtual && (
          <>
            <SecondaryHero title={indicadorAtual?.mn_titulo} banner={banner} />

            <Box as="section" id="indicadores" sx={styles.section}>
              <Container>
                <Box as="div" dangerouslySetInnerHTML={{ __html: indicadorAtual?.mn_texto }} />
              </Container>
            </Box>
          </>
        )}

        {indicadorSelic && (
          <>
            <SecondaryHero title={indicadorSelic?.mn_titulo} banner={banner} />

            <Box as="section" id="indicadores" sx={styles.section}>
              <Container>
                <Box as="div" dangerouslySetInnerHTML={{ __html: indicadorSelic?.mn_texto }} />
              </Container>
            </Box>
          </>
        )}
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
      indicador: { slug }
    }
  }
}