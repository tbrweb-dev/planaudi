/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui';
import { Link, LearnMore } from 'components/link';

export function PublicationItem({ post }) {
  return (
    <Box as="article" sx={styles.post}>
      <Box className="content">
        <Heading as="h3" sx={styles.title}>
          <Link path={`publicacoes/${post.Mn_Codigo}`}>{post?.Mn_Titulo}</Link>
        </Heading>

        <Text as="p" sx={styles.excerpt}>
          {post?.mn_descricao}
        </Text>

        <LearnMore path={`publicacoes/${post.Mn_Codigo}`} label="Leia Mais" sx={styles.learnMore} />
      </Box>
    </Box>
  );
};

const styles = {
  post: {
    mx: [null, null, null, 3, 'unset'],
  },
  thumbnail: {
    mb: [4],
    img: {
      borderRadius: 5,
    },
  },
  title: {
    fontWeight: 700,
    fontSize: [2, null, null, 3, '17px', 3],
    lineHeight: [1.5, null, null, null, null, 1.68],
    letterSpacing: '-0.2px',
    a: {
      color: 'heading',
      textDecoration: 'none',
    },
  },
  excerpt: {
    color: 'text',
    fontSize: [1, null, null, 2],
    lineHeight: 1.88,
    mt: [2],
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical'
  },
  learnMore: {
    fontSize: [1, null, '15px'],
    mt: 2,
  },
};
