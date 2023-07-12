/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'components/link';
import Image from 'components/image';
import LogoSvg from 'components/icons/logo';
import logo from 'assets/images/logo.png'
import logoBranco from 'assets/images/logo_branco.png'

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      {isSticky ? (
          <Image src={logo} loading="lazy" alt="logo" />
        ) : (
          <Image src={logoBranco} loading="lazy" alt="logo" />
      )}
      {/* <LogoSvg white={!isSticky} /> */}
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};
