/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading } from 'theme-ui';

import BgShape from 'assets/images/shape-1.svg';
import shapeTop from 'assets/images/icons/shape-top.png';
import shapeBottom from 'assets/images/icons/shape-bottom.png';
import { AiOutlineWhatsApp, AiOutlinePhone, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link';

export function CallToAction() {
  return (
    <section id="contato" sx={styles.section}>
      <Container sx={styles.container}>
        <Box sx={styles.contentBox}>
          <Heading sx={styles.heading}>
            Queremos entender o que você precisa
          </Heading>
          <Box sx={styles.btnWrapper}>
            <Link href="https://wa.me/5519999706375">
              <a target="_blank">
                <AiOutlineWhatsApp size="3em" />
              </a>
            </Link>
            <Link href="tel:1921051000">
              <a target="_blank">
                <AiOutlinePhone size="3em" />
              </a>
            </Link>
            <Link href="https://www.instagram.com/tbrweb/">
              <a target="_blank">
                <AiOutlineInstagram size="3em" />
              </a>
            </Link>
            <Link href="mailto:comercial@tbrweb.com.br">
              <a target="_blank">
                <AiOutlineMail size="3em" />
              </a>
            </Link>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

const styles = {
  section: {
    position: 'relative',
    zIndex: 1,
    ':before': {
      backgroundColor: '#F9FAFC',
      bottom: 0,
      content: `''`,
      height: '50%',
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: '-1',
    },
  },
  container: {
    px: [0, '0 !important', '30px !important'],
  },
  contentBox: {
    padding: [
      '35px 60px 60px',
      null,
      null,
      '40px 30px 45px',
      '55px 30px 60px',
      '55px 50px 60px',
    ],
    backgroundColor: '#183656',
    backgroundImage: ['none', null, null, `url(${BgShape})`],
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '60% center',
    backgroundSize: ['120px', null, null, null, 'auto'],
    borderRadius: '7px',
    display: 'flex',
    alignItems: 'center',
    textAlign: ['center', null, null, 'left'],
    flexDirection: ['column', null, null, 'row'],
    justifyContent: ['center', null, null, 'space-between'],
  },
  heading: {
    fontSize: [3, 7, 8, 7, 11],
    fontFamily: 'Bree Serif, serif',
    color: 'white',
    letterSpacing: 'heading',
    lineHeight: [1.4, 1.53],
    maxWidth: ['100%', '80%', null, 340, '50%', '45%'],
    mb: [11, null, null, 0],
  },
  btnWrapper: {
    display: 'flex',
    position: 'relative',
    ':before, :after': {
      content: `''`,
      position: 'absolute',
      width: '73px',
      height: '26px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundSize: ['55%', null, null, '100%'],
    },
    ':before': {
      backgroundImage: `url(${shapeTop})`,
      top: '-28px',
    },
    ':after': {
      backgroundImage: `url(${shapeBottom})`,
      bottom: '-28px',
    },
    button: {
      backgroundColor: 'white',
      padding: 0,
      fontSize: [0, null, null, null, 2],
      minHeight: [40, null, null, 45, 60],
      padding: ['0 28px', null, null, null, '0 40px'],
      textTransform: 'uppercase',
    },
    a: {
      color: '#a2aebb',
      '&:hover': {
        color: 'white',
      },
      mt: 1,
    }
  },
};
