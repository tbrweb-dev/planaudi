import telefone from 'assets/images/icons/telefone.png'
import email from 'assets/images/icons/email.png'
import endereco from 'assets/images/icons/endereco.png'
import cidade from 'assets/images/icons/cidade.png'
import facebook from 'assets/images/icons/facebook.png'
import instagram from 'assets/images/icons/instagram.png'
import linkedin from 'assets/images/icons/linkedin.png'
import whatsapp from 'assets/images/icons/whatsapp.png'

export const menuItems = [
  {
    id: 2,
    title: 'Contato',
    items: [
      {
        path: 'tel:1921051000',
        icon: telefone,
        label: '(19) 2105-1000',
      },
      {
        path: 'mailto:comercial@tbrweb.com.br',
        icon: email,
        label: 'comercial@tbrweb.com.br',
      },
      {
        path: 'https://g.page/TBRWEB?share',
        icon: endereco,
        label: 'Av. Dr. Paulo de Moraes, 555',
      },
      {
        path: 'https://g.page/TBRWEB?share',
        icon: cidade,
        label: 'Piracicaba - SP',
      },
    ],
  },
  {
    id: 3,
    title: 'Redes Sociais',
    items: [
      {
        path: 'https://www.facebook.com/tbrweb/',
        icon: facebook,
        label: 'Facebook',
      },
      {
        path: 'https://www.instagram.com/tbrweb/',
        icon: instagram,
        label: 'Instagram',
      },
      {
        path: 'https://www.linkedin.com/in/tbrweb/',
        icon: linkedin,
        label: 'Linkedin',
      },
      {
        path: 'https://wa.me/5519999706375',
        icon: whatsapp,
        label: 'Whatsapp',
      },
    ],
  },
];

export const footerNav = [
  {
    path: '#!',
    label: 'Home',
  },
  {
    path: '#!',
    label: 'Advertise',
  },
  {
    path: '#!',
    label: 'Supports',
  },
  {
    path: '#!',
    label: 'Marketing',
  },
  {
    path: '#!',
    label: 'FAQ',
  },
];
