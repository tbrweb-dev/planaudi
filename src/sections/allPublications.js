/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Slider from 'react-slick';
import SlickArrow from 'components/slick-arrow';
import { PublicationItem } from 'components/cards/publications-post';
import { useInformacoes } from 'hooks/useInformacoes';

import ScrollAnimation from 'react-animate-on-scroll';

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
      settings: 'unslick',
    },
  ],
};

export function AllPublications() {
  const { publicacoes } = useInformacoes()

  return (
    <Box as="section" id="blog" sx={styles.section}>
      <Container>
        <ScrollAnimation animateIn="slideInRight" animateOut="fadeOut">
          <Slider sx={styles.grid} {...settings}>
            {publicacoes?.map((post) => (
              <PublicationItem key={post.Mn_Codigo} post={post} />
            ))}
          </Slider>
        </ScrollAnimation>
      </Container>
    </Box>
  );
};

const styles = {
  section: {
    pt: [12, null, null, 12, 15],
    pb: [6, null, null, 16, 10, 14],
  },
  heading: {
    mb: [8, null, null, null, 10],
  },
  grid: {
    display: 'grid',
    gap: [6, null, null, null, 6, 10],
    alignItems: 'flex-start',
    mx: [null, null, null, -3, 'unset'],
    gridTemplateColumns: ['repeat(1, 1fr)', null, null, null, 'repeat(3, 1fr)'],
    '.slick-arrow': {
      bottom: [null, null, null, -14, 'unset'],
    },
  },
  button: {
    mt: [8],
    textAlign: 'center',
  }
};
