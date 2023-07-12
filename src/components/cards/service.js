/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';

const Service = ({ cotacao }) => {
  return (
    <Box sx={styles.service}>
      <Text as="p">{cotacao?.cotd_nome}</Text>
      <Text as="p">Compra: <Text as="span" sx={ styles.price }>R$ {cotacao?.cotd_compra}</Text></Text>
      <Text as="p">Venda: <Text as="span" sx={ styles.price }>{ cotacao?.cotd_venda !== 0 ? (`R$ ${cotacao?.cotd_venda}`) : ('-')}</Text></Text>
    </Box>
  );
};

export default Service;

const styles = {
  service: {
    border: (theme) => `1px solid ${theme.colors.borderColor}`,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: [107, null, null, 130],
    textAlign: 'center',
    transition: 'all 0.3s ease-in-out 0s',
    ':hover': {
      boxShadow: '0px 11px 30px rgba(51, 83, 145, 0.07)',
      borderColor: 'transparent',
    },
    p: {
      fontWeight: 500,
      fontSize: [1, null, null, '17px'],
      lineHeight: 1.77,
      color: 'heading',
    },
  },
  price: {
    color: 'primary',
    fontWeight: 700,
    fontSize: [1, null, null, '15px'],
    lineHeight: 2,
  },
};
