/** @jsx jsx */
import { useEffect, useState } from 'react';
import { jsx } from 'theme-ui';

export function Lgpd() {
  const [isOpen, setIsOpen] = useState()

  useEffect(() => {
    let aceiteLgpd = sessionStorage.getItem('aceiteLgpd')
    aceiteLgpd == null ? setIsOpen(true) : setIsOpen(false)
  }, []);


  function closeLgpd() {
    sessionStorage.setItem('aceiteLgpd', true)
    setIsOpen(false)
  }

  return (
    <>
      {isOpen && (
        <div sx={styles.cookiePopup}>
          <p>Este site não utiliza cookies e não captura dados.</p>
          <div sx={styles.cookiePopupActions}>
            <button type="button" onClick={closeLgpd}>Ok, entendi!</button>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  cookiePopup: {
    fontSize: '0.875rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    position: 'fixed',
    bottom: '1.25rem',
    padding: '0.625rem 0.9375rem',
    boxShadow: '0 0 0.625rem 0 rgba(0,0,0, .15)',
    lineHeight: '150%',
    transition: 'opacity .5s',
    opacity: '1',
    zIndex: '2',
    right: '4%',
    width: '92%',
    background: '#000',
    color: '#fff',
    a: {
      color: 'skyblue',
      '&:visited': {
        color: 'skyblue',
        textDecoration: 'none',
      }
    }
  },
  cookiePopupActions: {
    flex: '1',
    textAlign: 'right',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    button: {
      color: 'orange',
      border: 'none',
      background: 'none',
      fontFamily: 'inherit',
      fontStyle: 'inherit',
      fontSize: 'inherit',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: '0.75rem',
      padding: '0',
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline',
      }
    }
  },
};
