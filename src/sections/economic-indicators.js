/** @jsx jsx */
import { jsx, Box, Container, Flex, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import ScrollAnimation from 'react-animate-on-scroll';
import { useInformacoes } from 'hooks/useInformacoes';
import Link from 'next/link';

export function EconomicIndicators() {
  const { cotacoes } = useInformacoes()

  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <SectionHeading
            slogan=""
            title="Indicadores Econômicos"
          />
          <Box sx={styles.grid}>
            {cotacoes?.map((cotacao) => (
              <Service key={cotacao.cotd_codigo} cotacao={cotacao} />
            ))}
          </Box>

          <Flex sx={{ justifyContent: 'center', marginTop: '2rem' }}>
            <Link href="/indicadores">
              <Button as="a">Mais Indicadores</Button>
            </Link>
          </Flex>
        </ScrollAnimation>
      </Container>
    </Box>
  );
};

const styles = {
  section: {
    pt: [8, null, null, null, 10, 12],
    pb: [12, null, null, null, null, 15],
  },
  grid: {
    gap: [3, null, null, 4],
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      null,
      'repeat(3, 1fr)',
      null,
      'repeat(4, 1fr)',
      'repeat(4, 300px)',
    ],
  },
};
