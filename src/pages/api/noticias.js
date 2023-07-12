import { sql_query } from './db'

const handlerNoticias = async (_, res) => {
  try{
    const results = await sql_query(`SELECT mn_codigo, mn_data, mn_titulo, mn_texto, mn_descricao, mn_imagem1, mn_keywords FROM tab_noticias WHERE mn_data BETWEEN DATE_ADD(CURRENT_DATE(), INTERVAL -60 DAY) AND CURRENT_DATE() ORDER BY mn_codigo DESC`)

    return res.json(results)
  } catch (e) {
    
    res.status(500).json({ message: e.message })
    
  }
}

export default handlerNoticias