/** @jsx jsx */
import { jsx, Box, Heading, Container } from 'theme-ui';

export function SecondaryHero({ title, banner }) {
  return (
    <Box as="section" sx={{
      backgroundImage: `url('${banner}')`,
      color: 'white',
      backgroundColor: 'primary',
      pt: [17, null, null, 20, null],
      pb: [6, null, null, 12, 16]
    }}>
      <Container>
        <Heading sx={styles.title} as="h2">{title}</Heading>
      </Container>
    </Box>
  );
};

const styles = {
  title: {
    fontSize: [15],
    color: 'white',
    textAlign: 'center'
  }
};
