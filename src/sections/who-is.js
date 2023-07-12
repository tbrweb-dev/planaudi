/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import quemSomos from 'assets/images/quem-somos.png';
import ScrollAnimation from 'react-animate-on-scroll';

const data = [
  {
    title: 'Missão',
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et rhoncus enim. Fusce magna erat, facilisis nec vulputate ac
      </div>
    ),
  },
  {
    title: 'Visão',
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et rhoncus enim. Fusce magna erat, facilisis nec vulputate ac
      </div>
    ),
  },
  {
    title: `Valores`,
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et rhoncus enim. Fusce magna erat, facilisis nec vulputate ac
      </div>
    ),
  },
];

export function WhoIs() {
  return (
    <Box id="quem-somos" as="section" sx={styles.section}>
      <Box
        as="figure"
        sx={{ ...styles.illustration, background: `url(${quemSomos}) no-repeat` }}
      />

      <ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut">
        <Container sx={styles.container}>
          <Box sx={styles.accordionGroup}>
            <SectionHeading
              sx={styles.heading}
              slogan="Modelo Contabilidade"
              title="Conheça um pouquinho sobre nossa história"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et rhoncus enim. Fusce magna erat, facilisis nec vulputate ac, mattis et nulla. Donec porttitor pretium nisl, eu scelerisque elit finibus a."
            />

            <Accordion items={data} />
          </Box>
        </Container>
      </ScrollAnimation>
    </Box>
  );
};

const styles = {
  section: {
    pt: [12, null, null, null, null, 12, 12],
    pb: [12, null, null, null, null, 14, 18],
    position: 'relative',
    zIndex: 0,
  },
  container: {
    display: ['flex'],
    alignItems: ['flex-start'],
    justifyContent: 'flex-end',
  },
  illustration: {
    backgroundSize: [null, null, null, null, null, '62%', '50%', '66%', '62%'],
    '@media only screen and (min-width: 1601px)': {
      backgroundSize: '60%',
      backgroundPosition: 'bottom left',
    },
    backgroundPosition: [
      null,
      null,
      null,
      null,
      null,
      '-80px 0',
      null,
      null,
      '0 0',
      '-140px 0px',
    ],
    bottom: 0,
    display: ['none', null, null, null, null, 'block'],
    height: '100%',
    left: 0,
    position: 'absolute',
    width: '100%',
  },
  accordionGroup: {
    maxWidth: [null, null, null, 520, 610, 410, null, 450, 410],
    m: [null, null, null, '0 auto', null, '0', null],
  },
  heading: {
    textAlign: ['center', null, null, null, null, 'left'],
    maxWidth: [null, null, null, 440, 450, 'none'],
    mb: [null, null, null, null, 6, 4, 6],
    h3: {
      fontSize: [4, null, null, 8, 10, 8, 12],
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: 'heading',
      maxWidth: [250, null, null, 'none'],
      margin: ['0 auto', null, null, 'unset'],
    },
  },
};
