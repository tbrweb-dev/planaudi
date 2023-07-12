import { ThemeProvider, Box, Container } from 'theme-ui';
import theme from 'theme';
import { useEffect } from 'react';
import { useInformacoes } from 'hooks/useInformacoes';

import Layout from 'components/layout';
import { Link } from 'components/link';
import { SecondaryHero } from 'sections/secondaryHero';
import bannerImg from 'assets/images/banner1.png';


export default function Publicacao({ publicacaoId }) {
  const { publicacao, getIdPublication } = useInformacoes()

  useEffect(() => {
    getIdPublication(publicacaoId.slug)
  }, [publicacaoId])

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SecondaryHero title={publicacao?.Mn_Titulo} banner={bannerImg} />

        <Box as="section" id="publicacao" sx={styles.section}>
          <Container>
            <Box as="ul">
              {publicacao.children?.length > 0 ? (
                <>
                  {publicacao.children?.map((p) =>
                    <Box as="li" sx={styles.li} key={p.Mn_Codigo}>
                      <Link path={`/publicacoes/${p.Mn_Codigo}`}>{p?.Mn_Titulo}</Link>
                    </Box>
                  )}
                </>
              ) : (
                <>
                  <Box as="div" dangerouslySetInnerHTML={{ __html: publicacao?.mn_descricao }} />
                  <Box as="div" dangerouslySetInnerHTML={{ __html: publicacao?.mn_texto }} />
                </>
              )}
            </Box>
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
  li: {
    margin: '10px 0 0 0',
    padding: '5px 0 5px 10px',
    borderLeft: '2px solid #333',
    color: '#333',
    textDecoration: 'none',
    listStyle: 'none',
    cursor: 'pointer',
    ':hover': {
      fontWeight: 600,
      color: 'primary'
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
      publicacaoId: { slug }
    }
  }
}