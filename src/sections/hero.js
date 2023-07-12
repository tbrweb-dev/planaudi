/** @jsx jsx */
import {
  jsx,
  Box,
  Flex,
  Text,
  Heading,
  Container,
} from 'theme-ui';

import { rgba } from 'polished';

import banner from 'assets/images/banner1.png'
import { AiOutlineWhatsApp, AiOutlinePhone, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link';
import { Animated } from "react-animated-css";

export function Hero() {
  return (
    <Box as="section" id="home" sx={styles.section} >
      <Container>
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
          <Box sx={styles.grid}>
            <Box sx={styles.domainCard}>
              <Heading>Um novo perfil de <Text as="span" color='secondary'>empresa contábil</Text></Heading>

              <Text as="p" mb={6}>
                Queremos entender o que você precisa, <br />
                Entre em contato
              </Text>

              <Flex sx={styles.inputGroup}>
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
              </Flex>
            </Box>
          </Box>
        </Animated>
      </Container>
    </Box>
  );
};

const styles = {
  section: {
    backgroundColor: 'primary',
    backgroundImage: `url(${banner})`,
    pt: [17, null, null, 20, null],
    pb: [6, null, null, 12, 16],
  },
  grid: {
    gap: ['30px 60px', null, null, null, '30px 40px', '30px 60px'],
    display: 'grid',
    minHeight: [null, null, null, null, null, '66vh', '81vh'],
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      null,
      'repeat(2, 1fr)',
      '510px 1fr',
    ],
  },
  domainCard: {
    backgroundColor: '#ffffffbc',
    boxShadow: '0px 24px 50px rgba(54, 91, 125, 0.05)',
    borderRadius: '15px 30px',
    p: ['30px 25px 50px', null, null, '40px 40px 60px'],
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 480, 'none'],
    h2: {
      fontWeight: 700,
      fontSize: [8, null, null, 10, 9, 14],
      lineHeight: 1.36,
      letterSpacing: 'heading',
      color: 'textSecondary',
      mb: [5, null, null, 7, 8],
    },
  },
  inputGroup: {
    a: {
      cursor: 'pointer',
      color: 'primary',
      ':hover': {
        color: 'secondary',
      }
    },
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    px: [3, null, null, 6],
    input: {
      border: 0,
      borderRadius: 0,
      fontSize: [1, null, null, 2],
      minHeight: [45, null, null, 60],
      p: 0,
      ':focus': {
        boxShadow: 'none',
      },
      '::placeholder': {
        fontSize: '15px',
        lineHeight: 1.33,
        color: rgba('#02073E', 0.4),
      },
      ':-webkit-autofill': {
        WebkitBoxShadow: '0 0 0 30px white inset !important',
      },
    },
    select: {
      border: 0,
      color: 'textSecondary',
      fontWeight: 500,
      fontSize: [0, null, null, '15px'],
      lineHeight: 1.33,
      letterSpacing: 'heading',
      minHeight: [45, null, null, 60],
      minWidth: [60, null, null, 75],
      p: 0,
      textTransform: 'uppercase',
      ':focus': {
        outline: 0,
      },
      '+ svg': {
        color: '#A6A8BB',
        height: 40,
        width: 40,
      },
    },
  },
};
