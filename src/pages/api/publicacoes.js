import { sql_query } from './db'

const handlePublicacoes = async (_, res) => {
  try {
    const results = await sql_query(`SELECT * FROM tab_menu WHERE mn_esubpasta = 0 AND mn_oculto = 0 ORDER BY mn_titulo`)

    return res.json(results)
  } catch (e) {

    res.status(500).json({ message: e.message })

  }
}

export default handlePublicacoes