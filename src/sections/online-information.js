/** @jsx jsx */
import { jsx, Box, Container, Flex, Button } from 'theme-ui';
import Slider from 'react-slick';
import SectionHeading from 'components/section-heading';
import PriceTable from 'components/cards/price-table';
import SlickArrow from 'components/slick-arrow';
import Image from 'components/image'
import ImageAgenda from 'assets/images/agenda3.png'
import ScrollAnimation from 'react-animate-on-scroll';
import { useInformacoes } from 'hooks/useInformacoes';
import Link from 'next/link';


const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  nextArrow: <SlickArrow control="next" />,
  prevArrow: <SlickArrow control="prev" />,
  responsive: [
    {
      breakpoint: 100000,
      settings: 'unslick',
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export function OnlineInformation() {
  const { obrigacoes, agenda } = useInformacoes()
  const data = new Date()
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  const dataAtual = `${dia}/${mes}/${ano}`

  return (
    <Box as="section" id="informacoes" sx={styles.section}>
      <Container sx={styles.container}>
        <ScrollAnimation animateIn="slideInLeft" animateOut="fadeOut">
          <SectionHeading
            sx={styles.heading}
            slogan="Atualize-se"
            title="Composto por um conjunto de informações que são atualizadas diariamente pela nossa equipe."
          />
          <Slider sx={styles.grid} {...settings}>
            <PriceTable items={agenda} isRecommended={false} title="Agenda Tributária" subtitle={dataAtual} />

            <PriceTable items={obrigacoes.saoPaulo} isRecommended={true} title="Obrigações Fiscais" subtitle="Fique sempre informado" link="obrigacoes" />

            <Image sx={styles.image} src={ImageAgenda} loading="lazy" alt="" />
          </Slider>

          <Flex sx={{ justifyContent: 'center', marginTop: '2rem' }}>
            <Link href="/publicacoes">
              <Button sx={styles.button} as="a">Ver Mais</Button>
            </Link>
          </Flex>
        </ScrollAnimation>
      </Container>
    </Box>
  );
};

const styles = {
  section: {
    pt: [6],
    pb: [12, null, null, 15, 17],
  },
  container: {
    pl: 0,
    pr: 0,
  },
  heading: {
    mb: [7, null, null, null, 14, null, 18],
    px: [6, null, null, 0],
    h3: {
      fontSize: [3, null, null, 8],
    },
  },
  grid: {
    gap: [null, null, null, null, 6],
    display: [null, null, null, null, 'grid'],
    gridTemplateColumns: [null, null, null, null, 'repeat(3, 1fr)'],
    alignItems: [null, null, null, null, 'flex-end'],
    '.slick-slide > div': {
      p: ['35px', '40px', null, '35px 23px 23px', 0],
    },
    '.slick-arrow': {
      bottom: -5,
    },
  },
  image: {
    alignSelf: 'center',
  }
};
