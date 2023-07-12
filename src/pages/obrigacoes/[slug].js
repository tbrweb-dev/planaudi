import { ThemeProvider, Box, Container, Text } from 'theme-ui';
import theme from 'theme';
import Layout from 'components/layout';
import { SecondaryHero } from 'sections/secondaryHero';
import bannerImg from 'assets/images/bannerObrigacoes.png';
import { useInformacoes } from 'hooks/useInformacoes';
import { slugify } from 'services/slugify';
import { Link } from 'components/link';
import { AiFillCheckCircle } from 'react-icons/ai'
import { rgba } from 'polished';

export default function Noticia({ obrigacao }) {
  const { obrigacoes } = useInformacoes()
  const obrEstado = obrigacoes[obrigacao.slug]
  let obrigacaoAtual
  Object.keys(obrigacoes).map(obr => {
    obrigacoes[obr].map(o => {
      if (slugify(o.Mn_Titulo) === obrigacao.slug) {
        obrigacaoAtual = o
      }
    })
  })

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {obrEstado ? (
          <>
            <SecondaryHero title='Obrigações Fiscais' banner={bannerImg} />

            <Box as="section" sx={styles.section}>
              <Container>
                {obrEstado.map((obr, i) => (
                  <Text sx={styles.obrigacoes} key={i}>
                    <AiFillCheckCircle color={rgba("#3f8299", 1)} />
                    <Link path={`${slugify(obr.Mn_Titulo)}`}>{obr.Mn_Titulo}</Link>
                  </Text>
                ))}
              </Container>
            </Box>
          </>
        ) : (
          <>
            <SecondaryHero title={obrigacaoAtual?.Mn_Titulo} banner={bannerImg} />

            <Box as="section" sx={styles.section}>
              <Container>
                <Box as="div" dangerouslySetInnerHTML={{ __html: obrigacaoAtual?.mn_texto }} />
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
  obrigacoes: {
    my: [3],
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: [2],
    fontSize: [3],
    a: {
      ':hover': {
        fontWeight: 700,
        color: 'primary'
      }
    }
  }
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
      obrigacao: { slug }
    }
  }
}