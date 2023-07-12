import axios from "axios";
import { api } from "pages/api/api";
import { createContext, useContext, useEffect, useState } from "react";


export const InformacoesContext = createContext()

function organizarObrigacoesPorEstado(obrigacoesGeral) {
  const espiritoSanto = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 168)
  const matoGrossoDoSul = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 5443)
  const minasGerais = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 169)
  const rioGrandeDoSul = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 155)
  const parana = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 158)
  const rioDeJaneiro = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 153)
  const santaCatarina = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 154)
  const saoPaulo = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 152)

  return {
    espiritoSanto: [...espiritoSanto],
    matoGrossoDoSul: [...matoGrossoDoSul],
    minasGerais: [...minasGerais],
    rioGrandeDoSul: [...rioGrandeDoSul],
    parana: [...parana],
    rioDeJaneiro: [...rioDeJaneiro],
    santaCatarina: [...santaCatarina],
    saoPaulo: [...saoPaulo],

  }
}

export function InformacoesProvider({ children }) {
  const [id, setId] = useState(0)

  function getIdPublication(id) {
    setId(id)
  }

  const [noticias, setNoticias] = useState([])
  const [obrigacoes, setObrigacoes] = useState([])
  const [indicadores, setIndicadores] = useState([])
  const [indicadoresSelic, setIndicadoresSelic] = useState([])
  const [agenda, setAgenda] = useState([])
  const [cotacoes, setCotacoes] = useState([])
  const [publicacoes, setPublicacoes] = useState([])
  const [publicacao, setPublicacao] = useState([])

  useEffect(() => {
    const url1 = api.get('noticias')
    const url2 = api.get('cotacoes')
    const url3 = api.get('obrigacoes')
    const url4 = api.get('agenda')
    const url5 = api.get('indicadores')
    const url6 = api.get('indicador')
    const url7 = api.get('publicacoes')
    const url8 = api.get(`publicacao?id=${id}`)

    axios.all([url1, url2, url3, url4, url5, url6, url7, url8])
      .then(axios.spread((...responses) => {
        setNoticias(responses[0].data)
        setCotacoes(responses[1].data)
        setObrigacoes(organizarObrigacoesPorEstado(responses[2].data))
        setAgenda(responses[3].data)
        setIndicadores(responses[4].data)
        setIndicadoresSelic(responses[5].data)
        setPublicacoes(responses[6].data)
        setPublicacao(responses[7].data)
      }))
  }, [id])

  return (
    <InformacoesContext.Provider value={{ noticias, obrigacoes, agenda, cotacoes, indicadores, indicadoresSelic, publicacoes, publicacao, getIdPublication }}>
      {children}
    </InformacoesContext.Provider>
  )
}


export function useInformacoes() {
  const context = useContext(InformacoesContext)
  return context
}