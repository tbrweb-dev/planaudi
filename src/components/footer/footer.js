/** @jsx jsx */
import { jsx, Box, Text, Container, Image } from 'theme-ui';
import { rgba } from 'polished';
import { Widget } from './widget';
import { CallToAction } from 'sections/call-to-action';
import { menuItems } from './footer.data';
import { Fragment } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Logo from 'assets/images/logo.png';

export function Footer() {
  return (
    <Fragment>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <CallToAction />
      </ScrollAnimation>

      <Box as="footer" sx={styles.footer}>
        <Container>
          <Box sx={styles.footerTopInner}>
            <Box sx={styles.about}>
              <Box sx={styles.logo}>
                <Image src={Logo} loading="lazy" alt="Modelo Contabilidade" />
              </Box>

              <Text as="p" sx={styles.copyright}>
                &copy; Copyright {new Date().getFullYear()} por <Text as="span" color="secondary"><a href="https://tbrweb.com.br" target="_blank">TBrWeb</a></Text>
              </Text>
            </Box>

            {menuItems.map(({ id, title, items }) => (
              <Widget key={id} title={title} items={items} />
            ))}
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
}

const styles = {
  footer: {
    backgroundColor: '#F9FAFC',
    pt: [8, null, null, 10],
    pb: [8, null, null, 15],
  },
  footerTopInner: {
    gap: [30, null, 50, '20px 50px', 17, 50],
    display: ['grid'],
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      null,
      'repeat(3, 1fr)',
      'repeat(3, 1fr)',
    ],
  },
  footerInner: {
    borderTop: `1px solid #D9E0E7`,
    display: ['block', null, 'flex'],
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '35px 0 40px',
  },
  about: {
    display: [null, null, null, 'grid', 'block'],
    gridTemplateColumns: '205px 1fr 1fr',
    alignItems: ['center'],
    gridRow: ['3/4', null, '1/1', '3/4', 'unset'],
    gridColumn: ['1/3', null, '1/2', '1/5', 'unset'],
  },
  logo: {
    display: ['flex'],
    justifyContent: ['center', null, null, 'unset'],
    gridColumn: '1/2',
  },
  terms: {
    display: ['flex'],
    gridColumn: '3/4',
    alignItems: ['center', null, null, null, 'flex-start', 'center'],
    flexDirection: ['row', null, null, null, 'column', 'row'],
    justifyContent: [
      'center',
      null,
      'flex-start',
      'center',
      null,
      'flex-start',
    ],
    mt: [4, null, null, 0, 4],
    a: {
      color: 'heading',
    },
    span: {
      display: ['inline-flex', null, null, null, 'none', 'inline-flex'],
      m: ['0 10px'],
    },
  },
  copyright: {
    color: rgba('#0F2137', 0.6),
    fontSize: ['14px'],
    mt: [3, null, null, -31, 3],
    mr: [null, null, null, 'auto', 'unset'],
    gridColumn: '2/3',
    textAlign: ['center', null, 'left', 'center', 'left'],
    a: {
      textDecoration: 'none',
      '&:visited': {
        color: 'inherit'
      }
    }
  },
};
