/** @jsx jsx */
import { jsx, Box, Flex, Image, Heading, Text } from 'theme-ui';
import { rgba } from 'polished';
import { Link, LearnMore } from 'components/link';
import { slugify } from 'services/slugify';

const ObrigacoesCard = ({ obrigacao, thumbnail, title, link }) => {  
  return (
    <Box as="article" sx={styles.post}>
      <Flex as="figure" sx={styles.thumbnail}>
        <Image src={thumbnail} loading="lazy" alt="" />
      </Flex>

      <Box className="content">
        <Heading as="h3" sx={styles.title}>
          <Link path={link ? `obrigacoes/${link}` : `obrigacoes/${slugify(obrigacao?.Mn_Titulo)}`}>{ title ? title : obrigacao.Mn_Titulo}</Link>
        </Heading>
        {/* <Text as="p" sx={styles.excerpt}>
          {post?.mn_descricao}
        </Text> */}
        <LearnMore path={link ? `obrigacoes/${link}` : `obrigacoes/${slugify(obrigacao?.Mn_Titulo)}`} label="Saiba Mais" sx={styles.learnMore} />
      </Box>
    </Box>
  );
};

export default ObrigacoesCard;

const styles = {
  post: {
    mx: [null, null, null, 3, 'unset'],
    textAlign: 'center',
  },
  thumbnail: {
    mb: [4],
    img: {
      borderRadius: 5,
    },
    img: {
      m: '0 auto'
    }
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
