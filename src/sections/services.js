/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';
import ScrollAnimation from 'react-animate-on-scroll';

import icon1 from 'assets/images/services/1.png';
import icon2 from 'assets/images/services/2.png';
import icon3 from 'assets/images/services/3.png';
import icon4 from 'assets/images/services/4.png';
import icon5 from 'assets/images/services/5.png';
import icon6 from 'assets/images/services/6.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Assessoria Trabalhista',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et rhoncus enim. Fusce magna erat, facilisis nec vulputate ac.`,
  },
  {
    id: 2,
    icon: icon2,
    title: 'Assessoria Contábil',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et rhoncus enim. Fusce magna erat, facilisis nec vulputate ac.`,
  },
  {
    id: 3,
    icon: icon3,
    title: 'Assessoria Fiscal',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et rhoncus enim. Fusce magna erat, facilisis nec vulputate ac.`,
  },
  {
    id: 4,
    icon: icon4,
    title: 'Departamento Pessoal',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et rhoncus enim. Fusce magna erat, facilisis nec vulputate ac.`,
  },
  {
    id: 5,
    icon: icon5,
    title: 'Abertura de Empresa',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et rhoncus enim. Fusce magna erat, facilisis nec vulputate ac.`,
  },
  {
    id: 6,
    icon: icon6,
    title: 'Planejamento Tributário',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et rhoncus enim. Fusce magna erat, facilisis nec vulputate ac.`,
  },
];

export function Services() {
  return (
    <Box as="section" id="servicos" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Modelo Contabilidade"
          title="Áreas de Atuação"
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <ScrollAnimation key={item.id} animateIn="bounceInDown" animateOut="fadeOut">
              <Feature className="feature-item" key={item.id} data={item} />
            </ScrollAnimation>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [8, null, null, null, 10, 14],
    pb: [8, null, null, null, 15, 16, 19],
    position: 'relative',
  },
  heading: {
    marginBottom: [50, 50, 80],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  features: {
    gap: [35, null, null, 40, '50px 30px', 60],
    display: ['grid', 'grid'],
    maxWidth: 1030,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    '.feature-item': {
      display: ['block'],
      textAlign: 'center',
      maxWidth: [290, 260, null, 280, 'none'],
      m: ['0 auto', '0 auto', '0 auto', '0 auto', '0 auto', 0],
      figure: {
        m: ['0 0 20px'],
      },
      h4: {
        mb: ['15px', '15px', '20px'],
      },
      p: {
        fontSize: ['14px', '14px', '16px', '16px', '14px', '16px'],
      },
    },
  },
};