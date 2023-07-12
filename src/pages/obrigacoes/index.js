import { ThemeProvider, Box, Container } from 'theme-ui';
import theme from 'theme';
import Layout from 'components/layout';
import { SecondaryHero } from 'sections/secondaryHero';
import bannerImg from 'assets/images/bannerObrigacoes.png';
import ObrigacoesCard from 'components/cards/obrigacoes';
import espiritosanto from 'assets/images/estados/espiritosanto.png'
import matogrossodosul from 'assets/images/estados/matogrossodosul.png'
import minasgerais from 'assets/images/estados/minasgerais.png'
import parana from 'assets/images/estados/parana.png'
import riodejaneiro from 'assets/images/estados/riodejaneiro.png'
import riograndedosul from 'assets/images/estados/riograndedosul.png'
import santacatarina from 'assets/images/estados/santacatarina.png'
import saopaulo from 'assets/images/estados/saopaulo.png'

export default function Noticias() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SecondaryHero title="Obrigações Fiscais" banner={bannerImg} />

        <Container>
          <Box sx={styles.grid}>
            <ObrigacoesCard thumbnail={espiritosanto} title="Espiríto Santo" link="espiritoSanto" />
            <ObrigacoesCard thumbnail={matogrossodosul} title="Mato Grosso do Sul" link="matoGrossoDoSul" />
            <ObrigacoesCard thumbnail={minasgerais} title="Minas Gerais" link="minasGerais" />
            <ObrigacoesCard thumbnail={parana} title="Paraná" link="parana" />
            <ObrigacoesCard thumbnail={riodejaneiro} title="Rio de Janeiro" link="rioDeJaneiro" />
            <ObrigacoesCard thumbnail={riograndedosul} title="Rio Grande do Sul" link="rioGrandeDoSul" />
            <ObrigacoesCard thumbnail={santacatarina} title="Santa Catarina" link="santaCatarina" />
            <ObrigacoesCard thumbnail={saopaulo} title="São Paulo" link="saoPaulo" />
          </Box>
        </Container>
      </Layout>
    </ThemeProvider>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gap: [6, null, null, null, 6, 10],
    alignItems: 'flex-start',
    mx: [null, null, null, -3, 'unset'],
    gridTemplateColumns: ['repeat(1, 1fr)', null, null, null, 'repeat(4, 1fr)'],
    '.slick-arrow': {
      bottom: [null, null, null, -14, 'unset'],
    },
    py: [8]
  },
}