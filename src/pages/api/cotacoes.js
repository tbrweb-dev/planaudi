import { sql_query } from './db'

const handlerCotacoes = async (_, res) => {
  try{
    const results = await sql_query(`SELECT * FROM tab_cotacao_diaria WHERE cotd_codigo<>1 LIMIT 8`)

    return res.json(results)
  } catch (e) {
    
    res.status(500).json({ message: e.message })
    
  }
}

export default handlerCotacoes